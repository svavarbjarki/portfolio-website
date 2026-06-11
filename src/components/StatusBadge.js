import styles from '../styles/Terminal.module.css';
import { STATUS } from '../data/portfolio';

// Maps each status to its dot style + lowercase label.
const META = {
  [STATUS.LIVE]: { dot: 'statusLive', label: 'live' },
  [STATUS.IN_DEVELOPMENT]: { dot: 'statusDev', label: 'in development' },
  [STATUS.OFFLINE]: { dot: 'statusOffline', label: 'offline' },
};

export default function StatusBadge({ status }) {
  const meta = META[status] || META[STATUS.OFFLINE];
  return (
    <span className={styles.statusBadgeSm}>
      <span className={`${styles.statusDotSm} ${styles[meta.dot]}`} />
      {meta.label}
    </span>
  );
}
