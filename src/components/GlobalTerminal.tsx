import { motion, AnimatePresence, useDragControls, useMotionValue } from 'framer-motion';
import { useState, useEffect, useRef, type ReactNode } from 'react';
import { X, Minus, Square } from 'lucide-react';

interface GlobalTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (module: string) => void;
}

interface HistoryItem {
  id: number;
  type: 'input' | 'output' | 'error' | 'system';
  content: ReactNode;
}

export const GlobalTerminal = ({ isOpen, onClose, onNavigate }: GlobalTerminalProps) => {
  const [history, setHistory] = useState<HistoryItem[]>([
    { id: 1, type: 'system', content: "Welcome to[A.A.M. OS]. Type 'help' to see available commands." }
  ]);
  const [inputValue, setInputValue] = useState('');
  
  // Controles de Janela
  const dragControls = useDragControls();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isMaximized, setIsMaximized] = useState(false);
  const[isMinimized, setIsMinimized] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Foca no input sempre que o terminal abrir ou restaurar
  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, isMinimized]);

  // Rola para o final quando o histórico atualiza
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Reseta os estados de janela se for fechada
  useEffect(() => {
    if (!isOpen) {
      setIsMaximized(false);
      setIsMinimized(false);
      x.set(0);
      y.set(0);
    }
  }, [isOpen, x, y]);

  const toggleMaximize = () => {
    if (!isMaximized) {
      // Reseta o arrasto antes de maximizar
      x.set(0);
      y.set(0);
    }
    setIsMaximized(!isMaximized);
    setIsMinimized(false); // Garante que não está minimizado
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const command = inputValue.trim().toLowerCase();
    const newHistory =[...history, { id: Date.now(), type: 'input' as const, content: inputValue }];
    
    setInputValue('');

    let outputContent: ReactNode = '';
    let type: 'output' | 'error' | 'system' = 'output';

    switch (command) {
      case 'help':
        outputContent = (
          <div className="flex flex-col gap-1 mt-1">
            <span className="text-cyan-400">Available commands:</span>
            <span>&nbsp;&nbsp;root&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Navigate to the main page.</span>
            <span>&nbsp;&nbsp;projects&nbsp;&nbsp;&nbsp;- View project archives.</span>
            <span>&nbsp;&nbsp;experience&nbsp;- Access experience logs.</span>
            <span>&nbsp;&nbsp;contact&nbsp;&nbsp;&nbsp;&nbsp;- Open communication channel.</span>
            <span>&nbsp;&nbsp;clear&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Clear the terminal screen.</span>
            <span>&nbsp;&nbsp;exit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Close the terminal.</span>
          </div>
        );
        break;
      case 'root':
        onNavigate('overview');
        outputContent = 'Navigating to module:[ROOT]...';
        break;
      case 'projects':
        onNavigate('projects');
        outputContent = 'Navigating to module: [PROJECTS_ARCHIVE]...';
        break;
      case 'experience':
        onNavigate('experience');
        outputContent = 'Navigating to module:[EXPERIENCE_LOGS]...';
        break;
      case 'contact':
        onNavigate('contact');
        outputContent = 'Navigating to module: [COMMS_CHANNEL]...';
        break;
      case 'clear':
        setHistory([{ id: Date.now(), type: 'system', content: "Welcome to [A.A.M. OS]. Type 'help' to see available commands." }]);
        return;
      case 'exit':
      case 'quit':
        onClose();
        return;
      default:
        type = 'error';
        outputContent = `COMMAND NOT FOUND: '${command}'. Type 'help' for a list of commands.`;
    }

    setHistory([...newHistory, { id: Date.now() + 1, type, content: outputContent }]);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="global-terminal"
          drag={!isMaximized}
          dragControls={dragControls}
          dragListener={false} // Desativa arrastar pelo corpo, ativa só na barra
          dragMomentum={false}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          style={{
            x, y, // Valores dinâmicos do arrasto
            position: 'fixed',
            // Posição inicial centralizada no meio da tela
            top: isMaximized ? 0 : 'max(10vh, calc(50vh - 250px))',
            left: isMaximized ? 0 : 'max(5vw, calc(50vw - 350px))',
            width: isMaximized ? '100vw' : undefined, // Deixa flexível para o redimensionamento nativo
            height: isMinimized ? 'auto' : (isMaximized ? '100vh' : undefined),
            minWidth: '320px',
            minHeight: isMinimized ? 'auto' : '250px',
            resize: isMaximized || isMinimized ? 'none' : 'both',
            overflow: 'hidden',
            zIndex: 50,
          }}
          className={`flex flex-col shadow-2xl shadow-cyan-500/20 bg-[#0c0c0c]/95 backdrop-blur-md border border-cyan-500/50 ${
            isMaximized ? 'rounded-none' : 'rounded-lg w-[90vw] sm:w-[700px] h-[500px]'
          }`}
        >
          {/* Barra superior estilo Janela OS - É aqui que a mágica de arrastar acontece */}
          <div 
            onPointerDown={(e) => dragControls.start(e)} // Inicia o arrasto
            className="flex justify-between items-center px-4 py-2 bg-surface-dark/95 border-b border-cyan-500/50 select-none cursor-move group"
            onDoubleClick={toggleMaximize} // Clique duplo na barra também maximiza!
          >
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-gray-400 tracking-widest group-hover:text-cyan-400 transition-colors">aam@ubuntu: ~</span>
            </div>
            {/* Controles da Janela */}
            <div className="flex items-center gap-3">
              <button onClick={() => setIsMinimized(!isMinimized)} className="text-gray-500 hover:text-white transition-colors" title="Minimizar">
                <Minus size={14} />
              </button>
              <button onClick={toggleMaximize} className="text-gray-500 hover:text-white transition-colors" title="Maximizar">
                <Square size={12} />
              </button>
              <button onClick={onClose} className="text-gray-500 hover:text-red-400 transition-colors" title="Fechar">
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Área do Terminal (Esconde se estiver minimizado) */}
          {!isMinimized && (
            <div 
              className="flex-1 p-4 overflow-y-auto font-mono text-sm text-gray-300"
              onClick={() => inputRef.current?.focus()}
            >
              <div className="flex flex-col gap-2">
                {history.map((item) => (
                  <div key={item.id} className="whitespace-pre-wrap">
                    {item.type === 'input' && (
                      <div className="flex gap-2">
                        <span className="text-green-400 font-bold">aam@os:~$</span>
                        <span className="text-white">{item.content}</span>
                      </div>
                    )}
                    {item.type === 'output' && <div className="text-gray-300">{item.content}</div>}
                    {item.type === 'system' && <div className="text-cyan-400">{item.content}</div>}
                    {item.type === 'error' && <div className="text-red-400">{item.content}</div>}
                  </div>
                ))}
                
                {/* Input field */}
                <form onSubmit={handleCommand} className="flex gap-2 mt-1">
                  <span className="text-green-400 font-bold">aam@os:~$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex-1 bg-transparent outline-none border-none text-white caret-white"
                    autoComplete="off"
                    spellCheck="false"
                  />
                </form>
                <div ref={bottomRef} />
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
