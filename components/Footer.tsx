"use client";

import { useLang } from "@/components/LanguageProvider";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-blue-100 bg-blue-50">
      <div className="mx-auto max-w-6xl px-6 py-8 text-center">
        <p className="text-sm font-semibold text-slate-900">
          Elibert Hernandez
        </p>

        <p className="mt-1 text-sm text-slate-700">
          {t.footer.line1}
        </p>

        <p className="mt-5 text-xs text-slate-500">
          © {new Date().getFullYear()} • {t.footer.line2}
        </p>
      </div>
    </footer>
  );
}
