import project1 from "@/assets/project-1.jpg";
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
  tall?: boolean;
}

const projects: Project[] = [
  { title: "FILE NOT FOUND", category: "Commercial", image: project1, tall: true },
  { title: "SCORED BACK", category: "Film", image: project2 },
  { title: "CALLAWAY", category: "Brand Film", image: project3 },
  { title: "TRIMMING JINGLE", category: "Music Video", image: project4 },
  { title: "LUCID HOOD", category: "Commercial", image: project6, tall: true },
  { title: "", category: "", image: project5 },
  { title: "", category: "", image: project7 },
];

const ProjectGrid = () => {
  return (
    <section id="work" className="px-6 py-20 md:px-10 border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
        {/* Row 1: tall left + stacked right */}
        <div className="bg-background p-6 md:p-8 row-span-2">
          <div className="group cursor-pointer">
            <div className="overflow-hidden mb-4">
              <img
                src={projects[0].image}
                alt={projects[0].title}
                loading="lazy"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex items-baseline justify-between">
              <h3 className="font-heading text-xl font-semibold uppercase tracking-wide text-foreground">{projects[0].title}</h3>
              <span className="font-body text-xs text-muted-foreground uppercase tracking-wider">{projects[0].category}</span>
            </div>
          </div>
        </div>

        <div className="bg-background p-6 md:p-8">
          <div className="group cursor-pointer">
            <div className="overflow-hidden mb-4">
              <img
                src={projects[1].image}
                alt={projects[1].title}
                loading="lazy"
                className="w-full h-[240px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex items-baseline justify-between">
              <h3 className="font-heading text-xl font-semibold uppercase tracking-wide text-foreground">{projects[1].title}</h3>
              <span className="font-body text-xs text-muted-foreground uppercase tracking-wider">{projects[1].category}</span>
            </div>
          </div>
        </div>

        <div className="bg-background p-6 md:p-8">
          <div className="flex gap-px bg-border">
            <div className="bg-background pr-3 flex-1 group cursor-pointer">
              <div className="overflow-hidden mb-4">
                <img
                  src={projects[2].image}
                  alt={projects[2].title}
                  loading="lazy"
                  className="w-full h-[200px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-heading text-base font-semibold uppercase tracking-wide text-foreground">{projects[2].title}</h3>
              <span className="font-body text-xs text-muted-foreground uppercase tracking-wider">{projects[2].category}</span>
            </div>
            <div className="bg-background pl-3 flex-1 group cursor-pointer">
              <div className="overflow-hidden mb-4">
                <img
                  src={projects[3].image}
                  alt={projects[3].title}
                  loading="lazy"
                  className="w-full h-[200px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-heading text-base font-semibold uppercase tracking-wide text-foreground">{projects[3].title}</h3>
              <span className="font-body text-xs text-muted-foreground uppercase tracking-wider">{projects[3].category}</span>
            </div>
          </div>
        </div>

        {/* Row 3: tall left + object right */}
        <div className="bg-background p-6 md:p-8 row-span-2">
          <div className="group cursor-pointer">
            <div className="overflow-hidden mb-4">
              <img
                src={projects[4].image}
                alt={projects[4].title}
                loading="lazy"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex items-baseline justify-between">
              <h3 className="font-heading text-xl font-semibold uppercase tracking-wide text-foreground">{projects[4].title}</h3>
              <span className="font-body text-xs text-muted-foreground uppercase tracking-wider">{projects[4].category}</span>
            </div>
          </div>
        </div>

        <div className="bg-background p-6 md:p-8 flex items-center justify-center">
          <img
            src={projects[5].image}
            alt="Object"
            loading="lazy"
            className="w-40 h-40 object-contain"
          />
        </div>

        <div className="bg-background p-6 md:p-8">
          <div className="group cursor-pointer">
            <div className="overflow-hidden">
              <img
                src={projects[6].image}
                alt="Technology"
                loading="lazy"
                className="w-full h-[240px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
