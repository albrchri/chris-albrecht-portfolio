export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-black py-12 mt-24">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-[#A1A1A6] font-sans text-sm">
          &copy; 2026 Chris J. Albrecht. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a
            href="https://github.com/albrchri"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-sans font-medium text-[#A1A1A6] hover:text-white transition-colors"
            data-testid="link-footer-github"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/albrchri/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-sans font-medium text-[#A1A1A6] hover:text-white transition-colors"
            data-testid="link-footer-linkedin"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
