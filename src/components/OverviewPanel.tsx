import { motion } from 'framer-motion';

export const OverviewPanel = () => (
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
  </motion.div>
);