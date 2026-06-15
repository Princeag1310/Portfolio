import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTrophy, FaCode, FaAward, FaLaptopCode, FaMedal, FaExternalLinkAlt } from 'react-icons/fa';

const experiences = [
  {
    id: 'flipkart',
    title: 'Flipkart GRID Challenge',
    icon: <FaTrophy />,
    description: "Semifinalist in Flipkart's national-level engineering challenge.",
    buttonText: "View Certificate"
  },
  {
    id: 'graph',
    title: 'Graph Theory Programming Camp',
    icon: <FaCode />,
    description: "Participated in an intensive programming camp focused on advanced graph theory algorithms and competitive programming techniques.",
    buttonText: "View Certificate"
  },
  {
    id: 'adobe',
    title: 'Adobe Hackathon',
    icon: <FaLaptopCode />,
    description: "Competed in the Adobe Hackathon, building innovative solutions and presenting to industry experts.",
    buttonText: "View Certificate"
  },
  {
    id: 'opensource',
    title: 'Open Source Contribution',
    icon: <FaAward />,
    description: "Successfully merged multiple pull requests across popular React and Next.js repositories during Hacktoberfest 2025.",
    buttonText: "View Profile"
  },
  {
    id: 'hackathon',
    title: 'Hackathon Finalist',
    icon: <FaMedal />,
    description: "Reached the finals in a national level hackathon for developing a real-time collaborative application.",
    buttonText: "View Details"
  }
];

export const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(experiences[0]);

  return (
    <section id="experience" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2>Experience & Achievements</h2>
        
        <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', marginTop: '40px' }}>
          
          {/* Left Tabs */}
          <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {experiences.map((exp) => (
              <motion.button
                key={exp.id}
                onClick={() => setActiveTab(exp)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: activeTab.id === exp.id ? 'rgba(168, 85, 247, 0.15)' : 'rgba(255,255,255,0.02)',
                  border: `1px solid ${activeTab.id === exp.id ? 'rgba(168, 85, 247, 0.5)' : 'rgba(255,255,255,0.05)'}`,
                  padding: '20px',
                  borderRadius: '12px',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.3s ease',
                  boxShadow: activeTab.id === exp.id ? '0 0 20px rgba(168, 85, 247, 0.2)' : 'none'
                }}
              >
                <div style={{ 
                  background: 'rgba(255,255,255,0.1)', 
                  padding: '12px', 
                  borderRadius: '50%',
                  color: activeTab.id === exp.id ? '#a855f7' : '#fff'
                }}>
                  {exp.icon}
                </div>
                <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>{exp.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Right Content */}
          <div style={{ flex: '2 1 500px', display: 'flex', flexDirection: 'column' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="glass-panel"
                style={{ 
                  padding: '60px 40px', 
                  flex: 1, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  textAlign: 'center',
                  borderColor: 'rgba(168, 85, 247, 0.3)'
                }}
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.2 }}
                  style={{ 
                    width: '80px', 
                    height: '80px', 
                    borderRadius: '50%', 
                    background: 'rgba(168, 85, 247, 0.1)', 
                    border: '1px solid rgba(168, 85, 247, 0.5)',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontSize: '2rem',
                    color: '#a855f7',
                    marginBottom: '32px',
                    boxShadow: '0 0 30px rgba(168, 85, 247, 0.3)'
                  }}
                >
                  {activeTab.icon}
                </motion.div>
                
                <h3 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '24px' }}>{activeTab.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '40px', maxWidth: '600px' }}>
                  {activeTab.description}
                </p>
                
                <a href="#" className="glass-button" style={{ borderColor: 'rgba(168, 85, 247, 0.5)' }}>
                  <FaExternalLinkAlt size={16} /> {activeTab.buttonText}
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
          <a href="#" className="glass-button" style={{ borderColor: 'rgba(168, 85, 247, 0.5)', padding: '16px 40px' }}>
            View All Certificates
          </a>
        </div>
      </motion.div>
    </section>
  );
};
