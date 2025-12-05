import { useState, useEffect, useRef } from "react";
import "./index.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Work } from "./components/Work";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { ImagePreview } from "./components/ImagePreview";
import { Project } from "./data/projects";

export function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (activeProject && activeProject.images.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % activeProject.images.length);
      }, 3000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [activeProject]);

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const handleProjectHover = (project: Project | null) => {
    setActiveProject(project);
    setCurrentImageIndex(0);
  };

  return (
    <div className="min-h-screen bg-bg text-text-primary antialiased" onMouseMove={handleMouseMove}>
      <Header />
      <main>
        <Hero />
        <Work onProjectHover={handleProjectHover} />
        <About />
      </main>
      <Footer />
      <ImagePreview
        project={activeProject}
        currentImageIndex={currentImageIndex}
        cursorPos={cursorPos}
      />
    </div>
  );
}

export default App;
