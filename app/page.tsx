"use client";

import { motion } from "framer-motion";
import {
  Terminal,
  Database,
  Code,
  BrainCircuit,
  Mail,
  Phone,
  MapPin,
  Globe,
  GitBranch,
  Briefcase,
  GraduationCap,
  LineChart
} from "lucide-react";

export default function Home() {
  const projects = [
    {
      title: "Emotion Detection Using Texts",
      tech: "NLP • Machine Learning",
      description: "A machine learning model trained to classify text messages into discrete emotional states.",
      link: "https://github.com/lashanc7/emotion_detection_using_text"
    },
    {
      title: "Pseudocode Generation Model",
      tech: "AI • Agentic Models",
      description: "An automated model designed to generate pseudocode, enhancing logical thinking and problem decomposition.",
      link: "https://github.com/lashanc7/pseudocode_model"
    },
    {
      title: "Online Shopping App",
      tech: "Mobile App Development • E-commerce",
      description: "A digital ecosystem application built for seamless online clothing retail.",
      link: "https://github.com/lashanc7/ClothingShopApp"
    },
    {
      title: "Entertainment Service Website",
      tech: "Internet Programming • User-Centric Design",
      description: "A web platform dedicated to providing entertainment services with a focus on UI/UX.",
      link: "https://github.com/lashanc7/webpage"
    }
  ];

  return (
    <main className="min-h-screen flex flex-col items-center relative overflow-hidden pb-24">

      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <a href="#home" className="text-xl font-extrabold tracking-tighter text-white hover:opacity-80 transition-opacity">
            Lashan<span className="text-cyan-400">.dev</span>
          </a>
          <div className="hidden md:flex gap-8 text-sm font-mono text-slate-300">
            <a href="#skills" className="hover:text-cyan-400 transition-colors">// Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">// Projects</a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">// Education</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">// Experience</a>
          </div>
        </div>
      </nav>

      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Section */}
      <motion.div
        id="home"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-5xl z-10 mt-28 mb-24 px-8"
      >
        <h2 className="text-cyan-400 tracking-[0.4em] font-bold uppercase mb-6 text-sm">
          Hi, I'm
        </h2>

        <h1 className="text-6xl md:text-8xl font-extrabold mb-4 tracking-tighter text-white">
          Lashan Chanaka.
        </h1>

        <h2 className="text-3xl md:text-5xl font-bold text-cyan-400 mb-8 leading-tight tracking-tight">
          Tech & Analytics Enthusiast, <br className="hidden md:block" />
          Consumer Engagement Strategist.
        </h2>

        {/* Updated Bio Section */}
        <p className="text-slate-300 text-base md:text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
          Driven BSc Information Technology undergraduate with a strong foundation in technical problem-solving and a passionate interest in marketing. Eager to leverage analytical skills and a deep understanding of digital ecosystems to drive data-backed marketing strategies, optimize campaigns, and bridge the gap between complex technology and consumer engagement.
        </p>

        {/* Contact Bar */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400 font-mono mb-16">
          <a href="mailto:chanakalashan078@gmail.com" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
            <Mail className="w-4 h-4" /> chanakalashan078@gmail.com
          </a>
          <span className="flex items-center gap-2">
            <Phone className="w-4 h-4" /> +94 770120009
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" /> Kalutara, Sri Lanka
          </span>
          <a href="https://www.linkedin.com/in/lashanchanaka/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
            <Globe className="w-4 h-4" /> LinkedIn
          </a>
        </div>
      </motion.div>

      {/* Skill Pillars */}
      <motion.div
        id="skills"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-full max-w-5xl z-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-24 px-8 scroll-mt-24"
      >
        <div className="glass-panel p-6">
          <Code className="text-cyan-400 mb-4 h-8 w-8" />
          <h3 className="font-bold text-lg mb-2 text-slate-100">Software Engineering</h3>
          <p className="text-sm text-slate-400">Focused on Object-Oriented Programming, Mobile App Development, and building digital ecosystems.</p>
        </div>

        <div className="glass-panel p-6">
          <LineChart className="text-cyan-400 mb-4 h-8 w-8" />
          <h3 className="font-bold text-lg mb-2 text-slate-100">Data-Driven Marketing</h3>
          <p className="text-sm text-slate-400">Leveraging analytical skills to optimize campaigns and drive data-backed marketing strategies.</p>
        </div>

        <div className="glass-panel p-6">
          <BrainCircuit className="text-cyan-400 mb-4 h-8 w-8" />
          <h3 className="font-bold text-lg mb-2 text-slate-100">Agentic AI</h3>
          <p className="text-sm text-slate-400">Passionate interest in intelligence systems, automation, and deploying analytical models.</p>
        </div>
      </motion.div>

      {/* Projects Section */}
      <motion.div
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-full max-w-5xl z-10 mb-24 px-8 scroll-mt-24"
      >
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-slate-50">
          <Terminal className="text-cyan-400" />
          Personal Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="glass-panel p-8 flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-100">{project.title}</h3>
                  <p className="text-cyan-400 font-mono text-xs mt-2">{project.tech}</p>
                </div>
              </div>
              <p className="text-slate-400 mb-8 text-sm flex-grow">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm font-mono text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <GitBranch className="w-4 h-4" /> View Repository
              </a>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Education Section */}
      <motion.div
        id="education"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-full max-w-5xl z-10 mb-16 px-8 scroll-mt-24"
      >
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-slate-50">
          <GraduationCap className="text-cyan-400" />
          Education
        </h2>
        <div className="relative border-l border-slate-800 ml-3 space-y-10">

          <div className="pl-6 relative">
            <div className="absolute w-3 h-3 bg-cyan-400 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
            <h3 className="font-bold text-lg text-slate-100">B.Sc. (General) degree in Information Technology</h3>
            <p className="text-cyan-400 text-sm font-mono mt-1">2023 - 2026</p>
            <p className="text-slate-300 mt-2 font-medium">Rajarata University of Sri Lanka.</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mt-4 text-sm text-slate-400 list-disc list-inside">
              <li>Software Engineering</li>
              <li>Internet Programming</li>
              <li>Management Information Systems</li>
              <li>Object Oriented Programming</li>
              <li>Introduction to Intelligence Systems</li>
              <li>Information Systems Security</li>
              <li>Principles and Practices of Marketing</li>
              <li>Human Computer Interaction</li>
            </ul>
          </div>

          <div className="pl-6 relative">
            <div className="absolute w-3 h-3 bg-slate-700 rounded-full -left-[6.5px] top-1.5" />
            <h3 className="font-bold text-lg text-slate-100">G.C.E. A/L passed.</h3>
            <p className="text-slate-500 text-sm font-mono mt-1">2019</p>
            <p className="text-slate-400 mt-2">in commerce stream.</p>
          </div>

          <div className="pl-6 relative">
            <div className="absolute w-3 h-3 bg-slate-700 rounded-full -left-[6.5px] top-1.5" />
            <h3 className="font-bold text-lg text-slate-100">G.C.E. O/L Passed.</h3>
            <p className="text-slate-500 text-sm font-mono mt-1">2016</p>
            <p className="text-slate-400 mt-2">with nine distinction passes.</p>
          </div>

        </div>
      </motion.div>

      {/* Experience Section */}
      <motion.div
        id="experience"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-full max-w-5xl z-10 mb-24 px-8 scroll-mt-24"
      >
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-slate-50">
          <Briefcase className="text-cyan-400" />
          Experience
        </h2>
        <div className="relative border-l border-slate-800 ml-3 space-y-10">

          <div className="pl-6 relative">
            <div className="absolute w-3 h-3 bg-cyan-400 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
            <h3 className="font-bold text-lg text-slate-100">Supervisor</h3>
            <p className="text-cyan-400 text-sm font-mono mt-1">08/2021 - 12/2022</p>
            <p className="text-slate-300 mt-2">Hayleys Fabric PLC</p>
            <p className="text-slate-500 text-sm mt-1">Managed warehouse operations for outsource deliveries.</p>
          </div>

          <div className="pl-6 relative">
            <div className="absolute w-3 h-3 bg-slate-700 rounded-full -left-[6.5px] top-1.5" />
            <h3 className="font-bold text-lg text-slate-100">Sales Promoter</h3>
            <p className="text-slate-500 text-sm font-mono mt-1">12/2019 - 04/2020</p>
            <p className="text-slate-400 mt-2">Huawei Sri Lanka</p>
          </div>

        </div>
      </motion.div>

    </main>
  );
}