import { useEffect, useRef, useState } from "react";

const SECTIONS = [
  { id: "intro",           label: "INTRO" },
  { id: "philosophy",      label: "PHILOSOPHY" },
  { id: "accomplishments", label: "ACCOMPLISHMENTS" },
  { id: "endorsements",    label: "ENDORSEMENTS" },
  { id: "experience",      label: "TENURE" },
  { id: "credentials",     label: "CREDENTIALS" },
  { id: "skills",          label: "SKILLS" },
  { id: "personal",        label: "INTERESTS" },
  { id: "contact",         label: "CONTACT" },
];

function getActiveSection(): string {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const trigger = scrollY + windowHeight * 0.35;

  let current = SECTIONS[0].id;
  for (const { id } of SECTIONS) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (el.offsetTop <= trigger) {
      current = id;
    }
  }
  return current;
}

export function ScrollSpy() {
  const [active, setActive] = useState("intro");
  const [hovered, setHovered] = useState<string | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setActive(getActiveSection());
      });
    };

    setActive(getActiveSection());
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
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
                className="relative flex items-center"
                aria-label={label}
              >
                <span
                  className="block rounded-full transition-all duration-300 ease-out"
                  style={{
                    width: 8,
                    height: 8,
                    backgroundColor: isActive ? "#FFFFFF" : "transparent",
                    border: `1.5px solid ${isActive ? "#FFFFFF" : "#86868B"}`,
                    transform: isActive ? "scale(1.3)" : "scale(1)",
                  }}
                />
                <span
                  className="absolute left-5 whitespace-nowrap font-sans text-[10px] font-medium tracking-widest text-white pointer-events-none transition-all duration-200"
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
