import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2>About Me</h2>
        <div className="glass-panel" style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '30px', borderColor: 'rgba(0, 242, 254, 0.2)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p style={{ fontSize: '1.2rem', color: '#fff', lineHeight: '1.8', fontWeight: 300 }}>
              I am a <span style={{ color: '#00f2fe', fontWeight: 500 }}>B.Tech student</span> in Electrical and Electronics Engineering at <span style={{ color: '#00f2fe', fontWeight: 500 }}>ABV-IIITM Gwalior</span> (CGPA: 9.42/10.0). I have a strong foundation in <span style={{ color: '#00f2fe', fontWeight: 500 }}>competitive programming</span> and <span style={{ color: '#00f2fe', fontWeight: 500 }}>full-stack web development</span>.
            </p>
            <p style={{ fontSize: '1.2rem', color: '#fff', lineHeight: '1.8', fontWeight: 300 }}>
              Highly passionate about problem-solving, I am a <span style={{ color: '#fe0979', fontWeight: 500 }}>Guardian on LeetCode</span> (Rating: 2180) and a <span style={{ color: '#fe0979', fontWeight: 500 }}>4-star coder on CodeChef</span> (Rating: 1822). Beyond algorithms, I am an active <span style={{ color: '#a855f7', fontWeight: 500 }}>Open Source Contributor</span>, having merged multiple PRs across popular React and Next.js repositories during <span style={{ color: '#a855f7', fontWeight: 500 }}>Hacktoberfest 2025</span>.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginTop: '20px' }}>
             <motion.div whileHover={{ y: -5 }} style={{ background: 'rgba(0,0,0,0.4)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(0, 242, 254, 0.3)', boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
               <h3 style={{ color: '#00f2fe', marginBottom: '12px', fontSize: '1.3rem' }}>Education</h3>
               <p style={{ color: '#fff', fontSize: '1rem', lineHeight: '1.5' }}>ABV-IIITM Gwalior<br/>B.Tech in EEE<br/><span style={{ color: 'var(--text-secondary)' }}>Aug 2023 - May 2027</span></p>
             </motion.div>
             <motion.div whileHover={{ y: -5 }} style={{ background: 'rgba(0,0,0,0.4)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(254, 9, 121, 0.3)', boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
               <h3 style={{ color: '#fe0979', marginBottom: '12px', fontSize: '1.3rem' }}>Experience</h3>
               <p style={{ color: '#fff', fontSize: '1rem', lineHeight: '1.5' }}>Open Source Developer<br/><span style={{ color: 'var(--text-secondary)' }}>Hacktoberfest 2025</span></p>
             </motion.div>
             <motion.div whileHover={{ y: -5 }} style={{ background: 'rgba(0,0,0,0.4)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(168, 85, 247, 0.3)', boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
               <h3 style={{ color: '#a855f7', marginBottom: '12px', fontSize: '1.3rem' }}>Achievements</h3>
               <p style={{ color: '#fff', fontSize: '1rem', lineHeight: '1.5' }}>LeetCode Guardian (2180)<br/>CodeChef 4★ (1822)<br/>10/10 SGPA</p>
             </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
