export default function LandingPage() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-240 flex-col justify-center px-6 py-20 sm:px-10">
      <p className="mb-4 font-mono text-caption text-accent-red">WELCOME</p>
      <h1 className="font-serif text-title">블로그에 오신 것을 환영합니다.</h1>
      <p className="mt-4 max-w-130 text-body-lg text-foreground-muted">
        개발과 관련된 글과 프로젝트 기록을 남기는 개인 블로그입니다.
      </p>
    </main>
  );
}
