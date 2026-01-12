import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { useLang } from "@/components/LanguageProvider";

export default function Sections() {
  const { t } = useLang();

  return (
    <div className="mx-auto max-w-6xl px-6 pb-24">
      {/* ABOUT */}
      <section id="about" className="scroll-mt-28 py-20">
        <h2 className="text-2xl font-bold text-slate-900">{t.sections.aboutTitle}</h2>

        <p className="mt-4 max-w-3xl text-slate-700 leading-relaxed">
          {t.sections.aboutP1}
        </p>

        <p className="mt-3 max-w-3xl text-slate-700 leading-relaxed">
          {t.sections.aboutP2}
        </p>
      </section>

      <hr className="border-blue-100" />

      {/* SKILLS */}
      <section id="skills" className="scroll-mt-28 py-20">
        <h2 className="text-2xl font-bold text-slate-900">{t.sections.skillsTitle}</h2>

        <div className="mt-8 grid gap-10 sm:grid-cols-2">
          {/* Frontend */}
          <div>
            <h3 className="font-semibold text-slate-900">{t.sections.frontend}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "HTML5",
                "CSS3",
                "JavaScript",
                "React",
                "Next.js",
                "Tailwind CSS",
                "Responsive Design",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend & Tools */}
          <div>
            <h3 className="font-semibold text-slate-900">{t.sections.backendTools}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "PHP",
                "MySQL",
                "Node.js",
                "Express",
                "REST APIs",
                "Git & GitHub",
                "Docker",
                "Virtual Machines",
                "Firebase",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="border-blue-100" />

      {/* PROJECTS */}
      <section id="projects" className="scroll-mt-28 py-20">
        <h2 className="text-2xl font-bold text-slate-900">{t.sections.projectsTitle}</h2>
        <p className="mt-3 text-slate-700">{t.sections.projectsIntro}</p>

        <div className="mt-10 space-y-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>

      <hr className="border-blue-100" />

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-28 py-20">
        <h2 className="text-2xl font-bold text-slate-900">{t.sections.contactTitle}</h2>

        <p className="mt-3 max-w-2xl text-slate-700 leading-relaxed">
          {t.sections.contactIntro}
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">{t.sections.cards.email}</p>
            <a
              className="mt-1 block text-slate-700 underline underline-offset-4 hover:text-blue-600"
              href="mailto:elihern1.eh@gmail.com"
            >
              elihern1.eh@gmail.com
            </a>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">{t.sections.cards.location}</p>
            <p className="mt-1 text-slate-700">Montréal, Québec</p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">GitHub</p>
            <a
              className="mt-1 block text-slate-700 underline underline-offset-4 hover:text-blue-600"
              href="https://github.com/Elihern1"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Elihern1
            </a>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">LinkedIn</p>
            <a
              className="mt-1 block text-slate-700 underline underline-offset-4 hover:text-blue-600"
              href="https://www.linkedin.com/in/elibert-hernandez-628ba5193/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/elibert-hernandez-628ba5193
            </a>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">{t.sections.cards.phone}</p>
            <a
              className="mt-1 block text-slate-700 underline underline-offset-4 hover:text-blue-600"
              href="tel:+14383989379"
            >
              438-398-9379
            </a>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">{t.sections.cards.cv}</p>
            <a
              className="mt-2 inline-block rounded-md bg-blue-500 px-4 py-2 text-sm font-bold text-white hover:bg-blue-400"
              href="/Hernandez%20Granados,%20Elibert%20-%20CV%20-%202026.pdf"
              target="_blank"
              rel="noreferrer"
            >
              {t.sections.cvBtn}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
