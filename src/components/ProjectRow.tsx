import { ArrowRight } from "@phosphor-icons/react";
import type { Project } from "../data/projects";

export function ProjectRow({
  project,
  onHover,
}: {
  project: Project;
  onHover: (project: Project | null) => void;
}) {
  return (
    <a
      href={project.href}
      className="group flex items-center justify-between py-5 border-b border-border hover:border-border-hover transition-colors"
      onMouseEnter={() => onHover(project)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-medium group-hover:text-text-secondary transition-colors">
          {project.name}
        </h3>
        <p className="mt-1 text-sm text-text-muted truncate">
          {project.description}
        </p>
      </div>
      <div className="hidden sm:flex items-center gap-2 ml-8">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs text-text-muted bg-bg-elevated rounded"
          >
            {tag}
          </span>
        ))}
      </div>
      <ArrowRight
        size={20}
        className="ml-6 text-text-faint group-hover:text-text-secondary group-hover:translate-x-1 transition-all"
      />
    </a>
  );
}
