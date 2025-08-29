import { motion } from 'framer-motion';

const experiences = [
  {
    "role": "P.O Tech Lead | DevOps",
    "company": "SYDLE",
    "period": "2023 - Presente",
    "description": "Como P.O. Tech Lead DevOps, otimizei processos de infraestrutura e impulsionei o produto Java, elevando o DevEX e entregando resultados impactantes. Desenvolvi uma Internal Developer Platform (IDP) para automação do ciclo de vida das aplicações, integrando autoscaling, CI/CD e monitoramento. Fui responsável pela concepção e desenvolvimento de um sistema de billing em larga escala e conduzi a entrega de mais de 2.000 serviços em um mês no Grupo NC através de uma solução automatizada."
  },
  {
    "role": "DevOps Engineer",
    "company": "SYDLE",
    "period": "janeiro de 2021 - 2023",
    "description": "Atuei como o principal desenvolvedor na criação da Internal Developer Platform (IDP), focada em automação de infraestrutura e esteiras de CI/CD. Fui responsável pela arquitetura e desenvolvimento de microsserviços e soluções serverless na AWS, utilizando tecnologias como AWS Lambda, CloudFormation, e Docker. Otimizei o ciclo de vida das aplicações e implementei soluções de autoscaling, resultando em ganhos de eficiência e redução de custos."
  },
  {
    "role": "Estagiário Engenheiro de Software",
    "company": "SYDLE",
    "period": "janeiro de 2020 - janeiro de 2021",
    "description": "Atuei no desenvolvimento na plataforma SYDLE ONE, utilizando Javascript, ElasticSearch e MongoDB para o back-end. Para aplicações front-end, como portais de atendimento e sites de e-commerce, utilizei Angular, Bootstrap, HTML, CSS e Typescript. Tive também uma breve passagem pelo setor de suporte, atendendo a demandas de usabilidade e desenvolvimento, além de realizar a manutenção de hardware e software da empresa. Adquiri experiência com Ansible e Git em diversos deploys."
  }
]

export const ExperiencePanel = () => (
  <motion.div
    key="experience"
    className="p-4 sm:p-8 backdrop-blur-xl bg-surface-dark/50 rounded-lg border border-cyan-500/20"
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