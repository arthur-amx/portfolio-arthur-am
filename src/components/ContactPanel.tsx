// src/components/ContactPanel.tsx

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

// Ícones para os links de contato
import { Linkedin, Mail } from 'lucide-react'; // Biblioteca de ícones popular, instale com: npm install lucide-react

export const ContactPanel = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus('sending');

    // As variáveis de ambiente são lidas aqui
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
        console.error("As variáveis de ambiente do EmailJS não estão configuradas!");
        setStatus('error');
        return;
    }

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setStatus('success');
          form.current?.reset();
          setTimeout(() => setStatus('idle'), 5000); // Reseta o status após 5s
        },
        (error) => {
          console.error('FAILED...', error);
          setStatus('error');
          setTimeout(() => setStatus('idle'), 5000); // Reseta o status após 5s
        }
      );
  };

  return (
    <motion.div
      key="contact"
      className="p-8 backdrop-blur-xl bg-surface-dark/50 rounded-lg border border-cyan-500/20 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-xl font-bold text-primary-glow">[MODULE: COMMS_CHANNEL]</h2>
      <p className="mt-2 text-gray-400">Iniciando link de comunicação segura. Utilize os canais abaixo ou envie um payload direto.</p>
      
      {/* Ícones de Contato */}
      <div className="flex gap-6 my-6">
        <a href="https://www.linkedin.com/in/arthur-amx" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-primary-glow transition-colors">
          <Linkedin size={20} />
          <span>LinkedIn</span>
        </a>
        <a href="mailto:arthur.araujo48@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-primary-glow transition-colors">
          <Mail size={20} />
          <span>Email</span>
        </a>
      </div>

      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div>
          <label htmlFor="user_name" className="block text-sm font-medium text-gray-400">ORIGIN_NODE (Nome)</label>
          <input type="text" name="user_name" id="user_name" required className="mt-1 block w-full bg-surface-dark/80 border-cyan-500/20 rounded-md shadow-sm focus:ring-primary-glow focus:border-primary-glow p-2"/>
        </div>
        <div>
          <label htmlFor="user_email" className="block text-sm font-medium text-gray-400">RETURN_ADDRESS (Email)</label>
          <input type="email" name="user_email" id="user_email" required className="mt-1 block w-full bg-surface-dark/80 border-cyan-500/20 rounded-md shadow-sm focus:ring-primary-glow focus:border-primary-glow p-2"/>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-400">PAYLOAD (Mensagem)</label>
          <textarea name="message" id="message" rows={4} required className="mt-1 block w-full bg-surface-dark/80 border-cyan-500/20 rounded-md shadow-sm focus:ring-primary-glow focus:border-primary-glow p-2"></textarea>
        </div>
        
        <button type="submit" disabled={status === 'sending'} className="w-full px-4 py-2 bg-surface-dark border border-primary-glow text-primary-glow rounded hover:bg-primary-glow hover:text-background-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
          {status === 'sending' ? 'TRANSMITTING...' : 'SEND_MESSAGE()'}
        </button>
      </form>

      {status === 'success' && <p className="text-green-400 mt-4 text-center">SUCCESS: Message payload received.</p>}
      {status === 'error' && <p className="text-red-400 mt-4 text-center">ERROR: Transmission failed. Please check logs and try again.</p>}
    </motion.div>
  );
};