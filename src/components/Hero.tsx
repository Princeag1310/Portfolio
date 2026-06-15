import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode, SiCodechef } from 'react-icons/si';
import { TypeAnimation } from 'react-type-animation';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <motion.div 
          className="glass-panel"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ padding: '60px', maxWidth: '800px', margin: '0 auto', textAlign: 'center', borderColor: 'rgba(0, 242, 254, 0.2)' }}
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.5 }}
            style={{ 
              width: '150px', 
              height: '150px', 
              borderRadius: '50%', 
              background: 'linear-gradient(135deg, #00f2fe, #fe0979)',
              margin: '0 auto 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 40px rgba(0, 242, 254, 0.6)',
              border: '4px solid #fff',
              overflow: 'hidden'
            }}
          >
            <img src="https://github.com/Princeag1310.png" alt="Prince Agrawal" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{ fontSize: '3.5rem', marginBottom: '8px', fontWeight: 800, color: '#fff' }}
          >
            Hi, I am <span className="neon-text">Prince Agrawal</span>
          </motion.h1>
          
          <div style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '24px', color: '#a855f7', minHeight: '40px' }}>
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'Competitive Programmer',
                2000,
                'Open Source Contributor',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '650px', margin: '0 auto 40px' }}
          >
            Crafting highly scalable, robust web applications. I love integrating AI capabilities, building SaaS platforms, and competing in algorithmic challenges. Let's build something amazing.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '40px' }}
          >
            <a href="/resume.pdf" download className="glass-button primary">
              <FileText size={18} /> Download Resume
            </a>
            <a href="#contact" className="glass-button">
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', delay: 1 }}
            style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}
          >
            <a href="https://github.com/Princeag1310" target="_blank" rel="noopener noreferrer" style={{ color: '#00f2fe', transition: 'all 0.3s' }} onMouseOver={e => {e.currentTarget.style.color = '#fff'; e.currentTarget.style.filter = 'drop-shadow(0 0 10px #00f2fe)'}} onMouseOut={e => {e.currentTarget.style.color = '#00f2fe'; e.currentTarget.style.filter = 'none'}}><FaGithub size={30} /></a>
            <a href="https://www.linkedin.com/in/prince-agrawal-/" target="_blank" rel="noopener noreferrer" style={{ color: '#0077b5', transition: 'all 0.3s' }} onMouseOver={e => {e.currentTarget.style.color = '#fff'; e.currentTarget.style.filter = 'drop-shadow(0 0 10px #0077b5)'}} onMouseOut={e => {e.currentTarget.style.color = '#0077b5'; e.currentTarget.style.filter = 'none'}}><FaLinkedin size={30} /></a>
            <a href="https://leetcode.com/u/princeagrawal1013/" target="_blank" rel="noopener noreferrer" style={{ color: '#ffa116', transition: 'all 0.3s' }} onMouseOver={e => {e.currentTarget.style.color = '#fff'; e.currentTarget.style.filter = 'drop-shadow(0 0 10px #ffa116)'}} onMouseOut={e => {e.currentTarget.style.color = '#ffa116'; e.currentTarget.style.filter = 'none'}}><SiLeetcode size={30} /></a>
            <a href="https://www.codechef.com/users/prince_agrawal" target="_blank" rel="noopener noreferrer" style={{ color: '#5B4638', transition: 'all 0.3s' }} onMouseOver={e => {e.currentTarget.style.color = '#fff'; e.currentTarget.style.filter = 'drop-shadow(0 0 10px #5B4638)'}} onMouseOut={e => {e.currentTarget.style.color = '#5B4638'; e.currentTarget.style.filter = 'none'}}><SiCodechef size={30} /></a>
            <a href="mailto:princeagrawal1013@gmail.com" style={{ color: '#fe0979', transition: 'all 0.3s' }} onMouseOver={e => {e.currentTarget.style.color = '#fff'; e.currentTarget.style.filter = 'drop-shadow(0 0 10px #fe0979)'}} onMouseOut={e => {e.currentTarget.style.color = '#fe0979'; e.currentTarget.style.filter = 'none'}}><FaEnvelope size={30} /></a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
