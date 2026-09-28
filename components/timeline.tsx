import type { TimelineEntry } from "@/data/portfolio";

export function Timeline({ entries }: Readonly<{ entries: readonly TimelineEntry[] }>) {
  return (
    <ol className="timeline">
      {entries.map((entry) => (
        <li className="timeline__item" key={`${entry.date}-${entry.organization}`}>
          <p className="timeline__date">{entry.date}</p>
          <div className="timeline__marker" aria-hidden="true" />
          <div className="timeline__body">
            <span className="timeline__kind">{entry.kind}</span>
            <h3>{entry.title}</h3>
            <p className="timeline__org">{entry.organization}</p>
            <p>{entry.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
