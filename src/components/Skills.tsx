import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C/C++", "SQL"]
  },
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "shadcn/ui", "Redux", "HTML5/CSS3"]
  },
  {
    title: "Backend & Databases",
    skills: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Prisma ORM", "Socket.io", "Firebase", "JWT"]
  },
  {
    title: "AI & Tools",
    skills: ["Google Gemini AI", "RAG Pipelines", "OCR", "AWS SES/SNS", "Git/GitHub", "Docker/CI-CD", "Vercel"]
  }
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2>Technical Skills</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel"
              style={{ padding: '24px' }}
            >
              <h3 style={{ marginBottom: '16px', fontSize: '1.2rem', color: '#fff' }}>{category.title}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {category.skills.map(skill => (
                  <span key={skill} style={{ background: 'rgba(255,255,255,0.1)', padding: '6px 14px', borderRadius: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
