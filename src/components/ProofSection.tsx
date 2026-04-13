import AnimatedSection from "./AnimatedSection";

const stats = [
  { number: "12+", label: "Cidades Mapeadas" },
  { number: "30+", label: "Experiências Secretas" },
  { number: "6", label: "Abordagens Reais Analisadas" },
  { number: "33", label: "Letras do Cirílico Dominadas" },
];

const testimonials = [
  {
    text: "Usei o guia na minha viagem pra Moscou e São Petersburgo. As dicas de balada e de conversa foram absurdas. Voltei com histórias que ninguém acredita.",
    author: "Lucas M.",
    tag: "Viajou em 2024",
  },
  {
    text: "Comecei o curso de russo achando que ia ser impossível. Em 2 semanas já tava lendo placas e mandando mensagem em cirílico. Gamificação vicia.",
    author: "Rafael S.",
    tag: "Estudante",
  },
  {
    text: "Os prints de conversa são geniais. Não é teoria — é o que realmente funciona. Mudou minha abordagem completamente.",
    author: "Thiago R.",
    tag: "Conquistador",
  },
];

const ProofSection = () => (
  <section className="py-24">
    <div className="section-container">
      <AnimatedSection className="text-center mb-16">
        <p className="text-primary font-display font-bold text-sm uppercase tracking-widest mb-3">Autoridade</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Criado por Brasileiro Que <span className="text-gradient-gold">Viveu na Rússia</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Não é conteúdo copiado da internet. É experiência real, vivida, testada e documentada.
        </p>
      </AnimatedSection>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {stats.map((s, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="text-center p-6 card-elevated">
              <span className="font-display text-4xl sm:text-5xl font-bold text-gradient-gold block mb-2">{s.number}</span>
              <span className="text-muted-foreground text-sm">{s.label}</span>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <div className="card-elevated p-6 h-full flex flex-col">
              <div className="flex gap-1 mb-4 text-primary">{"★★★★★".split("").map((s, j) => <span key={j}>{s}</span>)}</div>
              <p className="text-secondary-foreground text-sm leading-relaxed flex-1 italic">"{t.text}"</p>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="font-bold text-foreground text-sm">{t.author}</p>
                <p className="text-muted-foreground text-xs">{t.tag}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProofSection;
