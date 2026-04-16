import { motion } from "framer-motion";
import { useLocale } from "@/lib/locale";

const copy = {
  pt: {
    badge: "🔥 Método guiado · acesso vitalício",
    title: "Fale Russo em 6 Meses",
    titleHighlight: "Mesmo Sem Ter Estudado Antes",
    subtitle: "Um caminho claro para aprender o que realmente importa: alfabeto, escuta intensiva, séries e fala.",
    subtitleHighlight: "Menos teoria espalhada. Mais repetição até o idioma começar a sair no automático.",
    cta: "QUERO COMEÇAR AGORA POR R$29",
    guarantee: "✅ Acesso imediato · 🗺️ Plano de 6 meses · 📲 Celular, tablet e desktop",
    steps: [
      { label: "Passo 1", title: "Alfabeto", desc: "3-4 horas para destravar leitura" },
      { label: "Passo 2", title: "Escuta", desc: "Repetições guiadas até fixar" },
      { label: "Passo 3", title: "Séries", desc: "Treino de ouvido com estrutura" },
      { label: "Passo 4", title: "Fala", desc: "A prática de fala entra cedo e fica na rotina" },
    ],
    metrics: ["2350+ alunos", "40+ aulas", "40+ diálogos", "4 modos de legenda"],
    trustLine: "2350+ alunos já começaram a construir fluência com este método.",
    trustNote: "Acesso imediato, plano claro e prática guiada desde o começo.",
    panelTitle: "Como o método organiza seu estudo",
    panelLead: "Você não entra e tenta adivinhar o que estudar. Você segue uma sequência pensada para retenção.",
    panelItems: ["Mês 1: alfabeto + escuta base", "Mês 2: fala guiada + diálogos", "Mês 3-4: clipes + repetição", "Mês 5-6: episódios + autonomia"],
  },
  en: {
    badge: "🔥 Guided method · lifetime access",
    title: "Speak Russian in 6 Months",
    titleHighlight: "Even If You Are Starting From Zero",
    subtitle: "A clear path focused on what matters most: alphabet, intensive listening, series-based immersion, and speaking.",
    subtitleHighlight: "Less scattered theory. More repetition until it becomes automatic.",
    cta: "START NOW FOR $29",
    guarantee: "✅ Instant access · 🗺️ 6-month roadmap · 📲 Mobile, tablet and desktop",
    steps: [
      { label: "Step 1", title: "Alphabet", desc: "3-4 hours to unlock reading" },
      { label: "Step 2", title: "Listening", desc: "Guided repetitions until it sticks" },
      { label: "Step 3", title: "Series", desc: "Ear training with structure" },
      { label: "Step 4", title: "Speaking", desc: "Speaking starts early and stays in the routine" },
    ],
    metrics: ["2,350+ learners", "40+ lessons", "40+ dialogues", "4 subtitle modes"],
    trustLine: "2,350+ learners are already building fluency with this method.",
    trustNote: "Instant access, clear roadmap, and guided practice from day one.",
    panelTitle: "How the method structures your study",
    panelLead: "You do not open the app and choose randomly. You follow a sequence built for retention.",
    panelItems: ["Month 1: alphabet + listening base", "Month 2: guided speaking + dialogues", "Month 3-4: clips + repetition", "Month 5-6: episodes + autonomy"],
  },
};

const trustAvatars = {
  pt: [
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/men/45.jpg",
    "https://randomuser.me/api/portraits/women/67.jpg",
  ],
  en: [
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/52.jpg",
    "https://randomuser.me/api/portraits/women/28.jpg",
  ],
};

const HeroSection = () => {
  const { locale, setLocale } = useLocale();
  const t = copy[locale];
  const avatars = trustAvatars[locale];
  const checkoutUrl =
    locale === "pt"
      ? "https://pay.hotmart.com/X100917713B"
      : "https://pay.hotmart.com/X100917713B?off=jfhu8kl9";

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden py-14 sm:py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, hsl(43 80% 46% / 0.4), transparent 70%)" }} />
      </div>

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-5 flex justify-center">
            <div className="inline-flex items-center rounded-full border border-border bg-card p-1 shadow-sm shadow-black/20">
              <button
                type="button"
                onClick={() => setLocale("pt")}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${
                  locale === "pt" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                }`}
              >
                PT
              </button>
              <button
                type="button"
                onClick={() => setLocale("en")}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${
                  locale === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Badge */}
          <div className="mb-6 inline-flex max-w-full items-center justify-center rounded-full border border-primary/30 bg-primary/5 px-3 py-2 sm:mb-8 sm:px-4">
            <span className="text-center text-xs font-medium text-primary sm:text-sm">{t.badge}</span>
          </div>

          {/* Headline */}
          <h1 className="mx-auto mb-5 max-w-5xl font-display text-4xl font-bold leading-[1.02] sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl">
            {t.title}{" "}
            <span className="text-gradient-gold">{t.titleHighlight}</span>
          </h1>

          {/* Sub-headline */}
          <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-muted-foreground sm:mb-10 sm:text-xl">
            {t.subtitle}{" "}
            <span className="text-foreground font-medium">{t.subtitleHighlight}</span>
          </p>

          {/* Price */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:gap-4">
            <span className="text-xl text-muted-foreground line-through sm:text-2xl">{locale === "pt" ? "R$499" : "$499"}</span>
            <span className="font-display text-5xl font-bold text-gradient-gold sm:text-6xl">{locale === "pt" ? "R$29" : "$29"}</span>
            <span className="rounded-lg bg-primary/10 px-3 py-1 text-xs font-bold text-primary sm:text-sm">94% OFF</span>
          </div>

          {/* CTA */}
          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button w-full max-w-sm text-sm sm:w-auto sm:text-lg"
            onClick={() => import("@/lib/pixel").then(m => m.trackInitiateCheckout("hero"))}
          >
            {t.cta}
          </a>

          <div className="mx-auto mt-5 max-w-md rounded-2xl border border-white/10 bg-white/5 p-4 text-left shadow-lg shadow-black/20 sm:mt-6 sm:max-w-lg">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {avatars.map((avatar, index) => (
                  <img
                    key={avatar}
                    src={avatar}
                    alt={locale === "pt" ? `Aluno ${index + 1}` : `Learner ${index + 1}`}
                    className="h-10 w-10 rounded-full border-2 border-background object-cover"
                    loading="lazy"
                  />
                ))}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold leading-snug text-foreground">{t.trustLine}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{t.trustNote}</p>
              </div>
            </div>
          </div>

          {/* Guarantee note */}
          <p className="mx-auto mt-5 max-w-md text-xs leading-relaxed text-muted-foreground sm:mt-6 sm:max-w-none sm:text-sm">
            {t.guarantee}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:mt-10 sm:gap-3">
            {t.metrics.map((metric) => (
              <span key={metric} className="metric-pill text-xs sm:text-sm">{metric}</span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-12 grid gap-5 sm:mt-14 sm:gap-6 lg:grid-cols-[1.4fr_1fr]"
        >
          <div className="surface-panel data-grid p-5 text-left sm:p-8">
            <div className="mb-5 sm:mb-6">
              <span className="eyebrow-label">{locale === "pt" ? "Sequência do método" : "Method sequence"}</span>
            </div>
            <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
              {t.steps.map((step, index) => (
                <div key={step.title} className={`method-card ${index === 1 || index === 2 ? "method-card-active" : ""}`}>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary/90">{step.label}</p>
                  <h3 className="mt-3 font-display text-xl font-bold text-foreground sm:text-2xl">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-panel p-5 text-left sm:p-8">
            <span className="eyebrow-label">{locale === "pt" ? "Plano visual" : "Visual roadmap"}</span>
            <h3 className="mt-4 font-display text-xl font-bold text-foreground sm:mt-5 sm:text-2xl">{t.panelTitle}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.panelLead}</p>

            <div className="mt-5 space-y-3 sm:mt-6">
              {t.panelItems.map((item, index) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-3 sm:px-4">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">{index + 1}</span>
                  <span className="text-sm leading-relaxed text-secondary-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
