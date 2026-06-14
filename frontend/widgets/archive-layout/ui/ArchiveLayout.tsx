import Link from 'next/link';

import { formatDateWithDots } from '@/shared/lib/formatDateWithDots';

import { ARCHIVE_LINKS, TECH_STACK } from '../model/constants';
import { GITHUB_LOGS } from '../model/github-logs.mock';
import { RECENT_NOTES } from '../model/recent-note.mock';

export function LeftArchiveLayout() {
  return (
    <aside className="flex min-h-screen w-96 shrink-0 flex-col gap-12.5 border-r px-10">
      <section className="flex flex-col gap-3">
        <h2 className="border-b-[3px] border-border-strong pb-3 text-3xl font-bold text-text-primary">
          RECENT NOTES
        </h2>

        {RECENT_NOTES.map((note) => (
          <Link
            key={note.id}
            href="/"
            className="group flex flex-col gap-1.25 border-b border-border-default pb-5"
          >
            <h3 className="mt-3 font-serif text-2xl leading-snug font-semibold text-text-primary group-hover:text-accent-blue group-hover:underline group-hover:underline-offset-4">
              {note.title}
            </h3>
            <time className="block font-mono text-xl text-text-muted">
              {formatDateWithDots(note.createdAt)}
            </time>
          </Link>
        ))}
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="border-b-[3px] border-border-strong pb-3 text-3xl font-bold text-text-primary">
          TECH STACK
        </h2>

        <div className="flex flex-wrap gap-3">
          {TECH_STACK.map((stack) => (
            <span
              key={stack}
              className="border-2 border-border-strong px-4 py-2 text-2xl leading-none text-text-primary"
            >
              {stack}
            </span>
          ))}
        </div>
      </section>
    </aside>
  );
}

export function RightArchiveLayout() {
  return (
    <aside className="flex min-h-screen w-96 shrink-0 flex-col gap-12.5 border-l px-10">
      <section className="flex flex-col gap-3">
        <h2 className="border-b-[3px] border-border-strong pb-3 text-3xl font-bold text-text-primary">
          &lt;&gt; GITHUB ACTIVITY
        </h2>

        <div className="bg-terminal-background shadow-[10px_10px_0px_var(--color-accent-red)]">
          <div className="bg-terminal-background px-5 py-5 font-mono">
            <p className="font-bold text-terminal-red">
              $ git log --pretty=oneline
            </p>

            <div className="mt-5 flex flex-col gap-3">
              {GITHUB_LOGS.map((log) => (
                <Link
                  key={log.hash}
                  href="/"
                  className="hover:text-terminal-red hover:underline hover:underline-offset-4"
                >
                  <span className="font-bold text-terminal-red">
                    {log.hash}
                  </span>
                  <span className="text-terminal-blue"> {log.type}</span>
                  <span className="text-terminal-text">: </span>
                  <span className="text-terminal-text">{log.message}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="border-b-[3px] border-border-strong pb-2 text-3xl font-bold text-text-primary">
          LINKS
        </h2>

        <nav aria-label="Archive links" className="flex flex-col">
          {ARCHIVE_LINKS.map((link) => (
            <a
              key={link.href}
              target="_blank"
              rel="noopener noreferrer"
              href={link.href}
              className="border-b border-dotted border-border-default text-2xl text-text-primary transition-colors not-first:py-3 first:pb-3 hover:text-accent-red"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </section>
    </aside>
  );
}
