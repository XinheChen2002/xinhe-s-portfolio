import type { Project } from "@/data/portfolio";

export function ProjectCard({ project }: Readonly<{ project: Project }>) {
  return (
    <article className={`project${project.featured ? " project--featured" : ""}`}>
      <div className="project__index">
        <span>{project.label}</span>
        <span className="project__dot" aria-hidden="true" />
      </div>
      <div className="project__content">
        <h3>{project.title}</h3>
        <p className="project__problem">{project.problem}</p>
        <dl className="project__details">
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Approach</dt>
            <dd>{project.approach}</dd>
          </div>
          <div>
            <dt>Outcome</dt>
            <dd>{project.outcome}</dd>
          </div>
        </dl>
        <ul className="tag-list" aria-label={`${project.title} technologies`}>
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
