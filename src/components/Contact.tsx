import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="glass-panel" style={{ padding: '60px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ marginBottom: '16px' }}>Let's Work Together</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', fontSize: '1.1rem' }}>
            I am currently open to new opportunities. Whether you have a project idea, a job opportunity, or just want to connect, feel free to reach out!
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap', marginBottom: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ background: 'rgba(255,255,255,0.1)', padding: '12px', borderRadius: '50%' }}>
                <Mail size={24} color="#a855f7" />
              </div>
              <span>princeagrawal1013@gmail.com</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ background: 'rgba(255,255,255,0.1)', padding: '12px', borderRadius: '50%' }}>
                <Phone size={24} color="#3b82f6" />
              </div>
              <span>+91 8265819270</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ background: 'rgba(255,255,255,0.1)', padding: '12px', borderRadius: '50%' }}>
                <MapPin size={24} color="#0f766e" />
              </div>
              <span>Gwalior, Madhya Pradesh</span>
            </div>
          </div>
          
          <a href="mailto:princeagrawal1013@gmail.com" className="glass-button primary" style={{ fontSize: '1.2rem', padding: '16px 40px' }}>
            Send an Email
          </a>
        </div>
      </motion.div>
      <footer style={{ textAlign: 'center', padding: '40px 0', marginTop: '40px', color: 'var(--text-secondary)' }}>
        <p>© {new Date().getFullYear()} Prince Agrawal. All rights reserved.</p>
      </footer>
    </section>
  );
};
