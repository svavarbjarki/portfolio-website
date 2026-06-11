import { useState, useRef, useEffect } from 'react';
import styles from '../styles/Terminal.module.css';
import { contact } from '../data/portfolio';

export default function ContactEmail() {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (e.g. insecure context) — fail silently, link still selectable.
    }
  };

  return (
    <button type="button" className={styles.emailRow} onClick={handleCopy}>
      <span className={styles.contactKey}>email</span>
      <span className={styles.emailValue}>{contact.email}</span>
      <span className={`${styles.copyLabel} ${copied ? styles.copyLabelActive : ''}`}>
        {copied ? 'copied!' : 'copy'}
      </span>
    </button>
  );
}
