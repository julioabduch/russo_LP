import AnimatedSection from "./AnimatedSection";
import { useLocale } from "@/lib/locale";

const copy = {
  pt: {
    heading: "Método Tradicional vs",
    headingHighlight: "Seu Caminho Aqui",
    subtitle: "A diferença visual agora também deixa claro que você não está comprando mais um curso solto, e sim um sistema com ordem e prioridade.",
    without: "❌ MÉTODO TRADICIONAL",
    with: "✅ SEU CAMINHO AQUI",
    rows: [
      {
        without: "Aprende vocabulário, gramática e frases tudo ao mesmo tempo",
        with: "Foca no essencial: alfabeto > escuta > séries > fala",
      },
      {
        without: "Estuda muito no começo e esquece rápido depois",
        with: "Faz repetições guiadas até o som ficar automático",
      },
      {
        without: "Recebe gramática antes de precisar usar",
        with: "Aprende a gramática quando ela realmente ajuda",
      },
      {
        without: "Segue sem prazo claro e sem saber se está avançando",
        with: "Tem um plano de 6 meses para ganhar autonomia com episódios e diálogos",
      },
    ],
  },
  en: {
    heading: "Traditional Method vs",
    headingHighlight: "Your Path Here",
    subtitle: "The contrast now makes it visually clear that this is not another loose course, but a system with order and priorities.",
    without: "❌ TRADITIONAL METHOD",
    with: "✅ YOUR PATH HERE",
    rows: [
      {
        without: "Tries to learn vocabulary, grammar, and phrases all at once",
        with: "Focuses on the essentials: alphabet > listening > series > speaking",
      },
      {
        without: "Learns a lot at first and forgets it fast",
        with: "Uses guided repetition until the sounds become automatic",
      },
      {
        without: "Gets grammar before there is any reason to use it",
        with: "Learns grammar when it actually helps comprehension and speaking",
      },
      {
        without: "Studies without a clear timeline or a way to measure progress",
        with: "Follows a 6-month roadmap toward real dialogue and episode-level autonomy",
      },
    ],
  },
};

const ComparisonSection = () => {
  const { locale } = useLocale();
  const t = copy[locale];

  return (
    <section className="py-24">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <span className="eyebrow-label mb-4">{locale === "pt" ? "Posicionamento" : "Positioning"}</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {t.heading} <span className="text-gradient-gold">{t.headingHighlight}</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">{t.subtitle}</p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="surface-panel max-w-5xl mx-auto overflow-hidden">
            <div className="grid grid-cols-2 bg-secondary/70">
              <div className="p-5 text-center border-r border-border">
                <span className="font-display font-bold text-muted-foreground text-sm">{t.without}</span>
              </div>
              <div className="p-5 text-center">
                <span className="font-display font-bold text-primary text-sm">{t.with}</span>
              </div>
            </div>

            {t.rows.map((row, i) => (
              <div key={i} className={`grid grid-cols-2 ${i < t.rows.length - 1 ? "border-b border-border" : ""}`}>
                <div className="p-6 border-r border-border bg-card/70">
                  <p className="text-muted-foreground text-sm leading-relaxed">{row.without}</p>
                </div>
                <div className="p-6 bg-primary/5">
                  <p className="text-foreground text-sm leading-relaxed font-medium">{row.with}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ComparisonSection;
