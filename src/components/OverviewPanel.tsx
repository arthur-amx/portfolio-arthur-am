import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';

interface OverviewPanelProps {
  onNavigate: (module: string) => void;
}

export const OverviewPanel = ({ onNavigate }: OverviewPanelProps) => {
  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput key="welcome">Welcome to [A.A.M. OS]. Type 'help' to see available commands.</TerminalOutput>
  ]);

  const handleInput = (terminalInput: string) => {
    const newLines = [...terminalLineData];
    newLines.push(<TerminalOutput key={Date.now()}>$ {terminalInput}</TerminalOutput>);

    const [command, arg] = terminalInput.toLowerCase().split(' ').filter(Boolean);

    if (command === 'nav' && arg) {
      if (['root', 'projects', 'experience', 'contact'].includes(arg)) {
        const targetModule = arg === 'root' ? 'overview' : arg;
        onNavigate(targetModule);
        newLines.push(<TerminalOutput key={arg}>Navigating to module: [{arg.toUpperCase()}]...</TerminalOutput>);
      } else {
        newLines.push(<TerminalOutput key="nav-error">ERROR: Unknown module '{arg}'. Use 'help' to see available modules.</TerminalOutput>);
      }
    } else if (command === 'help') {
      newLines.push(<TerminalOutput key="help-1">Available commands:</TerminalOutput>);
      newLines.push(<TerminalOutput key="help-2">- nav [module]: Navigate to a system module.</TerminalOutput>);
      newLines.push(<TerminalOutput key="help-3">  Available modules: root, projects, experience, contact</TerminalOutput>);
      newLines.push(<TerminalOutput key="help-4">- clear: Clears the terminal screen.</TerminalOutput>);
    } else if (command === 'clear') {
      setTerminalLineData([
        <TerminalOutput key="welcome-clear">Welcome to [A.A.M. OS]. Type 'help' to see available commands.</TerminalOutput>
      ]);
      return;
    } else {
      newLines.push(<TerminalOutput key="error">COMMAND NOT FOUND: '{terminalInput}'. Type 'help' for a list of commands.</TerminalOutput>);
    }
    setTerminalLineData(newLines);
  };

  return (
    <motion.div
      key="overview"
      className="p-4 sm:p-8 backdrop-blur-xl bg-surface-dark/50 rounded-lg border border-cyan-500/20 space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <h2 className="text-xl font-bold text-primary-glow">[SYSTEM_ROOT/ABOUT]</h2>
        <p className="mt-2 text-gray-300">
          P.O. Tech Lead e especialista em DevOps com sólida trajetória na otimização de infraestrutura e DevEX. Atualmente cursando Engenharia de Software (PUC-MG) e formado como Tecnólogo em Redes de Computadores (CEFET-MG). Entusiasta autodidata com foco em segurança, cloud e DevSecOps, explorando ativamente tecnologias como WEB 3.0 e Blockchain.
        </p>
      </div>
      <div>
        <h2 className="text-lg font-bold text-primary-glow">[TRANSLATION_ENG]</h2>
        <p className="mt-2 text-gray-400">
          P.O. Tech Lead and DevOps specialist with a solid track record in optimizing infrastructure and DevEX. Currently studying Software Engineering (PUC-MG) and graduated as a Technologist in Computer Networks (CEFET-MG). A self-taught enthusiast focusing on security, cloud, and DevSecOps, actively exploring technologies like WEB 3.0 and Blockchain.
        </p>
      </div>
      <div className="mt-8">
         <h2 className="text-lg font-bold text-primary-glow mb-4">[COMMAND_INTERFACE]</h2>
         <Terminal 
            name="A.A.M. OS Command Interface"
            colorMode={ ColorMode.Dark } 
            onInput={ handleInput }
            prompt='[AAM-OS]$'
          >
          { terminalLineData }
        </Terminal>
      </div>
    </motion.div>
  );
};