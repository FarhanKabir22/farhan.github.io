import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "skills", href: "#skills" },
  { label: "academics", href: "#academics" },
  { label: "hobbies", href: "#hobbies" },
  { label: "contact", href: "#contact" },
];

const PROJECTS = [
  {
    title: "MultiChat",
    desc: "A multi-client TCP socket chat application with real-time messaging, user rooms, and persistent message history.",
    tags: ["Java", "JavaFX", "TCP Sockets", "MySQL"],
    github: "#",
    demo: null,
    highlight: true,
  },
  {
    title: "CineVault",
    desc: "Netflix-style movie browser with FXML-designed UI, genre filtering, watchlists, and a full MySQL-backed catalog.",
    tags: ["JavaFX", "FXML", "Scene Builder", "MySQL"],
    github: "#",
    demo: null,
    highlight: false,
  },
  {
    title: "StoriesClone",
    desc: "Instagram Stories viewer clone with timed story progression, viewer lists, and story upload simulation.",
    tags: ["JavaFX", "MySQL", "Java"],
    github: "#",
    demo: null,
    highlight: false,
  },
  {
    title: "StudentPortal",
    desc: "Secure student portal with role-based login/registration, course management, and grade tracking dashboard.",
    tags: ["JavaFX", "MySQL", "Java"],
    github: "#",
    demo: null,
    highlight: false,
  },
  {
    title: "CanvasAudio",
    desc: "Browser-based creative coding tool — generative visuals driven by Web Audio API input with HTML5 Canvas renderer.",
    tags: ["HTML5 Canvas", "Web Audio API", "JavaScript"],
    github: "#",
    demo: "#",
    highlight: true,
  },
  {
    title: "DebtCycle",
    desc: "Circular debt tracker concept — DFD-based system design for visualising and resolving cyclic debt chains.",
    tags: ["System Design", "DFD", "UML"],
    github: "#",
    demo: null,
    highlight: false,
  },
];

const SKILLS = [
  { category: "Languages", items: ["Java", "C", "C++", "JavaScript", "HTML5", "CSS3", "SQL"] },
  { category: "Frameworks & Libraries", items: ["JavaFX", "FXML", "Scene Builder", "React (learning)", "Node.js (basics)"] },
  { category: "Systems & Networking", items: ["TCP/IP", "Socket Programming", "OSI Model", "Data Comm.", "Linux CLI"] },
  { category: "Tools & Platforms", items: ["MySQL", "Git", "GitHub", "VS Code", "IntelliJ IDEA", "Figma"] },
  { category: "Concepts", items: ["OOP", "Data Structures", "Algorithms", "System Analysis", "DFD/UML", "SDLC"] },
];

const ACADEMICS = [
  {
    code: "CSE 4405",
    title: "Data & Telecommunications",
    note: "Deep-dived into signal theory, modulation, and network protocol stacks. Built custom simulation exercises for TDMA and FDMA.",
  },
  {
    code: "CSE 4407",
    title: "Software Engineering & Systems Analysis",
    note: "Covered full SDLC — requirements elicitation, DFD modeling, ER diagrams, and test planning. Used in DebtCycle project.",
  },
  {
    code: "MATH 4441",
    title: "Probability & Statistics",
    note: "Applied Bayesian inference and Markov chains to algorithm analysis. Strengthened foundation for ML coursework.",
  },
  {
    code: "CSE 4403",
    title: "Algorithms & Complexity",
    note: "Studied divide-and-conquer, dynamic programming, graph traversal, and NP-completeness proofs.",
  },
  {
    code: "CSE 4501",
    title: "Computer Networks",
    note: "Socket programming labs underpinned the MultiChat project — applied TCP handshake and connection management directly.",
  },
  {
    code: "CSE 4107",
    title: "Structured Programming",
    note: "First exposure to systems thinking through C — memory, pointers, and low-level I/O that shaped how I reason about code.",
  },
];

const HOBBIES = [
  {
    icon: "◈",
    title: "Hardware Tinkering",
    desc: "Running a full Linux desktop on an Android TV box — custom kernel params, display server config, and DIY server rack.",
  },
  {
    icon: "◉",
    title: "Creative Coding",
    desc: "Building generative art tools with HTML5 Canvas and Web Audio API. Exploring p5.js for visual experiments.",
  },
  {
    icon: "◇",
    title: "Open Source Exploration",
    desc: "Studying interesting GitHub repos, contributing docs, and tracking CS research papers on networking and distributed systems.",
  },
  {
    icon: "◆",
    title: "CTF & Problem Solving",
    desc: "Occasional CTF participant. Regular competitive programming practice on Codeforces and LeetCode.",
  },
  {
    icon: "◎",
    title: "Gaming",
    desc: "Longtime player of mainstream titles across RPGs, shooters, and open-world games. Drawn to game design and the systems behind player experience as much as the games themselves.",
  },
  {
    icon: "◈",
    title: "Game Development",
    desc: "Exploring 2D game mechanics and engine internals — experimenting with game loops, collision systems, and sprite rendering using Java and browser canvas.",
  },
  {
    icon: "◉",
    title: "Home Server Building",
    desc: "Self-hosting services on repurposed hardware — running file sync, media servers, and reverse proxies on a Linux home lab built from an Android TV box.",
  },
];

function Navbar({ scrolled, onSayHello }: { scrolled: boolean; onSayHello: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(8,12,16,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #1e2d3d" : "none",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => handleNav(e, "#hero")}
          className="font-mono font-bold text-sm tracking-wider"
          style={{ color: "#00d4b8" }}
        >
          farhan.dev
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNav(e, l.href)}
              className="nav-link font-mono text-xs tracking-widest"
              style={{ color: "#768fa3" }}
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={onSayHello}
            className="font-mono text-xs px-4 py-2 border rounded transition-all duration-200"
            style={{
              borderColor: "#00d4b8",
              color: "#00d4b8",
              background: "transparent",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(0,212,184,0.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            say_hello()
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block h-px w-5 transition-all duration-200"
              style={{ background: "#00d4b8" }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-6 py-6 flex flex-col gap-4"
          style={{ background: "rgba(8,12,16,0.98)", borderColor: "#1e2d3d" }}
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNav(e, l.href)}
              className="font-mono text-sm tracking-widest"
              style={{ color: "#768fa3" }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function Hero() {
  const [charIdx, setCharIdx] = useState(0);
  const fullText = "Building systems that matter.";

  useEffect(() => {
    if (charIdx < fullText.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), 60);
      return () => clearTimeout(t);
    }
  }, [charIdx]);

  return (
    <section
      id="hero"
      className="hero-grid min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,212,184,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="max-w-2xl">
          <div className="fade-in-up">
            <p className="section-label mb-6">// hello, world</p>
            <h1
              className="font-mono font-extrabold leading-tight mb-4"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#cdd9e5" }}
            >
              Farhan Kabir
            </h1>
            <p
              className="font-mono text-sm mb-6 tracking-wide"
              style={{ color: "#00d4b8" }}
            >
              2nd year CSE Student at Islamic University of Technology, Dhaka
            </p>
            <p
              className="text-lg mb-8 max-w-xl leading-relaxed"
              style={{ color: "#768fa3", fontWeight: 300 }}
            >
              {fullText.slice(0, charIdx)}
              <span className="cursor-blink" style={{ color: "#00d4b8" }}>|</span>
            </p>
            <p
              className="text-base mb-10 max-w-lg leading-relaxed"
              style={{ color: "#4a6278" }}
            >
              I build software at the intersection of systems programming, networking, and full-stack development. Interested in how computers actually work — from TCP handshakes to UI state machines.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
                className="font-mono text-sm px-6 py-3 rounded transition-all duration-200"
                style={{ background: "#00d4b8", color: "#080c10", fontWeight: 700 }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#00b4a0"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#00d4b8"; }}
              >
                view_projects()
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="font-mono text-sm px-6 py-3 rounded border transition-all duration-200"
                style={{ borderColor: "#1e2d3d", color: "#768fa3" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#00d4b8";
                  (e.currentTarget as HTMLElement).style.color = "#00d4b8";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#1e2d3d";
                  (e.currentTarget as HTMLElement).style.color = "#768fa3";
                }}
              >
                get_in_touch()
              </a>
            </div>
          </div>

        </div>

        {/* Stats row */}
        <div
          className="mt-16 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6"
          style={{ borderTop: "1px solid #1e2d3d" }}
        >
          {[
            { val: "6+", label: "Projects Built" },
            { val: "IUT", label: "University" },
            { val: "CSE", label: "Major" },
            { val: "Dhaka", label: "Based in" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-mono font-bold text-xl" style={{ color: "#00d4b8" }}>{s.val}</p>
              <p className="font-mono text-xs mt-1" style={{ color: "#4a6278" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-16 items-start">
          <div>
            <p className="section-label mb-4">01 / about_me</p>
            <h2
              className="font-mono font-bold mb-6"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#cdd9e5" }}
            >
              Who I Am
            </h2>
            <div
              className="rounded-xl p-6"
              style={{ background: "#0d1117", border: "1px solid #1e2d3d" }}
            >
              <p className="font-mono text-xs mb-1" style={{ color: "#00d4b8" }}>$ cat about.txt</p>
              <div
                className="mt-3 font-mono text-xs leading-relaxed"
                style={{ color: "#4a6278" }}
              >
                <p>Name: Farhan Mohammad</p>
                <p>Degree: B.Sc. CSE</p>
                <p>University: IUT, Dhaka</p>
                <p>Focus: Systems + Full-stack</p>
                <p>Status: <span style={{ color: "#00d4b8" }}>actively_learning</span></p>
              </div>
            </div>
          </div>

          <div>
            <p
              className="text-base leading-relaxed mb-5"
              style={{ color: "#768fa3" }}
            >
              Hi I'm Farhan . I'm a Computer Science and Engineering student at the Islamic University of Technology in Dhaka, with a deep interest in how software systems are built from the ground up — from TCP sockets to application UIs.
            </p>
            <p
              className="text-base leading-relaxed mb-5"
              style={{ color: "#768fa3" }}
            >
              My projects span desktop applications in JavaFX, system design concepts, and browser-based creative tools. I'm drawn to problems that sit at the boundary of systems programming and user-facing software — where performance meets usability.
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "#768fa3" }}
            >
              Currently focused on strengthening my foundations in networking, software engineering practices, and full-stack web development. When I'm not writing code, I'm tinkering with hardware, running Linux experiments on unusual devices, or building audio-visual tools in the browser.
            </p>

            <div className="flex flex-wrap gap-3">
              {["Software Engineering", "Systems Programming", "Networking", "Full-stack Dev", "Creative Coding"].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-3 py-1.5 rounded-full border"
                  style={{ borderColor: "#1e2d3d", color: "#768fa3" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24" style={{ background: "#0a0e14" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="section-label mb-4">02 / projects</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className="font-mono font-bold"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#cdd9e5" }}
            >
              Things I've Built
            </h2>
            <p className="font-mono text-xs" style={{ color: "#4a6278" }}>
              {PROJECTS.length} projects
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((p) => (
            <div
              key={p.title}
              className="card-hover rounded-xl p-6 flex flex-col"
              style={{
                background: "#0d1117",
                border: `1px solid ${p.highlight ? "rgba(0,212,184,0.25)" : "#1e2d3d"}`,
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-8 h-8 rounded flex items-center justify-center"
                  style={{ background: "rgba(0,212,184,0.08)" }}
                >
                  <span style={{ color: "#00d4b8", fontSize: "14px" }}>⬡</span>
                </div>
                <div className="flex gap-3">
                  <a
                    href={p.github}
                    aria-label="GitHub"
                    className="transition-colors duration-200"
                    style={{ color: "#4a6278" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#00d4b8"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#4a6278"; }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      aria-label="Live Demo"
                      className="transition-colors duration-200"
                      style={{ color: "#4a6278" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#00d4b8"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#4a6278"; }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <h3
                className="font-mono font-bold text-base mb-2"
                style={{ color: "#cdd9e5" }}
              >
                {p.title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-5 flex-1"
                style={{ color: "#4a6278" }}
              >
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-2 py-0.5"
                    style={{ color: "#00d4b8", background: "rgba(0,212,184,0.06)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label mb-4">03 / skills</p>
        <h2
          className="font-mono font-bold mb-14"
          style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#cdd9e5" }}
        >
          Technical Toolkit
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((group) => (
            <div
              key={group.category}
              className="rounded-xl p-6"
              style={{ background: "#0d1117", border: "1px solid #1e2d3d" }}
            >
              <p
                className="font-mono font-semibold text-xs mb-5 tracking-widest uppercase"
                style={{ color: "#00d4b8" }}
              >
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="skill-pill font-mono text-xs px-3 py-1.5 rounded border cursor-default"
                    style={{ borderColor: "#1e2d3d", color: "#768fa3", background: "transparent" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency bars for key languages */}
        <div
          className="mt-10 rounded-xl p-8"
          style={{ background: "#0d1117", border: "1px solid #1e2d3d" }}
        >
          <p
            className="font-mono text-xs mb-6 tracking-widest uppercase"
            style={{ color: "#00d4b8" }}
          >
            Language Proficiency
          </p>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-5">
            {[
              { lang: "Java", pct: 80 },
              { lang: "C / C++", pct: 88 },
              { lang: "SQL (MySQL)", pct: 75 },
              { lang: "JavaScript / HTML5", pct: 65 },
              { lang: "Python", pct: 45 },
              { lang: "Bash / Linux CLI", pct: 55 },
            ].map(({ lang, pct }) => (
              <div key={lang}>
                <div className="flex justify-between mb-1.5">
                  <span className="font-mono text-xs" style={{ color: "#768fa3" }}>{lang}</span>
                  <span className="font-mono text-xs" style={{ color: "#4a6278" }}>{pct}%</span>
                </div>
                <div className="h-1 rounded-full" style={{ background: "#1e2d3d" }}>
                  <div
                    className="h-1 rounded-full transition-all duration-700"
                    style={{ width: `${pct}%`, background: "linear-gradient(90deg, #00d4b8, #4facfe)" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Academics() {
  return (
    <section id="academics" className="py-24" style={{ background: "#0a0e14" }}>
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label mb-4">04 / academics</p>
        <div className="md:flex md:items-end md:justify-between mb-14 gap-4">
          <h2
            className="font-mono font-bold"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#cdd9e5" }}
          >
            Coursework & Learning
          </h2>
          <p
            className="font-mono text-xs mt-2 md:mt-0"
            style={{ color: "#4a6278" }}
          >
            Islamic University of Technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {ACADEMICS.map((course, i) => (
            <div
              key={course.code}
              className="card-hover rounded-xl p-6 flex gap-5"
              style={{ background: "#0d1117", border: "1px solid #1e2d3d" }}
            >
              <div className="shrink-0">
                <div
                  className="w-8 h-8 rounded flex items-center justify-center font-mono font-bold text-sm"
                  style={{ background: "rgba(0,212,184,0.08)", color: "#00d4b8" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <div>
                <p className="font-mono text-xs mb-0.5" style={{ color: "#4a6278" }}>{course.code}</p>
                <h3 className="font-mono font-semibold text-sm mb-2" style={{ color: "#cdd9e5" }}>
                  {course.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4a6278" }}>
                  {course.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Hobbies() {
  return (
    <section id="hobbies" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label mb-4">05 / side_quests</p>
        <h2
          className="font-mono font-bold mb-4"
          style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#cdd9e5" }}
        >
          Beyond the Curriculum
        </h2>
        <p className="text-base mb-14 max-w-xl" style={{ color: "#4a6278" }}>
          What I explore when coursework doesn't constrain me.
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          {HOBBIES.map((h) => (
            <div
              key={h.title}
              className="card-hover rounded-xl p-7 flex gap-5"
              style={{ background: "#0d1117", border: "1px solid #1e2d3d" }}
            >
              <div
                className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-xl"
                style={{ background: "rgba(0,212,184,0.08)", color: "#00d4b8" }}
              >
                {h.icon}
              </div>
              <div>
                <h3 className="font-mono font-semibold text-sm mb-2" style={{ color: "#cdd9e5" }}>
                  {h.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4a6278" }}>
                  {h.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24" style={{ background: "#0a0e14" }}>
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label mb-4">06 / contact</p>
        <div className="max-w-2xl">
          <h2
            className="font-mono font-bold mb-6"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#cdd9e5" }}
          >
            Let's Connect
          </h2>
          <p className="text-base leading-relaxed mb-10" style={{ color: "#4a6278" }}>
            I'm always open to interesting conversations, project collaborations, or just a chat about systems and networking. My inbox is open.
          </p>

          <div className="flex flex-col gap-4">
            {[
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
                  </svg>
                ),
                label: "Email",
                value: "farhan@example.com",
                href: "mailto:farhankabir@iut-dhaka.edu",
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                ),
                label: "GitHub",
                value: "github.com/FarhanKabir22",
                href: "https://github.com/FarhanKabir22",
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
                label: "LinkedIn",
                value: "linkedin.com/in/farhan",
                href: "https://linkedin.com/in/farhan",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 p-5 rounded-xl border transition-all duration-200"
                style={{ background: "#0d1117", borderColor: "#1e2d3d", color: "#768fa3" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(0,212,184,0.35)";
                  el.style.color = "#00d4b8";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "#1e2d3d";
                  el.style.color = "#768fa3";
                }}
              >
                <span style={{ color: "inherit" }}>{item.icon}</span>
                <div>
                  <p className="font-mono text-xs mb-0.5" style={{ color: "#4a6278" }}>{item.label}</p>
                  <p className="font-mono text-sm" style={{ color: "inherit" }}>{item.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10" style={{ borderTop: "1px solid #1e2d3d" }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-mono text-xs" style={{ color: "#4a6278" }}>
          © {new Date().getFullYear()} Farhan Mohammad — Built with React + Vite
        </p>
        <div className="flex items-center gap-6">
          {[
            { label: "email", href: "mailto:farhankabir@iut-dhaka.edu" },
            { label: "github", href: "https://github.com/FarhanKabir22" },
            { label: "linkedin", href: "https://linkedin.com/in/farhan" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-mono text-xs transition-colors duration-200"
              style={{ color: "#4a6278" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#00d4b8"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#4a6278"; }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showHello, setShowHello] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const triggerHello = () => {
    setShowHello(true);
    setTimeout(() => setShowHello(false), 3000);
  };

  return (
    <div style={{ background: "#080c10", minHeight: "100vh" }}>
      <Navbar scrolled={scrolled} onSayHello={triggerHello} />

      {/* Hello World toast */}
      <div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-300"
        style={{
          opacity: showHello ? 1 : 0,
          transform: `translateX(-50%) translateY(${showHello ? "0" : "12px"})`,
          pointerEvents: "none",
        }}
      >
        <div
          className="font-mono text-sm px-6 py-3 rounded-lg"
          style={{
            background: "#00d4b8",
            color: "#080c10",
            fontWeight: 700,
            boxShadow: "0 8px 32px rgba(0,212,184,0.35)",
          }}
        >
          Hello, World! 👋
        </div>
      </div>

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Academics />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
