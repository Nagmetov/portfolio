"use client";

import { Trophy, Presentation } from "lucide-react";
import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const icons = [Trophy, Presentation];

export default function Achievements() {
  const { t } = useLanguage();

  return (
    <section id="achievements" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {t.achievements.title}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {t.achievements.description}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {t.achievements.items.map((item, i) => {
            const Icon = icons[i] ?? Trophy;
            return (
              <Reveal key={item.title} delay={i * 100}>
                <article className="flex h-full flex-col rounded-2xl border border-border bg-primary/40 p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-accent">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {item.place}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
