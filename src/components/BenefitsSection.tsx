import AnimatedSection from "./AnimatedSection";
import { useLocale } from "@/lib/locale";

const copy = {
  pt: {
    heading: "O Que Muda Em",
    headingHighlight: "6 Meses",
    subtitle: "A oferta certa não vende módulos. Vende o que você finalmente passa a conseguir fazer.",
    benefits: [
      "Ler o alfabeto em poucas horas e parar de depender de transliteração",
      "Reconhecer sons e estruturas com muito menos esforço",
      "Entender diálogos curtos sem pausar a cada frase",
      "Ganhar confiança para repetir, responder e falar cedo",
      "Usar séries como treino de ouvido em vez de entretenimento passivo",
      "Ter um plano claro para continuar avançando sem se perder",
    ],
  },
  en: {
    heading: "What Changes In",
    headingHighlight: "6 Months",
    subtitle: "The right offer does not sell modules. It sells what you will actually be able to do.",
    benefits: [
      "Read the alphabet in a few hours and stop relying on transliteration",
      "Recognize sounds and structures with far less effort",
      "Follow short dialogues without pausing every sentence",
      "Build confidence to repeat, respond, and speak early",
      "Use series as listening training instead of passive entertainment",
      "Keep moving forward with a clear plan instead of guessing",
    ],
  },
};

const BenefitsSection = () => {
  const { locale } = useLocale();
  const t = copy[locale];

  return (
    <section className="bg-secondary/30 py-14 sm:py-24">
      <div className="section-container">
        <AnimatedSection className="mb-10 text-center sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {t.heading} <span className="text-gradient-gold">{t.headingHighlight}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">{t.subtitle}</p>
        </AnimatedSection>

        <div className="mx-auto max-w-3xl space-y-4 sm:space-y-5">
          {t.benefits.map((b, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="card-elevated flex items-start gap-4 p-4 transition-colors duration-300 hover:border-primary/30 sm:p-5">
                <span className="text-primary text-xl flex-shrink-0 mt-0.5">→</span>
                <p className="text-foreground leading-relaxed">{b}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
