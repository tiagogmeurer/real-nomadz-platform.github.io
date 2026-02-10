import React from 'react';
import { Step } from '../types';
import { MousePointerClick, Unlock, MessageSquare } from 'lucide-react';

const steps: Step[] = [
  {
    number: "01",
    title: "Escolha um produto",
    description: "Navegue pelo nosso catálogo de soluções tecnológicas validadas."
  },
  {
    number: "02",
    title: "Acesse ou afilie-se",
    description: "Use o produto para aprender. Se torne afiliado para lucrar."
  },
  {
    number: "03",
    title: "Entre nos canais",
    description: "Conecte-se no Discord e Telegram para não andar sozinho."
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold">Como <span className="text-brand-orange">funciona</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
              <div className="text-5xl font-display font-bold text-white/5 absolute top-4 right-4 group-hover:text-brand-orange/10 transition-colors">
                {step.number}
              </div>
              <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center text-brand-orange mb-4 group-hover:scale-110 transition-transform duration-300">
                {i === 0 && <MousePointerClick size={24} />}
                {i === 1 && <Unlock size={24} />}
                {i === 2 && <MessageSquare size={24} />}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};