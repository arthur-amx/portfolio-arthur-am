import { motion } from 'framer-motion';
import sydleImage from '../assets/images/sydle.png';
import doglifeImage from '../assets/images/doglife.png';
import mcJavaFXImage from '../assets/images/mcJavaFX.png';

const projects =[
  {
    "name": "Internal Developer Platform (IDP) - SYDLE/LEVTY",
    "description": "Plataforma interna desenvolvida na SYDLE/LEVTY para automação completa do ciclo de vida das aplicações, integrando autoscaling, CI/CD, controle de acesso AWS e monitoramento, resultando em ganhos massivos de eficiência e redução de custos.",
    "descriptionEng": "Internal platform developed at SYDLE/LEVTY for full application lifecycle automation, integrating autoscaling, CI/CD, AWS access control, and monitoring, resulting in massive efficiency gains and cost reduction.",
    "technologies":["Java", "Spring Boot", "AWS Lambda", "CloudFormation", "Docker", "GitLab CI", "Kubernetes", "Observability Tools"],
    "githubLink": "https://github.com/arthur-amx",
    "image": sydleImage
  },
  {
    "name": "DogLife - Sistema Integrado SYDLE ONE",
    "description": "Transformação completa do website DogLife, migrando de uma plataforma Wordpress para um sistema totalmente integrado ao SYDLE ONE com frontend em Angular. Inclui a gestão de clientes, agendamentos, estoque e serviços de pet shop.",
    "descriptionEng": "Complete transformation of the DogLife website, migrating from a WordPress platform to a fully integrated system in SYDLE ONE with an Angular frontend. Includes customer management, scheduling, inventory, and pet shop services.",
    "technologies":["Angular", "SYDLE ONE Platform", "Java", "REST APIs", "PostgreSQL", "HTML", "CSS", "JavaScript"],
    "githubLink": "https://www.doglife.com.br/",
    "image": doglifeImage
  },
  {
    "name": "McDonald's Self-Service Tablet - JavaFX",
    "description": "Projeto pessoal de um sistema self-service para tablets do McDonald's, desenvolvido em JavaFX. Simula o processo de gerenciamento de pedidos, incluindo exclusão, cadastro, edição e visualização de produtos.",
    "descriptionEng": "Personal project of a self-service system for McDonald's tablets, developed in JavaFX. Simulates the order management process, including deletion, registration, editing, and viewing of products.",
    "technologies": ["Java", "JavaFX", "FXML", "CSS"],
    "githubLink": "https://github.com/arthur-amx/McDonalds-self-service-tablet-JavaFX",
    "image": mcJavaFXImage
  }
]

export const ProjectsPanel = () => (
  <motion.div
    key="projects"
    className="p-4 sm:p-8 backdrop-blur-xl bg-surface-dark/50 rounded-lg border border-cyan-500/20"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    <h2 className="text-xl font-bold text-primary-glow mb-6">[MODULE: PROJECTS_ARCHIVE]</h2>
    <div className="space-y-12">
      {projects.map((proj, index) => (
        <div key={index} className="grid md:grid-cols-3 gap-6 items-center border-l-2 border-cyan-500/30 pl-4">
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold text-white">{proj.name}</h3>
            
            <p className="mt-2 text-gray-300">{proj.description}</p>
            <div className="mt-2 mb-4">
              <p className="text-xs font-bold text-primary-glow mb-1">[TRANSLATION_ENG]</p>
              <p className="text-sm text-gray-400">{proj.descriptionEng}</p>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {proj.technologies.map(tech => <span key={tech} className="bg-surface-dark px-2 py-1 text-xs rounded text-primary-glow border border-cyan-500/20">{tech}</span>)}
            </div>
            <a href={proj.githubLink} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-white transition-colors hover:underline mt-4 inline-block font-bold">Ver Repositório &rarr;</a>
          </div>
          <div className="md:col-span-1">
            <div className="w-full rounded-lg border border-cyan-500/20 overflow-hidden shadow-lg shadow-cyan-500/10">
               <img src={proj.image} alt={proj.name} className="w-full h-auto" />
            </div>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);
