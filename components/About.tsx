import React from 'react';
import { Mail, Instagram, Twitter } from 'lucide-react';
import { Button } from './Button';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-black relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold mb-6">Sobre a <span className="text-brand-orange">Real Nomadz</span> ®</h2>
          
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-10">
            <p>
              Somos uma fraternidade focada em networking e criação de riqueza através de técnicas e tecnologias modernas. Nossa missão é construir e perpetuar <b>liberdade geográfica e financeira</b> através de empreendimentos inteligentes baseados em sistemas tecnologicos de ponta, rede sólida de afiliados e profissionais digitais.
            </p>
            <p>
              Não vendemos sonhos, vendemos ferramentas e estratégias validadas. Acreditamos na construção de negócios reais, fundamentados em tecnologia, automação e inteligência artificial.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button variant="outline" className="gap-2">
              <Mail size={18} />
              Entrar em contato
            </Button>
            
            <div className="flex gap-4">
              <a href="#" className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};