import { useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DetailDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  jobTitle?: string;
  children: React.ReactNode;
}

export function DetailDrawer({ isOpen, onClose, title, subtitle, jobTitle, children }: DetailDrawerProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 280 }}
            className="fixed top-0 right-0 h-full w-full md:w-[560px] bg-[#121212] border-l border-white/10 z-50 overflow-y-auto"
          >
            <div className="p-8 md:p-12">
              <div className="flex items-start justify-between mb-10">
                <div className="pr-6">
                  {subtitle && (
                    <p className="text-xs font-sans font-medium text-[#A1A1A6] uppercase tracking-widest mb-3">
                      {subtitle}
                    </p>
                  )}
                  <h2 className="text-2xl font-serif text-white leading-snug">{title}</h2>
                  {jobTitle && (
                    <p className="text-sm font-sans text-[#A1A1A6] mt-1">{jobTitle}</p>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="flex-shrink-0 text-[#A1A1A6] hover:text-white transition-colors p-1"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="text-[#A1A1A6] font-sans leading-relaxed space-y-5 text-[15px]">
                {children}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
