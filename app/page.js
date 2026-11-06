import PrintButton from "./components/PrintButton";
import resume from "./resume.json";
import certifications from "./certifications.json";

function Arrow() { return <span aria-hidden="true">↗</span>; }

function Experience({ item }) {
  return (
    <article className="experience-item">
      <div className="experience-heading"><h3>{item.company}</h3><p className="date-range">{item.date}</p></div>
      <p className="role">{item.role}{item.focus && <span className="focus"> · {item.focus}</span>}</p>
      <ul className="experience-list">{item.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
    </article>
  );
}

function Section({ number, title, id, className = "", children }) {
  return (
    <section className={`section ${className}`} id={id} aria-labelledby={`${id}-heading`}>
      <div className="section-label"><span className="section-number" aria-hidden="true">{number}</span><h2 id={`${id}-heading`}>{title}</h2></div>
      <div className="section-content">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#experience">Skip to experience</a>
      <main className="page">
        <div className="toolbar">
          <a className="wordmark" href="#top" aria-label="Alejandro de la Mora, top of resume">AM<span className="wordmark-dot">.</span></a>
          <div className="toolbar-actions"><PrintButton /><a className="print-button download-button" href="/Alejandro-de-la-Mora-FDE.pdf" download>Download PDF <span aria-hidden="true">↓</span></a></div>
        </div>
        <article className="resume" id="top" aria-label="Alejandro de la Mora resume">
          <header className="header">
            <p className="eyebrow">AI engineering & enterprise delivery</p>
            <h1>{resume.name}</h1>
            <p className="title">{resume.title}</p>
            <p className="subtitle">{resume.subtitle}</p>
            <ul className="contact-list" aria-label="Contact information">
              <li><a href={`mailto:${resume.contact.email}`}>{resume.contact.email}</a></li>
              <li><a href={`tel:${resume.contact.phone.replaceAll(" ", "")}`}>{resume.contact.phone}</a></li>
              <li><a href={resume.contact.linkedin}>LinkedIn <Arrow /><span className="print-url"> linkedin.com/in/amorac</span></a></li>
              <li><a href={resume.contact.github}>GitHub <Arrow /><span className="print-url"> github.com/Oruga420</span></a></li>
              <li><a href={resume.contact.website}>eloruga.com <Arrow /></a></li>
            </ul>
          </header>
          <section className="intro" aria-label="Professional summary"><p>{resume.summary}</p></section>
          <section className="outcomes" aria-label="Selected results">
            {resume.outcomes.map(outcome => <div className="outcome" key={outcome.label}><p className="outcome-value">{outcome.value}</p><h2>{outcome.label}</h2><p className="outcome-context">{outcome.context}</p></div>)}
          </section>
          <Section number="01" title="Experience" id="experience">{resume.experiences.slice(0, 4).map(item => <Experience key={`${item.company}-${item.role}`} item={item} />)}</Section>
          <Section number="02" title="Earlier career" id="earlier-career" className="print-new-page">{resume.experiences.slice(4).map(item => <Experience key={`${item.company}-${item.role}`} item={item} />)}</Section>
          <Section number="03" title="Capabilities" id="capabilities">
            <div className="skills-grid">{resume.skillGroups.map(group => <div className="skill-group" key={group.title}><h3>{group.title}</h3><p>{group.items.join(" · ")}</p></div>)}</div>
          </Section>
          <Section number="04" title="Selected build" id="project">
            <div className="project-heading"><h3><a href={resume.project.url}>{resume.project.name} <Arrow /></a></h3><span className="project-label">Public repository</span></div>
            <p className="project-description">{resume.project.description}</p><p className="project-stack">{resume.project.stack}</p><p className="print-url project-print-url">github.com/Oruga420/office-agent</p>
          </Section>
          <Section number="05" title="Learning" id="learning">
            <div className="education"><h3>{resume.education.program}</h3><p>{resume.education.institution} <span>· {resume.education.date}</span></p></div>
            <h3 className="cert-heading">Selected certificates</h3>
            <ul className="cert-list">{certifications.map(cert => <li key={cert.url}><a href={cert.url}>{cert.name} <Arrow /></a></li>)}</ul>
          </Section>
          <footer className="footer"><span>Alejandro de la Mora</span><a href={`mailto:${resume.contact.email}`}>Let’s build something useful. <Arrow /></a></footer>
        </article>
        <p className="page-note">Forward Deployed Engineer · Professional résumé</p>
      </main>
    </>
  );
}
