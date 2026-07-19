"use client";

import Link from "next/link";
import { Mail, Languages, Send } from "lucide-react";
import { socials } from "@/lib/data";
import GithubIcon from "./icons/GithubIcon";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function Navbar() {
  const { t, toggleLang, lang } = useLanguage();

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#achievements", label: t.nav.achievements },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="#"
          className="text-lg font-semibold tracking-tight text-foreground"
        >
          Ш. Нагметов<span className="text-accent">.</span>
        </Link>

        <div className="hidden items-center gap-8 sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={toggleLang}
            aria-label="Switch language"
            title={lang === "ru" ? "Switch to English" : "Переключить на русский"}
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Languages size={14} />
            {t.langToggle}
          </button>
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={socials.telegram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Send size={20} />
          </a>
          <a
            href={`mailto:${socials.email}`}
            aria-label="Send email"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail size={20} />
          </a>
        </div>
      </nav>
    </header>
  );
}
