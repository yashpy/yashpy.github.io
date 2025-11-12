import React, { useState, useRef } from "react";
import { 
  FaJava, 
  FaPython, 
  FaReact, 
  FaNodeJs, 
  FaAws, 
  FaDocker, 
  FaDatabase, 
  FaCogs, 
  FaCloud, 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare, 
  FaAngular, 
  FaGithub,       // for footer / social
  FaLinkedin,     // for footer / social
  FaEnvelope      // for email
} from "react-icons/fa";

import { 
  SiSpringboot, SiMongodb, SiPostgresql, SiTensorflow, SiOpencv, SiKubernetes, 
  SiTypescript, SiMysql, SiJenkins 
} from "react-icons/si";

import { SiGmail } from "react-icons/si";

export default function App() {
  const sections = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  const scrollTo = (key) =>
    sections[key].current?.scrollIntoView({ behavior: "smooth", block: "start" });

  const experienceData = [
    {
      role: "Associate Software Engineer",
      company: "Siemens DISW",
      date: "Jan 2024 – Present",
      details: [
        "Led a team of four for UI development & performance optimization of Admin Console, improving speed by 20%.",
        "Reduced QV-reported bugs by 70% via improved code quality & analytics dashboards.",
        "Developed automated UI test scripts, improving release reliability.",
      ],
      tech: [<FaAngular color="#DD0031" />, <FaNodeJs color="#68A063" />, <FaJava color="#007396" />],
    },
    {
      role: "Graduate Trainee Engineer",
      company: "Siemens DISW",
      date: "Jul 2022 – Dec 2023",
      details: [
        "Deployed MindConnect device plugin across AWS, Azure & Private Cloud via CI/CD pipelines.",
        "Resolved critical CVEs and optimized memory performance by 90%.",
        "Authored technical documentation for multi-cloud deployment guides.",
      ],
      tech: [<FaAws color="#FF9900" />, <FaCloud color="#00ADEF" />, <FaNodeJs color="#68A063" />],
    },
    {
      role: "Software Development Intern",
      company: "Siemens DISW",
      date: "Feb 2022 – Jun 2022",
      details: [
        "Built proof-of-concept PLC data browser & version upgrade system, boosting efficiency by 40%.",
        "Collaborated with senior engineers on architecture & code optimization.",
      ],
      tech: [<SiSpringboot color="#6DB33F" />, <FaAws color="#FF9900" />, <FaCloud color="#00ADEF" />],
    },
  ];

  const projectData = [
    {
      id: 1,
      title: "Sentiment Analysis of User Speech Data",
      desc: "Built emotion detection model (>82% accuracy) using NLP and ML models such as SVM, XGBoost, and MLP.",
      tech: [<FaPython color="#3776AB" />, <SiTensorflow color="#FF6F00" />, <FaCogs color="#6B7280" />],
      img: "/images/sentiment_analysis.png",
      github: "https://github.com/yashpy/BTECH_Project",
    },
    {
      id: 2,
      title: "Virtual Police Station",
      desc: "Developed a full-stack web app to digitize crime records and automate reporting workflows.",
      tech: [<FaReact color="#61DBFB" />, <FaHtml5 color="#E34F26" />, <FaCss3Alt color="#1572B6" />, <SiMysql color="#4479A1" />],
      img: "/images/virtual_police_station.png",
      github: "https://github.com/yashpy/Virtual-police_station",
    },
    {
      id: 3,
      title: "D-Detecto",
      desc: "Detected Dream11 logos using YOLOv3; compared YOLO vs SSD for accuracy and speed.",
      tech: [<FaPython color="#3776AB" />, <SiOpencv color="#5C3EE8" />, <SiTensorflow color="#FF6F00" />],
      img: "/images/d_detecto.webp",
      github: "https://github.com/yashpy/ObjectDetection",
    },
    {
      id: 4,
      title: "Scrapdeal – Campus Marketplace",
      desc: "Android app for campus trading using Firebase backend, deployed on Aptoide Store.",
      tech: [<FaJava color="#007396" />, <FaDatabase color="#6B7280" />, <FaCogs color="#6B7280" />],
      img: "/images/scrapdeal.png",
      github: "https://github.com/yashpy/Scrapdeal",
    },
  ];

  const skillIcons = [
    { name: "C++", icon: <FaCogs color="#6B7280" size={40} /> },
    { name: "Java", icon: <FaJava color="#007396" size={40} /> },
    { name: "Python", icon: <FaPython color="#3776AB" size={40} /> },
    { name: "JavaScript", icon: <FaJsSquare color="#F7DF1E" size={40} /> },
    { name: "TypeScript", icon: <SiTypescript color="#3178C6" size={40} /> },
    { name: "React", icon: <FaReact color="#61DBFB" size={40} /> },
    { name: "Angular", icon: <FaAngular color="#DD0031" size={40} /> },
    { name: "Spring Boot", icon: <SiSpringboot color="#6DB33F" size={40} /> },
    { name: "Node.js", icon: <FaNodeJs color="#68A063" size={40} /> },
    { name: "PostgreSQL", icon: <SiPostgresql color="#336791" size={40} /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" size={40} /> },
    { name: "MySQL", icon: <SiMysql color="#4479A1" size={40} /> },
    { name: "AWS", icon: <FaAws color="#FF9900" size={40} /> },
    { name: "Docker", icon: <FaDocker color="#2496ED" size={40} /> },
    { name: "Kubernetes", icon: <SiKubernetes color="#326CE5" size={40} /> },
    { name: "Jenkins", icon: <SiJenkins color="#D24939" size={40} /> },
    { name: "TensorFlow", icon: <SiTensorflow color="#FF6F00" size={40} /> },
    { name: "OpenCV", icon: <SiOpencv color="#5C3EE8" size={40} /> },
    { name: "Databases", icon: <FaDatabase color="#6B7280" size={40} /> },
    { name: "Cloud", icon: <FaCloud color="#00ADEF" size={40} /> },
  ];

      const blogData = [
      {
        id: 1,
        title: "The Synergy of Quantum Computing and AI in Manufacturing: A Path to Enhanced Efficiency",
        link: "https://medium.com/@yadnesh-deshpande1/the-synergy-of-quantum-computing-and-ai-in-manufacturing-a-path-to-enhanced-efficiency-and-1bf0cddbe10e",
        date: "Published Oct 30, 2024 · 5 min read · Updated Nov 14, 2024",
        img: "/images/B4.jpg",
      },
      {
        id: 2,
        title: "Object Detection Study and Analysis: (Accuracy, speed (YOLO & SSD))",
        link: "https://medium.com/@yadnesh-deshpande1/object-detection-study-and-analysis-accuracy-speed-yolo-ssd-91ec4032661a",
        date: "Published Dec 30, 2020 · 12 min read · Updated Dec 25, 2021",
        img: "/images/B3.png",
      },
      {
        id: 3,
        title: "Google Cloud Platform — The Good, Bad, and Ugly (It’s Mostly Good)",
        link: "https://medium.com/@yadnesh-deshpande1/google-cloud-platform-the-good-bad-and-ugly-its-mostly-good-a0089677cccf",
        date: "Published Oct 9, 2020 · 5 min read · Updated Dec 15, 2021",
        img: "/images/B2.png",
      },
      {
        id: 4,
        title: "How Netflix works to stream a video to its User",
        link: "https://medium.com/@yadnesh-deshpande1/how-netflix-work-to-stream-a-video-to-its-user-10fcdccd3044",
        date: "Published Sep 8, 2020 · 4 min read · Updated Dec 15, 2021",
        img: "/images/B1.jpg",
      },
    ];


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      {/* NAV */}
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-30 w-[92%] max-w-5xl">
        <nav className="backdrop-blur-md bg-white/60 border border-gray-200 rounded-2xl p-3 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">YD</div>
            <div className="font-semibold">Yadnesh Deshpande</div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button onClick={() => scrollTo('home')} className="nav-btn">Home</button>
            <button onClick={() => scrollTo('about')} className="nav-btn">About</button>
            <button onClick={() => scrollTo('skills')} className="nav-btn">Skills</button>
            <button onClick={() => scrollTo('experience')} className="nav-btn">Experience</button>
            <button onClick={() => scrollTo('projects')} className="nav-btn">Projects</button>
            <button onClick={() => scrollTo('contact')} className="nav-btn">Contact</button>
          </div>
          <div className="flex items-center gap-2">
            <a href="https://drive.google.com/file/d/1pKTcmy2m02kDk9bcOipJlsrbWlugTZrm/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-sm py-2 px-3 border rounded-md">Resume</a>
          </div>
        </nav>
      </header>

      <main className="pt-28 space-y-24">

        {/* HERO */}
        <section ref={sections.home} id="home" className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Hi — I’m <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">Yadnesh</span><br />
              I build delightful web experiences.
            </h1>
            <p className="mt-6 text-gray-700">
              Software developer with experience in web apps, IoT, and low-code applications. Passionate about interactive UI, accessible design, and rapid prototyping.
            </p>
            <div className="mt-6 flex gap-3">
              <button onClick={() => scrollTo('projects')} className="px-4 py-2 rounded-lg border font-medium">See projects</button>
              <button onClick={() => scrollTo('contact')} className="px-4 py-2 rounded-lg bg-indigo-600 text-white">Get in touch</button>
            </div>
          </div>
        <div className="p-6 rounded-2xl bg-white max-w-20xl mx-auto flex justify-center">
          <img
            src="/images/portfolio.png"
            alt="Hero"
            className="w-full h-100 md:h-100 lg:h-56"
          />
        </div>
        </section>

        {/* ABOUT */}
    <section ref={sections.about} id="about" className="max-w-5xl mx-auto px-6 py-16">
      <div className="rounded-2xl p-8 bg-white shadow-sm">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="mt-4 text-gray-700">
          I design and code simple, accessible web apps. My work focuses on performance, maintainable CSS, and delightful UI details. I have experience with IoT, low-code development, and building scalable software solutions.
        </p>
        <h3 className="mt-6 font-semibold">Volunteering & Leadership</h3>
        <ul className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="p-3 border rounded-md">SAIT – Information Director / Mentor</li>
          <li className="p-3 border rounded-md">Lab Admin Committee – Administrator</li>
          <li className="p-3 border rounded-md">WLUG – Member</li>
          <li className="p-3 border rounded-md">iVolunteer – Tutor / Assignment Manager</li>
        </ul>
      </div>
    </section>

        {/* SKILLS */}
    <section ref={sections.skills} id="skills" className="max-w-5xl mx-auto px-6 py-16">
      <div className="rounded-2xl border border-gray-100 p-8 bg-white shadow-sm">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {skillIcons.map((s) => (
            <div key={s.name} className="p-4 border rounded-md flex flex-col items-center justify-center">
              <div className="text-4xl mb-2 text-indigo-500">{s.icon}</div>
              <span className="text-sm font-medium">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

        {/* EXPERIENCE */}
        <section ref={sections.experience} id="experience" className="max-w-5xl mx-auto px-6 py-16">
          <h3 className="text-xl font-semibold mb-8">Experience</h3>
          <div className="relative border-l-2 border border-gray-100 ml-4">
            {experienceData.map((exp, idx) => (
              <div key={idx} className="mb-8 ml-6 relative">
                <span className="absolute -left-5 top-0 w-4 h-4 rounded-full bg-indigo-500"></span>
                <h4 className="font-semibold">{exp.role}</h4>
                <p className="text-gray-500">{exp.company} • {exp.date}</p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  {exp.details.map((d,i)=><li key={i}>{d}</li>)}
                </ul>
                <div className="flex flex-wrap gap-2 mt-2 text-xs text-gray-500">
                  {exp.tech.map((t,i)=><span key={i} className="px-2 py-1 border rounded">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS GRID */}
<section ref={sections.projects} id="projects" className="max-w-5xl mx-auto px-6 py-16">
  <h3 className="text-xl font-semibold mb-6">Projects</h3>
  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
    {projectData.map(p => (
      <a
        key={p.id}
        href={p.github}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative rounded-lg overflow-hidden shadow-lg cursor-pointer bg-gray-100"
      >
        <img
          src={p.img}
          alt={p.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-center p-4">
          <h4 className="text-white font-semibold">{p.title}</h4>
        </div>
      </a>
    ))}
  </div>
</section>


      <section id="blogs" className="max-w-5xl mx-auto px-6 py-16">
        <h3 className="text-xl font-semibold mb-6">Blogs & Articles</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogData.map(blog => (
            <a 
              key={blog.id} 
              href={blog.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative rounded-lg overflow-hidden shadow-lg cursor-pointer bg-gray-100"
            >
              {blog.img && (
                <img 
                  src={blog.img} 
                  alt={blog.title} 
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" 
                />
              )}
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 group-hover:text-indigo-600">{blog.title}</h4>
                <p className="text-gray-500 text-sm mt-1">{blog.date}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

        {/* CONTACT */}
        <section ref={sections.contact} id="contact" className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm">
              <h3 className="text-xl font-semibold">Get in touch</h3>
              <p className="text-gray-600 mt-2">Whether it’s a project, collaboration or just a hello — I’m open to new opportunities.</p>
              <div className="mt-4 text-sm text-gray-700">
                <div>✉️ yadnesh.deshpande2.1@gmail.com</div>
                <div>💼 <a href="https://linkedin.com/in/yadneshsdeshpande" target="_blank" rel="noopener noreferrer">LinkedIn</a> — <a href="https://github.com/yashpy" target="_blank" rel="noopener noreferrer">GitHub</a></div>
              </div>
            </div>
            <form onSubmit={(e)=>{e.preventDefault(); alert('Message sent (placeholder)')}} className="p-6 rounded-2xl border bg-white shadow-sm">
              <label className="block">Name <input required className="w-full mt-2 p-2 border rounded" /></label>
              <label className="block mt-4">Email <input required type="email" className="w-full mt-2 p-2 border rounded" /></label>
              <label className="block mt-4">Message <textarea required className="w-full mt-2 p-2 border rounded" rows={4} /></label>
              <div className="mt-4">
                <button className="px-4 py-2 bg-indigo-600 text-white rounded">Send</button>
              </div>
            </form>
          </div>
        </section>

      <footer className="max-w-5xl mx-auto px-6 py-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-700">
        {/* Quick Nav */}
        <div className="flex gap-4">
        </div>

        {/* Social Links */}
      <div className="flex gap-4 text-xl">
        <a href="https://linkedin.com/in/yadneshsdeshpande" target="_blank" rel="noopener noreferrer">
          <FaLinkedin color="#0A66C2" /> {/* LinkedIn blue */}
        </a>
        <a href="https://github.com/yashpy" target="_blank" rel="noopener noreferrer">
          <FaGithub color="#171515" /> {/* GitHub black */}
        </a>
        <a href="mailto:yadnesh.deshpande2.1@gmail.com">
          <SiGmail color="#D14836" /> {/* Email red */}
        </a>
      </div>
      </footer>

      </main>

      <style jsx>{`
        .nav-btn { background: transparent; border: none; padding: 6px 8px; cursor: pointer; font-weight: 500; }
        .nav-btn:hover { transform: translateY(-2px); }
      `}</style>
    </div>
  );
}
