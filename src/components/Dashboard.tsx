import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// 1. Importando todos os painéis de conteúdo
import { OverviewPanel } from './OverviewPanel';
import { ProjectsPanel } from './ProjectsPanel';
import { ExperiencePanel } from './ExperiencePanel';
import { ContactPanel } from './ContactPanel';

export const Dashboard = () => {
  // 2. Estado para controlar qual módulo está ativo. Inicia com 'overview'.
  const [activeModule, setActiveModule] = useState('overview');

  // 3. Função que decide qual componente renderizar com base no estado
  const renderModule = () => {
    switch (activeModule) {
      case 'projects':
        return <ProjectsPanel />;
      case 'experience':
        return <ExperiencePanel />;
      case 'contact':
        return <ContactPanel />;
      default: // 'overview' é o padrão
        return <OverviewPanel />;
    }
  };

  // Helper para estilizar o botão ativo
  const getNavStyle = (moduleName: string) => {
    return activeModule === moduleName
      ? 'text-primary-glow' // Estilo para o botão ativo
      : 'text-gray-400 hover:text-primary-glow'; // Estilo para os inativos
  };

  return (
    <main className="flex flex-1 p-4 md:p-8 gap-8 overflow-y-auto">
      {/* Navegação Lateral */}
      <nav className="flex flex-col gap-4 p-4 border-r border-cyan-500/20">
        <button 
          onClick={() => setActiveModule('overview')} 
          className={`text-left font-bold transition-colors ${getNavStyle('overview')}`}
        >
          [ROOT]
        </button>
        <button 
          onClick={() => setActiveModule('projects')} 
          className={`text-left font-bold transition-colors ${getNavStyle('projects')}`}
        >
          [PROJECTS_ARCHIVE]
        </button>
        <button 
          onClick={() => setActiveModule('experience')} 
          className={`text-left font-bold transition-colors ${getNavStyle('experience')}`}
        >
          [EXPERIENCE_LOGS]
        </button>
        <button 
          onClick={() => setActiveModule('contact')} 
          className={`text-left font-bold transition-colors ${getNavStyle('contact')}`}
        >
          [COMMS_CHANNEL]
        </button>
      </nav>

      {/* Área de Conteúdo Dinâmico */}
      <div className="flex-1">
        {/* 4. AnimatePresence garante transições suaves ao trocar de módulo */}
        <AnimatePresence mode="wait">
          {renderModule()}
        </AnimatePresence>
      </div>
    </main>
  );
};