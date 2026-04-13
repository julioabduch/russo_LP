import { useEffect, useState } from "react";
import AnimatedSection from "./AnimatedSection";

const PricingSection = () => {
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

  return (
    <section id="pricing" className="py-24 bg-secondary/30">
      <div className="section-container">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto text-center">
            {/* Timer */}
            <div className="inline-flex items-center gap-2 mb-8">
              <span className="text-primary text-sm font-bold">⏰ Oferta expira em:</span>
              <div className="flex gap-2">
                {[
                  { val: pad(time.h), label: "h" },
                  { val: pad(time.m), label: "m" },
                  { val: pad(time.s), label: "s" },
                ].map((t, i) => (
                  <div key={i} className="bg-card border border-border rounded-lg px-3 py-2">
                    <span className="font-display font-bold text-xl text-foreground">{t.val}</span>
                    <span className="text-muted-foreground text-xs ml-1">{t.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Давай! <span className="text-gradient-gold">Vamos!</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8">
              Separados, esses apps valeriam <span className="line-through">R$499</span>. Hoje você leva tudo por:
            </p>

            {/* Price card */}
            <div className="card-elevated p-8 sm:p-12 glow-gold-sm mb-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="text-2xl text-muted-foreground line-through">R$499</span>
                <span className="font-display text-6xl sm:text-7xl font-bold text-gradient-gold">R$29</span>
              </div>

              <div className="space-y-2 text-muted-foreground text-sm mb-8">
                <p>☕ Menos que uma pizza</p>
                <p>📺 Menos que um mês de streaming</p>
                <p>💰 Menos que um café por dia durante uma semana</p>
              </div>

              <a href="#" className="cta-button w-full sm:w-auto block sm:inline-block text-center">
                QUERO ACESSO AGORA POR R$29
              </a>

              <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
                <span>✅ Acesso imediato</span>
                <span>🔒 Pagamento seguro</span>
                <span>📱 100% offline</span>
              </div>
            </div>

            {/* Guarantee */}
            <div className="card-elevated p-6 border-primary/20">
              <p className="font-display font-bold text-foreground mb-2">🛡️ Garantia de 7 Dias</p>
              <p className="text-muted-foreground text-sm">
                Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu dinheiro. Sem perguntas.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PricingSection;
