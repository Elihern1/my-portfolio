import Image from "next/image";

type Project = {
  title: string;
  short: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  images?: string[];
  highlights?: string[];
};

export default function ProjectCard({
  title,
  short,
  description,
  tech,
  github,
  demo,
  images = [],
  highlights = [],
}: Project) {
  const cover = images[0];

  return (
    <article
      className="
        group overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm
        transition duration-200
        hover:-translate-y-0.5 hover:shadow-md
      "
    >
      <div className="grid gap-0 md:grid-cols-[420px_1fr]">
        {/* Image */}
        <div className="relative flex items-center justify-center bg-blue-50">
          {cover ? (
            <div className="relative h-56 w-full md:h-full">
              <Image
                src={cover}
                alt={`${title} screenshot`}
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="
                  object-contain p-4
                  transition duration-200
                  group-hover:scale-[1.02]
                "
                priority={false}
              />
            </div>
          ) : (
            <div className="flex h-56 w-full items-center justify-center text-sm text-slate-500 md:h-full">
              No image available
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="text-xl font-bold text-slate-900">{title}</h3>
            <span className="text-sm text-slate-600">{short}</span>
          </div>

          <p className="mt-3 text-slate-700 leading-relaxed">{description}</p>

          {/* Tech pills */}
          <div className="mt-4 flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm text-slate-700"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Highlights */}
          {highlights.length > 0 && (
            <ul className="mt-5 list-disc pl-5 text-slate-700 space-y-1">
              {highlights.slice(0, 3).map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          )}

          {/* Actions */}
          <div className="mt-6 flex flex-wrap gap-3">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex items-center justify-center rounded-md
                  bg-blue-500 px-4 py-2 text-sm font-bold text-white
                  transition hover:bg-blue-400
                "
              >
                GitHub
              </a>
            )}

            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex items-center justify-center rounded-md
                  border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-600
                  transition hover:bg-blue-50
                "
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
