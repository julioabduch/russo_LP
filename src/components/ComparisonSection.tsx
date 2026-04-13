import AnimatedSection from "./AnimatedSection";

const rows = [
  {
    without: "Paga R$200+ em guia turístico genérico",
    with: "Dicas de quem viveu lá de verdade",
  },
  {
    without: 'Manda "privet krasivaya" e é ignorado',
    with: "Usa abordagens que realmente funcionam (com provas)",
  },
  {
    without: "Gasta meses em curso de russo chato",
    with: "Aprende o essencial de forma gamificada",
  },
  {
    without: "Vai pros mesmos lugares que todo turista",
    with: "Acessa experiências que só local conhece",
  },
];

const ComparisonSection = () => (
  <section className="py-24">
    <div className="section-container">
      <AnimatedSection className="text-center mb-16">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Com vs Sem o <span className="text-gradient-gold">Pacote</span>
        </h2>
      </AnimatedSection>

      <AnimatedSection>
        <div className="max-w-4xl mx-auto overflow-hidden rounded-xl border border-border">
          {/* Header */}
          <div className="grid grid-cols-2 bg-secondary">
            <div className="p-4 text-center border-r border-border">
              <span className="font-display font-bold text-muted-foreground text-sm">❌ SEM o Pacote</span>
            </div>
            <div className="p-4 text-center">
              <span className="font-display font-bold text-primary text-sm">✅ COM o Pacote</span>
            </div>
          </div>

          {/* Rows */}
          {rows.map((r, i) => (
            <div key={i} className={`grid grid-cols-2 ${i < rows.length - 1 ? "border-b border-border" : ""}`}>
              <div className="p-5 border-r border-border bg-card">
                <p className="text-muted-foreground text-sm leading-relaxed">{r.without}</p>
              </div>
              <div className="p-5 bg-card">
                <p className="text-foreground text-sm leading-relaxed font-medium">{r.with}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ComparisonSection;
