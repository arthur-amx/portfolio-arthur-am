import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Internal Developer Platform (IDP)',
    description: 'Plataforma interna desenvolvida na SYDLE para automação completa do ciclo de vida das aplicações, integrando autoscaling, CI/CD, controle de acesso AWS e monitoramento, resultando em ganhos massivos de eficiência e redução de custos.',
    technologies: ['Java', 'AWS Lambda', 'CloudFormation', 'Docker', 'GitLab CI'],
    githubLink: '#', // Coloque o link do seu GitHub aqui, se for público
    image: '/path/to/your/image.gif' // Coloque um caminho para uma imagem ou GIF
  },
];

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