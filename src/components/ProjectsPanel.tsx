import { motion } from 'framer-motion';

const projects = [
  {
    "name": "Internal Developer Platform (IDP) - SYDLE/LEVTY",
    "description": "Plataforma interna desenvolvida na SYDLE/LEVTY para automação completa do ciclo de vida das aplicações, integrando autoscaling, CI/CD, controle de acesso AWS e monitoramento, resultando em ganhos massivos de eficiência e redução de custos. Atuei no desenvolvimento e otimização de diversos módulos.",
    "technologies": ["Java", "Spring Boot", "AWS Lambda", "CloudFormation", "Docker", "GitLab CI", "Kubernetes", "Observability Tools"],
    "githubLink": "https://github.com/arthur-amx",
    "image": "https://media.licdn.com/dms/image/C4D0BAQFkC8xMvU5D4g/company-logo_200_200/0/1630635448665?e=1727308800&v=beta&t=xH3LqFv-9n-L_X1lB0jN5z1Y5t-B6jH0Z0Q7W7W7W7W7W7W7W7W7W7W7W7W7W7W7W7W7W7W7W7W7W7W7W7W7W7W7W"
  },
  {
    "name": "DogLife - Sistema Integrado SYDLE ONE",
    "description": "Transformação completa do website DogLife, migrando de uma plataforma Wordpress para um sistema totalmente integrado ao SYDLE ONE com frontend em Angular. Inclui a gestão de clientes, agendamentos, estoque e serviços de pet shop. Fui responsável pela concepção, desenvolvimento e integração do sistema, garantindo uma experiência do usuário fluida e eficiente.",
    "technologies": ["Angular", "SYDLE ONE Platform", "Java", "REST APIs", "PostgreSQL", "HTML", "CSS", "JavaScript"],
    "githubLink": "https://github.com/arthur-amx",
    "image": "https://www.doglife.com.br/wp-content/uploads/2021/06/logo-doglife.png"
  },
  {
    "name": "McDonald's Self-Service Tablet - JavaFX",
    "description": "Projeto pessoal de um sistema self-service para tablets do McDonald's, desenvolvido em JavaFX. Simula o processo de gerenciamento de pedidos, incluindo exclusão, cadastro, edição e visualização de produtos. O objetivo é criar uma interface intuitiva e funcional para otimizar a experiência do cliente.",
    "technologies": ["Java", "JavaFX", "FXML", "CSS"],
    "githubLink": "https://github.com/arthur-amx/McDonalds-self-service-tablet-JavaFX",
    "image": "/path/to/mcdonalds_self_service_cover.png"
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
    <h2 className="text-xl font-bold text-primary-glow">[MODULE: PROJECTS_ARCHIVE]</h2>
    <div className="mt-4 space-y-8">
      {projects.map((proj, index) => (
        <div key={index} className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold text-white">{proj.name}</h3>
            <p className="mt-1 text-gray-300">{proj.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {proj.technologies.map(tech => <span key={tech} className="bg-surface-dark px-2 py-1 text-xs rounded text-primary-glow">{tech}</span>)}
            </div>
            <a href={proj.githubLink} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline mt-3 inline-block">Ver Repositório &rarr;</a>
          </div>
          <div className="md:col-span-1 flex items-center">
            {/* <img src={proj.image} alt={proj.name} className="rounded-lg border border-cyan-500/20" /> */}
            <div className="w-full h-32 bg-surface-dark rounded-lg border border-cyan-500/20 flex items-center justify-center">
                <p className="text-gray-500">_imagem_ou_gif.mov</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);