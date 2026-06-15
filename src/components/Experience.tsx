import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCode, FaExternalLinkAlt } from 'react-icons/fa';

const timelineData = [
  {
    id: 1,
    title: 'JMK Spares and Wears',
    subtitle: 'Software Engineering Internship',
    date: 'May 2026 - Present',
    description: 'Working on full-stack software development tasks and contributing to real-world engineering projects.',
    icon: <FaBriefcase />,
    link: 'https://drive.google.com/file/d/1i3JLR0eSk9Z6Ik90J1tO0S2d-GYZ0QIP/view?usp=sharing',
    buttonText: 'OFFER LETTER'
  },
  {
    id: 2,
    title: 'Hacktoberfest 2025',
    subtitle: 'Open Source Contributor',
    date: 'October 2025',
    description: 'Successfully merged multiple pull requests across popular React and Next.js repositories during the month-long open source event.',
    icon: <FaCode />,
    link: 'https://drive.google.com/file/d/1RUtervePIjmKkO2abBPFq_hTkmLGXZJP/view?usp=sharing',
    buttonText: 'CERTIFICATE'
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '80px' }}>Experience</h2>
        
        <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
          {/* Vertical Line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '2px',
            height: '100%',
            background: 'linear-gradient(to bottom, transparent, rgba(168, 85, 247, 0.5), transparent)',
            zIndex: 0
          }} />

          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={item.id} style={{
                display: 'flex',
                justifyContent: isLeft ? 'flex-start' : 'flex-end',
                alignItems: 'center',
                width: '100%',
                marginBottom: '60px',
                position: 'relative',
                zIndex: 1
              }}>
                {/* Center Node */}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: '#a855f7',
                  border: '4px solid #111',
                  boxShadow: '0 0 20px rgba(168, 85, 247, 0.8)',
                  zIndex: 2
                }} />

                {/* Content Card */}
                <motion.div 
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  style={{ width: '45%' }}
                >
                  <div className="glass-panel" style={{ 
                    padding: '30px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '16px',
                    position: 'relative'
                  }}>
                    {/* Horizontal Connector Line */}
                    <div style={{
                      position: 'absolute',
                      top: '30px',
                      [isLeft ? 'right' : 'left']: '-12%',
                      width: '12%',
                      height: '2px',
                      background: 'rgba(168, 85, 247, 0.3)'
                    }} />

                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
                      <div style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '12px',
                        background: 'rgba(168, 85, 247, 0.1)',
                        border: '1px solid rgba(168, 85, 247, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        color: '#a855f7'
                      }}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '4px' }}>{item.title}</h3>
                        <div style={{ color: '#a855f7', fontWeight: 600, fontSize: '1.1rem' }}>{item.subtitle}</div>
                      </div>
                    </div>
                    
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontFamily: 'monospace' }}>
                      {item.date}
                    </div>
                    
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                      {item.description}
                    </p>

                    {item.link && (
                      <div style={{ marginTop: '8px' }}>
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="glass-button" style={{ 
                          display: 'inline-flex', 
                          padding: '10px 20px', 
                          fontSize: '0.9rem',
                          borderColor: 'rgba(168, 85, 247, 0.4)'
                        }}>
                          <FaExternalLinkAlt size={14} /> {item.buttonText}
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
