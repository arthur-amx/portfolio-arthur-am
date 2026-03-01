import { motion } from 'framer-motion';

export const OverviewPanel = () => {
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
        <h2 className="text-xl font-bold text-primary-glow mb-4">[SYSTEM_ROOT/ABOUT]</h2>
        <p className="text-gray-300">
          Tecnólogo em Redes de Computadores pelo Centro Federal de Educação Tecnológica de Minas Gerais (CEFET-MG), atualmente nos últimos períodos do curso de Engenharia de Software pela Pontifícia Universidade Católica (PUC). Sou um entusiasta autodidata da Tecnologia da Informação, cujo interesse principal reside na área de segurança da informação e infraestrutura cloud.
        </p>
        <p className="mt-2 text-gray-300">
          Neste momento, tenho direcionado meus estudos para áreas específicas, concentrando-me na vanguarda da tecnologia. Tenho explorado ativamente conceitos relacionados à WEB 3.0, protocolos de rede e Blockchain como parte de um interesse pessoal e hobby. Além disso, estou profundamente envolvido na área de DevSecOps, buscando incessantemente aprimorar meu conhecimento e habilidades nesse campo em rápido desenvolvimento.
        </p>
      </div>
      <div>
        <h2 className="text-lg font-bold text-primary-glow mb-2">[TRANSLATION_ENG]</h2>
        <p className="text-gray-400">
          Computer Network Technologist from the Federal Center for Technological Education of Minas Gerais (CEFET-MG), currently in the final terms of the Software Engineering program at the Pontifical Catholic University (PUC). I am a self-taught Information Technology enthusiast, whose main interest lies in information security and cloud infrastructure.
        </p>
        <p className="mt-2 text-gray-400">
          At this moment, I am directing my studies towards specific areas, focusing on the forefront of technology. I have actively explored concepts related to WEB 3.0, network protocols, and Blockchain as a personal interest and hobby. Furthermore, I am deeply involved in the DevSecOps field, incessantly seeking to enhance my knowledge and skills in this rapidly evolving area.
        </p>
      </div>
    </motion.div>
  );
};
