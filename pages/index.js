import { ApolloClient, useQuery, InMemoryCache, gql } from "@apollo/client";
import styles from "../styles/Home.module.css";
import { ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://landing-test-gql-endpoint.miimosa.net/graphql",
  cache: new InMemoryCache(),
});

const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      title
      status
      target
      collected
      user {
        first_name
        last_name
      }
    }
  }
`;

const Home = () => {
  const { loading, data } = useQuery(GET_PROJECTS);
  console.log(data);
  return <div className={styles.container}>YO</div>;
};

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}
