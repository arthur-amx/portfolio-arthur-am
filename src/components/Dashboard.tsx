import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon } from 'lucide-react';

import { OverviewPanel } from './OverviewPanel';
import { ProjectsPanel } from './ProjectsPanel';
import { ExperiencePanel } from './ExperiencePanel';
import { ContactPanel } from './ContactPanel';
import { GlobalTerminal } from './GlobalTerminal';

export const Dashboard = () => {
  const [activeModule, setActiveModule] = useState('overview');
  const[isTerminalOpen, setIsTerminalOpen] = useState(false);

  // Escuta os atalhos de teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 1. Esc para fechar o terminal (Somente se o terminal estiver aberto)
      if (e.key === 'Escape' && isTerminalOpen) {
        e.preventDefault();
        setIsTerminalOpen(false);
        return;
      }

      // Impede ativar as próximas hotkeys ao digitar em inputs fora do terminal
      if (!isTerminalOpen && ['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;
      
      // 2. Atalho Linux: Ctrl + Alt + T
      if (e.ctrlKey && e.altKey && e.key.toLowerCase() === 't') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
        return;
      }
      
      // 3. Atalho Alternativo: Crase (`)
      if (e.key === '`' || e.key === "'") {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTerminalOpen]);

  const handleNavigation = (moduleName: string) => {
    if (['overview', 'projects', 'experience', 'contact'].includes(moduleName)) {
      setActiveModule(moduleName);
    }
  };

  const getNavStyle = (moduleName: string) => {
    return activeModule === moduleName
      ? 'text-primary-glow'
      : 'text-gray-400 hover:text-primary-glow';
  };

  const renderModule = () => {
    switch (activeModule) {
      case 'overview': return <OverviewPanel key="overview" />;
      case 'projects': return <ProjectsPanel key="projects" />;
      case 'experience': return <ExperiencePanel key="experience" />;
      case 'contact': return <ContactPanel key="contact" />;
      default: return <OverviewPanel key="overview" />;
    }
  };

  return (
    <>
      <main className="flex flex-col md:flex-row flex-1 p-4 md:p-8 gap-4 md:gap-8 overflow-y-auto">
        <nav className="flex flex-row md:flex-col justify-around md:justify-start gap-4 p-4 border-b md:border-b-0 md:border-r border-cyan-500/20 md:min-w-[200px]">
          <button onClick={() => setActiveModule('overview')} className={`text-center md:text-left font-bold transition-colors ${getNavStyle('overview')}`}>[ROOT]</button>
          <button onClick={() => setActiveModule('projects')} className={`text-center md:text-left font-bold transition-colors ${getNavStyle('projects')}`}>[PROJECTS_ARCHIVE]</button>
          <button onClick={() => setActiveModule('experience')} className={`text-center md:text-left font-bold transition-colors ${getNavStyle('experience')}`}>[EXPERIENCE_LOGS]</button>
          <button onClick={() => setActiveModule('contact')} className={`text-center md:text-left font-bold transition-colors ${getNavStyle('contact')}`}>[COMMS_CHANNEL]</button>
        </nav>

        <div className="flex-1 flex flex-col gap-8 pb-20">
          <AnimatePresence mode="wait">
            {renderModule()}
          </AnimatePresence>
        </div>
      </main>

      {/* Janela de Terminal Flutuante e Arrastável */}
      <GlobalTerminal 
        isOpen={isTerminalOpen} 
        onClose={() => setIsTerminalOpen(false)} 
        onNavigate={handleNavigation} 
      />

      {/* Botão Flutuante (agora funciona 100% de forma independente, sem ofuscar a tela toda) */}
      <button 
        onClick={() => setIsTerminalOpen(!isTerminalOpen)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 bg-surface-dark border border-cyan-500/50 rounded-full text-primary-glow hover:bg-cyan-500/10 hover:border-cyan-400 transition-all shadow-lg shadow-cyan-500/20 font-mono text-sm group"
        title="Pressione Ctrl + Alt + T para alternar"
      >
        <TerminalIcon size={18} className="group-hover:animate-pulse" />
        <span className="hidden sm:inline font-bold">[&gt;_ TERMINAL]</span>
      </button>
    </>
  );
};
