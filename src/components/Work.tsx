import { Project, projects } from "../data/projects";
import { ProjectRow } from "./ProjectRow";

export function Work({
  onProjectHover,
}: {
  onProjectHover: (project: Project | null) => void;
}) {
  return (
    <section id="work" className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="text-sm text-text-muted uppercase tracking-wide">Selected Work</h2>
        </div>
        <div className="space-y-1">
          {projects.map((project, index) => (
            <ProjectRow
              key={index}
              project={project}
              onHover={onProjectHover}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
