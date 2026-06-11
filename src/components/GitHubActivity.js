import { useEffect, useState } from 'react';
import styles from '../styles/Terminal.module.css';
import { githubUsername, contact } from '../data/portfolio';

// Accent colour (#5eead4) at increasing opacity per contribution level (0 = empty).
const LEVEL_OPACITY = [0.07, 0.32, 0.52, 0.76, 1];

function cellColor(level) {
  return `rgba(94, 234, 212, ${LEVEL_OPACITY[level] ?? LEVEL_OPACITY[0]})`;
}

export default function GitHubActivity() {
  const [state, setState] = useState({ status: 'loading', days: [], total: 0 });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        // Public, CORS-enabled contributions API — no auth or dependency required.
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${githubUsername}?y=last`
        );
        if (!res.ok) throw new Error(`status ${res.status}`);
        const data = await res.json();

        console.log('GitHub contributions API response:', data);
        const days = Array.isArray(data.contributions) ? data.contributions : [];
        const total = days.reduce((sum, d) => sum + (d.count || 0), 0);
        if (!cancelled) setState({ status: 'ready', days, total });
      } catch (err) {
        if (!cancelled) setState({ status: 'error', days: [], total: 0 });
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  if (state.status === 'loading') {
    return <p className={styles.activityNote}>loading contributions…</p>;
  }

  if (state.status === 'error') {
    return (
      <p className={styles.activityNote}>
        couldn&apos;t load contributions —{' '}
        <a className={styles.outLink} href={contact.github} target="_blank" rel="noopener noreferrer">
          view on github
        </a>
      </p>
    );
  }

  // Pad the front so the first real day lands on its correct weekday row (0 = Sunday).
  const firstWeekday = state.days.length ? new Date(state.days[0].date).getUTCDay() : 0;
  const cells = [...Array(firstWeekday).fill(null), ...state.days];

  return (
    <div className={styles.activity}>
      <div className={styles.activityScroll}>
        <div className={styles.activityGrid} role="img" aria-label={`${state.total} GitHub contributions in the last year`}>
          {cells.map((day, i) =>
            day ? (
              <span
                key={day.date}
                className={styles.activityCell}
                style={{ backgroundColor: cellColor(day.level) }}
                title={`${day.count} contribution${day.count === 1 ? '' : 's'} on ${day.date}`}
              />
            ) : (
              <span key={`pad-${i}`} className={styles.activityCell} style={{ visibility: 'hidden' }} />
            )
          )}
        </div>
      </div>
      <p className={styles.activityNote}>
        {state.total} contributions in the last year
      </p>
    </div>
  );
}
