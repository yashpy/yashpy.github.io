import React, { useState, useRef } from 'react';

export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  

  const sections = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  const projectData = [
    {
      id: 1,
      title: 'Object Detection Study & Analysis',
      desc: 'Compared YOLO and SSD models for accuracy and speed; explored practical implementation for real-time systems.',
      tech: ['Python', 'ML', 'YOLO', 'SSD'],
      img: null,
      link: 'https://medium.com/@yadneshsdeshpande/object-detection-study-and-analysis-yolo-ssd-...',
    },
    {
      id: 2,
      title: 'Mendix Rapid Developer App',
      desc: 'Built low-code applications for Siemens Digital Industries Software; implemented workflows and interactive features.',
      tech: ['Mendix', 'Low-Code', 'UI/UX'],
      img: null,
      link: '#',
    },
    {
      id: 3,
      title: 'Portfolio Projects (yashpy)',
      desc: 'Various GitHub projects including algorithms, web apps, and data analysis scripts.',
      tech: ['React', 'Python', 'HTML', 'CSS', 'JS'],
      img: null,
      link: 'https://github.com/yashpy',
    },
    {
      id: 4,
      title: 'Bolt IoT Internship Project',
      desc: 'Hands-on IoT prototyping with sensors and cloud integration; implemented functional IoT applications.',
      tech: ['IoT', 'Python', 'Sensors'],
      img: null,
      link: '#',
    },
  ];

  function scrollTo(key) {
    sections[key].current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      {/* NAV */}
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-30 w-[92%] max-w-5xl">
        <nav className="backdrop-blur-md bg-white/60 border border-gray-200 rounded-2xl p-3 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">YD</div>
            <div className="font-semibold">Yadnesh</div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button onClick={() => scrollTo('home')} className="nav-btn">Home</button>
            <button onClick={() => scrollTo('about')} className="nav-btn">About</button>
            <button onClick={() => scrollTo('skills')} className="nav-btn">Skills</button>
            <button onClick={() => scrollTo('projects')} className="nav-btn">Projects</button>
            <button onClick={() => scrollTo('contact')} className="nav-btn">Contact</button>
          </div>
          <div className="flex items-center gap-2">
            <a href="https://drive.google.com/your-resume-link" target="_blank" rel="noopener noreferrer" className="text-sm py-2 px-3 border rounded-md">Resume</a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <main className="pt-28">
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
              <a href="#contact" onClick={() => scrollTo('contact')} className="px-4 py-2 rounded-lg bg-indigo-600 text-white">Get in touch</a>
            </div>
          </div>
          <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-lg">
            <div className="w-full h-64 rounded-lg bg-gradient-to-tr from-indigo-50 to-pink-50 flex items-center justify-center">Screenshot / Illustration</div>
          </div>
        </section>

        {/* ABOUT */}
        <section ref={sections.about} id="about" className="max-w-5xl mx-auto px-6 py-16">
          <div className="rounded-2xl border border-gray-100 p-8 bg-white shadow-sm">
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
          <h3 className="text-xl font-semibold">Skills</h3>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'Tailwind', 'Mendix', 'Git', 'Accessibility'].map(s => (
              <div key={s} className="p-3 border rounded-md text-center">{s}</div>
            ))}
          </div>
        </section>

        {/* PROJECTS Carousel */}
        <section ref={sections.projects} id="projects" className="max-w-5xl mx-auto px-6 py-16">
          <h3 className="text-xl font-semibold">Projects</h3>
          <p className="text-gray-600 mt-2">Hover left/right or click arrows to navigate projects.</p>

          <div className="relative mt-8 flex items-center justify-center">
            {/* Left arrow */}
            <button
              onClick={() => setActiveIndex((activeIndex - 1 + projectData.length) % projectData.length)}
              className="absolute left-0 z-10 bg-white border p-2 rounded-full shadow hover:bg-gray-100"
            >
              ◀
            </button>

            {/* Carousel container */}
            <div className="flex items-center justify-center w-full overflow-hidden">
              {projectData.map((p, index) => {
                const offset = index - activeIndex;
                const isActive = offset === 0;
                const isLeft = offset === -1 || (activeIndex === 0 && index === projectData.length - 1);
                const isRight = offset === 1 || (activeIndex === projectData.length - 1 && index === 0);

                let translateX = offset * 220;
                let scale = isActive ? 1 : 0.75;
                let zIndex = isActive ? 20 : 10;

                return (
                  <div
                    key={p.id}
                    onClick={() => setActiveProject(p)}
                    onMouseEnter={() => {
                      if (isLeft) setActiveIndex((activeIndex - 1 + projectData.length) % projectData.length);
                      if (isRight) setActiveIndex((activeIndex + 1) % projectData.length);
                    }}
                    className={`flex-none mx-4 cursor-pointer transition-transform duration-500`}
                    style={{
                      transform: `translateX(${translateX}px) scale(${scale})`,
                      zIndex,
                    }}
                  >
                    <div className="h-40 rounded-lg bg-gray-100 flex items-center justify-center">Project image</div>
                    <h4 className="mt-4 font-semibold">{p.title}</h4>
                    <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
                    <div className="mt-3 flex flex-wrap gap-2 text-xs text-gray-500">
                      {p.tech.map(t => <span key={t} className="px-2 py-1 border rounded">{t}</span>)}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right arrow */}
            <button
              onClick={() => setActiveIndex((activeIndex + 1) % projectData.length)}
              className="absolute right-0 z-10 bg-white border p-2 rounded-full shadow hover:bg-gray-100"
            >
              ▶
            </button>
          </div>
        </section>



        {/* CONTACT */}
        <section ref={sections.contact} id="contact" className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div className="p-6 rounded-2xl border bg-white shadow-sm">
              <h3 className="text-xl font-semibold">Get in touch</h3>
              <p className="text-gray-600 mt-2">Whether it’s a project, collaboration or just a hello — I’m open to new opportunities.</p>
              <div className="mt-4 text-sm text-gray-700">
                <div>✉️ yadnesh@example.com</div>
                <div>💼 <a href="https://linkedin.com/in/yadneshsdeshpande" target="_blank" rel="noopener noreferrer">LinkedIn</a> — <a href="https://github.com/yashpy" target="_blank" rel="noopener noreferrer">GitHub</a></div>
              </div>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); alert('Message sent (placeholder)'); }} className="p-6 rounded-2xl border bg-white shadow-sm">
              <label className="block">Name <input required className="w-full mt-2 p-2 border rounded" /></label>
              <label className="block mt-4">Email <input required type="email" className="w-full mt-2 p-2 border rounded" /></label>
              <label className="block mt-4">Message <textarea required className="w-full mt-2 p-2 border rounded" rows={4} /></label>
              <div className="mt-4">
                <button className="px-4 py-2 bg-indigo-600 text-white rounded">Send</button>
              </div>
            </form>
          </div>
        </section>

        <footer className="max-w-5xl mx-auto px-6 py-8 text-center text-sm text-gray-500">© {new Date().getFullYear()} Yadnesh — Built with ❤️ • Deployed on GitHub Pages</footer>
      </main>

      {/* PROJECT MODAL */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6">
          <div className="max-w-3xl w-full bg-white rounded-xl p-6">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-lg font-semibold">{activeProject.title}</h4>
                <p className="text-sm text-gray-600 mt-2">{activeProject.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-gray-500">
                  {activeProject.tech.map(t => <span key={t} className="px-2 py-1 border rounded">{t}</span>)}
                </div>
              </div>
              <div className="ml-4">
                <button onClick={() => setActiveProject(null)} className="px-3 py-2 border rounded">Close</button>
              </div>
            </div>
            <div className="mt-6 h-48 rounded bg-gray-100 flex items-center justify-center">Project screenshot / demo</div>
            <div className="mt-6 flex gap-3">
              <a href={activeProject.link} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border rounded">View live</a>
              <a href="#" className="px-4 py-2 bg-indigo-600 text-white rounded">Source</a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .nav-btn { background: transparent; border: none; padding: 6px 8px; cursor: pointer; font-weight: 500; }
        .nav-btn:hover { transform: translateY(-2px); }
      `}</style>
    </div>
  );
}
