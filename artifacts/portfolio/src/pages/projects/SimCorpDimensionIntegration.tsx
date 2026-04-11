import { useSeo } from "@/hooks/use-seo";
import { PageTransition, FadeIn } from "@/components/PageTransition";
import { ArrowRight, Users, TrendingUp, Layers, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function SimCorpDimensionIntegration() {
  useSeo({
    title: "Case Study: SimCorp Dimension Integration | Chris Albrecht",
    description: "How Chris Albrecht led the SimCorp Dimension (SCD) technical integration and go-live at UBS."
  });

  return (
    <PageTransition>
      <section className="container mx-auto px-6 md:px-12 py-20 md:py-36 max-w-4xl">

        <FadeIn>
          <p className="text-sm font-mono text-primary uppercase tracking-widest mb-4">Case Study</p>
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-8">
            SimCorp Dimension Integration
          </h1>
          <div className="flex flex-wrap gap-6 text-sm font-mono text-muted-foreground border-b border-white/10 pb-12 mb-20">
            <span>UBS · Investment Management Technology</span>
            <span className="text-white/20">·</span>
            <span>2020 – Present</span>
            <span className="text-white/20">·</span>
            <span>Senior Initiative Manager</span>
          </div>
        </FadeIn>

        <div className="space-y-24">

          <FadeIn delay={0.1}>
            <div className="grid md:grid-cols-4 gap-4 md:gap-8 items-start">
              <div className="md:col-span-1 text-muted-foreground font-mono text-sm pt-2 uppercase tracking-widest">
                Executive Summary
              </div>
              <div className="md:col-span-3 bg-white/5 border border-white/10 p-10 rounded-sm">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  [Replace with a 2–3 sentence executive summary. Describe the scope, the business context, and the ultimate outcome in concise, board-ready language.]
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Example: Led the full technical integration of SimCorp Dimension (SCD) into UBS's investment management infrastructure, managing N workstreams from initial environment configuration through phased production cutover across X business units.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid md:grid-cols-4 gap-4 md:gap-8 items-start">
              <div className="md:col-span-1 flex items-start gap-3 pt-2">
                <Users className="text-primary shrink-0" size={18} />
                <span className="text-muted-foreground font-mono text-sm uppercase tracking-widest">The Challenge</span>
              </div>
              <div className="md:col-span-3 bg-white/5 border border-white/10 p-10 rounded-sm">
                <h3 className="text-2xl font-serif text-white mb-6">Stakeholders, Scale & Complexity</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>[Describe the integration complexity. What was the existing portfolio management infrastructure? What regulatory, data, and operational constraints shaped the initiative?]</p>
                  <p>[Example: SCD integration required reconciliation of N data models across existing proprietary systems, coordination with X third-party vendors, and compliance with regulatory reporting standards across multiple jurisdictions simultaneously.]</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="grid md:grid-cols-4 gap-4 md:gap-8 items-start">
              <div className="md:col-span-1 flex items-start gap-3 pt-2">
                <Layers className="text-primary shrink-0" size={18} />
                <span className="text-muted-foreground font-mono text-sm uppercase tracking-widest">Approach</span>
              </div>
              <div className="md:col-span-3 bg-white/5 border border-white/10 p-10 rounded-sm">
                <h3 className="text-2xl font-serif text-white mb-6">The Initiative Management Approach</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>[Describe your workstream management structure. How did you sequence environment configuration, data migration, UAT, and production cutover?]</p>
                  <p>[Example: Structured the initiative into N parallel workstreams (Data, Environment, Integration, Compliance, Training), ran phased UAT cycles with front-office users, and managed a detailed cutover runbook with rollback contingencies approved by executive steering committee.]</p>
                </div>
              </div>
            </div>
          </FadeIn>

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
                    "[Result 1 — Replace with a delivery outcome. E.g., Delivered go-live on schedule across N workstreams with zero production incidents in the first 30 days.]",
                    "[Result 2 — Replace with a business outcome. E.g., SCD adoption reduced manual reconciliation effort by X%, freeing N FTEs for higher-value activities.]",
                    "[Result 3 — Replace with a data/reporting outcome. E.g., Standardized portfolio reporting across X asset classes, improving data accuracy and regulatory confidence.]",
                    "[Result 4 — Replace with a leadership outcome. E.g., Established SCD as the foundational investment management platform across UBS's APAC and EMEA operations.]"
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
            href="/projects/legacy-cloud-transformation"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
            data-testid="link-case-study-next"
          >
            Other Case Study: Legacy-to-Cloud Transformation
            <ArrowRight size={14} />
          </Link>
        </FadeIn>

      </section>
    </PageTransition>
  );
}
