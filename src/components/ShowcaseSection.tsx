import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const app1Features = [
  "Guia completo de 12+ cidades russas com dicas exclusivas",
  "Missões práticas: conquista, metrô, bunker secreto, dacha",
  "Prints REAIS de conversas — com análise tática de cada abordagem",
  "30+ experiências: bania, Transiberiana, baladas underground",
  "Frases essenciais em russo com transliteração e áudio",
  "Mapas mentais de cultura, etiqueta e sobrevivência",
  "Dois perfis: Explorador Cultural e Aventureiro Noturno",
  "100% offline",
];

const app2Features = [
  "Curso completo de russo do zero — 3 módulos progressivos",
  "Alfabeto cirílico com pronúncia, exemplos e exercícios",
  "Gramática explicada de forma simples e prática",
  "Exercícios interativos com gamificação e badges",
  "Diálogos do dia-a-dia para praticar",
  "Séries russas recomendadas para imersão",
  "Tracking de progresso com estatísticas detalhadas",
  "Interface bilíngue PT-BR / EN",
];

const ShowcaseSection = () => {
  const [activeTab, setActiveTab] = useState<0 | 1>(0);
  const features = activeTab === 0 ? app1Features : app2Features;
  const title = activeTab === 0 ? "Guia Russo Fora da Curva" : "Russo Fluente";
  const subtitle = activeTab === 0
    ? "Experiências, cultura e conquista — tudo que você precisa para dominar a Rússia."
    : "Aprenda russo de verdade — do zero ao funcional, de forma gamificada.";

  return (
    <section className="py-24 bg-secondary/30">
      <div className="section-container">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            O Que Você <span className="text-gradient-gold">Recebe</span>
          </h2>
          <p className="text-muted-foreground text-lg">2 apps completos. 1 preço ridículo.</p>
        </AnimatedSection>

        {/* Tabs */}
        <AnimatedSection className="flex justify-center gap-4 mb-12">
          {["📱 App 1 — Guia Russo", "📚 App 2 — Russo Fluente"].map((label, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i as 0 | 1)}
              className={`px-6 py-3 rounded-xl font-display font-bold text-sm sm:text-base transition-all duration-300 ${
                activeTab === i
                  ? "bg-gradient-gold text-background glow-gold-sm"
                  : "card-elevated text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
            </button>
          ))}
        </AnimatedSection>

        {/* Content */}
        <AnimatedSection>
          <div className="card-elevated p-8 sm:p-12 max-w-4xl mx-auto">
            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-2 text-gradient-gold">{title}</h3>
            <p className="text-muted-foreground mb-8">{subtitle}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-primary mt-0.5 flex-shrink-0">✦</span>
                  <span className="text-secondary-foreground text-sm leading-relaxed">{f}</span>
                </div>
              ))}
            </div>

            {activeTab === 0 && (
              <div className="mt-8 p-4 rounded-xl border border-primary/20 bg-primary/5">
                <p className="text-sm text-primary font-medium">
                  ⚡ Destaque: Prints REAIS de conversas com russas — com análise do que funcionou e por quê
                </p>
              </div>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ShowcaseSection;
