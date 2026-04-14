import AnimatedSection from "./AnimatedSection";
import { useLocale } from "@/lib/locale";

const copy = {
  pt: {
    label: "Método",
    heading: "A Verdade Chata Que Faz Você",
    headingHighlight: "Entender Séries Sem Legenda",
    subtitle:
      "O que quase ninguém quer te dizer: fluência não vem de truques nem de contato superficial com o idioma. Vem de treino concentrado e repetição massiva.",
    cards: [
      {
        title: "Fluência é habilidade, não matéria",
        text:
          "Entender uma explicação não significa conseguir usar aquilo em velocidade real. Fluência aparece quando o idioma sai do entendimento superficial e entra no automático.",
      },
      {
        title: "Treino concentrado em trechos curtos",
        text:
          "Em vez de consumir horas aleatórias, você pega um trecho pequeno, um diálogo ou uma cena, e treina ali até aquilo ficar nítido.",
      },
      {
        title: "Repetição continuada até clarear",
        text:
          "Cena repetida 40, 47, 50 vezes: primeiro parece exagero, depois vira compreensão real. Seu ouvido começa a captar blocos, emendas e ritmo de fala.",
      },
      {
        title: "Repetição espaçada para fixar",
        text:
          "Depois, você revisita o material dias depois para empurrar aquilo para a memória de longo prazo. E aí o próximo trecho já fica mais fácil.",
      },
    ],
    experimentLabel: "Experimento de repetição",
    experimentTitle: "O que acontece quando você repete a mesma cena dezenas de vezes?",
    experimentSteps: [
      "No começo, o áudio parece embolado demais.",
      "Depois de várias repetições, você começa a ouvir palavras e blocos.",
      "Mais algumas repetições e a cena inteira fica previsível e clara.",
      "Quando isso se repete em vários trechos, entender séries e conversas deixa de depender da sorte e vira habilidade.",
    ],
    experimentNote:
      "Isso não é o jeito mais divertido de vender idioma. Mas é um dos jeitos mais honestos de vender fluência.",
  },
  en: {
    label: "Method",
    heading: "The Hard Truth Behind",
    headingHighlight: "Watching Without Subtitles",
    subtitle:
      "What almost nobody wants to say: fluency does not come from hacks or shallow exposure. It comes from concentrated practice and massive repetition.",
    cards: [
      {
        title: "Fluency is a skill, not a school subject",
        text:
          "Understanding an explanation does not mean you can use it at real speed. Fluency shows up when the language moves from shallow understanding into automatic use.",
      },
      {
        title: "Concentrated practice on short snippets",
        text:
          "Instead of consuming random hours of content, you take a short scene, dialogue, or clip and train it until it becomes clear.",
      },
      {
        title: "Continued repetition until it clicks",
        text:
          "Repeat a scene 40, 47, or 50 times. At first it sounds absurd, then it turns into real comprehension as your ear starts catching blocks, linkages, and rhythm.",
      },
      {
        title: "Spaced repetition to lock it in",
        text:
          "Then you revisit the material days later to move it toward long-term memory. That is why each new snippet gets easier.",
      },
    ],
    experimentLabel: "Repetition experiment",
    experimentTitle: "What happens when you repeat the same scene dozens of times?",
    experimentSteps: [
      "At first, the audio sounds too blended to follow.",
      "After several repetitions, you start hearing words and blocks.",
      "A few more repetitions, and the whole scene becomes clear and predictable.",
      "Once this happens across multiple snippets, understanding series and conversation stops being luck and becomes a trainable skill.",
    ],
    experimentNote:
      "This is not the most entertaining way to market language learning. But it is one of the most honest ways to talk about fluency.",
  },
};

const MethodSection = () => {
  const { locale } = useLocale();
  const t = copy[locale];

  return (
    <section className="py-14 sm:py-24">
      <div className="section-container">
        <AnimatedSection className="mb-8 text-center sm:mb-14">
          <span className="eyebrow-label mb-4">{t.label}</span>
          <h2 className="mb-4 font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            {t.heading} <span className="text-gradient-gold">{t.headingHighlight}</span>
          </h2>
          <p className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-lg">{t.subtitle}</p>
        </AnimatedSection>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <AnimatedSection>
            <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
              {t.cards.map((card, index) => (
                <div key={card.title} className={`method-card ${index === 2 ? "method-card-active" : ""}`}>
                  <div className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-primary">0{index + 1}</div>
                  <h3 className="mb-2 font-display text-xl font-bold text-foreground">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-secondary-foreground">{card.text}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="surface-panel h-full p-4 sm:p-8">
              <span className="eyebrow-label mb-5">{t.experimentLabel}</span>
              <h3 className="mb-4 font-display text-xl font-bold text-foreground sm:mb-6 sm:text-2xl">{t.experimentTitle}</h3>
              <div className="space-y-4">
                {t.experimentSteps.map((step, index) => (
                  <div key={step} className="flex gap-3 sm:gap-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-sm font-bold text-primary">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-relaxed text-secondary-foreground">{step}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm leading-relaxed text-primary">
                {t.experimentNote}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
