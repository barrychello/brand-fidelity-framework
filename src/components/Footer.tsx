const Footer = () => {
  return (
    <footer className="px-6 py-8 md:px-10 border-t border-border">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <span className="font-heading text-xs font-semibold uppercase tracking-widest text-foreground">
          COCKHAM
        </span>
        <div className="flex items-center gap-6">
          <a href="#" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider">Instagram</a>
          <a href="#" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider">Vimeo</a>
          <a href="#" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider">LinkedIn</a>
        </div>
        <span className="font-body text-xs text-muted-foreground">
          © 2026 All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
