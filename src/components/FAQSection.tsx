import AnimatedSection from "./AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Funciona offline?", a: "Sim, 100%. Os dois apps foram projetados para funcionar sem internet. Perfeito para viagens." },
  { q: "Preciso saber russo?", a: "Não! O curso começa do zero absoluto. Do alfabeto até conversas do dia-a-dia, tudo explicado de forma simples." },
  { q: "Serve para quem já mora na Rússia?", a: "Com certeza. Tem conteúdo que nem locais conhecem — experiências secretas, dicas de bairros específicos e abordagens culturais." },
  { q: "É só para homens?", a: "O guia cultural, de idioma e de viagem serve para todos. A seção de conquista tem perspectiva masculina, mas as dicas culturais são universais." },
  { q: "Como recebo acesso?", a: "Imediatamente após o pagamento. Você recebe o link de download na hora — sem espera." },
  { q: "Posso usar em qualquer celular?", a: "Sim, funciona em Android e iOS. São apps leves e otimizados para qualquer dispositivo." },
];

const FAQSection = () => (
  <section className="py-24">
    <div className="section-container">
      <AnimatedSection className="text-center mb-16">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Perguntas <span className="text-gradient-gold">Frequentes</span>
        </h2>
      </AnimatedSection>

      <AnimatedSection>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="card-elevated px-6 border">
                <AccordionTrigger className="font-display font-bold text-foreground text-left hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default FAQSection;
