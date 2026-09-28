import type { CapabilityGroup } from "@/data/portfolio";

export function CapabilityGrid({ groups }: Readonly<{ groups: readonly CapabilityGroup[] }>) {
  return (
    <div className="capability-grid">
      {groups.map((group, index) => (
        <article className="capability" key={group.title}>
          <span className="capability__number">0{index + 1}</span>
          <h3>{group.title}</h3>
          <ul>
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
