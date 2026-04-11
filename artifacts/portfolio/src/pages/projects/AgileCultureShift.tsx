import { useSeo } from "@/hooks/use-seo";
import { PageTransition, FadeIn } from "@/components/PageTransition";
import { ArrowRight, Users, TrendingUp, Layers, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function AgileCultureShift() {
  useSeo({
    title: "Case Study: Agile Culture Shift | Christopher J. Albrecht",
    description: "A deep dive into the enterprise-wide Agile culture shift initiative led by Christopher J. Albrecht at UBS."
  });

  return (
    <PageTransition>
      <section className="container mx-auto px-6 md:px-12 py-20 md:py-36 max-w-4xl">

        {/* Header */}
        <FadeIn>
          <p className="text-sm font-mono text-primary uppercase tracking-widest mb-4">Case Study</p>
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-8">
            Agile Culture Shift Initiative
          </h1>
          <div className="flex flex-wrap gap-6 text-sm font-mono text-muted-foreground border-b border-white/10 pb-12 mb-20">
            <span>UBS · Enterprise Technology</span>
            <span className="text-white/20">·</span>
            <span>2015 – 2020</span>
            <span className="text-white/20">·</span>
            <span>Initiative Manager</span>
          </div>
        </FadeIn>

        <div className="space-y-24">

          {/* Executive Summary */}
          <FadeIn delay={0.1}>
            <div className="grid md:grid-cols-4 gap-4 md:gap-8 items-start">
              <div className="md:col-span-1 text-muted-foreground font-mono text-sm pt-2 uppercase tracking-widest">
                Executive Summary
              </div>
              <div className="md:col-span-3 bg-white/5 border border-white/10 p-10 rounded-sm">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  [Replace with a 2–3 sentence executive summary of the initiative. Describe the scope, the stakes, and the ultimate outcome in concise, board-ready language.]
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Example: Orchestrated a multi-year Agile adoption program across UBS's technology division, shifting N teams from waterfall delivery to iterative, value-driven operating models, reducing average delivery cycle time by X%.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* The Challenge */}
          <FadeIn delay={0.2}>
            <div className="grid md:grid-cols-4 gap-4 md:gap-8 items-start">
              <div className="md:col-span-1 flex items-start gap-3 pt-2">
                <Users className="text-primary shrink-0" size={18} />
                <span className="text-muted-foreground font-mono text-sm uppercase tracking-widest">The Challenge</span>
              </div>
              <div className="md:col-span-3 bg-white/5 border border-white/10 p-10 rounded-sm">
                <h3 className="text-2xl font-serif text-white mb-6">Stakeholders, Scale & Complexity</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>[Describe the organizational challenge. What entrenched behaviors or structures were being disrupted? What were the cultural and political obstacles to Agile adoption?]</p>
                  <p>[Example: Transforming the working culture of N engineers and project managers deeply embedded in waterfall delivery, across X global locations, while maintaining ongoing delivery commitments and regulatory compliance standards.]</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Initiative Management Approach */}
          <FadeIn delay={0.3}>
            <div className="grid md:grid-cols-4 gap-4 md:gap-8 items-start">
              <div className="md:col-span-1 flex items-start gap-3 pt-2">
                <Layers className="text-primary shrink-0" size={18} />
                <span className="text-muted-foreground font-mono text-sm uppercase tracking-widest">Approach</span>
              </div>
              <div className="md:col-span-3 bg-white/5 border border-white/10 p-10 rounded-sm">
                <h3 className="text-2xl font-serif text-white mb-6">The Initiative Management Approach</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>[Describe your methodology and leadership approach. How did you design the change program? What coaching, training, or governance structures did you put in place?]</p>
                  <p>[Example: Deployed a phased SAFe implementation roadmap with embedded coaching cycles, trained N Scrum Masters internally, and established a community of practice to sustain momentum beyond the formal program timeline.]</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Key Results */}
          <FadeIn delay={0.4}>
            <div className="grid md:grid-cols-4 gap-4 md:gap-8 items-start">
              <div className="md:col-span-1 flex items-start gap-3 pt-2">
                <TrendingUp className="text-primary shrink-0" size={18} />
                <span className="text-muted-foreground font-mono text-sm uppercase tracking-widest">Results</span>
              </div>
              <div className="md:col-span-3 bg-white/5 border border-white/10 p-10 rounded-sm">
                <h3 className="text-2xl font-serif text-white mb-8">Key Results & Leadership Impact</h3>
                <ul className="space-y-4">
                  {[
                    "[Result 1 — Replace with a specific, quantified outcome. E.g., Achieved N% improvement in on-time delivery across transformed teams within 12 months.]",
                    "[Result 2 — Replace with a specific, quantified outcome. E.g., Reduced defect escape rate by X% through iterative testing and continuous integration practices.]",
                    "[Result 3 — Replace with a cultural impact. E.g., Established a self-sustaining community of practice with N active members across X business units.]",
                    "[Result 4 — Replace with a strategic recognition. E.g., Program cited as a reference model for Agile adoption across UBS's global technology function.]"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 text-muted-foreground leading-relaxed">
                      <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>

        </div>

        {/* Footer nav */}
        <FadeIn delay={0.5} className="mt-36 pt-16 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors font-mono text-sm"
            data-testid="link-case-study-back"
          >
            <ArrowRight size={14} className="rotate-180" />
            Back to Portfolio
          </Link>
          <Link
            href="/projects/major-trading-transformation"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
            data-testid="link-case-study-next"
          >
            Other Case Study: Major Trading Transformation
            <ArrowRight size={14} />
          </Link>
        </FadeIn>

      </section>
    </PageTransition>
  );
}
