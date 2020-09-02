import { LinearProgress } from "@material-ui/core";
import { formatNumber, getPercentage } from "../utils/numbers";
import styles from "../styles/ProgressBar.module.css";

const ProgressBar = ({ initial, target }) => (
  <div className={styles.progress_bar}>
    <LinearProgress
      variant="determinate"
      value={initial >= target ? 100 : getPercentage(initial, target)}
    />
    {formatNumber(initial)} / {formatNumber(target)}
  </div>
);

export default ProgressBar;
