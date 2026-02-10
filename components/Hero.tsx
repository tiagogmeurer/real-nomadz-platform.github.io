import React from 'react';
import { Button } from './Button';
import { MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { LINKS } from './Links';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-orange/20 rounded-full blur-[120px] opacity-30 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-orange text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            Comunidade Oficial
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
          >
            Real <span className="text-brand-orange">Nomadz ®</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Uma fraternidade focada em aprendizagem e implementação de novas tecnologias para criação de riqueza no novo mercado digital.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button
              size="lg"
              className="group gap-2 min-w-[200px]"
              href={LINKS.comunidade.discord}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Entrar no Discord
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="group gap-2 min-w-[200px]"
              href={LINKS.comunidade.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              Entrar no Telegram
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 md:gap-12 border-t border-white/10 pt-8"
          >
            {[
              "Produtos oficiais",
              "Comunidade e afiliados",
              "Suporte especializado"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-400 text-sm md:text-base">
                <CheckCircle2 size={18} className="text-brand-orange" />
                {item}
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
