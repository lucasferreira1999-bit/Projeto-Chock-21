/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { FunnelStep, QuizAnswers, LeadData } from './types';
import Quiz from './components/Quiz';
import TransitionScreen from './components/TransitionScreen';
import SalesPage from './components/SalesPage';
import LeadCapture from './components/LeadCapture';
import ResultMessage from './components/ResultMessage';

export default function App() {
  const [step, setStep] = useState<FunnelStep>('quiz-intro');
  const [answers, setAnswers] = useState<QuizAnswers>({
    gender: null,
    painPoint: '',
    blocker: '',
    diet: '',
    timeframe: '',
    readyToStart: '',
  });
  const [leadData, setLeadData] = useState<LeadData | null>(null);

  const handleQuizComplete = (finalAnswers: QuizAnswers) => {
    setAnswers(finalAnswers);
    setStep('transition');
  };

  const handleTransitionComplete = () => {
    setStep('result-message');
  };

  const handleStartLeadCapture = () => {
    setStep('lead-capture');
  };

  const handleLeadSubmit = (data: LeadData) => {
    setLeadData(data);
    setStep('final-offer');
  };

  return (
    <div className="min-h-screen bg-black overflow-x-hidden selection:bg-gold selection:text-black">
      {/* Universal Header */}
      <header className="fixed top-0 left-0 w-full h-20 border-b border-border-medium flex items-center justify-between px-6 md:px-12 z-50 bg-bg-deep/80 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 gold-gradient flex items-center justify-center font-bold text-black text-xs md:text-sm">21</div>
          <span className="text-lg md:text-xl font-bold tracking-tighter italic uppercase">PROJETO <span className="text-gold">CHOCK</span></span>
        </div>
        <nav className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.2em] text-gray-500 font-medium">
          <span className="hover:text-gold transition-colors cursor-pointer">Diagnóstico</span>
          <span className="hover:text-gold transition-colors cursor-pointer">O Método</span>
          <span className="text-white border-b border-gold pb-1">Acesso</span>
        </nav>
        <div className="md:hidden">
          <span className="text-[10px] text-gold font-bold uppercase tracking-widest">21 Dias</span>
        </div>
      </header>

      <AnimatePresence mode="wait">
        {(step === 'quiz-intro' || step === 'quiz-questions') && (
          <motion.div
            key="quiz-main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center min-h-screen px-4 pt-20 pb-8"
          >
            <Quiz 
              onComplete={handleQuizComplete} 
              isIntro={step === 'quiz-intro'}
              onStart={() => setStep('quiz-questions')}
            />
          </motion.div>
        )}

        {step === 'transition' && (
          <motion.div key="transition" className="contents">
            <TransitionScreen 
              onComplete={handleTransitionComplete} 
            />
          </motion.div>
        )}

        {step === 'result-message' && (
          <motion.div 
            key="result-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ResultMessage 
              onContinue={handleStartLeadCapture}
            />
          </motion.div>
        )}

        {step === 'lead-capture' && (
          <motion.div 
            key="lead-capture"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <LeadCapture 
              onSubmit={handleLeadSubmit}
            />
          </motion.div>
        )}

        {step === 'final-offer' && (
          <motion.div
            key="sales"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <SalesPage answers={answers} leadData={leadData} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
