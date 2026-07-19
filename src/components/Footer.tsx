"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()} Шукур Нагметов. {t.footer.rights}
        </p>
        <p>{t.footer.builtWith}</p>
      </div>
    </footer>
  );
}
