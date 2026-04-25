/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { QuizAnswers, LeadData, CONTENT } from '../types';
import { CheckCircle2, ChevronRight, ShieldCheck, Star, CreditCard, Timer } from 'lucide-react';

interface SalesPageProps {
  answers: QuizAnswers;
  leadData: LeadData | null;
}

export default function SalesPage({ answers, leadData }: SalesPageProps) {
  const { offer } = CONTENT;
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-bg-deep min-h-screen pt-20 pb-12 overflow-hidden">
      {/* Background Glow Decoration */}
      <div className="fixed top-[-10%] right-[-10%] w-[600px] h-[600px] bg-gold opacity-[0.03] blur-[150px] rounded-full -z-10"></div>

      <section className="relative py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Content and Benefits */}
          <div className="lg:col-span-12 xl:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <span className="text-[10px] text-gold font-bold uppercase tracking-[0.3em] premium-border pb-2">Passo Final / Acesso Imediato</span>
              <h2 className="text-4xl md:text-6xl xl:text-7xl font-serif font-light leading-[0.95] tracking-tight mt-6">
                VOCÊ NÃO ADIA MAIS. <br/>
                <span className="text-gold italic">RECEBA AGORA</span> SEU PLANO 21 DIAS.
              </h2>
              <p className="text-gray-400 mt-8 max-w-xl text-lg md:text-xl font-light leading-relaxed">
                {leadData?.fullName.split(' ')[0]}, com base no seu objetivo de notar diferença em <span className="text-white font-medium">{answers.timeframe}</span>, preparamos o ambiente ideal para sua transformação.
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {offer.features.slice(0, 4).map((feature, i) => (
                <div key={feature} className="flex gap-4 group">
                  <div className="text-gold shrink-0 font-serif italic text-2xl opacity-40 group-hover:opacity-100 transition-opacity">0{i+1}</div>
                  <div className="text-sm md:text-base text-gray-300 font-light leading-tight">{feature}</div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex items-center gap-10 opacity-30">
              <span className="text-[10px] uppercase tracking-[0.2em] font-light">Compra Segura</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-light">Acesso Imediato</span>
            </div>
          </div>

          {/* Right: Offer Card */}
          <div className="lg:col-span-12 xl:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="offer-card"
            >
              <div className="absolute top-0 right-0 bg-gold text-black text-[10px] font-bold px-4 py-1.5 uppercase tracking-tighter">
                Oferta Limitada
              </div>
              
              <div className="text-[10px] text-gray-500 line-through uppercase tracking-widest mb-1">De R$ {offer.price.from},00</div>
              <div className="flex items-baseline justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="text-lg text-gold">R$</span>
                  <span className="text-6xl md:text-7xl font-bold font-serif tracking-tighter">{offer.price.to}</span>
                </div>
                
                <div className="flex flex-col items-end opacity-80">
                  <div className="flex items-center gap-1.5 text-gold mb-1">
                    <Timer className="w-3 h-3" />
                    <span className="text-[10px] font-bold tracking-widest font-mono">{formatTime(timeLeft)}</span>
                  </div>
                  <span className="text-[8px] text-gray-500 uppercase tracking-widest">Oferta expira em breve</span>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {offer.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-[11px] text-gray-400 uppercase tracking-widest leading-none">
                    <div className="w-1.5 h-1.5 rounded-full border border-gold shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>

              <button className="w-full mt-10 bg-gold text-black font-bold uppercase tracking-widest text-sm py-5 hover:bg-white transition-colors duration-500">
                {offer.cta}
              </button>

              <div className="mt-8 flex flex-col items-center gap-5">
                <div className="flex items-center justify-center gap-8 opacity-50">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                    <span className="text-[9px] uppercase tracking-[0.15em] font-bold">SSL Secured</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-3.5 h-3.5 text-gold" />
                    <span className="text-[9px] uppercase tracking-[0.15em] font-bold">100% Seguro</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 opacity-30">
                  <span className="text-[8px] uppercase tracking-[0.2em] font-light">Protected by 256-bit AES Encryption</span>
                </div>
              </div>
              
              <p className="text-center text-[9px] text-gray-500 mt-6 uppercase tracking-[0.25em] font-light italic">
                {offer.guarantee}
              </p>
            </motion.div>

            <div className="mt-6 text-center">
              <span className="text-[10px] text-gold uppercase tracking-[0.3em] font-bold animate-pulse">
                Vagas para o próximo ciclo: 14
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-24 px-6 border-t border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] text-gold font-bold uppercase tracking-[0.3em]">Resultados Reais</span>
            <h2 className="text-3xl md:text-5xl font-serif font-light mt-4">Pessoas que <span className="italic">escolheram mudar</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Marcos S.", text: "O plano de 21 dias foi exatamente o que eu precisava para sair da inércia. Perdi 4kg e recuperei o fôlego." },
              { name: "Juliana R.", text: "Finalmente uma rotina que cabe no meu dia corrido. A autoestima voltou e as roupas estão vestindo melhor." },
              { name: "Ricardo F.", text: "O checklist diário é o segredo. Não preciso pensar, é só seguir e ver o resultado acontecer." }
            ].map((t, i) => (
              <div key={i} className="bg-bg-card p-10 border border-border-bold relative group hover:border-gold/30 transition-colors">
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 text-gold fill-gold" />)}
                </div>
                <p className="text-gray-400 font-light italic mb-8 leading-relaxed">"{t.text}"</p>
                <div className="text-xs uppercase tracking-widest font-bold text-white">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] text-gold font-bold uppercase tracking-[0.3em]">FAQ</span>
            <h2 className="text-3xl md:text-5xl font-serif font-light mt-4">Perguntas <span className="italic">Frequentes</span></h2>
          </div>
          
          <div className="space-y-6">
            {[
              { q: "Como recebo o acesso?", a: "Imediatamente após a confirmação do pagamento, você receberá os dados no seu e-mail." },
              { q: "Precisa de equipamentos?", a: "Não. O foco são rotinas práticas que você pode implementar em qualquer lugar." },
              { q: "Tenho garantia?", a: "Sim. Se em 7 dias você sentir que o projeto não é para você, devolvemos 100% do valor." }
            ].map((item, i) => (
              <div key={i} className="border-b border-white/5 pb-6">
                <h4 className="text-gold uppercase tracking-widest text-xs font-bold mb-3">{item.q}</h4>
                <p className="text-gray-500 text-sm font-light leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 text-center bg-gold mt-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-bg-deep text-4xl md:text-6xl font-serif font-light mb-10 leading-tight">
            Pronto para <span className="italic font-bold">o seu novo ciclo?</span>
          </h2>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-12 py-6 bg-bg-deep text-gold font-bold uppercase tracking-[0.3em] text-xs hover:bg-white hover:text-black transition-all shadow-2xl"
          >
            Quero começar agora
          </button>
        </div>
      </section>

      {/* Footer Trust Bar */}
      <footer className="mt-16 border-t border-white/5 pt-12 pb-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 opacity-30">
          <div className="text-[10px] uppercase tracking-[0.3em] font-light text-center md:text-left">
            PROJETO CHOCK 21 © 2026 • TODOS OS DIREITOS RESERVADOS
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[9px] uppercase tracking-widest">Termos de Uso</span>
            <span className="text-[9px] uppercase tracking-widest">Privacidade</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
