import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaAws, FaExternalLinkAlt } from 'react-icons/fa';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiPostgresql, SiPrisma, SiGooglegemini, 
  SiNodedotjs, SiSocketdotio, SiExpress, SiMongodb, SiTailwindcss
} from 'react-icons/si';

const projects = [
  {
    title: "CureCart",
    description: "A next-generation healthcare e-commerce platform integrating a robust digital pharmacy with an AI health assistant (Gemini & Tavily) for verified medical data and real-time guidance.",
    tech: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
      { name: "Tailwind", icon: <SiTailwindcss color="#06B6D4" /> },
      { name: "Prisma", icon: <SiPrisma color="#2D3748" /> },
      { name: "Gemini AI", icon: <SiGooglegemini color="#8E75B2" /> }
    ],
    github: "https://github.com/Princeag1310/CureCart",
    live: "https://cure--cart.vercel.app/"
  },
  {
    title: "OmniReach",
    description: "A comprehensive campaign outreach platform enabling users to manage contacts, execute targeted email/SMS campaigns, and monitor performance in real-time with AI-powered template generation.",
    tech: [
      { name: "React", icon: <SiReact color="#61DAFB" /> },
      { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
      { name: "AWS", icon: <FaAws color="#FF9900" /> },
      { name: "Socket.io", icon: <SiSocketdotio /> }
    ],
    github: "https://github.com/Princeag1310/OmniReach",
    live: "https://omni-reach-one.vercel.app/" 
  },
  {
    title: "Second Brain",
    description: "A high-performance full-stack web application designed to help you organize your digital life. Save links, embed videos, store tweets, and securely share your curated content library.",
    tech: [
      { name: "React", icon: <SiReact color="#61DAFB" /> },
      { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
      { name: "Tailwind", icon: <SiTailwindcss color="#06B6D4" /> },
      { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> }
    ],
    github: "https://github.com/Princeag1310/Second-Brain",
    live: "https://second-brainee.vercel.app/" 
  },
  {
    title: "FoodieReels",
    description: "An immersive short-form video and image platform designed specifically for food lovers and restaurant partners to explore the best meals, hottest restaurants, and tastiest dishes.",
    tech: [
      { name: "React", icon: <SiReact color="#61DAFB" /> },
      { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> }
    ],
    github: "https://github.com/Princeag1310/foodie-reels",
    live: "https://foodiereels.vercel.app/"
  },
  {
    title: "CollabDraw",
    description: "A real-time collaborative drawing application built for seamless teamwork, allowing multiple users to join a shared room and draw together on a digital canvas.",
    tech: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind", icon: <SiTailwindcss color="#06B6D4" /> },
      { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
      { name: "Socket.io", icon: <SiSocketdotio /> },
      { name: "Prisma", icon: <SiPrisma color="#2D3748" /> },
      { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> }
    ],
    github: "https://github.com/Princeag1310/collabdraw",
    live: "https://collabdraws.vercel.app/" 
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2>Featured Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-panel"
              style={{ padding: '32px', display: 'flex', flexDirection: 'column', borderColor: 'rgba(0, 242, 254, 0.2)' }}
            >
              <h3 style={{ fontSize: '1.6rem', marginBottom: '16px', color: '#fff' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', flex: 1, fontSize: '1rem', lineHeight: '1.6' }}>{project.description}</p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '32px' }}>
                {project.tech.map(t => (
                  <motion.div 
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
                    key={t.name} 
                    style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', padding: '6px 14px', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', cursor: 'pointer' }}
                  >
                    <span style={{ fontSize: '1.1rem' }}>{t.icon}</span> {t.name}
                  </motion.div>
                ))}
              </div>
              
              <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="glass-button" style={{ flex: 1, justifyContent: 'center' }}>
                    <FaGithub size={18} /> Source
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="glass-button primary" style={{ flex: 1, justifyContent: 'center' }}>
                    <FaExternalLinkAlt size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}

          {/* View More on GitHub Card */}
          <motion.a
            href="https://github.com/Princeag1310"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center', 
              textDecoration: 'none',
              padding: '32px',
              minHeight: '200px'
            }}
          >
            <motion.div
              animate={{ y: [0, -30, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'rgba(20,20,30,0.8)',
                boxShadow: '0 0 30px rgba(168, 85, 247, 0.2), inset 0 0 10px rgba(255,255,255,0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px'
              }}
            >
              <FaGithub size={40} color="#fff" />
            </motion.div>
            <h3 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
              View more on GitHub <span style={{ marginLeft: '4px' }}>→</span>
            </h3>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};
