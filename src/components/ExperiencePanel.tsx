import { motion } from 'framer-motion';

const experiences =[
  {
    "role": "P.O Tech Lead | DevOps",
    "company": "SYDLE",
    "period": "2023 - o momento",
    "description": "Como P.O. Tech Lead DevOps, otimizei processos de infraestrutura e impulsionei o produto Java, elevando o DevEX. Desenvolvi uma Internal Developer Platform (IDP) que integrou autoscaling, agendamento de notificações em massa, controle de acesso AWS, Deploy e Entrega Contínua. Resultados: redução de 60% nos custos (autoscaling), 300% de aumento na taxa de deploy e 80% de ganho em tempo de execução. Implantei observabilidade robusta via OpenTelemetry com integração ao Datadog, Prometheus, New Relic, Jaeger e Grafana no ecossistema SYDLE ONE.",
    "descriptionEng": "As a P.O. Tech Lead DevOps, I optimized infrastructure processes and boosted the Java product, elevating DevEX. Developed an Internal Developer Platform (IDP) integrating autoscaling, mass notifications, AWS access control, Deploy, and CI/CD. Results: 60% cost reduction, 300% deploy rate increase, and 80% execution time gain. Implemented robust observability via OpenTelemetry with Datadog, Prometheus, New Relic, Jaeger, and Grafana integrated into SYDLE ONE."
  },
  {
    "role": "DevOps Engineer",
    "company": "SYDLE",
    "period": "maio de 2021 - fev de 2023",
    "description": "Atuei na manutenção de pipelines CI/CD utilizando a AWS para assegurar ambientes escaláveis. Participei da evolução dos principais SYBOXes (Billing, CRM e HCM) e iniciei soluções estratégicas como Gestão de Projetos e pacote de integrações AWS. Coordenei uma equipe no desenvolvimento de um SDK da Amazon para JavaScript. Gerenciei 4 projetos simultâneos em 3 empresas do grupo com foco em inovação cloud.",
    "descriptionEng": "Worked on maintaining CI/CD pipelines using AWS to ensure scalable environments. Participated in the evolution of core SYBOXes (Billing, CRM, HCM) and initiated strategic solutions such as Project Management and AWS integrations. Coordinated a team to develop an Amazon SDK for JavaScript. Managed 4 simultaneous projects across 3 group companies with a focus on cloud innovation."
  },
  {
    "role": "DevOps Engineer Trainee",
    "company": "SYDLE",
    "period": "jan de 2021 - maio de 2021",
    "description": "Responsável pelo treinamento de novos trainees e automação para infraestrutura. No DogLife: liderança na migração do sistema legado para o SYDLE ONE com frontend em Angular. No Grupo NC: entreguei mais de 2.000 serviços em apenas um mês, consolidando soluções automatizadas de alta performance.",
    "descriptionEng": "Responsible for training new trainees and infrastructure automation. At DogLife: led the legacy system migration to SYDLE ONE with an Angular frontend. At Grupo NC: delivered over 2,000 services in just one month, consolidating high-performance automated solutions."
  },
  {
    "role": "Estagiário Engenheiro de Software",
    "company": "SYDLE",
    "period": "jan de 2020 - jan de 2021",
    "description": "Desenvolvimento na plataforma SYDLE ONE, utilizando Javascript, ElasticSearch e MongoDB no back-end, e Angular, Bootstrap, HTML, CSS e Typescript no front-end para e-commerce e portais de atendimento. Adquiri forte experiência com Ansible e Git durante provisionamento de deploys e realizei suporte a hardwares/VPNs da empresa.",
    "descriptionEng": "Development on the SYDLE ONE platform, using Javascript, ElasticSearch, and MongoDB for the backend, and Angular, Bootstrap, HTML, CSS, and Typescript for frontend ecommerce and service portals. Acquired solid experience with Ansible and Git during deployment provisioning and provided hardware/VPN IT support."
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
    <h2 className="text-xl font-bold text-primary-glow mb-6">[MODULE: EXPERIENCE_LOGS]</h2>
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <div key={index} className="border-l-2 border-cyan-500/30 pl-4">
          <p className="font-bold text-white text-lg"><span className="text-primary-glow">{exp.role}</span> @ {exp.company}</p>
          <p className="text-sm text-cyan-400 mb-2">{exp.period}</p>
          <p className="text-gray-300 leading-relaxed">{exp.description}</p>
          <div className="mt-3">
            <p className="text-sm font-bold text-primary-glow mb-1">[TRANSLATION_ENG]</p>
            <p className="text-sm text-gray-400 leading-relaxed">{exp.descriptionEng}</p>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);
