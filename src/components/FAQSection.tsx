import AnimatedSection from "./AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLocale } from "@/lib/locale";

const copy = {
  pt: {
    heading: "Perguntas",
    headingHighlight: "Frequentes",
    faqs: [
      { q: "Preciso saber alguma coisa antes de entrar?", a: "Não. O método parte do zero absoluto e organiza sua entrada no idioma desde o alfabeto." },
      { q: "Em quanto tempo eu leio o alfabeto?", a: "A meta aqui é destravar a leitura em 3 a 4 horas de estudo focado, sem transformar isso em um módulo infinito." },
      { q: "Quando eu começo a falar?", a: "A fala entra cedo. A prática oral é incorporada a partir do mês 2 para você não ficar preso só em leitura e teoria." },
      { q: "Vou ter que decorar muita gramática?", a: "Não. A gramática aparece quando ela ajuda você a entender melhor o que está ouvindo e a formar frases com mais segurança." },
      { q: "Como recebo acesso?", a: "Imediatamente após o pagamento. Você recebe o link na hora, sem espera." },
      { q: "Isso é assinatura?", a: "Não. O acesso é vitalício ao conteúdo incluso na oferta atual, sem cobrança mensal recorrente." },
      { q: "Posso usar em qualquer celular?", a: "Sim. Funciona em Android e iOS, e você também pode acessar por tablet ou desktop." },
    ],
  },
  en: {
    heading: "Frequently Asked",
    headingHighlight: "Questions",
    faqs: [
      { q: "Do I need any background before joining?", a: "No. The method starts from absolute zero and structures your first steps from the alphabet onward." },
      { q: "How quickly can I read the alphabet?", a: "The target is to unlock reading in 3 to 4 hours of focused study instead of stretching it into a long module." },
      { q: "When do I start speaking?", a: "Speaking starts early. It is built into month 2 so you do not get stuck in reading and theory only." },
      { q: "Do I need to memorize a lot of grammar?", a: "No. Grammar is introduced when it helps you understand what you hear and build sentences with more confidence." },
      { q: "How do I get access?", a: "Immediately after payment. You receive access right away." },
      { q: "Is this a subscription?", a: "No. You get lifetime access to the content included in the current offer, with no recurring monthly charge." },
      { q: "Can I use it on any phone?", a: "Yes. It works on Android and iOS, and you can also use it on tablet or desktop." },
    ],
  },
};

const FAQSection = () => {
  const { locale } = useLocale();
  const t = copy[locale];

  return (
    <section className="py-24">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {t.heading} <span className="text-gradient-gold">{t.headingHighlight}</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {t.faqs.map((f, i) => (
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
};

export default FAQSection;
