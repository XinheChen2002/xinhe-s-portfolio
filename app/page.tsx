import { CapabilityGrid } from "@/components/capability-grid";
import { ContactFooter } from "@/components/contact-footer";
import { Hero } from "@/components/hero";
import { Profile } from "@/components/profile";
import { ProjectCard } from "@/components/project-card";
import { Timeline } from "@/components/timeline";
import { capabilities, projects, timeline } from "@/data/portfolio";

export default function Page() {
  return (
    <>
      <Hero />
      <main id="main-content">
        <Profile />

        <section className="section work shell" id="work" aria-labelledby="work-title">
          <div className="section__label">
            <span>02</span>
            <span>Selected work</span>
          </div>
          <div className="section__heading">
            <p className="eyebrow eyebrow--dark">Four systems, one practice</p>
            <h2 id="work-title">Selected work</h2>
            <p>Product thinking grounded in research, measured outcomes, and working technology.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <ProjectCard project={project} key={project.title} />
            ))}
          </div>
        </section>

        <section
          className="section experience shell"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="section__label">
            <span>03</span>
            <span>Experience</span>
          </div>
          <div className="section__heading">
            <p className="eyebrow eyebrow--dark">A path built across fields</p>
            <h2 id="experience-title">Experience &amp; education</h2>
          </div>
          <Timeline entries={timeline} />
        </section>

        <section className="section capabilities shell" aria-labelledby="capabilities-title">
          <div className="section__label">
            <span>04</span>
            <span>Capabilities</span>
          </div>
          <div className="section__heading">
            <p className="eyebrow eyebrow--dark">How I work</p>
            <h2 id="capabilities-title">From inquiry to implementation.</h2>
          </div>
          <CapabilityGrid groups={capabilities} />
        </section>
      </main>
      <ContactFooter />
    </>
  );
}
