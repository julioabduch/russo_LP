import AnimatedSection from "./AnimatedSection";
import { useLocale } from "@/lib/locale";

const copy = {
  pt: {
    heading: "Para Quem Quer",
    headingHighlight: "Falar de Verdade",
    subtitle: "Se você quer um caminho prático, previsível e sem excesso de teoria, é aqui que faz sentido entrar.",
    personas: [
      { icon: "🌱", title: "Iniciante Total", desc: "Nunca estudou e quer uma ordem clara para não travar logo no começo" },
      { icon: "🧠", title: "Quem Sempre Esquece", desc: "Já tentou estudar antes, mas sente que tudo some depois de alguns dias" },
      { icon: "🎬", title: "Fã de Séries e Clipes", desc: "Quer transformar conteúdo real em treino de ouvido e vocabulário" },
      { icon: "🗣️", title: "Quem Quer Falar Mais Cedo", desc: "Não quer esperar anos para começar a responder e montar frases" },
      { icon: "📚", title: "Autodidata com Meta", desc: "Quer um plano fechado de 6 meses em vez de pular entre cursos e apps" },
    ],
  },
  en: {
    heading: "For People Who Want To",
    headingHighlight: "Actually Speak",
    subtitle: "If you want a practical path with a clear timeline and less theory overload, this is the right fit.",
    personas: [
      { icon: "🌱", title: "Total Beginner", desc: "You have never studied before and want a clear order from day one" },
      { icon: "🧠", title: "The Forgetful Learner", desc: "You have tried before, but everything fades a few days later" },
      { icon: "🎬", title: "Series and Clips Learner", desc: "You want to turn real content into listening and vocabulary training" },
      { icon: "🗣️", title: "Early Speaker", desc: "You do not want to wait years before responding and building sentences" },
      { icon: "📚", title: "Self-Directed With a Goal", desc: "You want a 6-month plan instead of jumping between random apps and courses" },
    ],
  },
};

const ParaQuemSection = () => {
  const { locale } = useLocale();
  const t = copy[locale];

  return (
    <section className="py-24">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {t.heading} <span className="text-gradient-gold">{t.headingHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.personas.map((p, i) => (
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
};

export default ParaQuemSection;
