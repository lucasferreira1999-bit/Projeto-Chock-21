/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Loader2 } from 'lucide-react';

interface TransitionScreenProps {
  onComplete: () => void;
}

const MESSAGES = [
  "Analisando respostas...",
  "Detectando bloqueios...",
  "Organizando melhor rota...",
  "Plano pronto."
];

export default function TransitionScreen({ onComplete }: TransitionScreenProps) {
  const [currentMsgIdx, setCurrentMsgIdx] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (currentMsgIdx < MESSAGES.length - 1) {
      const timer = setTimeout(() => {
        setCurrentMsgIdx(prev => prev + 1);
      }, 1200);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setIsFinished(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentMsgIdx]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 px-6">
      <div className="w-full max-w-sm text-center">
        {!isFinished ? (
          <div className="flex flex-col items-center">
            <Loader2 className="w-10 h-10 text-gold animate-spin mb-8 opacity-50" />
            <div className="h-8 overflow-hidden relative w-full">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentMsgIdx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-lg md:text-xl font-serif tracking-wide italic text-gray-300"
                >
                  {MESSAGES[currentMsgIdx]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center"
          >
            <div className="w-20 h-20 rounded-full border border-gold/30 flex items-center justify-center mb-6 relative">
              <div className="absolute inset-0 rounded-full border-2 border-gold animate-ping opacity-20" />
              <div className="w-12 h-12 rounded-full gold-gradient shadow-xl shadow-gold/20" />
            </div>
            <h3 className="text-2xl md:text-3xl font-serif mb-8 gold-text font-bold">Plano Pronto.</h3>
            <button
              onClick={onComplete}
              className="w-full gold-gradient text-black font-bold py-5 rounded-2xl shadow-2xl shadow-gold/20 hover:scale-[1.02] active:scale-[0.98] transition-all text-lg tracking-tight"
            >
              VER MEU RESULTADO
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
