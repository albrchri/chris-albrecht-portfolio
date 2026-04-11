import { useSeo } from "@/hooks/use-seo";
import { PageTransition, FadeIn } from "@/components/PageTransition";
import { Timer, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Now() {
  useSeo({
    title: "Now | Christopher J. Albrecht",
    description: "What Christopher J. Albrecht is focused on right now."
  });

  return (
    <PageTransition>
      <section className="container mx-auto px-6 md:px-12 py-20 md:py-40 max-w-4xl">
        <FadeIn>
          <div className="flex items-center gap-3 text-primary mb-8">
            <Timer size={24} />
            <h1 className="text-sm font-mono uppercase tracking-widest">Now</h1>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-10">What I'm focused on right now.</h2>
          <p className="text-2xl text-muted-foreground font-light mb-24 border-b border-white/10 pb-16">
            A snapshot of my current priorities, professional development, and personal projects.
          </p>
        </FadeIn>

        <div className="space-y-24">
          <FadeIn delay={0.1}>
            <div className="grid md:grid-cols-4 gap-4 md:gap-8 items-start">
              <div className="md:col-span-1 text-muted-foreground font-mono text-sm pt-2">
                Physical Endurance
              </div>
              <div className="md:col-span-3 bg-white/5 border border-white/10 p-10 rounded-sm">
                <h3 className="text-3xl font-serif text-white mb-6">Marathon Training</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Preparing for a full marathon on October 11, 2026. Currently in the foundation-building phase, focusing on weekly mileage consistency and progressive overload to build an aerobic base.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid md:grid-cols-4 gap-4 md:gap-8 items-start">
              <div className="md:col-span-1 text-muted-foreground font-mono text-sm pt-2">
                Digital Ecosystems
              </div>
              <div className="md:col-span-3 bg-white/5 border border-white/10 p-10 rounded-sm">
                <h3 className="text-3xl font-serif text-white mb-6">Ethereum & Bitcoin Research</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Exploring the bleeding edge of decentralized finance protocols, Layer 2 scaling solutions, and strategies for digital asset portfolio management. Understanding the infrastructure of the next financial iteration.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="grid md:grid-cols-4 gap-4 md:gap-8 items-start">
              <div className="md:col-span-1 text-muted-foreground font-mono text-sm pt-2">
                Professional Craft
              </div>
              <div className="md:col-span-3 bg-white/5 border border-white/10 p-10 rounded-sm">
                <h3 className="text-3xl font-serif text-white mb-6">Tier 1 Project Management</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Deepening expertise in enterprise project management methodologies. Focusing on PMP/PMI standards, sophisticated program governance structures, and high-level portfolio management strategies tailored for board-level reporting.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4} className="mt-36 pt-16 border-t border-white/10 flex justify-between items-center">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors" data-testid="link-now-back">
            <ArrowRight size={18} className="rotate-180" />
            Back to Portfolio
          </Link>
        </FadeIn>
      </section>
    </PageTransition>
  );
}
