import { useSeo } from "@/hooks/use-seo";
import { PageTransition, FadeIn } from "@/components/PageTransition";
import { ArrowRight, ShieldCheck, Brain, TrendingUp, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function OnePassPKRTransactionReview() {
  useSeo({
    title: "Case Study: OnePass PKR Transaction Review Capability | Chris Albrecht",
    description: "How Chris Albrecht led the design and delivery of an AI-augmented periodic transaction review capability at UBS, transforming KYC risk assessment from manual to data-driven."
  });

  return (
    <PageTransition>
      <section className="container mx-auto px-6 md:px-12 py-20 md:py-36 max-w-4xl">

        <FadeIn>
          <p className="text-sm font-mono text-primary uppercase tracking-widest mb-4">Case Study</p>
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-8">
            OnePass PKR Transaction Review Capability
          </h1>
          <div className="flex flex-wrap gap-6 text-sm font-mono text-muted-foreground border-b border-white/10 pb-12 mb-20">
            <span>UBS · Global Wealth Americas</span>
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
                Executive Overview
              </div>
              <div className="md:col-span-3 bg-white/5 border border-white/10 p-10 rounded-sm">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Led the end-to-end design and enterprise-wide delivery of the OnePass PKR (Periodic Know Your Customer Review) Transaction Review Capability — transforming a legacy manual process into a scalable, AI-augmented control framework within UBS Global Wealth Americas.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The initiative modernized transaction risk assessment by embedding automated data aggregation, AI-driven pattern recognition, and standardized narrative generation directly into the KYC review lifecycle — moving from retrospective, analyst-heavy reviews to a consistent, data-driven, and audit-defensible model.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid md:grid-cols-4 gap-4 md:gap-8 items-start">
              <div className="md:col-span-1 flex items-start gap-3 pt-2">
                <ShieldCheck className="text-primary shrink-0" size={18} />
                <span className="text-muted-foreground font-mono text-sm uppercase tracking-widest">Strategic Leadership</span>
              </div>
              <div className="md:col-span-3 bg-white/5 border border-white/10 p-10 rounded-sm">
                <h3 className="text-2xl font-serif text-white mb-6">End-to-End Ownership & Regulatory Alignment</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Assumed full initiative ownership from concept through production — spanning requirements definition, regulatory alignment, cross-functional workstream coordination, vendor engagement, and phased rollout across the Global Wealth Americas platform.
                  </p>
                  <p>
                    Partnered directly with Compliance, Legal, Risk, and Technology leadership to ensure the capability met KYC regulatory obligations across multiple jurisdictions while remaining operationally scalable. Facilitated executive steering sessions to align on risk appetite, reviewer accountability standards, and audit trail requirements.
                  </p>
                  <p>
                    Drove structured decision-making through the initiative governance framework — managing scope, dependencies, and stakeholder consensus at every milestone from design approval through UAT sign-off and go-live authorization.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="grid md:grid-cols-4 gap-4 md:gap-8 items-start">
              <div className="md:col-span-1 flex items-start gap-3 pt-2">
                <Brain className="text-primary shrink-0" size={18} />
                <span className="text-muted-foreground font-mono text-sm uppercase tracking-widest">AI as a Force Multiplier</span>
              </div>
              <div className="md:col-span-3 bg-white/5 border border-white/10 p-10 rounded-sm">
                <h3 className="text-2xl font-serif text-white mb-6">Aggregation, Pattern Recognition & Narrative Generation</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Designed an AI-augmented review model that automated transaction aggregation across disparate data sources, applying rule-based and machine learning pattern recognition to surface behavioral anomalies and high-risk signals that manual review routinely missed.
                  </p>
                  <p>
                    The system generated structured, plain-language review narratives — pre-populated for analyst validation — standardizing the documentation layer and dramatically reducing the cognitive burden on compliance reviewers. This shifted the analyst's role from data gathering to risk judgment and oversight.
                  </p>
                  <p>
                    The architecture was designed for scale: modular, configurable by risk segment, and extensible for additional jurisdictions and review types — embedding AI not as a point tool but as a core control infrastructure component.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="grid md:grid-cols-4 gap-4 md:gap-8 items-start">
              <div className="md:col-span-1 flex items-start gap-3 pt-2">
                <TrendingUp className="text-primary shrink-0" size={18} />
                <span className="text-muted-foreground font-mono text-sm uppercase tracking-widest">Business Impact</span>
              </div>
              <div className="md:col-span-3 bg-white/5 border border-white/10 p-10 rounded-sm">
                <h3 className="text-2xl font-serif text-white mb-8">Measurable Business Impact</h3>
                <ul className="space-y-4">
                  {[
                    "Significantly reduced periodic review cycle times by eliminating manual data gathering and pre-populating reviewer workflows with AI-generated transaction summaries.",
                    "Delivered consistent review outcomes across the analyst population — replacing judgment-dependent, ad-hoc documentation with a standardized, AI-structured narrative framework.",
                    "Increased analyst throughput and capacity, enabling the compliance team to cover a larger review population without proportional headcount growth.",
                    "Established a fully audit-defensible review record for each PKR case, improving regulatory confidence and reducing findings risk in examiner reviews.",
                    "Positioned the OnePass PKR capability as a scalable, replicable model for AI-augmented risk controls across other KYC review types within UBS Global Wealth."
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
