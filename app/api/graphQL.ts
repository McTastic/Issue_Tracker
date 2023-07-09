import { ApolloServer } from '@apollo/server';
import { gql } from 'graphql-tag';

const typeDefs = gql`
    type Query {
        hello: String
    }
`;

const resolvers = {
    Query: {
        hello: () => 'Hello World!'
    }
};

const server = new ApolloServer({ typeDefs, resolvers });

export const config = {
    api: {
      bodyParser: false,
    },
  };

  export default async function handler(req:any, res:any) {
    await server.start();
    // await server.createHandler({path: "/api/graphql"})(req, res);
    }
  