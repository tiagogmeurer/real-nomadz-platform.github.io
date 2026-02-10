import React from 'react';
import { Code2, Bot, Lock, ExternalLink, DollarSign } from 'lucide-react';
import { Button } from './Button';
import { Product } from '../types';
import { motion } from 'framer-motion';
import { LINKS } from './Links';

const products: Product[] = [
  {
    id: '1',
    name: 'Programar com IA',
    description: 'Domine o desenvolvimento de software acelerado por inteligência artificial.',
    badges: ['Acesso imediato', 'Afiliados ativos'],
    imageIcon: Code2,
    status: 'active'
  },
  {
    id: '2',
    name: 'Robô do Job',
    description: 'Aprenda a criar modelos e influenciadoras +18 100% com IA e lucre muito no nicho hot.',
    badges: ['Acesso imediato', 'Mais Vendido'],
    imageIcon: Bot,
    status: 'active'
  },
  {
    id: '3',
    name: 'Em breve',
    description: 'Novas ferramentas e treinamentos estão sendo desenvolvidos.',
    badges: [],
    imageIcon: Lock,
    status: 'coming_soon'
  }
];

const getProductLinks = (name: string) => {
  if (name === 'Programar com IA') return LINKS.programarComIA;
  if (name === 'Robô do Job') return LINKS.roboDoJob;
  return null;
};

export const Products: React.FC = () => {
  return (
    <section id="produtos" className="py-24 bg-brand-dark relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold mb-4">
            Nossos <span className="text-brand-orange">Produtos</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Acesse o que você precisa — ou ganhe dinheiro vendendo afiliado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`
                group relative flex flex-col p-6 rounded-2xl border transition-all duration-300
                ${product.status === 'active' 
                  ? 'bg-brand-gray border-white/5 hover:border-brand-orange/50 hover:shadow-[0_0_40px_rgba(255,107,0,0.1)]' 
                  : 'bg-brand-gray/50 border-white/5 opacity-70'}
              `}
            >
              <div className="mb-6 flex items-start justify-between">
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                  <product.imageIcon size={24} />
                </div>
                {product.status === 'active' && (
                  <div className="flex flex-wrap gap-2 justify-end">
                    {product.badges.map(badge => (
                      <span
                        key={badge}
                        className="px-2 py-1 bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-wider rounded"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <h3 className="text-2xl font-bold font-display mb-2">{product.name}</h3>
              <p className="text-gray-400 mb-8 flex-grow">{product.description}</p>

              {product.status === 'active' ? (
                <div className="grid gap-3">
                  {(() => {
                    const links = getProductLinks(product.name);
                    if (!links) return null;

                    return (
                      <>
                        <Button
                          className="w-full justify-between group-hover:bg-orange-500"
                          href={links.acessar}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          ACESSAR <ExternalLink size={16} />
                        </Button>

                        <Button
                          variant="outline"
                          className="w-full justify-between hover:bg-white/5"
                          href={links.afiliados}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          PROGRAMA DE AFILIADOS <DollarSign size={16} />
                        </Button>
                      </>
                    );
                  })()}
                </div>
              ) : (
                <div className="mt-auto pt-4 border-t border-white/5">
                  <p className="text-sm text-gray-500 text-center font-mono">
                    EXPANDINDO O ECOSSISTEMA
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
