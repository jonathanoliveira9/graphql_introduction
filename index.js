const { gql, ApolloServer } = require( "apollo-server" )
/**
 * Scalar Types
 * - Int
 * - Float
 * - String
 * - Boolean
 * - ID
*/
const db = [
  { id: 1, name: 'Paulo', email: 'paulo@test.com', phone01: '11 6265-4545', perfil: 1 },
  { id: 2, name: 'Jonathan', email: 'jonathan@test.com', phone01: '55 6265-4545', perfil: 2 }
]

const perfis = [
  { id: 1, description: 'ADM' },
  { id: 2, description: 'NORMAL' }
]

const typeDefs = gql`
  type User {
    id: Int
    name: String
    email: String
    phone: String
    perfil: Perfil
  }

  type Perfil {
    id: Int
    description: String
  }

  type Query {
    user(id: Int): User
    perfis: [Perfil]
  }
`;

const resolvers = {
  User: {
    perfil(user){
      return perfis.find((p) => p.id === user.perfil);
    },
  },
  Query: {
    user(obj, args) {
      return db.find((db) => db.id === args.id);
    },
    perfis() {
      return perfis;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen()