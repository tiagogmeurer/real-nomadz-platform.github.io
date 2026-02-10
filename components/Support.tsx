import React from 'react';
import { Button } from './Button';
import { Send, Bell, FileText, HeadphonesIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { LINKS } from './Links';

export const Support: React.FC = () => {
  return (
    <section id="suporte" className="py-24 bg-brand-lightGray relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#229ED9]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-brand-dark border border-white/5 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
          <div className="w-16 h-16 bg-[#229ED9]/20 text-[#229ED9] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Send size={32} />
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Suporte Especializado + <br className="hidden md:block" />
            Newsletter Oficial
          </h2>
          
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            No Telegram você recebe suporte e mensagens diárias — é o topo de funil oficial para quem quer estar à frente.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10 text-left">
            {[
              { icon: Bell, title: "Atualizações Diárias", text: "Fique sabendo antes de todos." },
              { icon: HeadphonesIcon, title: "Avisos de Lançamentos", text: "Não perca nenhuma oportunidade." },
              { icon: FileText, title: "Conteúdos Exclusivos", text: "Materiais para afiliados e dicas." },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-[#229ED9]/30 transition-colors"
              >
                <item.icon className="text-[#229ED9] mb-3" size={24} />
                <h4 className="font-bold mb-1">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <Button
            size="lg"
            className="w-full sm:w-auto bg-[#229ED9] hover:bg-[#1e8dbf] shadow-[#229ED9]/20 hover:shadow-[#229ED9]/40 text-white border-transparent gap-2"
            href={LINKS.comunidade.telegram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Send size={20} />
            Entrar no Telegram
          </Button>
        </div>
      </div>
    </section>
  );
};
