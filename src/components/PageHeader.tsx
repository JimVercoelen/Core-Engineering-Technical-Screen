interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header className="mb-8">
      <h1 className="text-3xl font-bold text-white mb-1">{title}</h1>
      <p className="text-slate-400 mb-3">{subtitle}</p>
    </header>
  );
}
