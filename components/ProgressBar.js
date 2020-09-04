import React from "react";
import { formatNumber, getPercentage } from "../utils/numbers";
import styles from "../styles/ProgressBar.module.css";

const ProgressBar = ({ initial, target }) => (
  <div>
    <div className={styles.progress_bar}>
      <div
        className={styles.progress_bar__content}
        style={{ width: `${getPercentage(initial, target)}%` }}
      ></div>
    </div>
    {formatNumber(initial)} / {formatNumber(target)}
  </div>
);

export default ProgressBar;
