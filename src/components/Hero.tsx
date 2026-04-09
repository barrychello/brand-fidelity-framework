import heroFluid from "@/assets/hero-fluid.png";
import taiekea from "@/assets/taiekea.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#F5F5F0] text-[#0A0A0A] w-full overflow-hidden flex flex-col justify-between p-4 md:p-8 font-mono">
      
      {/* Top Navigation Row */}
      <div className="flex justify-between items-start text-[10px] md:text-xs font-semibold tracking-widest uppercase w-full">
        <div className="flex-1">BARRYCHELLO</div>
        <div className="hidden md:block flex-1 text-center">ART DIRECTOR</div>
        <div className="hidden sm:block flex-1 text-right pr-8 md:pr-16">JAKARTA, ID</div>
        <div className="absolute top-4 md:top-8 right-4 md:right-8 cursor-pointer hover:underline">MENU</div>
      </div>

      {/* Main Minimalist Typography */}
      <div className="flex-grow flex flex-col justify-center w-full mt-16 md:mt-0 z-10 relative">
        <h1 
          className="text-[12vw] md:text-[10vw] xl:text-[10rem] font-bold uppercase leading-tight tracking-wide"
          style={{ fontFamily: "'Boldonse', sans-serif" }}
        >
          CREATING
          <img 
            src={taiekea} 
            alt="Creative Direction" 
            className="w-[16vw] md:w-[14vw] lg:w-[18vw] xl:w-[260px] h-[0.65em] object-cover inline-block align-baseline mx-[1vw] md:mx-3 -translate-y-[0.08em] grayscale hover:grayscale-0 transition-all duration-700 ease-out rounded-sm" 
          />
          TOMORROWS<br />
          FROM TODAY'S<br />
          WORKING GLOBALLY.
        </h1>
      </div>

      {/* Decorative Fluid Image - Moved behindtext slightly */}
      <div className="absolute bottom-1/4 right-0 translate-x-[20%] w-[40vw] max-w-[500px] opacity-10 pointer-events-none mix-blend-multiply">
        <img src={heroFluid} alt="" className="w-full h-auto object-contain" />
      </div>

      {/* Bottom Information Row */}
      <div className="flex justify-between items-end text-[10px] md:text-xs font-semibold tracking-widest uppercase w-full">
        <div className="flex-1">AVAILABLE FOR WORK</div>
        <div className="hidden md:block flex-1 text-center">IN, TW, SY</div>
        <div className="hidden sm:block flex-1 text-right pr-8 md:pr-16 cursor-crosshair">SCROLL TO VIEW MORE ↓</div>
        <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8">©2024</div>
      </div>
    </section>
  );
};

export default Hero;
