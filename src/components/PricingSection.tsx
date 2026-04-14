import { useEffect, useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { useLocale } from "@/lib/locale";

const PricingSection = () => {
  const { locale } = useLocale();
  const [time, setTime] = useState({ h: 2, m: 47, s: 33 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 0; m = 0; s = 0; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");
  const t = locale === "pt"
    ? {
      offerExpires: "⏰ Oferta expira em:",
      valueText: "Separadamente, esses materiais sairiam por",
      nowText: "Hoje você leva tudo por:",
      cheap1: "🎧 Menos que uma única aula particular",
      cheap2: "♾️ Sem assinatura: acesso vitalício",
      cheap3: "🗺️ Com o plano completo de 6 meses",
      cta: "QUERO COMEÇAR AGORA POR R$29",
      topChips: ["Acesso vitalício", "Sem assinatura", "Atualizações inclusas"],
      note1: "✅ Acesso imediato",
      note2: "🔒 Pagamento seguro",
      note3: "📲 Celular, tablet e desktop",
      guaranteeTitle: "🛡️ Garantia de 7 Dias",
      guaranteeText: "Se por qualquer motivo você sentir que não faz sentido para você, devolvemos 100% do seu dinheiro. Sem burocracia.",
      timerLabels: { h: "h", m: "m", s: "s" },
    }
    : {
      offerExpires: "⏰ Offer expires in:",
      valueText: "Separately, these materials would cost",
      nowText: "Today you get both for:",
      cheap1: "🎧 Less than a single private lesson",
      cheap2: "♾️ No subscription: lifetime access",
      cheap3: "🗺️ Includes the full 6-month roadmap",
      cta: "START NOW FOR $29",
      topChips: ["Lifetime access", "No subscription", "Updates included"],
      note1: "✅ Instant access",
      note2: "🔒 Secure payment",
      note3: "📲 Mobile, tablet and desktop",
      guaranteeTitle: "🛡️ 7-Day Guarantee",
      guaranteeText: "If you are not satisfied for any reason, we refund 100% of your money. No questions asked.",
      timerLabels: { h: "h", m: "m", s: "s" },
    };

  return (
    <section id="pricing" className="bg-secondary/30 py-20 sm:py-24">
      <div className="section-container">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto text-center">
            {/* Timer */}
            <div className="mb-8 flex flex-col items-center gap-3 sm:inline-flex sm:flex-row sm:gap-2">
              <span className="text-center text-sm font-bold text-primary">{t.offerExpires}</span>
              <div className="flex gap-2">
                {[
                  { val: pad(time.h), label: t.timerLabels.h },
                  { val: pad(time.m), label: t.timerLabels.m },
                  { val: pad(time.s), label: t.timerLabels.s },
                ].map((t, i) => (
                  <div key={i} className="rounded-lg border border-border bg-card px-3 py-2">
                    <span className="font-display font-bold text-xl text-foreground">{t.val}</span>
                    <span className="text-muted-foreground text-xs ml-1">{t.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              {locale === "pt" ? "Comece hoje." : "Start today."}{" "}
              <span className="text-gradient-gold">{locale === "pt" ? "Siga o plano inteiro." : "Follow the full plan."}</span>
            </h2>

            <p className="mb-8 text-base text-muted-foreground sm:text-lg">
              {t.valueText} <span className="line-through">{locale === "pt" ? "R$499" : "$499"}</span>. {t.nowText}
            </p>

            <div className="mb-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {t.topChips.map((chip) => (
                <span key={chip} className="metric-pill text-xs sm:text-sm">{chip}</span>
              ))}
            </div>

            {/* Price card */}
            <div className="surface-panel mb-8 p-5 sm:p-12 glow-gold-sm">
              <div className="mb-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:gap-4">
                <span className="text-xl text-muted-foreground line-through sm:text-2xl">{locale === "pt" ? "R$499" : "$499"}</span>
                <span className="font-display text-5xl font-bold text-gradient-gold sm:text-7xl">{locale === "pt" ? "R$29" : "$29"}</span>
              </div>

              <div className="space-y-2 text-muted-foreground text-sm mb-8">
                <p>{t.cheap1}</p>
                <p>{t.cheap2}</p>
                <p>{t.cheap3}</p>
              </div>

              <a href="#" className="cta-button w-full sm:w-auto block sm:inline-block text-center">
                {t.cta}
              </a>

              <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs text-muted-foreground sm:gap-4">
                <span>{t.note1}</span>
                <span>{t.note2}</span>
                <span>{t.note3}</span>
              </div>
            </div>

            {/* Guarantee */}
            <div className="surface-panel p-6 border-primary/20">
              <p className="font-display font-bold text-foreground mb-2">{t.guaranteeTitle}</p>
              <p className="text-muted-foreground text-sm">{t.guaranteeText}</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PricingSection;
