import { motion } from 'framer-motion';
import sydleImage from '../assets/images/sydle.png';
import doglifeImage from '../assets/images/doglife.png';
import mcJavaFXImage from '../assets/images/mcJavaFX.png';
import creatorBRImage from '../assets/images/creatorbr.png';
import connectSportsImage from '../assets/images/connectsports.png';
import aliaMobiImage from '../assets/images/aliamobi.png';
import yaswheelImage from '../assets/images/yaswheel.png';
import vaigoImage from '../assets/images/vaigo.svg';

interface Project {
  name: string;
  description: string;
  descriptionEng: string;
  technologies: string[];
  githubLink?: string;
  siteLink?: string;
  image: string;
}

const projects: Project[] = [
  {
    name: "Internal Developer Platform (IDP) - SYDLE/LEVTY",
    description: "Plataforma interna desenvolvida na SYDLE/LEVTY para automação completa do ciclo de vida das aplicações, integrando autoscaling, CI/CD, controle de acesso AWS e monitoramento, resultando em ganhos massivos de eficiência e redução de custos.",
    descriptionEng: "Internal platform developed at SYDLE/LEVTY for full application lifecycle automation, integrating autoscaling, CI/CD, AWS access control, and monitoring, resulting in massive efficiency gains and cost reduction.",
    technologies: ["Java", "Spring Boot", "AWS Lambda", "CloudFormation", "Docker", "GitLab CI", "Kubernetes", "Observability Tools"],
    githubLink: "https://github.com/arthur-amx",
    image: sydleImage
  },
  {
    name: "DogLife - Sistema Integrado SYDLE ONE",
    description: "Transformação completa do website DogLife, migrando de uma plataforma Wordpress para um sistema totalmente integrado ao SYDLE ONE com frontend em Angular. Inclui a gestão de clientes, agendamentos, estoque e serviços de pet shop.",
    descriptionEng: "Complete transformation of the DogLife website, migrating from a WordPress platform to a fully integrated system in SYDLE ONE with an Angular frontend. Includes customer management, scheduling, inventory, and pet shop services.",
    technologies: ["Angular", "SYDLE ONE Platform", "Java", "REST APIs", "PostgreSQL", "HTML", "CSS", "JavaScript"],
    siteLink: "https://www.doglife.com.br/",
    image: doglifeImage
  },
  {
    name: "McDonald's Self-Service Tablet - JavaFX",
    description: "Projeto pessoal de um sistema self-service para tablets do McDonald's, desenvolvido em JavaFX. Simula o processo de gerenciamento de pedidos, incluindo exclusão, cadastro, edição e visualização de produtos.",
    descriptionEng: "Personal project of a self-service system for McDonald's tablets, developed in JavaFX. Simulates the order management process, including deletion, registration, editing, and viewing of products.",
    technologies: ["Java", "JavaFX", "FXML", "CSS"],
    githubLink: "https://github.com/arthur-amx/McDonalds-Self-Service-Kiosk-JavaFX",
    image: mcJavaFXImage
  },
  {
    name: "CreatorBR - Geração de Skins Roblox com IA",
    description: "Plataforma SaaS que democratiza a criação de skins no Roblox para o mercado brasileiro — basta escrever um prompt em português. A IA gera, valida e publica automaticamente no Marketplace, com o usuário ficando com 100% dos royalties.",
    descriptionEng: "SaaS platform democratizing Roblox skin creation for the Brazilian market — just write a prompt in Portuguese. The AI generates, validates, and automatically publishes to the Marketplace, with the user keeping 100% of royalties.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI DALL-E 3", "Roblox Open Cloud API", "PostgreSQL"],
    githubLink: "https://github.com/arthur-amx/roblox-creator-br",
    siteLink: "https://roblox-creator-aloj6ge93-arthur-amxs-projects.vercel.app",
    image: creatorBRImage
  },
  {
    name: "Connect Sports - App de Assessoria Esportiva",
    description: "Aplicativo mobile que conecta atletas e personal trainers numa plataforma completa — gestão de treinos, notificações push em tempo real e painel web para treinadores acompanharem toda a carteira de alunos.",
    descriptionEng: "Mobile app connecting athletes and personal trainers in a complete platform — workout management, real-time push notifications, and a web panel for trainers to track their entire client portfolio.",
    technologies: ["Flutter", "Node.js", "Express", "PostgreSQL", "RabbitMQ", "OneSignal", "Docker"],
    githubLink: "https://github.com/arthur-amx/connect-sports",
    siteLink: "https://connect-sports-otfr7ycso-arthur-amxs-projects.vercel.app",
    image: connectSportsImage
  },
  {
    name: "Alia.mobi - Gestão de Locadoras pelo WhatsApp",
    description: "Plataforma SaaS multi-tenant para gestão de locadoras de veículos com agente de IA no WhatsApp (Gemini). Automatiza cobranças semanais, vistorias fotográficas com IA, cadastro de motoristas e atendimento 24/7 — sem app para instalar.",
    descriptionEng: "Multi-tenant SaaS platform for vehicle rental management with a WhatsApp AI agent (Gemini). Automates weekly billing, AI-powered photo inspections, driver registration, and 24/7 customer service — no app required.",
    technologies: ["Next.js", "Spring Boot", "PostgreSQL", "Gemini AI", "WhatsApp Cloud API", "Docker"],
    siteLink: "https://alia-mobi-8nmmorddf-arthur-amxs-projects.vercel.app",
    image: aliaMobiImage
  },
  {
    name: "YasWheel Coin - Memecoin na Solana",
    description: "Site informativo e promocional do memecoin YasWheel (Y$W) na rede Solana, lançado via protocolo PumpFun. Apresenta tokenomics com gráficos interativos, guia de compra e links para a comunidade. Ponto de partida para o outsmart-cli.",
    descriptionEng: "Informational and promotional site for the YasWheel memecoin (Y$W) on the Solana network, launched via the PumpFun protocol. Features interactive tokenomics charts, a buying guide, and community links. Starting point for outsmart-cli.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Google Charts", "Solana", "PumpFun"],
    siteLink: "https://yaswheel-coin.vercel.app",
    image: yaswheelImage
  },
  {
    name: "Vaigo - Plataforma SaaS de CRM & Chatbots com IA",
    description: "Plataforma SaaS que unifica CRM, automação de vendas e chatbots com IA em produto único. Captura leads via Meta Ads, qualifica via WhatsApp com GPT-4, e converte com fluxo de Cash on Delivery — tudo gerenciado num builder low-code drag-and-drop.",
    descriptionEng: "SaaS platform unifying CRM, sales automation, and AI chatbots in a single product. Captures leads via Meta Ads, qualifies via WhatsApp with GPT-4, and converts with a Cash on Delivery flow — all managed in a low-code drag-and-drop builder.",
    technologies: ["Python", "Django", "React", "TypeScript", "OpenAI GPT-4", "WhatsApp Business API", "Meta Graph API", "AWS"],
    githubLink: "https://github.com/arthur-amx/vaigo",
    image: vaigoImage
  }
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
              {proj.technologies.map(tech => (
                <span key={tech} className="bg-surface-dark px-2 py-1 text-xs rounded text-primary-glow border border-cyan-500/20">{tech}</span>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-4">
              {proj.siteLink && (
                <a href={proj.siteLink} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-white transition-colors hover:underline font-bold">
                  Ver Site &rarr;
                </a>
              )}
              {proj.githubLink && (
                <a href={proj.githubLink} target="_blank" rel="noopener noreferrer" className="text-cyan-400/70 hover:text-white transition-colors hover:underline font-bold">
                  Ver Repositório &rarr;
                </a>
              )}
            </div>
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
