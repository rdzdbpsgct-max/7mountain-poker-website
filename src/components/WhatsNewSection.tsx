"use client";

import { useLanguage } from "./LanguageContext";
import AnimatedSection from "./AnimatedSection";

const categoryIcons: Record<string, React.ReactNode> = {
  ux: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
  ),
  logic: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald">
      <polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
    </svg>
  ),
  license: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald">
      <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  ),
  performance: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  robustness: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
};

const categoryKeys = ["ux", "logic", "license", "performance", "robustness"] as const;

export default function WhatsNewSection() {
  const { t } = useLanguage();

  return (
    <section id="whats-new" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-emerald uppercase">
            {t.whatsNew.label}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-foreground">
            {t.whatsNew.title}
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            {t.whatsNew.subtitle}
          </p>
          {/* Test count badge */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/10 px-5 py-2">
            <span className="text-2xl font-black text-emerald">{t.whatsNew.testCount}</span>
            <span className="text-sm text-muted">{t.whatsNew.testLabel}</span>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryKeys.map((key, i) => {
            const cat = t.whatsNew.categories[key];
            return (
              <AnimatedSection key={key} delay={i * 100}>
                <div className="group rounded-2xl border border-border/50 bg-surface/40 p-6 backdrop-blur-sm h-full transition-all duration-300 hover:border-emerald/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald/10 border border-emerald/20 flex items-center justify-center group-hover:bg-emerald/20 group-hover:scale-110 transition-all duration-300">
                      {categoryIcons[key]}
                    </div>
                    <h3 className="text-base font-bold text-foreground group-hover:text-emerald transition-colors duration-300">
                      {cat.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {cat.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted leading-relaxed">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald mt-0.5 shrink-0">
                          <path d="M3 7l3 3 5-5" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
