const ValuesSection = () => {
  return (
    <section id="about" className="bg-foreground text-primary-foreground px-6 py-24 md:px-10">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold uppercase leading-snug tracking-wide">
          Elegance,{" "}
          <span className="font-body text-base sm:text-lg font-light italic lowercase tracking-normal align-middle">meets</span>{" "}
          efficiency,{" "}
          <span className="font-body text-base sm:text-lg font-light italic lowercase tracking-normal align-middle">and</span>
          <br />
          (razor{" "}
          <span className="font-body text-base sm:text-lg font-light italic lowercase tracking-normal align-middle">was</span>{" "}
          sharp)
          <br />
          precision is
          <br />
          the Cockham way.
        </p>
      </div>
    </section>
  );
};

export default ValuesSection;
