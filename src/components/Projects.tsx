import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "CureCart (AI-Powered Healthcare)",
    description: "A full-stack healthcare e-commerce platform featuring an intelligent health assistant built with Google Gemini AI and a RAG pipeline. Optimized PostgreSQL schemas with Prisma for 10,000+ records and implemented an AI-driven OCR pipeline for prescription verification.",
    tech: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma ORM", "Gemini AI"],
    github: "https://github.com/Princeag1310/CureCart"
  },
  {
    title: "OmniReach SaaS",
    description: "A scalable email marketing SaaS alternative to Mailchimp. Integrated Gemini AI to automate HTML email generation. Built real-time delivery tracking via Socket.io and AWS SES/SNS webhooks, alongside a node-cron job scheduler with MongoDB persistence.",
    tech: ["React", "Node.js", "AWS SES/SNS", "Socket.io", "Gemini AI"],
    github: "https://github.com/Princeag1310/OmniReach"
  },
  {
    title: "FoodieReels Web App",
    description: "An Instagram-style food discovery REST API. Embedded a Gemini AI chatbot for recommendations and an infinite-scroll timeline with Fisher-Yates deduplication. Features dual-tenant RBAC with JWT auth and ImageKit CDN.",
    tech: ["React", "Express.js", "MongoDB", "Gemini AI", "ImageKit"],
    github: "https://github.com/Princeag1310/foodie-reels"
  },
  {
    title: "Brainly",
    description: "A collaborative knowledge-sharing application that empowers students to ask questions and find answers quickly.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Princeag1310/Brainly"
  },
  {
    title: "CollabDraw",
    description: "A real-time collaborative whiteboard application allowing multiple users to draw, brainstorm, and interact simultaneously on a shared canvas.",
    tech: ["React", "TypeScript", "WebSocket", "Canvas API"],
    github: "https://github.com/Princeag1310/collabdraw"
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel"
              style={{ padding: '32px', display: 'flex', flexDirection: 'column' }}
            >
              <h3 style={{ fontSize: '1.4rem', marginBottom: '16px' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', flex: 1, fontSize: '0.95rem' }}>{project.description}</p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                {project.tech.map(t => (
                  <span key={t} style={{ fontSize: '0.8rem', padding: '4px 12px', background: 'rgba(255,255,255,0.1)', borderRadius: '20px' }}>{t}</span>
                ))}
              </div>
              
              <div style={{ display: 'flex', gap: '16px' }}>
                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                  <FaGithub size={20} /> Source Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
