import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaAws } from 'react-icons/fa';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiPostgresql, SiGooglegemini, 
  SiNodedotjs, SiSocketdotio, SiExpress, SiMongodb 
} from 'react-icons/si';

const projects = [
  {
    title: "CureCart (AI Healthcare)",
    description: "A full-stack healthcare platform featuring an intelligent health assistant built with Google Gemini AI. Optimized PostgreSQL schemas with Prisma for 10,000+ records.",
    tech: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
      { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
      { name: "Gemini AI", icon: <SiGooglegemini color="#8E75B2" /> }
    ],
    github: "https://github.com/Princeag1310/CureCart"
  },
  {
    title: "OmniReach SaaS",
    description: "A scalable email marketing SaaS alternative to Mailchimp. Built real-time delivery tracking via Socket.io and AWS SES/SNS webhooks.",
    tech: [
      { name: "React", icon: <SiReact color="#61DAFB" /> },
      { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
      { name: "AWS", icon: <FaAws color="#FF9900" /> },
      { name: "Socket.io", icon: <SiSocketdotio /> }
    ],
    github: "https://github.com/Princeag1310/OmniReach"
  },
  {
    title: "FoodieReels",
    description: "An Instagram-style food discovery REST API. Embedded an infinite-scroll timeline with Fisher-Yates deduplication and a Gemini AI chatbot.",
    tech: [
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
      { name: "React", icon: <SiReact color="#61DAFB" /> },
      { name: "Gemini AI", icon: <SiGooglegemini color="#8E75B2" /> }
    ],
    github: "https://github.com/Princeag1310/foodie-reels"
  },
  {
    title: "Brainly",
    description: "A collaborative knowledge-sharing application that empowers students to ask questions and find answers quickly.",
    tech: [
      { name: "React", icon: <SiReact color="#61DAFB" /> },
      { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> }
    ],
    github: "https://github.com/Princeag1310/Brainly"
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
                  <div key={t.name} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', padding: '6px 14px', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}>
                    <span style={{ fontSize: '1.1rem' }}>{t.icon}</span> {t.name}
                  </div>
                ))}
              </div>
              
              <div style={{ display: 'flex', gap: '16px' }}>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="glass-button" style={{ width: '100%', justifyContent: 'center' }}>
                  <FaGithub size={20} /> View Source
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
