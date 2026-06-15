import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiJavascript, SiTypescript, SiPython, SiCplusplus, SiReact, SiNextdotjs, 
  SiTailwindcss, SiRedux, SiNodedotjs, SiExpress, 
  SiPostgresql, SiMongodb, SiPrisma, SiSocketdotio, SiFirebase, SiJsonwebtokens, 
  SiVercel, SiGit, SiGithub, SiDocker, SiGooglegemini, SiLinux
} from 'react-icons/si';
import { FaJava, FaAws, FaCss3Alt, FaHtml5, FaNetworkWired, FaDatabase, FaCodeBranch } from 'react-icons/fa';

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
      { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
      { name: "Python", icon: <SiPython color="#3776AB" /> },
      { name: "Java", icon: <FaJava color="#007396" /> },
      { name: "C/C++", icon: <SiCplusplus color="#00599C" /> }
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: <SiReact color="#61DAFB" /> },
      { name: "Next.js", icon: <SiNextdotjs color="#ffffff" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
      { name: "Redux", icon: <SiRedux color="#764ABC" /> },
      { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
      { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> }
    ]
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
      { name: "Express.js", icon: <SiExpress color="#ffffff" /> },
      { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
      { name: "Prisma", icon: <SiPrisma color="#2D3748" /> },
      { name: "Socket.io", icon: <SiSocketdotio color="#ffffff" /> },
      { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
      { name: "JWT", icon: <SiJsonwebtokens color="#ffffff" /> }
    ]
  },
  {
    title: "Core Fundamentals",
    skills: [
      { name: "OOPs", icon: <FaCodeBranch color="#f05032" /> },
      { name: "DBMS", icon: <FaDatabase color="#4facfe" /> },
      { name: "Operating Systems", icon: <SiLinux color="#FCC624" /> },
      { name: "Computer Networks", icon: <FaNetworkWired color="#a855f7" /> }
    ]
  },
  {
    title: "AI & Tools",
    skills: [
      { name: "Gemini AI", icon: <SiGooglegemini color="#8E75B2" /> },
      { name: "AWS", icon: <FaAws color="#FF9900" /> },
      { name: "Docker", icon: <SiDocker color="#2496ED" /> },
      { name: "Vercel", icon: <SiVercel color="#ffffff" /> },
      { name: "Git", icon: <SiGit color="#F05032" /> },
      { name: "GitHub", icon: <SiGithub color="#ffffff" /> }
    ]
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel"
              style={{ padding: '30px', borderColor: 'rgba(254, 9, 121, 0.2)' }}
            >
              <h3 style={{ marginBottom: '24px', fontSize: '1.4rem', color: '#fff', textAlign: 'center' }}>{category.title}</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                {category.skills.map((skill) => (
                  <motion.div 
                    key={skill.name} 
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)', boxShadow: '0 0 15px rgba(0, 242, 254, 0.5)' }}
                    style={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center', 
                      gap: '8px',
                      background: 'rgba(0,0,0,0.3)', 
                      padding: '12px', 
                      borderRadius: '12px', 
                      cursor: 'pointer',
                      border: '1px solid rgba(255,255,255,0.05)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <motion.div 
                      whileHover={{ rotate: [0, -15, 15, -15, 0], scale: 1.2 }}
                      transition={{ duration: 0.4 }}
                      style={{ fontSize: '2.2rem' }}
                    >
                      {skill.icon}
                    </motion.div>
                    <span style={{ fontSize: '0.85rem', color: '#fff', fontWeight: 500, textAlign: 'center' }}>
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
