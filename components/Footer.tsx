import React from 'react';
import { LINKS } from './Links';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <a href="#hero" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-orange rounded flex items-center justify-center font-bold text-black text-xl">
                R
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Real<span className="text-brand-orange"> Nomadz</span> ®
              </span>
            </a>
            <p className="text-gray-500 text-sm">
              O futuro é agora.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Plataforma</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#produtos" className="hover:text-brand-orange transition-colors">Produtos</a></li>
              <li><a href="#comunidade" className="hover:text-brand-orange transition-colors">Comunidade</a></li>
              <li><a href="#suporte" className="hover:text-brand-orange transition-colors">Suporte</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-orange transition-colors">Área de Membros</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Portal do Afiliado</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Termos de Uso</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Social</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href={LINKS.comunidade.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#5865F2] transition-colors"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href={LINKS.comunidade.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#229ED9] transition-colors"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/tiagogmeurer#/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Real Nomadz ® | Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Feito por nômades reais, para reais nômades.</p>
        </div>
      </div>
    </footer>
  );
};
