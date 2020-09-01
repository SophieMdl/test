import styles from "../styles/Home.module.css";
import { CheckCircle, Cancel } from "@material-ui/icons";

import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  CircularProgress,
  LinearProgress,
} from "@material-ui/core";
import { useQuery, gql } from "@apollo/client";

const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      title
      status
      target
      collected
      image_url
      id
      description
      user {
        first_name
        last_name
      }
    }
  }
`;

const icons = {
  success: <CheckCircle />,
  failed: <Cancel color="error" />,
};

const formatNumber = new Intl.NumberFormat("fr-FR");

const Home = () => {
  const { loading, data } = useQuery(GET_PROJECTS);
  return (
    <Container>
      <h2>Projets</h2>
      {loading ? (
        <CircularProgress />
      ) : (
        <div className={styles.grid}>
          {data.projects.map((project) => {
            const { id, user, collected, target, title, status } = project;

            return (
              <Card className={styles.card} key={id}>
                <img
                  className={styles.card_image}
                  src={project.image_url || "https://via.placeholder.com/500"}
                  title={project.title}
                />
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {title} {icons[status]}
                  </Typography>
                  <Typography color="textSecondary">
                    {user.first_name} {user.last_name}
                  </Typography>
                  {project.description}
                  <LinearProgress
                    className={styles.progress_bar}
                    variant="determinate"
                    value={
                      collected >= target ? 100 : (collected / target) * 100
                    }
                  />
                  {formatNumber.format(collected)} /
                  {formatNumber.format(target)}
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </Container>
  );
};

export default Home;
