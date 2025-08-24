// src/components/ExperiencePanel.tsx
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'P.O. Tech Lead',
    company: 'SYDLE',
    period: '2023 - Presente',
    description: 'Liderança técnica DevOps, otimização de infraestrutura e DevEX. Desenvolvimento de uma Internal Developer Platform (IDP) com autoscaling e CI/CD. Resultados: -60% de custos, +300% em taxa de deploy, +80% em tempo de execução.'
  },
  {
    role: 'DevOps Engineer',
    company: 'SYDLE',
    period: '2021 - 2023',
    description: 'Desenvolvimento e manutenção de pipelines CI/CD em AWS. Colaboração na evolução dos SYBOXes (Billing, CRM, HCM) e coordenação do desenvolvimento de um SDK da Amazon para JavaScript.'
  },
  // Adicione outras experiências aqui...
];

export const ExperiencePanel = () => (
  <motion.div
    key="experience"
    className="p-8 backdrop-blur-xl bg-surface-dark/50 rounded-lg border border-cyan-500/20"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    <h2 className="text-xl font-bold text-primary-glow">[MODULE: EXPERIENCE_LOGS]</h2>
    <div className="mt-4 space-y-6">
      {experiences.map((exp, index) => (
        <div key={index}>
          <p className="font-bold text-white"><span className="text-primary-glow">{exp.role}</span> @ {exp.company}</p>
          <p className="text-sm text-gray-400">{exp.period}</p>
          <p className="mt-1 text-gray-300">{exp.description}</p>
        </div>
      ))}
    </div>
  </motion.div>
);