/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { CONTENT } from '../types';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ResultMessageProps {
  onContinue: () => void;
}

export default function ResultMessage({ onContinue }: ResultMessageProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl bg-bg-card border border-border-bold p-10 md:p-16 text-center relative overflow-hidden"
      >
        <div className="mb-8">
          <span className="text-[10px] text-gold font-bold uppercase tracking-[0.3em]">Diagnóstico Concluído</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-serif font-light leading-[1.1] mb-8 tracking-tight">
          {CONTENT.result.message.split('.')[0]}. <br/>
          <span className="text-gold italic">{CONTENT.result.message.split('.')[1]}</span>
        </h2>
        
        <p className="text-gray-500 text-base md:text-lg font-light mb-12 leading-relaxed max-w-xl mx-auto">
          {CONTENT.result.complement}
        </p>

        <button
          onClick={onContinue}
          className="w-full md:w-auto px-12 py-5 bg-gold text-black font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors duration-500"
        >
          {CONTENT.result.button}
        </button>
      </motion.div>
    </div>
  );
}
