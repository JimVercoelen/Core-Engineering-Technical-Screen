const TECH_STACK = [
  "TypeScript",
  "React",
  "React Native",
  "Node.js",
  "Next.js",
  "Python",
  "Django",
  "FastAPI",
];

const CONTACT_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jim-vercoelen/" },
  { label: "Portfolio", href: "https://vecotech.io" },
  { label: "Email", href: "mailto:jimvercoelen@gmail.com" },
];

export default function AboutSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-1">Jim Vercoelen</h2>
      <p className="text-sm text-slate-400 mb-4">
        Senior Full Stack Engineer · 8+ years experience · 6+ years full-time remote for
        international companies
      </p>

      <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
        <p>
          I am a senior full stack engineer with over 8 years of international experience building
          scalable web platforms and production-grade systems. My core stack includes TypeScript,
          React (Native), Node.js/Next.js, and Python (Django/FastAPI), alongside strong experience
          with SQL and NoSQL databases.
        </p>
        <p>
          Over the past 6+ years, I have worked full-time with international teams in remote
          environments, owning features end-to-end — from architecture and implementation to
          production deployment. I am comfortable operating across the full stack, translating
          complex product requirements into clean, maintainable, and scalable solutions.
        </p>
        <p>
          In addition to technical execution, I value clear communication, ownership, and thoughtful
          trade-offs. I work well in ambitious teams that prioritize quality, speed, and
          collaboration.
        </p>
      </div>

      <div className="mt-6">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
          Tech Stack
        </h3>
        <div className="flex flex-wrap gap-2">
          {TECH_STACK.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-white/10 text-slate-200 border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
          Contact
        </h3>
        <div className="flex gap-4 text-sm">
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
