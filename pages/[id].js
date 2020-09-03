import { useRouter } from "next/router";
import { GET_PROJECT } from "../client/query.js";
import { useQuery } from "@apollo/client";
import { Container, CircularProgress, Button, Box } from "@material-ui/core";
import styles from "../styles/Project.module.css";
import ProgressBar from "../components/ProgressBar.js";

const Project = () => {
  const router = useRouter();
  const { data, loading } = useQuery(GET_PROJECT, {
    variables: { id: router.query.id },
  });

  return (
    <Container>
      <Button variant="contained" onClick={() => router.back()}>
        Retour
      </Button>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <h1>{data.project.title}</h1>
          <img
            className={styles.project_image}
            src={data.project.image_url || "https://via.placeholder.com/2000"}
            alt={data.project.title}
          />
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <p>{data.project.description || "Pas de description"}</p>
            <ProgressBar
              initial={data.project.collected}
              target={data.project.target}
            />
          </Box>
        </>
      )}
    </Container>
  );
};

export default Project;
