import AnimatedSection from "./AnimatedSection";
import { useLocale } from "@/lib/locale";

const copy = {
  pt: {
    label: "Prova",
    heading: "2350+ Alunos Já Estão",
    headingHighlight: "Construindo Fluidez",
    subtitle: "O que você compra aqui não é volume de conteúdo. É um sistema com direção clara, repetição e prática guiada.",
    stats: [
      { number: "2350+", label: "Alunos" },
      { number: "6", label: "Meses de plano" },
      { number: "40+", label: "Aulas" },
      { number: "4", label: "Modos de legenda" },
    ],
    testimonials: [
      {
        text: "Comecei do zero em janeiro. Seis meses depois eu já entendia cenas inteiras sem legenda e finalmente sabia exatamente o que revisar todos os dias.",
        author: "Lucas M.",
        tag: "São Paulo",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        text: "O método de repetição parece simples, mas foi o primeiro que me fez reter. Parei de estudar muito e esquecer tudo na semana seguinte.",
        author: "Rafael S.",
        tag: "Rio de Janeiro",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      },
      {
        text: "Pela primeira vez eu tinha um plano real de 6 meses. Isso tirou a ansiedade de não saber o que estudar em seguida e me fez manter consistência.",
        author: "Ana L.",
        tag: "Brasília",
        avatar: "https://randomuser.me/api/portraits/women/67.jpg",
      },
    ],
  },
  en: {
    label: "Proof",
    heading: "2,350+ Learners Are Already",
    headingHighlight: "Building Fluency",
    subtitle: "What you are buying is not content volume. It is a system with a clear timeline, repetition, and guided practice.",
    stats: [
      { number: "2,350+", label: "Learners" },
      { number: "6", label: "Months of roadmap" },
      { number: "40+", label: "Lessons" },
      { number: "4", label: "Subtitle modes" },
    ],
    testimonials: [
      {
        text: "I started from zero in January. By summer I could follow full scenes without English subtitles and knew exactly how to review each day.",
        author: "Emma T.",
        tag: "Austin, TX",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      {
        text: "The repetition system is what made the sounds stick. For the first time, I was not relearning the same lesson every week.",
        author: "Jason R.",
        tag: "Seattle, WA",
        avatar: "https://randomuser.me/api/portraits/men/52.jpg",
      },
      {
        text: "I bought it for the roadmap and stayed for the speaking practice. Month 2 was the first time Russian felt usable, not theoretical.",
        author: "Mia K.",
        tag: "Boston, MA",
        avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      },
    ],
  },
};

const ProofSection = () => {
  const { locale } = useLocale();
  const t = copy[locale];

  return (
    <section className="py-20 sm:py-24">
      <div className="section-container">
        <AnimatedSection className="mb-12 text-center sm:mb-16">
          <p className="text-primary font-display font-bold text-sm uppercase tracking-widest mb-3">{t.label}</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {t.heading} <span className="text-gradient-gold">{t.headingHighlight}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
            {t.subtitle}
          </p>
        </AnimatedSection>

        {/* Stats */}
        <div className="mb-14 grid grid-cols-2 gap-3 sm:gap-6 lg:mb-20 lg:grid-cols-4">
          {t.stats.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="card-elevated p-4 text-center sm:p-6">
                <span className="mb-2 block font-display text-3xl font-bold text-gradient-gold sm:text-5xl">{s.number}</span>
                <span className="text-muted-foreground text-sm">{s.label}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
          {t.testimonials.map((testimonial, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="card-elevated flex h-full flex-col p-5 sm:p-6">
                <div className="flex gap-1 mb-4 text-primary">{"★★★★★".split("").map((s, j) => <span key={j}>{s}</span>)}</div>
                <p className="text-secondary-foreground text-sm leading-relaxed flex-1 italic">"{testimonial.text}"</p>
                <div className="mt-4 pt-4 border-t border-border flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0 border-2 border-border"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-bold text-foreground text-sm">{testimonial.author}</p>
                    <p className="text-muted-foreground text-xs">{testimonial.tag}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
