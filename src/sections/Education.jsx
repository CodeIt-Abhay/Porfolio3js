import React from "react";
import { motion } from "motion/react";

const educationData = [
  {
    institution: "Galgotias University, Greater Noida",
    degree: "B.Tech, Computer Science & Engineering",
    duration: "Graduating 2026",
    metric: "CGPA: 7.56",
    details: "Focus on Java, Object-Oriented Programming, SQL, and Web Development."
  },
  {
    institution: "D.A.V Public School, CBSE",
    degree: "Class XII (Senior Secondary)",
    duration: "Completed 2022",
    metric: "Percentage: 76.8%",
    details: "Science Stream (PCM)."
  },
  {
    institution: "D.A.V Public School, CBSE",
    degree: "Class X (Secondary)",
    duration: "Completed 2020",
    metric: "Percentage: 88.8%",
    details: "General subjects."
  }
];

const certifications = [
  "Software Engineering NPTEL - IIT Kharagpur",
  "CCNA - Introduction to Networks"
];

const achievements = [
  "Winner of Ideathon - February 2023"
];

const Education = () => {
  return (
    <section className="c-space section-spacing" id="education">
      <h2 className="text-heading">Education & Credentials</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      
      <div className="grid grid-cols-1 gap-8 mt-12 lg:grid-cols-3">
        {/* Education Timeline */}
        <div className="flex flex-col gap-6 lg:col-span-2">
          <h3 className="text-xl font-semibold text-neutral-200">Education</h3>
          <div className="flex flex-col gap-6 border-l border-white/10 pl-6 ml-2">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex flex-col gap-2 p-6 rounded-2xl bg-midnight/50 border border-white/5 hover:border-white/10 hover-animation"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] top-8 w-2 h-2 rounded-full bg-lavender" />
                
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                  <span className="text-sm font-medium text-lavender">{edu.duration}</span>
                </div>
                <p className="text-sm text-neutral-400 font-medium">{edu.institution}</p>
                <div className="flex items-center gap-4 mt-2">
                  <span className="px-3 py-1 text-xs rounded-full bg-lavender/10 text-lavender font-semibold border border-lavender/25">
                    {edu.metric}
                  </span>
                  <span className="text-sm text-neutral-400">{edu.details}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications & Achievements */}
        <div className="flex flex-col gap-8">
          {/* Certifications */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-neutral-200">Certifications</h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col gap-3 p-6 rounded-2xl bg-gradient-to-b from-storm to-indigo border border-white/5"
            >
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-lavender flex-shrink-0" />
                  <p className="text-sm text-neutral-300 font-medium">{cert}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Achievements */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-neutral-200">Achievements</h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col gap-3 p-6 rounded-2xl bg-gradient-to-b from-royal to-lavender border border-white/5"
            >
              {achievements.map((ach, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                  <p className="text-sm text-white font-medium">{ach}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
