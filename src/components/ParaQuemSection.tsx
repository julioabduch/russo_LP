import AnimatedSection from "./AnimatedSection";

const personas = [
  { icon: "🧳", title: "Viajante Ambicioso", desc: "Vai viajar para a Rússia e quer ir além do óbvio" },
  { icon: "💘", title: "Conquistador", desc: "Quer conhecer mulheres russas (online ou presencial) e não sabe como se aproximar" },
  { icon: "💼", title: "Empreendedor Global", desc: "Faz negócios com russos e precisa entender a cultura de verdade" },
  { icon: "🎓", title: "Estudante Prático", desc: "Quer aprender russo de forma prática, sem enrolação acadêmica" },
  { icon: "🌍", title: "Apaixonado pela Cultura", desc: "É fascinado pela cultura russa e quer mergulhar de verdade" },
];

const ParaQuemSection = () => (
  <section className="py-24">
    <div className="section-container">
      <AnimatedSection className="text-center mb-16">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Para Quem É <span className="text-gradient-gold">Isso?</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Se você se identifica com pelo menos um desses perfis, esse pacote foi feito pra você.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {personas.map((p, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="card-elevated p-6 h-full hover:border-primary/30 transition-colors duration-300">
              <span className="text-4xl block mb-4">{p.icon}</span>
              <h3 className="font-display text-lg font-bold mb-2 text-foreground">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ParaQuemSection;
