import styles from "../styles/Home.module.css";
import { CheckCircle, Cancel } from "@material-ui/icons";
import Link from "next/link";
import {
  Card,
  CardContent,
  Typography,
  Container,
  CircularProgress,
} from "@material-ui/core";
import { useQuery } from "@apollo/client";
import { GET_ALL_PROJECTS } from "../client/query.js";
import ProgressBar from "../components/ProgressBar.js";

const icons = {
  success: <CheckCircle />,
  failed: <Cancel color="error" />,
};

const App = () => {
  const { loading, data } = useQuery(GET_ALL_PROJECTS);
  return (
    <Container>
      <h1>Projets</h1>
      {loading ? (
        <CircularProgress />
      ) : (
        <div className={styles.grid}>
          {data.projects.map((project) => {
            const { id, user, collected, target, title, status } = project;

            return (
              <Link href={`/${id}`} key={id}>
                <Card className={styles.card}>
                  <img
                    className={styles.card_image}
                    src={project.image_url || "https://via.placeholder.com/500"}
                    alt={project.title}
                  />
                  <CardContent>
                    <h3>
                      {title} {icons[status]}
                    </h3>
                    <Typography color="textSecondary">
                      {user.first_name} {user.last_name}
                    </Typography>
                    {project.description}
                    <ProgressBar initial={collected} target={target} />
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      )}
    </Container>
  );
};

export default App;
