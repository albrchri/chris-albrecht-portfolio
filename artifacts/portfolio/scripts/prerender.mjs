/**
 * Pre-render script: generates per-route index.html files at build time.
 *
 * Each route gets its own dist/public/<route>/index.html that contains:
 *   - Correct <title> and <meta name="description"> for that page
 *   - Route-specific Open Graph and Twitter Card tags
 *   - Route-specific JSON-LD structured data
 *   - A <noscript> block with the page's key textual content, so AI crawlers
 *     (GPTBot, ClaudeBot, PerplexityBot, Applebot-Extended) that do not
 *     execute JavaScript can read and index the page
 *   - <meta name="robots" content="noindex"> for placeholder-content routes
 *
 * This replaces inject-noindex.mjs; run it via the `build` npm script.
 */

import { readFileSync, mkdirSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, "..", "dist", "public");
const baseTemplate = readFileSync(join(distDir, "index.html"), "utf-8");

if (!baseTemplate.includes("</head>")) {
  console.error("ERROR: Could not find </head> in dist/public/index.html");
  process.exit(1);
}

const SITE_URL = "https://chrisalbrecht.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/opengraph.jpg`;

// ---------------------------------------------------------------------------
// Route definitions
// ---------------------------------------------------------------------------

const ROUTES = [
  // ── Home ──────────────────────────────────────────────────────────────────
  {
    path: "",           // root — we re-write dist/public/index.html itself
    title: "Chris Albrecht | AI-Native Strategic Delivery Leader",
    description:
      "Strategic product and technology leader with 15+ years delivering enterprise transformation in global financial services. Specializing in AI-native strategy, autonomous agent orchestration, and Agile delivery.",
    ogTitle:
      "Chris Albrecht | AI-Native Strategic Product & Technology Leader",
    ogDescription:
      "Strategic product and technology leader with 15+ years delivering enterprise transformation in global financial services.",
    noindex: false,
    jsonLd: [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Christopher J. Albrecht",
        alternateName: "Chris Albrecht",
        jobTitle: "Senior Initiative Manager",
        description:
          "AI-native strategic delivery leader with 15+ years in global financial services.",
        url: `${SITE_URL}/`,
        sameAs: [
          "https://www.linkedin.com/in/albrchri/",
          "https://github.com/albrchri",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: "Chris Albrecht — Portfolio",
        publisher: { "@id": `${SITE_URL}/#person` },
      },
    ],
    noscript: `
<article>
  <h1>Chris Albrecht — AI-Native Strategic Delivery Leader</h1>
  <p>MSCS, MBA, PMP, CSP</p>
  <p>Bridging Software Strategy &amp; Execution.</p>
  <p>AI-native delivery leader driving platform transformations, cloud migrations, and AI-enabled solutions at enterprise scale.</p>

  <section>
    <h2>Leadership Philosophy</h2>
    <h3>I. Operational Excellence</h3>
    <p>Apply proven methodologies with disciplined execution to ensure consistent, high-quality delivery at any scale. High-quality delivery is the result of a culture built on discipline and consistency.</p>
    <h3>II. Stakeholder Alignment</h3>
    <p>Drive data-informed decisions that build trust and sustain momentum across complex, multi-year initiatives. Trust is the primary currency in multi-year initiatives.</p>
    <h3>III. Adaptive Leadership</h3>
    <p>Build high-performing, resilient teams through active development, engagement, and empowerment.</p>
  </section>

  <section>
    <h2>Signature Accomplishments</h2>
    <h3>AI-Enabled Transaction Review</h3>
    <p>Operationalized autonomous agents summarizing transaction behavior and risk into reviewer-ready outputs, significantly increasing analyst capacity and consistency. Delivered a scalable control utilizing autonomous agents to synthesize transaction behavior and customer risk into reviewer-ready outputs using agentic pattern recognition and narrative generation.</p>
    <h3>Legacy-to-Cloud Migration</h3>
    <p>Led the transformation of an on-premise monolith to cloud-based microservices on Microsoft Azure, improving scalability, resilience, and speed-to-market while significantly reducing infrastructure costs.</p>
    <h3>Enterprise Platform Transformation</h3>
    <p>Replaced a critical legacy investment application with the SimCorp Dimension accounting engine, achieving zero-downtime production cutover with no post-migration issues. Led a global deployment team through a 60-hour weekend cutover with zero SLA downtime.</p>
    <h3>Fraud Prevention RFP &amp; Rollout</h3>
    <p>Led end-to-end RFP execution for a fraud-prevention solution strengthening security controls and client protection across the division through Two-Factor Authentication implementation.</p>
    <h3>Cross-Functional Client Experience Launch</h3>
    <p>Directed global cross-functional teams to streamline onboarding and review processes, scaling a critical client experience from a 5K pilot to full global rollout across millions of accounts with zero service disruption.</p>
    <h3>High-Velocity Agile Evolution</h3>
    <p>Evolved waterfall development into high-velocity Agile delivery, increasing deployment cadence from quarterly to weekly through CI/CD and modern standards — a 10x increase in delivery velocity.</p>
  </section>

  <section>
    <h2>Endorsements</h2>
    <blockquote>"Chris is a highly proactive, results-driven professional who consistently delivers impactful outcomes in high-stakes environments, through strong leadership and executive-level engagement."</blockquote>
    <p>— Ana Soric, Managing Director, UBS</p>
  </section>

  <section>
    <h2>Professional Tenure</h2>
    <h3>UBS — Global Wealth Americas | Senior Initiative Manager | 2020–Present</h3>
    <p>Managed strategic enterprise transformations including a global AI-enabled transaction review capability, the migration of legacy platforms to Microsoft Azure, a marquee client experience rollout, and the end-to-end execution of a fraud-prevention RFP.</p>
    <h3>UBS — Asset Management | Senior Delivery Lead | 2014–2020</h3>
    <p>Directed the enterprise-scale integration of a modern accounting engine, led a global digital portal modernization program, and transitioned traditional waterfall development into a high-velocity Agile organization.</p>
    <h3>Grosvenor Capital Management | Program Manager | Dec 2012–Mar 2014</h3>
    <p>Managed the strategic upgrade and maintenance of a core research platform for a $40B AUM fund-of-funds, led a major client reporting refresh, and introduced executive metrics to enable data-driven portfolio decisions.</p>
    <h3>RTS Realtime Systems | Agile Project Manager | Feb 2011–Dec 2012</h3>
    <p>Led global C++ exchange connectivity development for high-frequency trading gateways, managed the modernization of an algorithmic trading platform, and optimized portfolio planning through ROI-driven prioritization.</p>
  </section>

  <section>
    <h2>Credentials &amp; Expertise</h2>
    <ul>
      <li>Master of Science in Computer Science — Illinois Institute of Technology (Software Engineering &amp; Enterprise Architecture)</li>
      <li>Master of Business Administration — Dominican University, Brennan School of Business (Most Outstanding Student Award)</li>
      <li>Bachelor of Science in Computer Science — Dominican University (Cum Laude)</li>
      <li>Project Management Professional (PMP)® — PMI Certified</li>
      <li>Certified Scrum Professional® (CSP-SM) — Scrum Alliance Certified</li>
      <li>UBS Certified Initiative Manager</li>
    </ul>
  </section>

  <section>
    <h2>Stack &amp; Skills</h2>
    <h3>AI Strategy &amp; Autonomous Agents</h3>
    <ul><li>Autonomous Agent Workflows</li><li>LLM Orchestration</li><li>Prompt Engineering</li><li>Human-in-the-Loop Systems</li></ul>
    <h3>Initiative Leadership &amp; Delivery</h3>
    <ul><li>Initiative Strategy</li><li>Operational Excellence</li><li>Executive Communication</li><li>Change Management</li></ul>
    <h3>Modern Methodologies</h3>
    <ul><li>Agile Delivery (Scrum, Kanban, Lean)</li><li>DevOps &amp; CI/CD</li><li>Program &amp; Portfolio Management</li><li>Scaled Agile Model (Pods, Crews, Chapters, Guilds)</li><li>Objectives &amp; Key Results (OKRs)</li></ul>
    <h3>Technical &amp; Tooling Strategy</h3>
    <ul><li>Microsoft Azure</li><li>Python Ecosystem</li><li>C++ Trading Gateways</li><li>FIX &amp; Proprietary APIs</li><li>GitLab, Jira, Confluence</li></ul>
    <h3>Strategic Governance &amp; Risk</h3>
    <ul><li>Regulatory Alignment</li><li>Audit Defensibility</li><li>Model Risk Management</li><li>Strategic Compliance</li></ul>
  </section>

  <section>
    <h2>Beyond the Boardroom</h2>
    <ul>
      <li>Discipline: Completed a half-marathon in 2025 and training for a full in 2026.</li>
      <li>Mentorship: Chess teacher for elementary and middle school students.</li>
      <li>Process: Wood-Fire BBQ Enthusiast.</li>
      <li>Growth: Exploring blockchain technologies, smart contracts, and decentralized finance as an Ethereum home staker.</li>
    </ul>
  </section>
</article>
`,
  },

  // ── Now ───────────────────────────────────────────────────────────────────
  {
    path: "now",
    title: "Now | Christopher J. Albrecht",
    description:
      "What Christopher J. Albrecht is focused on right now — marathon training, Ethereum & Bitcoin research, and enterprise project management mastery.",
    ogTitle: "Now | Christopher J. Albrecht",
    ogDescription:
      "A snapshot of Christopher J. Albrecht's current priorities, professional development, and personal projects.",
    noindex: false,
    jsonLd: [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/now#webpage`,
        url: `${SITE_URL}/now`,
        name: "Now | Christopher J. Albrecht",
        description:
          "What Christopher J. Albrecht is focused on right now — marathon training, Ethereum & Bitcoin research, and enterprise project management mastery.",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#person` },
      },
    ],
    noscript: `
<article>
  <h1>What I'm focused on right now.</h1>
  <p>A snapshot of my current priorities, professional development, and personal projects.</p>

  <section>
    <h2>Physical Endurance — Marathon Training</h2>
    <p>Preparing for a full marathon on October 11, 2026. Currently in the foundation-building phase, focusing on weekly mileage consistency and progressive overload to build an aerobic base.</p>
  </section>

  <section>
    <h2>Digital Ecosystems — Ethereum &amp; Bitcoin Research</h2>
    <p>Exploring the bleeding edge of decentralized finance protocols, Layer 2 scaling solutions, and strategies for digital asset portfolio management. Understanding the infrastructure of the next financial iteration.</p>
  </section>

  <section>
    <h2>Professional Craft — Tier 1 Project Management</h2>
    <p>Deepening expertise in enterprise project management methodologies. Focusing on PMP/PMI standards, sophisticated program governance structures, and high-level portfolio management strategies tailored for board-level reporting.</p>
  </section>
</article>
`,
  },

  // ── OnePass PKR (indexable case study) ────────────────────────────────────
  {
    path: "projects/onepass-pkr-transaction-review",
    title:
      "Case Study: OnePass PKR Transaction Review Capability | Chris Albrecht",
    description:
      "How Chris Albrecht led the design and delivery of an AI-augmented periodic transaction review capability at UBS, transforming KYC risk assessment from manual to data-driven.",
    ogTitle:
      "Case Study: OnePass PKR Transaction Review Capability | Chris Albrecht",
    ogDescription:
      "How Chris Albrecht led the design and delivery of an AI-augmented periodic transaction review capability at UBS, transforming KYC risk assessment from manual to data-driven.",
    noindex: false,
    jsonLd: [
      {
        "@type": "Article",
        "@id": `${SITE_URL}/projects/onepass-pkr-transaction-review#article`,
        url: `${SITE_URL}/projects/onepass-pkr-transaction-review`,
        headline:
          "Case Study: OnePass PKR Transaction Review Capability",
        description:
          "How Chris Albrecht led the design and delivery of an AI-augmented periodic transaction review capability at UBS, transforming KYC risk assessment from manual to data-driven.",
        author: { "@id": `${SITE_URL}/#person` },
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: [
          {
            "@type": "Thing",
            name: "AI-augmented KYC transaction review",
          },
          {
            "@type": "Thing",
            name: "Periodic Know Your Customer Review",
          },
        ],
      },
    ],
    noscript: `
<article>
  <p>Case Study</p>
  <h1>OnePass PKR Transaction Review Capability</h1>
  <p>UBS · Global Wealth Americas · 2020–Present · Senior Initiative Manager</p>

  <section>
    <h2>Executive Overview</h2>
    <p>Led the end-to-end design and enterprise-wide delivery of the OnePass PKR (Periodic Know Your Customer Review) Transaction Review Capability — transforming a legacy manual process into a scalable, AI-augmented control framework within UBS Global Wealth Americas.</p>
    <p>The initiative modernized transaction risk assessment by embedding automated data aggregation, AI-driven pattern recognition, and standardized narrative generation directly into the KYC review lifecycle — moving from retrospective, analyst-heavy reviews to a consistent, data-driven, and audit-defensible model.</p>
  </section>

  <section>
    <h2>Strategic Leadership — End-to-End Ownership &amp; Regulatory Alignment</h2>
    <p>Assumed full initiative ownership from concept through production — spanning requirements definition, regulatory alignment, cross-functional workstream coordination, vendor engagement, and phased rollout across the Global Wealth Americas platform.</p>
    <p>Partnered directly with Compliance, Legal, Risk, and Technology leadership to ensure the capability met KYC regulatory obligations across multiple jurisdictions while remaining operationally scalable. Facilitated executive steering sessions to align on risk appetite, reviewer accountability standards, and audit trail requirements.</p>
    <p>Drove structured decision-making through the initiative governance framework — managing scope, dependencies, and stakeholder consensus at every milestone from design approval through UAT sign-off and go-live authorization.</p>
  </section>

  <section>
    <h2>AI as a Force Multiplier — Aggregation, Pattern Recognition &amp; Narrative Generation</h2>
    <p>Designed an AI-augmented review model that automated transaction aggregation across disparate data sources, applying rule-based and machine learning pattern recognition to surface behavioral anomalies and high-risk signals that manual review routinely missed.</p>
    <p>The system generated structured, plain-language review narratives — pre-populated for analyst validation — standardizing the documentation layer and dramatically reducing the cognitive burden on compliance reviewers. This shifted the analyst's role from data gathering to risk judgment and oversight.</p>
    <p>The architecture was designed for scale: modular, configurable by risk segment, and extensible for additional jurisdictions and review types — embedding AI not as a point tool but as a core control infrastructure component.</p>
  </section>

  <section>
    <h2>Business Impact</h2>
    <ul>
      <li>Significantly reduced periodic review cycle times by eliminating manual data gathering and pre-populating reviewer workflows with AI-generated transaction summaries.</li>
      <li>Delivered consistent review outcomes across the analyst population — replacing judgment-dependent, ad-hoc documentation with a standardized, AI-structured narrative framework.</li>
      <li>Increased analyst throughput and capacity, enabling the compliance team to cover a larger review population without proportional headcount growth.</li>
      <li>Established a fully audit-defensible review record for each PKR case, improving regulatory confidence and reducing findings risk in examiner reviews.</li>
      <li>Positioned the OnePass PKR capability as a scalable, replicable model for AI-augmented risk controls across other KYC review types within UBS Global Wealth.</li>
    </ul>
  </section>
</article>
`,
  },

  // ── Noindex case studies ───────────────────────────────────────────────────
  {
    path: "projects/legacy-cloud-transformation",
    title: "Case Study: Legacy Cloud Transformation | Chris Albrecht",
    description:
      "How Chris Albrecht led the legacy-to-cloud transformation initiative at UBS, migrating on-premise monolith systems to Microsoft Azure microservices.",
    ogTitle: "Case Study: Legacy Cloud Transformation | Chris Albrecht",
    ogDescription:
      "How Chris Albrecht led the legacy-to-cloud transformation initiative at UBS, migrating on-premise monolith systems to Microsoft Azure microservices.",
    noindex: true,
    jsonLd: null,
    noscript: `
<article>
  <p>Case Study</p>
  <h1>Legacy Cloud Transformation</h1>
  <p>UBS · Investment Technology · Senior Initiative Manager</p>
  <p>Led the transformation of a locally hosted monolith into cloud-based microservices on Microsoft Azure, improving scalability, resilience, and speed-to-market while significantly reducing infrastructure costs.</p>
</article>
`,
  },
  {
    path: "projects/simcorp-dimension-integration",
    title: "Case Study: SimCorp Dimension Integration | Chris Albrecht",
    description:
      "How Chris Albrecht led the SimCorp Dimension technical integration and go-live at UBS Investment Management Technology.",
    ogTitle: "Case Study: SimCorp Dimension Integration | Chris Albrecht",
    ogDescription:
      "How Chris Albrecht led the SimCorp Dimension technical integration and go-live at UBS Investment Management Technology.",
    noindex: true,
    jsonLd: null,
    noscript: `
<article>
  <p>Case Study</p>
  <h1>SimCorp Dimension Integration</h1>
  <p>UBS · Investment Management Technology · Senior Initiative Manager</p>
  <p>Orchestrated the replacement of a critical legacy investment application with the SimCorp Dimension accounting engine, achieving a flawless production cutover with no post-migration incidents.</p>
</article>
`,
  },
  {
    path: "projects/major-trading-transformation",
    title: "Case Study: Major Trading Transformation | Christopher J. Albrecht",
    description:
      "A deep dive into the major trading platform transformation initiative led by Christopher J. Albrecht at UBS Global Markets.",
    ogTitle:
      "Case Study: Major Trading Transformation | Christopher J. Albrecht",
    ogDescription:
      "A deep dive into the major trading platform transformation initiative led by Christopher J. Albrecht at UBS Global Markets.",
    noindex: true,
    jsonLd: null,
    noscript: `
<article>
  <p>Case Study</p>
  <h1>Major Trading Transformation Initiative</h1>
  <p>UBS · Global Markets · Senior Initiative Manager</p>
  <p>Led a comprehensive trading platform modernization across global markets, addressing legacy consolidation, stakeholder alignment, and geographic complexity.</p>
</article>
`,
  },
  {
    path: "projects/agile-culture-shift",
    title: "Case Study: Agile Culture Shift | Christopher J. Albrecht",
    description:
      "A deep dive into the enterprise-wide Agile culture shift initiative led by Christopher J. Albrecht at UBS Enterprise Technology.",
    ogTitle: "Case Study: Agile Culture Shift | Christopher J. Albrecht",
    ogDescription:
      "A deep dive into the enterprise-wide Agile culture shift initiative led by Christopher J. Albrecht at UBS Enterprise Technology.",
    noindex: true,
    jsonLd: null,
    noscript: `
<article>
  <p>Case Study</p>
  <h1>Agile Culture Shift Initiative</h1>
  <p>UBS · Enterprise Technology · Initiative Manager · 2015–2020</p>
  <p>Led enterprise adoption of Agile methodologies, transitioning from waterfall to high-velocity SAFe delivery, with coaching, Scrum Master programs, and communities of practice.</p>
</article>
`,
  },
];

// ---------------------------------------------------------------------------
// HTML generation helpers
// ---------------------------------------------------------------------------

/**
 * Strips the existing <title>, <meta name="description">, OG, Twitter, and
 * JSON-LD blocks from the shell HTML so we can inject route-specific ones.
 */
function stripDefaultHeadTags(html) {
  // Remove existing <title>...</title>
  html = html.replace(/<title>[^<]*<\/title>/, "");
  // Remove existing meta description
  html = html.replace(/<meta\s+name="description"[^>]*>/gi, "");
  // Remove existing OG tags
  html = html.replace(/<meta\s+property="og:[^"]*"[^>]*>/gi, "");
  // Remove existing Twitter tags
  html = html.replace(/<meta\s+name="twitter:[^"]*"[^>]*>/gi, "");
  // Remove existing JSON-LD <script> block
  html = html.replace(
    /<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/gi,
    ""
  );
  // Remove existing robots meta (we'll inject fresh if needed)
  html = html.replace(/<meta\s+name="robots"[^>]*>/gi, "");
  return html;
}

function buildHeadTags(route) {
  const canonicalUrl = route.path
    ? `${SITE_URL}/${route.path}`
    : `${SITE_URL}/`;
  const ogImage = DEFAULT_OG_IMAGE;

  const tags = [
    `    <!-- Primary SEO -->`,
    `    <title>${route.title}</title>`,
    `    <meta name="description" content="${route.description}" />`,
    `    <meta name="author" content="Chris Albrecht" />`,
    route.noindex
      ? `    <meta name="robots" content="noindex" />`
      : `    <link rel="canonical" href="${canonicalUrl}" />`,
    ``,
    `    <!-- Open Graph -->`,
    `    <meta property="og:type" content="website" />`,
    `    <meta property="og:url" content="${canonicalUrl}" />`,
    `    <meta property="og:title" content="${route.ogTitle}" />`,
    `    <meta property="og:description" content="${route.ogDescription}" />`,
    `    <meta property="og:image" content="${ogImage}" />`,
    ``,
    `    <!-- Twitter Card -->`,
    `    <meta name="twitter:card" content="summary_large_image" />`,
    `    <meta name="twitter:url" content="${canonicalUrl}" />`,
    `    <meta name="twitter:title" content="${route.ogTitle}" />`,
    `    <meta name="twitter:description" content="${route.ogDescription}" />`,
    `    <meta name="twitter:image" content="${ogImage}" />`,
  ];

  if (route.jsonLd) {
    const graph = route.jsonLd;
    tags.push(``);
    tags.push(`    <!-- Structured Data -->`);
    tags.push(
      `    <script type="application/ld+json">\n    ${JSON.stringify(
        { "@context": "https://schema.org", "@graph": graph },
        null,
        2
      ).replace(/\n/g, "\n    ")}\n    </script>`
    );
  }

  return tags.join("\n");
}

/**
 * Wraps the noscript content in a visually hidden but crawler-readable block.
 * The aria-hidden keeps it out of the accessibility tree; the sr-only-style
 * CSS hides it from sighted users while keeping it in the DOM for crawlers.
 */
function buildNoscriptBlock(noscriptContent) {
  return `
    <!--
      Static content for AI crawlers and social bots that do not execute
      JavaScript. Visually hidden from sighted users via inline CSS.
    -->
    <noscript>
      <div style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;">
        ${noscriptContent.trim()}
      </div>
    </noscript>`;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

for (const route of ROUTES) {
  let html = stripDefaultHeadTags(baseTemplate);

  // Inject route-specific head tags before </head>
  const headTags = buildHeadTags(route);
  html = html.replace("</head>", `${headTags}\n  </head>`);

  // Inject static noscript content before </body>
  if (route.noscript) {
    const noscriptBlock = buildNoscriptBlock(route.noscript);
    html = html.replace("</body>", `${noscriptBlock}\n  </body>`);
  }

  if (!route.path) {
    // Root route: overwrite dist/public/index.html
    writeFileSync(join(distDir, "index.html"), html, "utf-8");
    console.log(`[prerender] Updated dist/public/index.html (home)`);
  } else {
    const routeDir = join(distDir, route.path);
    mkdirSync(routeDir, { recursive: true });
    writeFileSync(join(routeDir, "index.html"), html, "utf-8");
    console.log(`[prerender] Created dist/public/${route.path}/index.html`);
  }
}

console.log("[prerender] Done.");
