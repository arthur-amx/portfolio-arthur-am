import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { OverviewPanel } from './OverviewPanel';
import { ProjectsPanel } from './ProjectsPanel';
import { ExperiencePanel } from './ExperiencePanel';
import { ContactPanel } from './ContactPanel';

export const Dashboard = () => {
  const [activeModule, setActiveModule] = useState('overview');

  const renderModule = () => {
    switch (activeModule) {
      case 'projects':
        return <ProjectsPanel />;
      case 'experience':
        return <ExperiencePanel />;
      case 'contact':
        return <ContactPanel />;
      default:
        return <OverviewPanel />;
    }
  };

  const getNavStyle = (moduleName: string) => {
    return activeModule === moduleName
      ? 'text-primary-glow'
      : 'text-gray-400 hover:text-primary-glow';
  };

  return (
    <main className="flex flex-col md:flex-row flex-1 p-4 md:p-8 gap-4 md:gap-8 overflow-y-auto">
      <nav className="flex flex-row md:flex-col justify-around md:justify-start gap-4 p-4 border-b md:border-b-0 md:border-r border-cyan-500/20">
        <button
          onClick={() => setActiveModule('overview')}
          className={`text-center md:text-left font-bold transition-colors ${getNavStyle('overview')}`}
        >
          [ROOT]
        </button>
        <button
          onClick={() => setActiveModule('projects')}
          className={`text-center md:text-left font-bold transition-colors ${getNavStyle('projects')}`}
        >
          [PROJECTS_ARCHIVE]
        </button>
        <button
          onClick={() => setActiveModule('experience')}
          className={`text-center md:text-left font-bold transition-colors ${getNavStyle('experience')}`}
        >
          [EXPERIENCE_LOGS]
        </button>
        <button
          onClick={() => setActiveModule('contact')}
          className={`text-center md:text-left font-bold transition-colors ${getNavStyle('contact')}`}
        >
          [COMMS_CHANNEL]
        </button>
      </nav>
      <div className="flex-1">
        <AnimatePresence mode="wait">
          {renderModule()}
        </AnimatePresence>
      </div>
    </main>
  );
};