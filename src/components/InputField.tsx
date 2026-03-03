interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
}

export default function InputField({
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
}: InputFieldProps) {
  return (
    <label className="flex flex-col text-sm font-medium text-slate-300">
      {label}
      <input
        type="number"
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        min="0"
        step="any"
        className="mt-1 px-3 py-2 bg-white/5 border border-white/15 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
      />
      {error && <span className="mt-1 text-xs text-red-400">{error}</span>}
    </label>
  );
}
