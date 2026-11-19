/**
 * Central editable copy for Mitiga.
 * TODO (founders): replace placeholders marked with TODO below with verified facts.
 */

export const site = {
  name: "Mitiga",
  tagline: "AI-native security for modern infrastructure",
  description:
    "Mitiga helps cloud-native teams detect, triage, and remediate risk with AI-assisted analysis grounded in established security frameworks.",
  url: "https://mitiga.io",
  email: "contact@mitiga.io",
  copyrightYear: 2026,
  social: {
    // TODO: replace with real organization profiles
    linkedin: "https://linkedin.com/company/mitiga",
    x: "https://x.com/mitiga",
    github: "https://github.com/mitiga",
  },
  // TODO: replace with real Cal.com / scheduling URL
  scheduleUrl: "mailto:contact@mitiga.io?subject=Request%20a%20briefing",
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
  { label: "Framework alignment", value: "5" },
  { label: "Design partners", value: "Onboarding" },
] as const;

export const problem = {
  eyebrow: "Context",
  title: "Manual security cannot keep pace with cloud change.",
  body: "Infrastructure ships continuously. Attack surfaces expand with every service account, API, and misconfigured bucket. Static checklists and quarterly scans leave gaps that automated adversaries exploit in hours, not weeks.",
} as const;

export const platformCapabilities = [
  {
    id: "detection",
    title: "AI-assisted threat detection",
    body: "Correlate signals across identity, network, and workload telemetry to surface high-confidence detections—not alert noise.",
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
    body: "Map how permissions, trust boundaries, and exposures chain into reachable impact.",
    visual: "graph" as const,
  },
  {
    id: "posture",
    title: "Continuous cloud posture",
    body: "Watch configuration drift across AWS, Azure, and GCP with prioritized remediation guidance.",
    visual: "posture" as const,
  },
  {
    id: "reporting",
    title: "AI-augmented reporting",
    body: "Produce clear executive summaries and engineer-ready reproduction steps from the same evidence base.",
    visual: "report" as const,
  },
] as const;

export const services = [
  {
    slug: "cloud-security",
    title: "Cloud Security",
    short:
      "Identity, network, data, and CI/CD reviews across AWS, Azure, and GCP—with reproducible findings.",
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
      "Adversary simulation that tests detection and response—not just perimeter checkboxes.",
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
      "Vulnerability assessment and penetration testing for apps, APIs, and networks that change how production ships.",
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
    "Mitiga exists to make high-signal security reachable for teams that move fast—using AI to accelerate analysis while keeping human judgment on decisions that matter.",
  principles: [
    {
      title: "Evidence over theater",
      body: "Findings include context and reproduction—not slideware.",
    },
    {
      title: "AI as leverage",
      body: "Models accelerate triage and narrative; operators own conclusions.",
    },
    {
      title: "Honest scope",
      body: "We say what we can verify. We do not invent logos or metrics.",
    },
  ],
  team: [
    // TODO: replace with real names, roles, and bios
    {
      initials: "A",
      name: "Founder A",
      role: "CEO",
      bio: "Placeholder — add real biography.",
    },
    {
      initials: "B",
      name: "Founder B",
      role: "CTO",
      bio: "Placeholder — add real biography.",
    },
    {
      initials: "C",
      name: "Founder C",
      role: "Head of Security",
      bio: "Placeholder — add real biography.",
    },
  ],
} as const;

export const faqs = [
  {
    q: "What does Mitiga actually deliver?",
    a: "Cloud security assessments, red team engagements, and VAPT—supported by AI-assisted detection, triage, and reporting workflows. Engagements produce prioritized findings with reproduction steps and remediation guidance.",
  },
  {
    q: "Are you certified against ISO 27001 or similar?",
    a: "Our methodologies are mapped to frameworks such as OWASP, MITRE ATT&CK, NIST CSF, CIS Benchmarks, and ISO 27001 control families. That is alignment—not a claim that Mitiga holds those certifications unless stated separately.",
  },
  {
    q: "How do you use AI?",
    a: "AI helps correlate signals, prioritize vulnerabilities, analyze attack paths, and draft clearer reports. Critical decisions and client recommendations remain human-reviewed.",
  },
  {
    q: "Who is a good fit?",
    a: "Cloud-native product and platform teams that want rigorous assessment and continuous posture improvement—not a one-off PDF for procurement.",
  },
  {
    q: "How do we start?",
    a: "Request a briefing via the contact form or email contact@mitiga.io. We scope objectives, environment, and timeline before any engagement begins.",
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
