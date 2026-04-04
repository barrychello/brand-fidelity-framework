import { useState } from "react";
import taiekea from "@/assets/taiekea.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import project7 from "@/assets/project-7.jpg";

interface Project {
  title: string;
  category: string;
  image: string;
  video?: string;
}

const projects: Project[] = [
  { 
    title: "FILE NOT FOUND", 
    category: "Commercial", 
    image: taiekea, 
    video: "https://www.youtube.com/embed/wK0ZcqSD2uU?si=l7xaXKr2uhdaCVlK&autoplay=1" 
  },
  { title: "SCORED BACK", category: "Film", image: project2 },
  { title: "CALLAWAY", category: "Brand Film", image: project3 },
  { title: "TRIMMING JINGLE", category: "Music Video", image: project4 },
  { title: "LUCID HOOD", category: "Commercial", image: project6 },
  { title: "PROJECT 5", category: "Digital", image: project5 },
  { title: "PROJECT 7", category: "Technology", image: project7 },
  { title: "PROJECT 8", category: "Archive", image: project2 },
];

const ProjectGrid = () => {
  const [hoverVideoIndex, setHoverVideoIndex] = useState<number | null>(null);

  return (
    <section id="work" className="px-6 py-20 md:px-10 border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
        {projects.map((project, index) => (
          <div key={index} className="bg-background p-6 md:p-8">
            <div 
              className="group cursor-pointer" 
              onMouseEnter={() => project.video ? setHoverVideoIndex(index) : null}
              onMouseLeave={() => setHoverVideoIndex(null)}
            >
              {hoverVideoIndex === index && project.video ? (
                <div className="mb-4 relative aspect-video w-full">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={`${project.video}&mute=1&controls=0`} 
                    title={project.title} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full pointer-events-none"
                  ></iframe>
                </div>
              ) : (
                <div className="overflow-hidden mb-4 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {project.video && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors z-10 pointer-events-none">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center pl-1.5 shadow-xl transition-transform group-hover:scale-110">
                         <svg width="28" height="28" viewBox="0 0 24 24" fill="black"><path d="M8 5v14l11-7z"/></svg>
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              <div className="flex items-baseline justify-between mt-4">
                <h3 className="font-heading text-xl font-semibold uppercase tracking-wide text-foreground">{project.title}</h3>
                <span className="font-body text-xs text-muted-foreground uppercase tracking-wider">{project.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
