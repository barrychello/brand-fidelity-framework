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
}

const projects: Project[] = [
  { title: "FILE NOT FOUND", category: "Commercial", image: taiekea },
  { title: "SCORED BACK", category: "Film", image: project2 },
  { title: "CALLAWAY", category: "Brand Film", image: project3 },
  { title: "TRIMMING JINGLE", category: "Music Video", image: project4 },
  { title: "LUCID HOOD", category: "Commercial", image: project6 },
  { title: "PROJECT 5", category: "Digital", image: project5 },
  { title: "PROJECT 7", category: "Technology", image: project7 },
  { title: "PROJECT 8", category: "Archive", image: project2 },
];

const ProjectGrid = () => {
  return (
    <section id="work" className="px-6 py-20 md:px-10 border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
        {projects.map((project, index) => (
          <div key={index} className="bg-background p-6 md:p-8">
            <div className="group cursor-pointer">
              <div className="overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-baseline justify-between">
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
