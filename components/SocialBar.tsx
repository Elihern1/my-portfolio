import { Linkedin, Github, FileText } from "lucide-react";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/elibert-hernandez-628ba5193/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/Elihern1",
    icon: Github,
  },
  {
    label: "CV",
    href: "/Hernandez%20Granados,%20Elibert%20-%20CV%20-%202026.pdf",
    icon: FileText,
  },
];

export default function SocialBar() {
  return (
    <aside className="fixed left-4 top-1/2 z-50 hidden -translate-y-1/2 md:block">
      <div className="flex flex-col overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm">
        {socials.map((s) => {
          const Icon = s.icon;
          return (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              title={s.label}
              className="
                grid h-12 w-12 place-items-center
                border-b border-blue-100 last:border-b-0
                text-slate-700 transition
                hover:bg-blue-50 hover:text-blue-600
              "
            >
              <Icon size={18} strokeWidth={2} />
            </a>
          );
        })}
      </div>
    </aside>
  );
}
