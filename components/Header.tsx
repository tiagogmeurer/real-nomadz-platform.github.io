import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Send } from 'lucide-react';
import { Button } from './Button';
import { motion, AnimatePresence } from 'framer-motion';
import { LINKS } from './Links';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Comunidade', href: '#comunidade' },
    { label: 'Suporte & Newsletter', href: '#suporte' },
    { label: 'Sobre', href: '#sobre' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled || isMobileMenuOpen
          ? 'bg-brand-dark/90 backdrop-blur-md border-white/10 py-3'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-brand-orange rounded flex items-center justify-center font-bold text-black text-xl group-hover:scale-110 transition-transform">
              R
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white">
              Real<span className="text-brand-orange"> Nomadz</span> ®
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors hover:shadow-[0_2px_10px_rgba(255,255,255,0.1)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              href={LINKS.comunidade.discord}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={16} /> Discord
            </Button>

            <Button
              variant="primary"
              size="sm"
              className="gap-2"
              href={LINKS.comunidade.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Send size={16} /> Telegram
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-brand-dark border-b border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-lg font-medium text-gray-300 hover:text-brand-orange transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              <div className="h-px bg-white/10 my-2" />

              <Button
                variant="outline"
                fullWidth
                className="gap-2 justify-center"
                href={LINKS.comunidade.discord}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <MessageCircle size={18} /> Entrar no Discord
              </Button>

              <Button
                variant="primary"
                fullWidth
                className="gap-2 justify-center"
                href={LINKS.comunidade.telegram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Send size={18} /> Entrar no Telegram
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
