import { motion } from "framer-motion";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
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
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
          <span className="text-sm font-medium text-primary">🔥 Promoção de Lançamento — Vagas Limitadas</span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 max-w-5xl mx-auto">
          A Rússia Que Ninguém Te Conta —{" "}
          <span className="text-gradient-gold">E As Russas Que Você Ainda Não Conheceu</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
          O único guia criado por quem viveu lá de verdade. Com prints reais, frases que funcionam e um curso completo de russo.{" "}
          <span className="text-foreground font-medium">Tudo por menos que uma pizza.</span>
        </p>

        {/* Price */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="text-2xl text-muted-foreground line-through">R$499</span>
          <span className="text-5xl sm:text-6xl font-display font-bold text-gradient-gold">R$29</span>
          <span className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-sm font-bold">94% OFF</span>
        </div>

        {/* CTA */}
        <a href="#pricing" className="cta-button text-base sm:text-lg">
          QUERO ACESSO AGORA POR R$29
        </a>

        {/* Guarantee note */}
        <p className="mt-6 text-sm text-muted-foreground">
          ✅ Acesso imediato · 🔒 Garantia de 7 dias · 📱 Funciona offline
        </p>
      </motion.div>

      {/* Skyline silhouette */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-0 left-0 right-0 h-32 flex items-end justify-center"
      >
        <svg viewBox="0 0 800 120" className="w-full max-w-4xl" fill="currentColor">
          <path d="M0,120 L0,80 L30,80 L30,60 L50,60 L50,40 L55,20 L60,40 L70,40 L70,60 L90,60 L90,50 L100,30 L105,10 L110,30 L120,50 L120,70 L150,70 L150,55 L160,55 L160,45 L165,25 L170,45 L180,55 L200,55 L200,75 L230,75 L230,65 L250,65 L250,50 L260,35 L265,15 L270,35 L280,50 L290,65 L310,65 L310,80 L350,80 L350,60 L370,60 L370,45 L380,30 L385,8 L390,30 L400,45 L400,60 L430,60 L430,75 L460,75 L460,55 L480,55 L480,40 L490,25 L495,5 L500,25 L510,40 L520,55 L540,55 L540,70 L570,70 L570,60 L590,60 L590,45 L600,30 L605,12 L610,30 L620,45 L630,60 L660,60 L660,80 L700,80 L700,65 L720,65 L720,50 L730,35 L735,18 L740,35 L750,50 L760,65 L780,65 L780,80 L800,80 L800,120 Z" />
        </svg>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
