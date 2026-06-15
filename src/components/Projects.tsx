import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaAws, FaExternalLinkAlt } from 'react-icons/fa';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiPostgresql, SiPrisma, SiGooglegemini, 
  SiNodedotjs, SiSocketdotio, SiExpress, SiMongodb, SiTailwindcss, SiRedis 
} from 'react-icons/si';

const projects = [
  {
    title: "CureCart (AI Healthcare)",
    description: "A full-stack healthcare platform featuring an intelligent health assistant built with Google Gemini AI. Optimized PostgreSQL schemas with Prisma for 10,000+ records and implemented an AI-driven OCR pipeline.",
    tech: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
      { name: "Tailwind", icon: <SiTailwindcss color="#06B6D4" /> },
      { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
      { name: "Prisma", icon: <SiPrisma color="#2D3748" /> },
      { name: "Gemini AI", icon: <SiGooglegemini color="#8E75B2" /> }
    ],
    github: "https://github.com/Princeag1310/CureCart",
    live: "https://curecart-frontend-omega.vercel.app"
  },
  {
    title: "OmniReach SaaS",
    description: "A scalable email marketing SaaS alternative to Mailchimp. Built real-time delivery tracking via Socket.io and AWS SES/SNS webhooks alongside a node-cron job scheduler.",
    tech: [
      { name: "React", icon: <SiReact color="#61DAFB" /> },
      { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
      { name: "AWS", icon: <FaAws color="#FF9900" /> },
      { name: "Socket.io", icon: <SiSocketdotio /> },
      { name: "Redis", icon: <SiRedis color="#DC382D" /> }
    ],
    github: "https://github.com/Princeag1310/OmniReach",
    live: "https://omnireach.vercel.app" 
  },
  {
    title: "FoodieReels",
    description: "An Instagram-style food discovery REST API. Embedded an infinite-scroll timeline with Fisher-Yates deduplication and a Gemini AI chatbot. Dual-tenant RBAC with ImageKit.",
    tech: [
      { name: "React", icon: <SiReact color="#61DAFB" /> },
      { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
      { name: "Gemini AI", icon: <SiGooglegemini color="#8E75B2" /> }
    ],
    github: "https://github.com/Princeag1310/foodie-reels",
    live: "https://foodie-reels.vercel.app"
  },
  {
    title: "CollabDraw",
    description: "A real-time collaborative whiteboard application allowing multiple users to draw, brainstorm, and interact simultaneously on a shared canvas.",
    tech: [
      { name: "React", icon: <SiReact color="#61DAFB" /> },
      { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
      { name: "Socket.io", icon: <SiSocketdotio /> }
    ],
    github: "https://github.com/Princeag1310/collabdraw",
    live: "https://collabdraw-beta.vercel.app" 
  },
  {
    title: "Brainly",
    description: "A collaborative knowledge-sharing application that empowers students to ask questions and find answers quickly.",
    tech: [
      { name: "React", icon: <SiReact color="#61DAFB" /> },
      { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> }
    ],
    github: "https://github.com/Princeag1310/Brainly",
    live: "https://brainly-app.vercel.app" 
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
