/**
 * Central editable copy for Mitiga.
 */

export const site = {
  name: "Mitiga",
  tagline: "AI native security for modern infrastructure",
  description:
    "Mitiga helps cloud teams detect, triage, and fix security risk with AI-assisted analysis and hands-on assessments.",
  url: "https://mitiga.in",
  email: "info@mitiga.in",
  address:
    "(EPIP F-26) Plot No 77, Sy No 150, EPIP Layout, Whitefield, Bangalore 560066, Karnataka 560099",
  copyrightYear: 2026,
  social: {
    linkedin: "#",
    x: "https://x.com/mitiga_in",
  },
  scheduleUrl: "mailto:info@mitiga.in?subject=Request%20a%20briefing",
} as const;

export const navLinks = [
  { label: "Platform", href: "/#platform" },
  { label: "Services", href: "/#services" },
  { label: "Approach", href: "/#approach" },
  { label: "Research", href: "/#research" },
  { label: "Company", href: "/#company" },
  { label: "Contact", href: "/#contact" },
] as const;

export const credibilityCues = [
  { label: "Service lines", value: "3" },
  { label: "Frameworks mapped", value: "5" },
  { label: "Based in", value: "Bangalore" },
] as const;

export const problem = {
  eyebrow: "Context",
  title: "Manual security cannot keep pace with cloud change.",
  body: "Infrastructure ships every day. Attack surfaces grow with every service account, API, and misconfigured bucket. Quarterly scans leave gaps that real attackers find in hours, not weeks.",
} as const;

export const platformCapabilities = [
  {
    id: "detection",
    title: "AI-assisted threat detection",
    body: "Correlate signals across identity, network, and workloads so you see real detections, not alert noise.",
    visual: "radar" as const,
  },
  {
    id: "triage",
    title: "Automated vulnerability triage",
    body: "Rank findings by exploitability and business context so engineers fix what matters first.",
    visual: "triage" as const,
  },
  {
    id: "attack-path",
    title: "Attack-path analysis",
    body: "Map how permissions, trust boundaries, and exposures chain into real impact.",
    visual: "graph" as const,
  },
  {
    id: "posture",
    title: "Continuous cloud posture",
    body: "Watch configuration drift across AWS, Azure, and GCP, with clear remediation guidance.",
    visual: "posture" as const,
  },
  {
    id: "reporting",
    title: "AI-augmented reporting",
    body: "Turn the same evidence into clear executive summaries and engineer-ready reproduction steps.",
    visual: "report" as const,
  },
] as const;

export const services = [
  {
    slug: "cloud-security",
    title: "Cloud Security",
    short:
      "Identity, network, data, and CI/CD reviews across AWS, Azure, and GCP, with findings you can reproduce.",
    scope: [
      "IAM and privilege analysis",
      "Network segmentation and exposure",
      "Data store and secret hygiene",
      "CI/CD and supply-chain controls",
      "Logging and detection readiness",
    ],
    methodology: [
      "Inventory cloud estates and trust boundaries",
      "Assess against CIS Benchmarks and CSA CCM mappings",
      "Validate high-risk paths with hands-on review",
      "Prioritize by exploitability and blast radius",
    ],
    deliverables: [
      "Prioritized risk register",
      "Reproduction notes and fix guidance",
      "Executive one-pager",
      "Optional remediation tracking",
    ],
  },
  {
    slug: "red-team",
    title: "Red Team Assessment",
    short:
      "Adversary simulation that tests detection and response, not just perimeter checklists.",
    scope: [
      "Objective-based intrusion scenarios",
      "Identity and lateral movement paths",
      "Detection coverage stress tests",
      "Social engineering (scoped)",
      "Purple-team collaboration options",
    ],
    methodology: [
      "Define objectives and rules of engagement",
      "Model likely adversary behaviors (ATT&CK-aligned)",
      "Execute controlled scenarios",
      "Debrief with detection and response owners",
    ],
    deliverables: [
      "Timeline of operator activity",
      "Detection gaps and tuning recommendations",
      "Remediation plan by severity",
      "Leadership readout",
    ],
  },
  {
    slug: "vapt",
    title: "VAPT",
    short:
      "Vulnerability assessment and penetration testing for apps, APIs, and networks that matter in production.",
    scope: [
      "Web and API security testing",
      "Mobile application assessment",
      "Internal and external network testing",
      "Auth and authorization deep dives",
      "Business-logic abuse cases",
    ],
    methodology: [
      "Threat model the target surface",
      "Combine automated discovery with manual exploitation",
      "Map findings to OWASP categories where applicable",
      "Validate fixes on retest",
    ],
    deliverables: [
      "Technical finding reports with repro steps",
      "Risk-ranked backlog",
      "Retest window",
      "Summary for security and engineering leads",
    ],
  },
] as const;

export const methodologySteps = [
  {
    id: "discover",
    title: "Discover",
    body: "Map assets, identities, and trust boundaries. Clarify objectives and constraints.",
  },
  {
    id: "model",
    title: "Model",
    body: "Build an attack and risk model grounded in how your systems actually run.",
  },
  {
    id: "test",
    title: "Test",
    body: "Validate assumptions with detection analysis, posture review, or adversary simulation.",
  },
  {
    id: "remediate",
    title: "Remediate",
    body: "Ship prioritized fixes with clear owners, evidence, and acceptance criteria.",
  },
  {
    id: "verify",
    title: "Verify",
    body: "Retest critical paths and confirm controls hold under change.",
  },
] as const;

export const frameworks = [
  { name: "OWASP", note: "Application risk categories" },
  { name: "MITRE ATT&CK", note: "Adversary behavior mapping" },
  { name: "NIST CSF", note: "Program maturity alignment" },
  { name: "CIS Benchmarks", note: "Cloud configuration baselines" },
  { name: "ISO 27001", note: "Control family mapping" },
] as const;

export const about = {
  mission:
    "We help teams that move fast stay secure. AI speeds up the analysis. People still make the calls that matter.",
  principles: [
    {
      title: "Evidence first",
      body: "Findings come with context and steps to reproduce, not just slides.",
    },
    {
      title: "AI as leverage",
      body: "Models help with triage and write-ups. Operators own the conclusions.",
    },
    {
      title: "Clear scope",
      body: "We say what we checked, what we found, and what still needs work.",
    },
  ],
} as const;

export const faqs = [
  {
    q: "What does Mitiga deliver?",
    a: "Cloud security assessments, red team engagements, and VAPT, backed by AI-assisted detection, triage, and reporting. You get prioritized findings with reproduction steps and remediation guidance.",
  },
  {
    q: "Are you certified against ISO 27001 or similar?",
    a: "Our work maps to frameworks like OWASP, MITRE ATT&CK, NIST CSF, CIS Benchmarks, and ISO 27001 control families. That means alignment with those standards, not a claim that Mitiga holds those certifications.",
  },
  {
    q: "How do you use AI?",
    a: "AI helps correlate signals, prioritize vulnerabilities, analyze attack paths, and draft clearer reports. Recommendations are always reviewed by people before they reach you.",
  },
  {
    q: "Who is a good fit?",
    a: "Cloud product and platform teams that want a serious assessment and ongoing posture improvement, not a one-off PDF for procurement.",
  },
  {
    q: "How do we start?",
    a: "Use the contact form or email info@mitiga.in. We scope objectives, environment, and timeline before any engagement begins.",
  },
] as const;

export const footerColumns = [
  {
    title: "Platform",
    links: [
      { label: "Detection", href: "/#platform" },
      { label: "Triage", href: "/#platform" },
      { label: "Attack paths", href: "/#platform" },
      { label: "Cloud posture", href: "/#platform" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Cloud Security", href: "/services/cloud-security" },
      { label: "Red Team", href: "/services/red-team" },
      { label: "VAPT", href: "/services/vapt" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Security", href: "/security" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Research", href: "/research" },
      { label: "Approach", href: "/#approach" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Responsible disclosure", href: "/security" },
    ],
  },
] as const;

export const detectionFeedLines = [
  "corr.id=7f2a  signal=iam.unusual_assume_role  score=0.91",
  "path: sa-prod → s3://backup → exfil.candidate",
  "triage: CVE-2024-****  exploitability=high  owner=platform",
  "posture.drift  sg-0x9a  0.0.0.0/0:22  status=open",
  "att&ck  T1078  Valid Accounts  confidence=0.87",
  "report.draft  findings=12  critical=2  ready=review",
] as const;
