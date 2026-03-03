import type { ReactNode } from "react";

export default function Page({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center p-4 gap-4">
      {children}

      <footer className="text-center text-sm text-slate-400">
        <a
          href="https://github.com/JimVercoelen/Core-Engineering-Technical-Screen"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code - GitHub
        </a>
      </footer>
    </div>
  );
}
