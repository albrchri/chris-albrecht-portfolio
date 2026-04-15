import { useEffect, useRef, useState } from "react";

const SECTIONS = [
  { id: "intro",           label: "INTRO" },
  { id: "philosophy",      label: "PHILOSOPHY" },
  { id: "accomplishments", label: "ACCOMPLISHMENTS" },
  { id: "endorsements",    label: "ENDORSEMENTS" },
  { id: "experience",      label: "TENURE" },
  { id: "credentials",     label: "CREDENTIALS" },
  { id: "skills",          label: "SKILLS" },
  { id: "personal",        label: "PERSONAL" },
  { id: "contact",         label: "CONTACT" },
];

export function ScrollSpy() {
  const [active, setActive] = useState("intro");
  const [hovered, setHovered] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const sectionEls = SECTIONS.map(s => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { threshold: [0.15, 0.3, 0.5] }
    );

    sectionEls.forEach(el => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="fixed left-10 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center">
      <div className="relative flex flex-col items-center">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-[#2C2C2E]" />
        <div className="relative flex flex-col gap-6">
          {SECTIONS.map(({ id, label }) => {
            const isActive = active === id;
            const isHovered = hovered === id;
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                onMouseEnter={() => setHovered(id)}
                onMouseLeave={() => setHovered(null)}
                className="relative flex items-center group"
                aria-label={label}
              >
                <span
                  className="block rounded-full transition-all duration-300 ease-out"
                  style={{
                    width: 8,
                    height: 8,
                    backgroundColor: isActive ? "#FFFFFF" : "transparent",
                    border: isActive ? "1.5px solid #FFFFFF" : "1.5px solid #86868B",
                    transform: isActive ? "scale(1.25)" : "scale(1)",
                  }}
                />
                <span
                  className="absolute left-5 whitespace-nowrap font-sans text-[10px] font-medium tracking-widest text-white transition-all duration-200 pointer-events-none"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? "translateX(0)" : "translateX(-4px)",
                  }}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
