export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background py-12 mt-24">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Christopher J. Albrecht. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a
            href="https://linkedin.com/in/cjalbrecht"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            data-testid="link-footer-linkedin"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/cjalbrecht"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            data-testid="link-footer-github"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
