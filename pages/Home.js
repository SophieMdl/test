import styles from "../styles/Home.module.css";
import { CheckCircle, Cancel } from "@material-ui/icons";
import Link from "next/link";
import {
  Card,
  CardContent,
  Typography,
  Container,
  CircularProgress,
  LinearProgress,
} from "@material-ui/core";
import { useQuery } from "@apollo/client";
import { GET_ALL_PROJECTS } from "../client/query.js";
import { formatNumber, getPercentage } from "../utils/numbers";

const icons = {
  success: <CheckCircle />,
  failed: <Cancel color="error" />,
};

const Home = () => {
  const { loading, data } = useQuery(GET_ALL_PROJECTS);
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
              <Link href={`/${id}`}>
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
                        collected >= target
                          ? 100
                          : getPercentage(collected, target)
                      }
                    />
                    {formatNumber(collected)} / {formatNumber(target)}
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

export default Home;
