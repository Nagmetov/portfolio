"use client";

import { Layout, Server, BrainCircuit, Wrench } from "lucide-react";
import { skills } from "@/lib/data";
import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

function SkillGroup({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-border bg-primary/40 p-6">
      <div className="flex items-center gap-3 text-foreground">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-accent">
          {icon}
        </span>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <ul className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-border bg-muted px-3 py-1.5 text-sm text-muted-foreground"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {t.about.title}
            </h2>
            <p className="mt-4 text-muted-foreground">{t.about.description}</p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          <Reveal delay={100}>
            <SkillGroup
              icon={<Layout size={20} />}
              title={t.about.frontend}
              items={skills.frontend}
            />
          </Reveal>
          <Reveal delay={200}>
            <SkillGroup
              icon={<Server size={20} />}
              title={t.about.backend}
              items={skills.backend}
            />
          </Reveal>
          <Reveal delay={300}>
            <SkillGroup
              icon={<BrainCircuit size={20} />}
              title={t.about.ai}
              items={skills.ai}
            />
          </Reveal>
          <Reveal delay={400}>
            <SkillGroup
              icon={<Wrench size={20} />}
              title={t.about.systems}
              items={skills.systems}
            />
          </Reveal>
        </div>

        <Reveal delay={500}>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            {t.about.languages}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
