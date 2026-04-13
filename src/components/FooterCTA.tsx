import AnimatedSection from "./AnimatedSection";

const FooterCTA = () => (
  <section className="py-24 bg-secondary/30">
    <div className="section-container text-center">
      <AnimatedSection>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-6 max-w-3xl mx-auto leading-tight">
          Daqui a 6 meses você vai estar na Rússia desejando ter comprado isso antes.{" "}
          <span className="text-gradient-gold">Ou vai estar lá preparado.</span>
        </h2>

        <a href="#pricing" className="cta-button text-base sm:text-lg">
          QUERO ACESSO AGORA POR R$29
        </a>

        <p className="mt-6 text-sm text-muted-foreground">
          🔒 Garantia de 7 dias · Acesso imediato · 100% offline
        </p>
      </AnimatedSection>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-border">
        <p className="text-muted-foreground text-xs">
          © 2024 Pacote Rússia Sem Filtro. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </section>
);

export default FooterCTA;
