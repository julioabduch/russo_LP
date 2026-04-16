import AnimatedSection from "./AnimatedSection";
import { useLocale } from "@/lib/locale";

const copy = {
  pt: {
    heading: "O Que Você",
    headingHighlight: "Recebe",
    subtitle: "Dois aplicativos diferentes e complementares: um guia social e cultural, e um curso de fluência com repetição guiada.",
    app1Label: "🌍 Aplicativo 1 - Guia Social e Cultural",
    app1Title: "Guia Russofalante Fora da Curva",
    app1Subtitle: "O aplicativo de contexto: cultura, cidades, etiqueta, relacionamento e frases para circular pelo universo russofalante com muito mais repertório.",
    app1Features: [
      "Guia de cidades e contextos urbanos do universo russofalante",
      "50+ experiências autênticas com dicas de quem conhece o contexto",
      "30+ missões educacionais de cultura e relacionamento",
      "100+ frases em russo com transliteração e pronúncia",
      "Mapas mentais sobre frio, bânia, etiqueta e relacionamentos",
      "Personalização por perfil: Modo Social ou Modo Cultura",
      "Busca global inteligente",
      "Interface em português e inglês + acesso no celular, tablet e desktop",
    ],
    app1Highlight: "⚡ Aqui entra o contexto que dá vida ao idioma: cultura, estilo de vida e dinâmica social em uso real.",
    app1Timeline: ["50+ experiências", "30+ missões", "100+ frases", "Busca global"],
    app1AccessTitle: "Acesso irrestrito ao conteúdo do Aplicativo 1",
    app1AccessItems: [
      "Todas as experiências detalhadas",
      "Todas as missões com estratégias",
      "Todos os mapas mentais especializados",
    ],
    app2Label: "🎧 Aplicativo 2 - Curso de Fluência",
    app2Title: "Russo Fluente",
    app2Subtitle: "O curso em si: aulas, séries, diálogos e gramática, com foco total em repetição até a compreensão ficar mais automática.",
    app2Features: [
      "Séries americanas como base do treino de ouvido",
      "40+ diálogos do cotidiano para treinos concentrados",
      "50 aulas de gramática com explicação prática",
      "Treinos de escuta e fala com repetição guiada",
      "Clipes com 4 variações de legenda",
      "Alfabeto cirílico com pronúncia, exemplos e exercícios",
      "Rastreador de repetições e progresso",
      "Interface bilíngue PT-BR / EN",
      "Atualizações futuras inclusas",
    ],
    app2Modes: ["Séries americanas", "40+ diálogos", "50 aulas", "Repetição guiada"],
  },
  en: {
    heading: "What You",
    headingHighlight: "Get",
    subtitle: "Two clearly separated apps: one social and cultural guide, and one fluency course built on guided repetition.",
    app1Label: "🌍 App 1 - Social and Cultural Guide",
    app1Title: "Off-the-Path Russian-Speaking Guide",
    app1Subtitle: "The context app: culture, cities, etiquette, dating, and practical phrases to navigate the Russian-speaking world with more confidence.",
    app1Features: [
      "Guide to cities and urban contexts across the Russian-speaking world",
      "50+ authentic experiences with insider tips",
      "30+ educational missions around culture and dating",
      "100+ Russian phrases with transliteration and pronunciation",
      "Mental maps on weather, banya, etiquette, and relationships",
      "Profile-based customization: Social Mode or Culture Mode",
      "Smart global search",
      "Portuguese and English interface + mobile, tablet, and desktop access",
    ],
    app1Highlight: "⚡ This is where context, culture, lifestyle, and social dynamics support your real-world language use.",
    app1Timeline: ["50+ experiences", "30+ missions", "100+ phrases", "Global search"],
    app1AccessTitle: "Full access inside App 1",
    app1AccessItems: [
      "All detailed experiences",
      "All missions with strategies",
      "All specialized mental maps",
    ],
    app2Label: "🎧 App 2 - Fluency Course",
    app2Title: "Fluent Russian",
    app2Subtitle: "The actual course: lessons, series, dialogues, and grammar, with repetition as the main engine of progress.",
    app2Features: [
      "American sitcoms as the core of your listening training",
      "40+ daily-life dialogues for concentrated practice",
      "50 grammar lessons with practical explanations",
      "Listening and speaking drills with guided repetition",
      "Clips with 4 subtitle variations",
      "Cyrillic alphabet with pronunciation, examples and exercises",
      "Repetition and progress tracker",
      "Bilingual interface PT-BR / EN",
      "Future updates included",
    ],
    app2Modes: ["American sitcoms", "40+ dialogues", "50 lessons", "Guided repetition"],
  },
};

const ShowcaseSection = () => {
  const { locale } = useLocale();
  const t = copy[locale];

  return (
    <section className="bg-secondary/30 py-14 sm:py-24">
      <div className="section-container">
        <AnimatedSection className="mb-8 text-center sm:mb-12">
          <span className="eyebrow-label mb-4">{locale === "pt" ? "Oferta" : "Offer"}</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {t.heading} <span className="text-gradient-gold">{t.headingHighlight}</span>
          </h2>
          <p className="text-base text-muted-foreground sm:text-lg">{t.subtitle}</p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:gap-8 xl:grid-cols-2">
            <div className="surface-panel p-4 sm:p-10">
              <p className="mb-2 text-xs font-bold text-primary sm:text-sm">{t.app1Label}</p>
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-2 text-gradient-gold">{t.app1Title}</h3>
              <p className="mb-5 text-sm text-muted-foreground sm:mb-8 sm:text-base">{t.app1Subtitle}</p>

              <div className="mb-6 flex flex-wrap gap-2 sm:mb-8">
                {t.app1Timeline.map((item, index) => (
                  <span key={item} className={`metric-pill text-xs sm:text-sm ${index === 1 ? "border-primary/30 text-primary" : ""}`}>{item}</span>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                {t.app1Features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-primary mt-0.5 flex-shrink-0">✦</span>
                    <span className="text-secondary-foreground text-sm leading-relaxed">{f}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-primary/20 bg-primary/5 p-4 sm:mt-8">
                <p className="text-sm text-primary font-medium">{t.app1Highlight}</p>
              </div>

              <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4 sm:mt-6">
                <p className="mb-3 text-sm font-bold text-foreground">{t.app1AccessTitle}</p>
                <div className="space-y-2">
                  {t.app1AccessItems.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-secondary-foreground">
                      <span className="mt-0.5 text-primary">⊳</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="surface-panel p-4 sm:p-10">
              <p className="mb-2 text-xs font-bold text-primary sm:text-sm">{t.app2Label}</p>
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-2 text-gradient-gold">{t.app2Title}</h3>
              <p className="mb-5 text-sm text-muted-foreground sm:mb-8 sm:text-base">{t.app2Subtitle}</p>

              <div className="mb-6 grid grid-cols-2 gap-2 sm:mb-8 sm:grid-cols-4">
                {t.app2Modes.map((mode) => (
                  <div key={mode} className="flex min-h-[56px] items-center justify-center rounded-xl border border-white/10 bg-white/5 px-2 py-3 text-center text-[10px] font-bold uppercase leading-tight tracking-[0.12em] text-secondary-foreground [overflow-wrap:anywhere] sm:px-3 sm:text-xs sm:tracking-[0.18em]">
                    {mode}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                {t.app2Features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-primary mt-0.5 flex-shrink-0">✦</span>
                    <span className="text-secondary-foreground text-sm leading-relaxed">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ShowcaseSection;
