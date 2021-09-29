const { gql, ApolloServer } = require( "apollo-server" )
/**
 * Scalar Types
 * - Int
 * - Float
 * - String
 * - Boolean
 * - ID
*/

const typeDefs = gql`
  type Query {
    idade: Int
    salario: Float
    nome: String
    ativo: Boolean
    id: ID
  }
`

const resolvers = {
  Query: {
    idade() {
      return 18;
    },
    salario() {
      return 5000.0
    },
    nome(){
      return "GRAPHQL"
    },
    ativo(){
      return true
    },
    id(){
      return 11321312321;
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen()