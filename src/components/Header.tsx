const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 bg-background/80 backdrop-blur-sm md:px-10">
      <span className="font-heading text-sm font-semibold uppercase tracking-widest text-foreground">
        COCKHAM
      </span>
      <nav className="hidden md:flex items-center gap-8">
        <a href="#work" className="font-body text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors">Work</a>
        <a href="#about" className="font-body text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors">About</a>
        <a href="#contact" className="font-body text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
