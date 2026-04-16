import AnimatedSection from "./AnimatedSection";
import { useLocale } from "@/lib/locale";

const copy = {
  pt: {
    line1: "Daqui a 6 meses você pode continuar travando no mesmo ponto",
    line2: "ou estar entendendo e falando muito mais do que hoje.",
    cta: "QUERO COMEÇAR AGORA POR R$29",
    note: "🔒 Garantia de 7 dias · Acesso imediato · 📲 Acesso no celular",
    copyright: "© 2026 Método Russo Fluente. Todos os direitos reservados.",
  },
  en: {
    line1: "Six months from now, you can still be stuck in the same place",
    line2: "or understand far more than you do today.",
    cta: "START NOW FOR $29",
    note: "🔒 7-day guarantee · Instant access · 📲 Mobile access",
    copyright: "© 2026 Fluent Russian Method. All rights reserved.",
  },
};

const FooterCTA = () => {
  const { locale } = useLocale();
  const t = copy[locale];

  return (
    <section className="bg-secondary/30 py-14 sm:py-24">
      <div className="section-container text-center">
        <AnimatedSection>
          <h2 className="mx-auto mb-6 max-w-3xl font-display text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
            {t.line1}{" "}
            <span className="text-gradient-gold">{t.line2}</span>
          </h2>

          <a
            href="https://pay.hotmart.com/X100917713B"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button text-base sm:text-lg"
            onClick={() => import("@/lib/pixel").then(m => m.trackInitiateCheckout("footer"))}
          >
            {t.cta}
          </a>

          <p className="mt-6 text-sm text-muted-foreground">{t.note}</p>
        </AnimatedSection>

        {/* Footer */}
        <div className="mt-14 border-t border-border pt-8 sm:mt-20">
          <p className="text-muted-foreground text-xs">{t.copyright}</p>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
