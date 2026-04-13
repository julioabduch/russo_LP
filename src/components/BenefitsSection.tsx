import AnimatedSection from "./AnimatedSection";

const benefits = [
  "Chegar na Rússia sabendo exatamente onde ir, o que falar e como se comportar",
  "Mandar mensagem para uma russa com confiança — usando abordagens testadas e comprovadas",
  "Ler cardápios, placas e mensagens em cirílico sem depender de Google Tradutor",
  "Impressionar russos falando frases certas no momento certo",
  "Descobrir experiências que 99% dos turistas nunca vão conhecer",
  "Entender a mentalidade russa para negócios, amizades e relacionamentos",
];

const BenefitsSection = () => (
  <section className="py-24 bg-secondary/30">
    <div className="section-container">
      <AnimatedSection className="text-center mb-16">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          O Que Você Vai <span className="text-gradient-gold">Se Tornar</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Não é sobre features — é sobre a transformação que vai acontecer com você.
        </p>
      </AnimatedSection>

      <div className="max-w-3xl mx-auto space-y-5">
        {benefits.map((b, i) => (
          <AnimatedSection key={i} delay={i * 0.08}>
            <div className="flex items-start gap-4 p-5 card-elevated hover:border-primary/30 transition-colors duration-300">
              <span className="text-primary text-xl flex-shrink-0 mt-0.5">→</span>
              <p className="text-foreground leading-relaxed">{b}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
