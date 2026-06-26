export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <div className="max-w-3xl space-y-6">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
          We Compete
        </h1>
        <p className="text-xl text-slate-400">
          Automated tournament management for DLS, eFootball, and EA FC leagues. 
          Upload match screenshots, and let AI deploy your stats instantly.
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <span className="px-4 py-2 text-sm font-semibold text-indigo-400 bg-indigo-500/10 rounded-full border border-indigo-500/20">
            Phase 1: Environment Active
          </span>
        </div>
      </div>
    </main>
  );
}
