export default function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-blue-50">
      <div className="mx-auto max-w-6xl px-6 py-8 text-center">
        <p className="text-sm font-semibold text-slate-900">
          Elibert Hernandez
        </p>

        <p className="mt-1 text-sm text-slate-700">
          Montréal, Québec • Web Developer (AEC)
        </p>

        <p className="mt-5 text-xs text-slate-500">
          © {new Date().getFullYear()} • Built with Next.js
        </p>
      </div>
    </footer>
  );
}
