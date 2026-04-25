/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { LeadData, CONTENT } from '../types';
import { ShieldCheck, User, Mail, Phone, CreditCard, ArrowRight, Lock } from 'lucide-react';

interface LeadCaptureProps {
  onSubmit: (data: LeadData) => void;
}

export default function LeadCapture({ onSubmit }: LeadCaptureProps) {
  const [formData, setFormData] = useState<LeadData>({
    fullName: '',
    email: '',
    whatsapp: '',
    cpf: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-xl bg-bg-card border border-border-bold p-8 md:p-12 text-left relative overflow-hidden"
      >
        <div className="mb-10">
          <span className="text-[10px] text-gold font-bold uppercase tracking-[0.3em]">Ambiente Seguro / Cadastro</span>
          <h2 className="text-2xl md:text-3xl font-serif font-light mt-4 leading-tight">
            {CONTENT.lead.title}
          </h2>
          <p className="text-gray-500 text-sm mt-4 font-light">
            {CONTENT.lead.disclaimer}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-1">Nome Completo</label>
            <input
              required
              type="text"
              placeholder="Digite seu nome"
              className="w-full bg-border-subtle/20 border border-border-bold py-5 px-6 focus:outline-none focus:border-gold transition-all text-white placeholder:text-gray-700"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-1">E-mail de Acesso</label>
            <input
              required
              type="email"
              placeholder="seu@e-mail.com"
              className="w-full bg-border-subtle/20 border border-border-bold py-5 px-6 focus:outline-none focus:border-gold transition-all text-white placeholder:text-gray-700"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-1">WhatsApp</label>
              <input
                required
                type="tel"
                placeholder="(00) 00000-0000"
                className="w-full bg-border-subtle/20 border border-border-bold py-5 px-6 focus:outline-none focus:border-gold transition-all text-white placeholder:text-gray-700"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-1">CPF (Para Nota)</label>
              <input
                required
                type="text"
                placeholder="000.000.000-00"
                className="w-full bg-border-subtle/20 border border-border-bold py-5 px-6 focus:outline-none focus:border-gold transition-all text-white placeholder:text-gray-700"
                value={formData.cpf}
                onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gold text-black font-bold uppercase tracking-widest text-xs py-5 hover:bg-white transition-colors duration-500 mt-4"
          >
            {CONTENT.lead.button}
          </button>
        </form>

        <div className="mt-8 flex flex-col items-center gap-6 border-t border-border-subtle/50 pt-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-50">
            <div className="flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-gold" />
              <span className="text-[9px] uppercase tracking-[0.2em] font-bold">SSL Secured</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-gold" />
              <span className="text-[9px] uppercase tracking-[0.2em] font-bold">100% Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-3.5 h-3.5 text-gold" />
              <span className="text-[9px] uppercase tracking-[0.2em] font-bold">Pagamento Protegido</span>
            </div>
          </div>
          <p className="text-[9px] text-gray-500 uppercase tracking-widest text-center max-w-xs leading-relaxed">
            Seus dados estão protegidos por criptografia de ponta a ponta
          </p>
        </div>
      </motion.div>
    </div>
  );
}
