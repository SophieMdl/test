import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://landing-test-gql-endpoint.miimosa.net/graphql",
  cache: new InMemoryCache(),
});
