/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { QuizAnswers, CONTENT } from '../types';
import { ChevronRight, ArrowRight } from 'lucide-react';

interface QuizProps {
  onComplete: (answers: QuizAnswers) => void;
  isIntro: boolean;
  onStart: () => void;
}

export default function Quiz({ onComplete, isIntro, onStart }: QuizProps) {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({
    gender: null,
    painPoint: '',
    blocker: '',
    diet: '',
    timeframe: '',
    readyToStart: '',
  });

  const handleGenderSelect = (gender: 'male' | 'female') => {
    setAnswers(prev => ({ ...prev, gender }));
  };

  const handleOptionSelect = (option: string) => {
    if (!answers.gender) return;
    
    const questions = CONTENT.quiz.questions[answers.gender];
    const currentQuestionId = questions[currentQuestionIdx].id;
    
    const newAnswers = { ...answers };
    if (currentQuestionId === 'pain') newAnswers.painPoint = option;
    if (currentQuestionId === 'block') newAnswers.blocker = option;
    if (currentQuestionId === 'diet') newAnswers.diet = option;
    if (currentQuestionId === 'time') newAnswers.timeframe = option;
    if (currentQuestionId === 'ready') newAnswers.readyToStart = option;
    
    setAnswers(newAnswers);

    if (currentQuestionIdx < questions.length - 1) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  if (isIntro) {
    return (
      <motion.div
        key="quiz-intro"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="w-full max-w-2xl mx-auto text-center px-4"
      >
        <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight font-medium">
          {CONTENT.quiz.intro.title}
        </h2>
        <p className="text-gray-400 mb-10 font-light tracking-wide text-lg md:text-xl">
          {CONTENT.quiz.intro.subtitle}
        </p>
        <button
          onClick={onStart}
          className="group relative inline-flex items-center gap-3 gold-gradient text-black font-extrabold px-12 py-6 rounded-full shadow-2xl shadow-gold/20 hover:scale-105 active:scale-95 transition-all text-xl tracking-tight uppercase"
        >
          {CONTENT.quiz.intro.button}
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    );
  }

  // Gender Selection Step
  if (!answers.gender) {
    return (
      <div className="w-full max-w-lg mx-auto">
        <motion.div
          key="gender-selection"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-bg-card p-10 border border-border-bold"
        >
          <div className="mb-8 text-left">
            <span className="text-[10px] text-gold font-bold uppercase tracking-[0.3em]">Passo 01 / 06</span>
            <h2 className="text-2xl md:text-3xl font-light mt-2 leading-tight">
              {CONTENT.quiz.gender.title}
            </h2>
            <p className="text-gray-500 text-sm mt-4">Personalize sua experiência para resultados mais precisos.</p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {CONTENT.quiz.gender.options.map((option) => (
              <QuizButton key={option.value} onClick={() => handleGenderSelect(option.value as 'male' | 'female')}>
                <span className="uppercase tracking-widest text-xs group-hover:text-gold">{option.label}</span>
                <div className="w-2 h-2 rounded-full border border-gold group-hover:bg-gold transition-colors"></div>
              </QuizButton>
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  const currentQuestion = CONTENT.quiz.questions[answers.gender][currentQuestionIdx];
  const totalQuestions = CONTENT.quiz.questions[answers.gender].length;
  const progressPercent = ((currentQuestionIdx + 1) / totalQuestions) * 100;

  return (
    <div className="w-full max-w-lg mx-auto">
      <motion.div
        key={currentQuestionIdx}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="bg-bg-card p-10 border border-border-bold"
      >
        <div className="mb-8 text-left">
          <span className="text-[10px] text-gold font-bold uppercase tracking-[0.3em]">Questão {currentQuestionIdx + 2} / {totalQuestions + 1}</span>
          <h2 className="text-2xl md:text-3xl font-light mt-2 leading-tight">
            {currentQuestion.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {currentQuestion.options.map((option) => (
            <QuizButton key={option} onClick={() => handleOptionSelect(option)}>
              <span className="uppercase tracking-widest text-xs group-hover:text-gold">{option}</span>
              <div className="w-2 h-2 rounded-full border border-gold group-hover:bg-gold transition-colors"></div>
            </QuizButton>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border-subtle flex items-center gap-4">
          <div className="h-1 flex-1 bg-white/5 overflow-hidden">
            <motion.div 
              className="h-full bg-gold"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
            />
          </div>
          <p className="text-[10px] text-gray-500 uppercase tracking-wider">{Math.round(progressPercent)}% concluído</p>
        </div>
      </motion.div>
    </div>
  );
}

function QuizButton({ children, onClick }: { children: React.ReactNode; onClick: () => void; key?: string }) {
  return (
    <button
      onClick={onClick}
      className="geometric-btn group"
    >
      {children}
    </button>
  );
}
