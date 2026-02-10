import React from 'react';
import { Button } from './Button';
import { MessageCircle, Users, Hash, Calendar, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { LINKS } from './Links';

export const Community: React.FC = () => {
  const features = [
    { icon: Users, label: "Networking" },
    { icon: Hash, label: "Canais Temáticos" },
    { icon: Trophy, label: "Cases de Sucesso" },
    { icon: Calendar, label: "Calendário" },
  ];

  return (
    <section id="comunidade" className="py-24 relative overflow-hidden">
      {/* Background with slight tint for separation */}
      <div className="absolute inset-0 bg-[#5865F2]/5" /> {/* Discord color tint */}
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 text-[#5865F2] font-bold mb-4">
              <MessageCircle size={20} />
              <span>DISCORD OFICIAL</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Comunidade Oficial de <span className="text-[#5865F2]">Afiliados</span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Networking, anúncios oficiais, materiais, calendário e oportunidades. Onde tudo acontece em tempo real.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                  <f.icon size={20} className="text-[#5865F2]" />
                  <span className="font-medium text-sm">{f.label}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="w-full sm:w-auto bg-[#5865F2] hover:bg-[#4752c4] shadow-[#5865F2]/20 hover:shadow-[#5865F2]/40 text-white border-transparent gap-2"
              href={LINKS.comunidade.discord}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} />
              Entrar no Discord
            </Button>
            
            <div className="mt-6 text-sm text-gray-500">
              * Acesso gratuito e imediato aos canais públicos.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Visual Representation of Discord UI */}
            <div className="bg-[#1e1f22] rounded-xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="bg-[#2b2d31] p-4 flex items-center gap-2 border-b border-[#1e1f22]">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#5865F2] flex-shrink-0 flex items-center justify-center text-white font-bold">RN</div>
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white">Admin Real Nomadz</span>
                      <span className="px-1.5 py-0.5 rounded bg-[#5865F2] text-[10px] text-white">BOT</span>
                      <span className="text-xs text-gray-400">Hoje às 10:42</span>
                    </div>
                    <p className="text-gray-300">
                      Sejam bem-vindos à central oficial! 🚀<br/>
                      Novos materiais de afiliação disponíveis no canal <span className="text-[#5865F2]">#materiais</span>.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-orange flex-shrink-0 flex items-center justify-center text-black font-bold">AF</div>
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white">Afiliado Pro</span>
                      <span className="text-xs text-gray-400">Hoje às 10:45</span>
                    </div>
                    <p className="text-gray-300">Acabei de ver o update do Programar com IA, ficou insano!</p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
