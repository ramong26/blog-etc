export default function PostPage() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-[96rem] flex-col justify-center px-6 py-20 sm:px-10">
      <p className="mb-4 font-mono text-caption text-accent-red">POSTS</p>
      <h1 className="font-serif text-title">게시글</h1>
      <p className="mt-4 max-w-[52rem] text-body-lg text-foreground-muted">
        개발하면서 정리한 글과 메모를 쌓아둘 공간입니다.
      </p>
    </main>
  );
}
