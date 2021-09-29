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
  }
`

const resolvers = {
  Query: {
    users() {
      return users;
    },
    products(){
      return products;
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen()