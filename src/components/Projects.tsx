"use client";

import Reveal from "./Reveal";
import GithubIcon from "./icons/GithubIcon";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {t.projects.title}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {t.projects.description}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.projects.items.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 100}>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-border bg-primary/40 p-6 transition-colors hover:border-accent/50"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex items-center gap-1.5 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                  <GithubIcon size={16} />
                  {t.projects.repo}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
