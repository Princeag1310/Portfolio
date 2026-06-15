import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:princeagrawal1013@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message} (${formData.email})`;
  };

  return (
    <section id="contact" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'flex-start' }}>
          
          {/* Left Column */}
          <div style={{ flex: '1 1 400px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', color: '#a855f7', textAlign: 'left' }}>Connect Across Space</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', fontSize: '1.1rem', lineHeight: '1.6' }}>
              Initiate a direct transmission to my terminal through any of these communication channels.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <a href="https://github.com/Princeag1310" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '20px', textDecoration: 'none' }}>
                <div style={{ color: '#fff', fontSize: '1.8rem' }}>
                  <FaGithub />
                </div>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '4px' }}>GitHub</h4>
                  <span style={{ color: 'var(--text-secondary)' }}>@Princeag1310</span>
                </div>
              </a>
              
              <a href="https://www.linkedin.com/in/prince-agrawal-/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '20px', textDecoration: 'none' }}>
                <div style={{ color: '#fff', fontSize: '1.8rem' }}>
                  <FaLinkedin />
                </div>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '4px' }}>LinkedIn</h4>
                  <span style={{ color: 'var(--text-secondary)' }}>Let's connect professionally</span>
                </div>
              </a>
              
              <a href="mailto:princeagrawal1013@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '20px', textDecoration: 'none' }}>
                <div style={{ color: '#fff', fontSize: '1.8rem' }}>
                  <Mail />
                </div>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '4px' }}>Email</h4>
                  <span style={{ color: 'var(--text-secondary)' }}>princeagrawal1013@gmail.com</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column (Form) */}
          <div className="glass-panel" style={{ flex: '1 1 500px', padding: '40px', borderColor: 'rgba(168, 85, 247, 0.3)' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '1px' }}>NAME</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Commander Shepard" 
                  required
                  style={{ 
                    background: 'rgba(0,0,0,0.5)', 
                    border: '1px solid rgba(255,255,255,0.1)', 
                    padding: '16px', 
                    borderRadius: '8px', 
                    color: '#fff',
                    outline: 'none',
                    fontSize: '1rem',
                    transition: 'border 0.3s'
                  }} 
                  onFocus={e => e.target.style.borderColor = '#a855f7'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '1px' }}>EMAIL</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="shepard@normandy.space" 
                  required
                  style={{ 
                    background: 'rgba(0,0,0,0.5)', 
                    border: '1px solid rgba(255,255,255,0.1)', 
                    padding: '16px', 
                    borderRadius: '8px', 
                    color: '#fff',
                    outline: 'none',
                    fontSize: '1rem',
                    transition: 'border 0.3s'
                  }}
                  onFocus={e => e.target.style.borderColor = '#a855f7'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '1px' }}>MESSAGE</label>
                <textarea 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Requesting coordinates for the next mission..." 
                  required
                  rows={4}
                  style={{ 
                    background: 'rgba(0,0,0,0.5)', 
                    border: '1px solid rgba(255,255,255,0.1)', 
                    padding: '16px', 
                    borderRadius: '8px', 
                    color: '#fff',
                    outline: 'none',
                    fontSize: '1rem',
                    resize: 'none',
                    transition: 'border 0.3s'
                  }}
                  onFocus={e => e.target.style.borderColor = '#a855f7'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                ></textarea>
              </div>

              <button 
                type="submit" 
                style={{ 
                  background: 'linear-gradient(90deg, #a855f7, #d946ef)', 
                  border: 'none', 
                  padding: '16px', 
                  borderRadius: '8px', 
                  color: '#fff', 
                  fontSize: '1.1rem', 
                  fontWeight: 600, 
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  marginTop: '16px',
                  boxShadow: '0 4px 15px rgba(168, 85, 247, 0.4)'
                }}
              >
                <Send size={20} /> Send Message
              </button>
            </form>
          </div>

        </div>
      </motion.div>
      <footer style={{ textAlign: 'center', padding: '40px 0', marginTop: '60px', color: 'var(--text-secondary)' }}>
        <p>© {new Date().getFullYear()} Prince Agrawal. All rights reserved.</p>
      </footer>
    </section>
  );
};
