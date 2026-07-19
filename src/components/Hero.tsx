"use client";

import { ArrowRight, Mail } from "lucide-react";
import { socials } from "@/lib/data";
import Reveal from "./Reveal";
import GithubIcon from "./icons/GithubIcon";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative isolate overflow-hidden px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(34,197,94,0.18),transparent)]"
      />

      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-accent" />
            {t.hero.badge}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            {t.hero.title1}
            <span className="text-accent">{t.hero.titleAccent}</span>
            {t.hero.title2}
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {t.hero.subtitle}
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              {t.hero.ctaProjects}
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <Mail size={16} />
              {t.hero.ctaContact}
            </a>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
