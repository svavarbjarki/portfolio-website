import { useState, useRef, useEffect, useCallback } from 'react';
import styles from '../styles/Terminal.module.css';
import {
  identity,
  aboutText,
  skillCategories,
  projects,
  games,
  contact,
  commands,
  resumeUrl,
} from '../data/portfolio';

const COMMAND_NAMES = commands.map((c) => c.name);
// Hidden commands that work but are intentionally left out of `help`.
const HIDDEN_COMMANDS = ['sudo'];

// Builds the styled output node for a recognised command.
function renderOutput(cmd) {
  switch (cmd) {
    case 'help':
      return (
        <div className={styles.out}>
          <p className={styles.outLine}>Available commands:</p>
          <ul className={styles.cmdList}>
            {commands.map((c) => (
              <li key={c.name} className={styles.cmdRow}>
                <span className={styles.accent}>{c.name}</span>
                <span className={styles.dim}>{c.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      );

    case 'whoami':
      return (
        <div className={styles.out}>
          <p className={styles.outLine}>
            <span className={styles.accent}>{identity.name}</span>
          </p>
          <p className={styles.outDim}>{identity.role}</p>
          <p className={styles.outDim}>{identity.location}</p>
        </div>
      );

    case 'about':
      return (
        <div className={styles.out}>
          <p className={styles.outLine}>{aboutText}</p>
        </div>
      );

    case 'cv':
      return (
        <div className={styles.out}>
          <p className={styles.outLine}>
            <span className={styles.accent}>{identity.name}</span>
          </p>
          <p className={styles.outDim}>{identity.role}</p>
          <p className={styles.outDim}>
            {identity.location} · {contact.email}
          </p>

          <div className={styles.outGroup}>
            <p className={styles.accent}>EDUCATION</p>
            <p className={styles.outDim}>BSc Computer Science — Reykjavík University (2025)</p>
          </div>

          <div className={styles.outGroup}>
            <p className={styles.accent}>FOCUS</p>
            <p className={styles.outDim}>Backend · Full-stack · Game development</p>
          </div>

          <div className={styles.outGroup}>
            <p className={styles.accent}>KEY SKILLS</p>
            <p className={styles.outDim}>
              Python · JavaScript/TypeScript · C# · React/Next.js · Django · ASP.NET Core ·
              PostgreSQL · Docker · Unity · Git
            </p>
          </div>

          <p className={styles.outDim}>
            Run <span className={styles.accent}>resume</span> for the full PDF.
          </p>
        </div>
      );

    case 'resume':
      return (
        <div className={styles.out}>
          <p className={styles.outLine}>
            <a className={styles.outLink} href={resumeUrl} target="_blank" rel="noopener noreferrer">
              {resumeUrl}
            </a>
            <span className={styles.dim}> — opens the résumé PDF in a new tab.</span>
          </p>
        </div>
      );

    case 'skills':
      return (
        <div className={styles.out}>
          {skillCategories.map((cat) => (
            <div key={cat.label} className={styles.outGroup}>
              <p className={styles.accent}>{cat.label}</p>
              <p className={styles.outDim}>{cat.items.join('  ·  ')}</p>
            </div>
          ))}
        </div>
      );

    case 'projects':
      return (
        <div className={styles.out}>
          {projects.map((p) => (
            <p key={p.name} className={styles.outLine}>
              <span className={styles.accent}>{p.name}</span>
              <span className={styles.dim}> — {p.blurb}</span>
              {p.status && (
                <span className={styles.wipNote}> [status: {p.status.toLowerCase()}]</span>
              )}
            </p>
          ))}
        </div>
      );

    case 'games':
      return (
        <div className={styles.out}>
          {games.map((g) => (
            <p key={g.name} className={styles.outLine}>
              <span className={styles.accent}>{g.name}</span>
              <span className={styles.dim}> ({g.year}) — {g.blurb}</span>
            </p>
          ))}
        </div>
      );

    case 'contact':
      return (
        <div className={styles.out}>
          <p className={styles.outLine}>
            <span className={styles.outKey}>email</span>
            <a className={styles.outLink} href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </p>
          <p className={styles.outLine}>
            <span className={styles.outKey}>github</span>
            <a className={styles.outLink} href={contact.github} target="_blank" rel="noopener noreferrer">
              {contact.githubLabel}
            </a>
          </p>
          <p className={styles.outLine}>
            <span className={styles.outKey}>linkedin</span>
            <a className={styles.outLink} href={contact.linkedin} target="_blank" rel="noopener noreferrer">
              {contact.linkedinLabel}
            </a>
          </p>
        </div>
      );

    case 'ls':
      return (
        <div className={styles.out}>
          <p className={styles.lsRow}>
            {['skills', 'projects', 'games', 'about', 'contact', 'uses'].map((dir) => (
              <span key={dir} className={styles.lsDir}>{dir}/</span>
            ))}
          </p>
        </div>
      );

    case 'date': {
      const now = new Date();
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      return (
        <div className={styles.out}>
          <p className={styles.outLine}>
            {now.toString()}{' '}
            <span className={styles.dim}>({tz})</span>
          </p>
        </div>
      );
    }

    case 'ping':
      return (
        <div className={styles.out}>
          <p className={styles.outLine}>
            PING svavar.dev: 64 bytes from Iceland — time=2ms{' '}
            <span className={styles.dim}>(pretty good for a volcanic island)</span>
          </p>
        </div>
      );

    case 'sudo':
      return (
        <div className={styles.out}>
          <p className={styles.outLine}>
            <span className={styles.error}>sudo: permission denied.</span>{' '}
            <span className={styles.dim}>Nice try.</span>
          </p>
        </div>
      );

    case 'secret':
      return (
        <div className={styles.out}>
          <pre className={styles.ascii}>{String.raw`   /\_/\
  ( o.o )    while (alive) { code(); lift(); watchLFC(); }
   > ^ <`}</pre>
          <p className={styles.outDim}>
            You found the cat. You&apos;ll Never Walk Alone ⚽ — now go build something.
          </p>
        </div>
      );

    default:
      return null;
  }
}

let blockSeq = 0;
const nextId = () => ++blockSeq;

const HINT_BLOCK = {
  id: 0,
  type: 'out',
  node: (
    <p className={styles.hint}>
      type <span className={styles.accent}>&apos;help&apos;</span> to get started
    </p>
  ),
};

function Prompt() {
  return (
    <span className={styles.prompt}>
      <span className={styles.promptUser}>{identity.handle}:~</span>
      <span className={styles.accent}>$</span>
    </span>
  );
}

export default function Terminal() {
  const [blocks, setBlocks] = useState([HINT_BLOCK]);
  const [input, setInput] = useState('');
  const [log, setLog] = useState([]); // entered commands, for arrow-key recall
  const [histIdx, setHistIdx] = useState(-1);

  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  // Autofocus the input on mount so the cursor blinks immediately.
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Keep the latest output in view.
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [blocks]);

  const runCommand = useCallback((raw) => {
    const trimmed = raw.trim();
    const lower = trimmed.toLowerCase();

    if (trimmed) {
      setLog((prev) => [...prev, raw]);
    }
    setHistIdx(-1);
    setInput('');

    if (lower === 'clear') {
      setBlocks([]);
      return;
    }

    const echo = { id: nextId(), type: 'cmd', value: raw };

    if (trimmed === '') {
      setBlocks((prev) => [...prev, echo]);
      return;
    }

    // `sudo` (with or without arguments) maps to the witty rejection.
    const key = lower === 'sudo' || lower.startsWith('sudo ') ? 'sudo' : lower;

    let node;
    if (COMMAND_NAMES.includes(key) || HIDDEN_COMMANDS.includes(key)) {
      node = renderOutput(key);
    } else {
      node = (
        <p className={styles.outLine}>
          <span className={styles.error}>command not found: {trimmed}</span>. Type{' '}
          <span className={styles.accent}>&apos;help&apos;</span> for available commands.
        </p>
      );
    }

    setBlocks((prev) => [...prev, echo, { id: nextId(), type: 'out', node }]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    runCommand(input);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!log.length) return;
      const idx = histIdx === -1 ? log.length - 1 : Math.max(0, histIdx - 1);
      setHistIdx(idx);
      setInput(log[idx]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (histIdx === -1) return;
      const idx = histIdx + 1;
      if (idx >= log.length) {
        setHistIdx(-1);
        setInput('');
      } else {
        setHistIdx(idx);
        setInput(log[idx]);
      }
    }
  };

  return (
    <div
      className={styles.terminal}
      onClick={() => inputRef.current?.focus()}
      role="presentation"
    >
      <div className={styles.terminalBar}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.terminalTitle}>{identity.handle}@portfolio — bash</span>
      </div>

      <div className={styles.terminalBody} ref={bodyRef}>
        {blocks.map((block) =>
          block.type === 'cmd' ? (
            <div key={block.id} className={styles.cmdEcho}>
              <Prompt />
              <span className={styles.cmdText}>{block.value}</span>
            </div>
          ) : (
            <div key={block.id} className={styles.outBlock}>
              {block.node}
            </div>
          )
        )}

        <form className={styles.promptRow} onSubmit={handleSubmit}>
          <Prompt />
          <input
            ref={inputRef}
            className={styles.input}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            type="text"
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck="false"
            aria-label="Terminal command input"
          />
        </form>
      </div>
    </div>
  );
}
