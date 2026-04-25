/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type FunnelStep = 
  | 'quiz-intro' 
  | 'quiz-questions' 
  | 'transition' 
  | 'result-message' 
  | 'lead-capture' 
  | 'final-offer';

export type Gender = 'male' | 'female' | null;

export interface QuizAnswers {
  gender: Gender;
  painPoint: string;
  blocker: string;
  diet: string;
  timeframe: string;
  readyToStart: string;
}

export interface LeadData {
  fullName: string;
  email: string;
  whatsapp: string;
  cpf: string;
}

export const CONTENT = {
  quiz: {
    intro: {
      title: "Descubra em menos de 30 segundos o que está travando sua transformação.",
      subtitle: "Responda e veja a melhor rota para seu momento atual.",
      button: "COMEÇAR"
    },
    gender: {
      title: "Para começarmos, qual o seu gênero?",
      options: [
        { label: "Sou Homem", value: "male" },
        { label: "Sou Mulher", value: "female" }
      ]
    },
    questions: {
      male: [
        {
          id: 'pain',
          title: "O que mais te incomoda hoje?",
          options: ["Barriga aumentando", "Falta de definição", "Pouca energia", "Aparência largada", "Falta de confiança"]
        },
        {
          id: 'block',
          title: "O que mais tem te travado?",
          options: ["Falta disciplina", "Alimentação ruim", "Sedentarismo", "Sem tempo", "Começo e paro"]
        },
        {
          id: 'diet',
          title: "Como está sua alimentação hoje?",
          options: ["Totalmente desregulada", "Tento melhorar e falho", "Mais ou menos", "Boa, mas sem resultado", "Precisa mudar urgente"]
        },
        {
          id: 'time',
          title: "Em quanto tempo você gostaria de começar a notar diferença?",
          options: ["7 dias", "21 dias", "30 dias", "O quanto antes"]
        },
        {
          id: 'ready',
          title: "Se existisse um plano simples e guiado, você começaria hoje?",
          options: ["Sim, agora", "Sim, preciso disso", "Talvez", "Quero conhecer"]
        }
      ],
      female: [
        {
          id: 'pain',
          title: "O que mais afeta sua autoestima hoje?",
          options: ["Barriga inchada", "Roupa apertando", "Corpo parado", "Não gosto do espelho", "Me sinto travada"]
        },
        {
          id: 'block',
          title: "O que mais tem te travado?",
          options: ["Ansiedade", "Alimentação desregulada", "Falta constância", "Falta tempo", "Começo e paro"]
        },
        {
          id: 'diet',
          title: "Como está sua alimentação hoje?",
          options: ["Totalmente desregulada", "Tento melhorar e falho", "Mais ou menos", "Boa, mas sem resultado", "Precisa mudar urgente"]
        },
        {
          id: 'time',
          title: "Em quanto tempo você gostaria de começar a notar diferença?",
          options: ["7 dias", "21 dias", "30 dias", "O quanto antes"]
        },
        {
          id: 'ready',
          title: "Se existisse um plano simples e guiado, você começaria hoje?",
          options: ["Sim, agora", "Sim, preciso disso", "Talvez", "Quero conhecer"]
        }
      ]
    }
  },
  result: {
    message: "Identificamos que você não precisa de mais uma tentativa aleatória. Você precisa de direção, rotina e constância.",
    complement: "O PROJETO CHOCK 21 foi criado para pessoas que querem sair do ciclo de começar e parar, com método simples e aplicável.",
    button: "ENTRAR NO PROJETO CHOCK 21"
  },
  lead: {
    title: "Falta pouco para começar sua virada.",
    disclaimer: "Seus dados são protegidos e usados apenas para liberar acesso e confirmação da compra.",
    button: "CONTINUAR PARA OFERTA"
  },
  offer: {
    headline: "COMECE HOJE SUA NOVA ROTINA.",
    subheadline: "Acesso imediato ao método Projeto Chock 21 + comunidade fechada.",
    price: {
      from: "97",
      to: "19,90"
    },
    features: [
      "Ebook passo a passo",
      "Plano inicial de 21 dias",
      "Estratégia alimentar prática",
      "Treinos simples",
      "Comunidade motivacional",
      "Checklist diário"
    ],
    guarantee: "7 dias para conhecer o conteúdo.",
    cta: "QUERO MEU ACESSO AGORA"
  }
};
