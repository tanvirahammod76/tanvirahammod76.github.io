import { useState, type FormEvent } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X } from "lucide-react";

const email = "ahmedbijoy330@gmail.com";
const github = "https://github.com/tanvirahammod76";

const skillGroups = [
  { title: "Math & reasoning", color: "coral", items: ["Probability & statistics", "Linear algebra", "Optimization", "Logical reasoning"] },
  { title: "Code & data", color: "blue", items: ["Python", "Pandas · NumPy", "Jupyter Notebook", "Excel · C/C++ · HTML/CSS"] },
  { title: "Research practice", color: "purple", items: ["Quantitative analysis", "Risk modeling", "AI evaluation", "Technical writing"] },
];

const projects = [
  { number: "01", type: "UNDERGRADUATE RESEARCH · QUANT FINANCE", title: "Portfolio optimization under uncertainty", description: "Exploring how portfolios behave when markets shift—combining tail-risk-aware allocation with latent market-regime detection.", tags: ["Python", "Mean–CVaR", "Gaussian HMM", "DSE"], tone: "project-lilac", icon: "↗" },
  { number: "02", type: "MODEL EVALUATION · MATHEMATICAL REASONING", title: "A sharper eye for AI answers", description: "A careful, step-by-step approach to checking mathematical reasoning, instruction following, factual accuracy and code quality.", tags: ["Reasoning", "Evaluation", "Quality"], tone: "project-peach", icon: "∑" },
  { number: "03", type: "DATA ANALYSIS · PYTHON", title: "From raw data to clear decisions", description: "A research workflow for cleaning financial data, calculating returns and comparing portfolio outcomes with statistical tests.", tags: ["Pandas", "NumPy", "Statistics"], tone: "project-blue", icon: "⌁" },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const sendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.get("name")}`);
    const body = encodeURIComponent(`${form.get("message")}\n\nReply to: ${form.get("email")}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <a href="#home" className="brand" aria-label="Tanvir home"><span className="brand-mark">T<span>∿</span></span><span>tanvir<span className="brand-dot">.</span></span></a>
        <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {[ ["About", "#about"], ["Skills", "#skills"], ["Work", "#work"], ["Education", "#education"] ].map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Let’s talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="status-dot" /> OPEN TO REMOTE OPPORTUNITIES</div>
            <p className="eyebrow">MATHEMATICS GRADUATE <span>✳</span> ASPIRING DEVELOPER</p>
            <h1>Curious by nature.<br /><span>Precise by</span> <em>design.</em></h1>
            <p className="hero-intro">I’m Tanvir — a mathematics graduate who turns complex problems into clear, thoughtful solutions. Exploring the space between <strong>data, code &amp; intelligent systems.</strong></p>
            <div className="hero-actions"><a className="button-primary" href="#work">Explore my work <ArrowRight size={17} /></a><a className="text-link" href="#contact">Get in touch <ArrowDown size={15} /></a></div>
            <div className="hero-meta"><span><span className="location-pin">⌖</span> Bangladesh · Available worldwide</span><span className="meta-divider" /><a href={github} target="_blank" rel="noreferrer"><Github size={15} /> GitHub <ArrowUpRight size={13} /></a></div>
          </div>
          <div className="hero-art" aria-label="Abstract mathematical illustration">
            <div className="art-grid" /><div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-core"><span>∫</span><small>think<br />in systems</small></div>
            <div className="art-sticker sticker-one">x² + y²</div><div className="art-sticker sticker-two">DATA<br /><b>→</b> insight</div><div className="art-star">✳</div><div className="art-caption">A LITTLE LOGIC.<br />A LOT OF CURIOSITY.</div>
          </div>
          <a href="#about" className="scroll-cue"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /></a>
        </section>

        <section className="intro-band" id="about"><div className="section-wrap intro-inner"><p className="section-kicker">01 / A LITTLE ABOUT ME</p><div><h2>I like asking <em>why</em>—<br />then finding a better <span>how.</span></h2><p className="intro-text">My background in mathematics taught me to look for structure in the messy stuff. These days, I bring that mindset to Python, quantitative research and evaluating AI—always curious, always checking the details.</p><a className="inline-link" href={`mailto:${email}`}>A note from you would make my day <ArrowUpRight size={16} /></a></div><div className="intro-stamp"><span>THINK</span><b>+</b><span>MAKE</span><b>=</b><span>MATTER</span></div></div></section>

        <section className="skills-section section-wrap" id="skills"><div className="section-heading"><div><p className="section-kicker">02 / WHAT I BRING</p><h2>Tools for <em>thinking.</em></h2></div><p className="section-aside">A practical toolkit built on strong fundamentals—and a healthy respect for the details.</p></div><div className="skill-grid">{skillGroups.map((group, index) => <article className={`skill-card ${group.color}`} key={group.title}><div className="skill-card-top"><span>0{index + 1}</span><span className="skill-symbol">{["∑", "{ }", "⌁"][index]}</span></div><h3>{group.title}</h3><ul>{group.items.map(item => <li key={item}><span />{item}</li>)}</ul></article>)}</div></section>

        <section className="work-section" id="work"><div className="section-wrap"><div className="section-heading work-heading"><div><p className="section-kicker">03 / SELECTED WORK &amp; RESEARCH</p><h2>Ideas, <em>in practice.</em></h2></div><a className="github-link" href={github} target="_blank" rel="noreferrer"><Github size={17} /> More on GitHub <ArrowUpRight size={14} /></a></div><div className="project-grid">{projects.map(project => <article className={`project-card ${project.tone}`} key={project.number}><div className="project-top"><span>{project.number} / {project.type}</span><span className="project-icon">{project.icon}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a className="project-open" href={github} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><ArrowUpRight size={18} /></a></article>)}</div></div></section>

        <section className="education-section section-wrap" id="education"><div className="education-label"><p className="section-kicker">04 / THE FOUNDATION</p><h2>Learning is<br /><em>the long game.</em></h2><p>Built a strong analytical foundation; still building on it every day.</p></div><article className="education-card"><div className="education-mark">S<span>∴</span></div><div className="education-content"><span className="education-date">BACHELOR’S DEGREE · MATHEMATICS</span><h3>Shahjalal University of Science &amp; Technology</h3><p>Sylhet, Bangladesh</p><div className="education-bottom"><span>BSc in Mathematics</span><span>CGPA <b>3.08</b> / 4.00</span></div></div></article><div className="research-note"><span className="research-symbol">✳</span><div><b>RESEARCH FOCUS</b><p>Portfolio optimization under tail risk &amp; market-regime uncertainty</p></div><span className="research-method">MVO · CVaR · HMM</span></div></section>

        <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><div className="contact-copy"><p className="section-kicker">05 / YOUR TURN</p><h2>Have a good<br /><em>problem?</em></h2><p>I’m interested in thoughtful projects, remote opportunities and conversations about math, data or AI. My inbox is open.</p><a className="contact-email" href={`mailto:${email}`}>{email}<ArrowUpRight size={17} /></a><div className="social-links"><a href="https://www.linkedin.com/in/tanvir-ahammod" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} /></a><a href={github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={13} /></a></div></div><form className="contact-form" onSubmit={sendMessage}><div className="form-heading"><span>LET’S MAKE SOMETHING GOOD.</span><Mail size={19} /></div><label htmlFor="name">Your name</label><input id="name" name="name" placeholder="What should I call you?" required /><label htmlFor="email">Email address</label><input id="email" name="email" type="email" placeholder="you@example.com" required /><label htmlFor="message">What’s on your mind?</label><textarea id="message" name="message" rows={3} placeholder="A project, a question, a hello…" required /><button className="button-primary form-submit" type="submit">{sent ? "Open your email app" : "Send a message"}<ArrowRight size={17} /></button><p className="form-hint">This opens your email app with your message ready to send.</p></form></div></section>
        </main>
        <footer className="footer section-wrap"><a href="#home" className="brand footer-brand"><span className="brand-mark">T<span>∿</span></span><span>tanvir<span className="brand-dot">.</span></span></a><span>Built by Tanvir Ahammod · © {new Date().getFullYear()}</span><a className="back-top" href="#home">Back to top ↑</a></footer>
    </div>
  );
};

export default Index;
