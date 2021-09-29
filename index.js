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
    tecnologias: [String!]!
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
      return "Graphql"
    },
    ativo(){
      return true
    },
    id(){
      return 11321312321;
    },
    tecnologias(){
      return ['Backdoor']
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen()