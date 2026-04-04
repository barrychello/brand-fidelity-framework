const CTASection = () => {
  return (
    <section id="contact" className="px-6 py-32 md:px-10">
      <div className="max-w-6xl mx-auto">
        <a
          href="mailto:hello@cockham.com"
          className="block group"
        >
          <h2 className="font-heading text-7xl sm:text-8xl md:text-[10rem] lg:text-[14rem] font-bold uppercase leading-[0.85] tracking-tight text-foreground transition-opacity duration-300 group-hover:opacity-70">
            LET'S TALK
          </h2>
        </a>
      </div>
    </section>
  );
};

export default CTASection;
