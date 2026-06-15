import React from 'react';
import { motion } from 'framer-motion';

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
        <div className="glass-panel" style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
            I am a B.Tech student in Electrical and Electronics Engineering at ABV-IIITM Gwalior (CGPA: 9.42/10.0). I have a strong foundation in competitive programming and full-stack web development.
          </p>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
            I am highly passionate about problem-solving. I am a Guardian on LeetCode (Highest Rating: 2180, Rank 357 in Weekly Contest 505) and a 4-star coder on CodeChef (Highest Rating: 1822, Global Rank 82 in Starters 240). Beyond algorithms, I am an active Open Source Contributor, having merged multiple PRs across popular React and Next.js repositories during Hacktoberfest 2025.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '20px' }}>
             <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '12px' }}>
               <h3 style={{ color: '#fff', marginBottom: '8px' }}>Education</h3>
               <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>ABV-IIITM Gwalior<br/>B.Tech in EEE<br/>Aug 2023 - May 2027</p>
             </div>
             <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '12px' }}>
               <h3 style={{ color: '#fff', marginBottom: '8px' }}>Experience</h3>
               <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Open Source Developer<br/>Hacktoberfest 2025</p>
             </div>
             <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '12px' }}>
               <h3 style={{ color: '#fff', marginBottom: '8px' }}>Achievements</h3>
               <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>LeetCode Guardian (2180)<br/>CodeChef 4★ (1822)<br/>10/10 SGPA</p>
             </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
