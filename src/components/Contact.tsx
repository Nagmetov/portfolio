"use client";

import { Mail, Send } from "lucide-react";
import { socials } from "@/lib/data";
import Reveal from "./Reveal";
import GithubIcon from "./icons/GithubIcon";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="px-6 py-24">
      <Reveal>
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-primary/40 px-8 py-16 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t.contact.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            {t.contact.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={socials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              <Send size={16} />
              {t.contact.telegram}
            </a>
            <a
              href={`mailto:${socials.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <Mail size={16} />
              {socials.email}
            </a>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <GithubIcon size={16} />
              {t.contact.github}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
