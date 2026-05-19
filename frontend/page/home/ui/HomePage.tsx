'use client';

import Link from 'next/link';

import { useEnterRouteLanding } from '../model/useEnterRouteLanding';

export function HomePage() {
  useEnterRouteLanding();

  return (
    <section className="mx-auto flex h-dvh w-full max-w-240 flex-col justify-center px-6 sm:px-10">
      <h1 className="font-serif text-9xl font-bold">HI.</h1>

      <div className="mt-4 border-l-4 border-soft-red px-6 font-mono text-2xl leading-relaxed">
        안녕하세요, 김수연이라고 합니다.
        <br />제 블로그에서 개발과 관련된 여러 기록들을 남기고 있어요.
      </div>

      <Link
        href="/landing"
        className="group mt-8 flex h-14 w-52 items-center justify-between border-2 border-border-accent bg-inherit px-5 font-mono text-xl font-semibold text-foreground shadow-editorial transition-all duration-200 hover:-translate-y-0.5 hover:bg-soft-red hover:shadow-terminal"
      >
        <span>Enter</span>

        <span
          className="transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        >
          -&gt;
        </span>
      </Link>
    </section>
  );
}
