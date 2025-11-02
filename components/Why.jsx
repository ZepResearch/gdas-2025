'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Globe, Award, Target, Zap } from 'lucide-react';

export default function WhyGDAS() {
  const reasons = [
    {
      icon: Users,
      title: "Hear from Global Leaders",
      description: "Learn directly from senior decision-makers, defence strategists, and aviation industry thought leaders who are shaping the next generation of global defence and aerospace capability.",
      points: [
        "Keynotes from ministers and air-force commanders",
        "Executive panels with industry and academia",
        "Future-readiness discussions on workforce transformation"
      ]
    },
    {
      icon: TrendingUp,
      title: "Gain Strategic Insights",
      description: "Understand the emerging technologies, training paradigms, and skill demands that will define success in future defence and aviation missions.",
      points: [
        "Trends in autonomy, UAS, and simulation training",
        "Impact of AI and cyber systems on workforce design",
        "Strategies for sustainable human-capability growth"
      ]
    },
    {
      icon: Globe,
      title: "Connect Across Borders",
      description: "Build valuable relationships with peers from governments, industry, academia, and defence training institutions across Europe and Asia.",
      points: [
        "Networking with global defence and aviation experts",
        "Bilateral and multilateral collaboration sessions",
        "Cross-sector dialogue for capability development"
      ]
    },
    {
      icon: Award,
      title: "Lead the Skills Transformation",
      description: "Explore how leadership in education, training, and human-capability development will determine operational superiority in defence and aviation.",
      points: [
        "Workforce transformation frameworks",
        "Next-gen education and TVET integration",
        "Human performance and leadership innovation"
      ]
    },
    {
      icon: Target,
      title: "Join a Truly Global Forum",
      description: "Participate in an interactive platform that not only explores \"what's next\" but demonstrates \"how to adapt\" to the evolving global defence and aviation environment.",
      points: [
        "Interactive dialogue sessions",
        "Case studies and live strategy discussions",
        "Global collaboration for capability advancement"
      ]
    },
    {
      icon: Zap,
      title: "Experience Innovation in Action",
      description: "Engage in demonstrations and discussions that highlight practical innovation in defence training, aviation systems, and emerging technologies.",
      points: [
        "Live technology showcases",
        "Simulation and AI demonstrations",
        "Applied research and pilot programs"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 px-4 md:py-24 ">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-medium text-blue-900 mb-4">
            Why GDAS 2025
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-blue-100 hover:shadow-2xl transition-shadow duration-300"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                  className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mb-6"
                >
                  <Icon className="w-7 h-7 text-white" />
                </motion.div>

                <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">
                  {reason.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {reason.description}
                </p>

                <ul className="space-y-3">
                  {reason.points.map((point, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + idx * 0.1 + 0.4 }}
                      className="flex items-start text-sm text-gray-700"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}