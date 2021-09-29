const { gql, ApolloServer } = require( "apollo-server" )
/**
 * Scalar Types
 * - Int
 * - Float
 * - String
 * - Boolean
 * - ID
*/
const products = [
  { id: 1, name: 'P', price: 12.0 },
  { id: 2, name: 'S', price: 0.0 }
]

const users = [
  { id: 1, name: 'No', active: true, age: 1 },
  { id: 2, name: 'Noa', active: true, age: 2 }
]
const typeDefs = gql`
  type Product {
    id: ID
    name: String
    price: Float
  }

  type User {
    age: Int
    name: String
    active: Boolean
    id: ID
  }

  type Query {
    users: [User]
    products: [Product]
    user(id: Int, name: String): User
    product(id: Int, name: String, price: Float): Product
  }
`

const resolvers = {
  Query: {
    users() {
      return users;
    },
    user(_, args) {
      const { id, name } = args;
      if(id) return users.find((user) => user.id == args.id)
      return users.find((user) => user.name == args.name)
    },
    products(){
      return products;
    },
    product(_, args) {
      const { id, name, price } = args;
      if(id) return products.find((product) => product.id == args.id)
      if(name) return products.find((product) => product.name == args.name) 
      return products.find((product) => product.price == args.price) 

    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen()