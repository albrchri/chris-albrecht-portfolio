import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md border-b border-white/8 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a
          href="#"
          onClick={scrollToTop}
          className="text-xl font-serif font-semibold tracking-wide text-white"
          data-testid="link-home"
        >
          C.J.A.
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="mailto:albrchri@gmail.com"
            className="text-sm font-sans font-medium px-4 py-2 border border-white/60 text-white rounded-sm hover:bg-white hover:text-black transition-all duration-200"
            data-testid="link-nav-contact"
          >
            Contact
          </a>
        </nav>

        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
          data-testid="button-mobile-menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black border-b border-white/10 py-6 px-6 md:hidden flex flex-col gap-6 shadow-2xl"
          >
            <a
              href="mailto:albrchri@gmail.com"
              onClick={() => setIsOpen(false)}
              className="text-lg font-sans font-medium text-white"
              data-testid="link-mobile-contact"
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
