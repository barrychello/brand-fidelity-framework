import heroFluid from "@/assets/hero-fluid.png";
import taiekea from "@/assets/taiekea.jpg";

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center px-6 pt-24 pb-16 md:px-10 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${taiekea})` }}
    >
      <div className="absolute inset-0 bg-background/40 z-0 pointer-events-none"></div>
      <div className="relative z-10 max-w-5xl">
        <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold uppercase leading-[0.9] tracking-tight text-foreground max-w-4xl" style={{ fontFamily: "'Boldonse', sans-serif" }}>
          creating tomorrows <br className="hidden md:block" /> from today’s
        </h1>
      </div>

      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-[10%] w-[50vw] max-w-[600px] opacity-80 pointer-events-none">
        <img
          src={heroFluid}
          alt=""
          width={800}
          height={800}
          className="w-full h-auto"
        />
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-8 h-8 rounded-full border border-foreground flex items-center justify-center">
          <svg width="10" height="14" viewBox="0 0 10 14" fill="none" className="text-foreground">
            <path d="M5 1v10M1 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
