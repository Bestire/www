import { Project } from "../data/projects";

export function ImagePreview({
  project,
  currentImageIndex,
  cursorPos,
}: {
  project: Project | null;
  currentImageIndex: number;
  cursorPos: { x: number; y: number };
}) {
  if (!project || project.images.length === 0) {
    return null;
  }

  return (
    <div
      className="fixed pointer-events-none z-50 transition-opacity duration-200"
      style={{
        left: cursorPos.x + 5,
        top: cursorPos.y + 5,
      }}
    >
      <div className="w-64 h-40 rounded-lg overflow-hidden ring-1 ring-border-hover shadow-2xl">
        <img
          src={project.images[currentImageIndex]}
          alt={project.name}
          className="w-full h-full object-cover"
        />
      </div>
      {project.images.length > 1 && (
        <div className="flex justify-center gap-1 mt-2">
          {project.images.map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                index === currentImageIndex ? "bg-text-primary" : "bg-text-faint"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
