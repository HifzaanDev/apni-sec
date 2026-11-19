export type ResearchArticle = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readMinutes: number;
  tags: string[];
  body: string[];
};

export const researchArticles: ResearchArticle[] = [
  {
    slug: "cloud-misconfiguration-chains",
    title: "Cloud misconfiguration chains that still work in 2026",
    description:
      "How over-privileged identities, public data paths, and weak CI secrets combine into reachable impact—and how to break the chain.",
    date: "2026-03-12",
    readMinutes: 8,
    tags: ["Cloud", "IAM", "Posture"],
    body: [
      "Most cloud breaches are not zero-days. They are sequences of ordinary misconfigurations that become dangerous only when chained: a service account with broad IAM, a storage bucket reachable from that identity, and insufficient logging on the path between them.",
      "Teams often treat findings as isolated tickets. Attackers treat them as graph edges. An unused access key, a security group that still allows SSH from the internet, and a build role that can assume production privileges are individually “medium.” Together they are a complete intrusion story.",
      "Effective defense starts with attack-path thinking. Inventory principals and resources. Ask which identities can reach sensitive data without an additional exploit. Prefer short-lived credentials, deny-by-default network paths, and continuous posture checks that flag drift within hours—not at the next quarterly review.",
      "Mitiga’s cloud assessments prioritize chains over CVE tallies. We map blast radius, produce reproduction notes, and recommend fixes that shrink reachable impact first. Scanner volume without path context is how backlog noise wins and real risk remains.",
    ],
  },
  {
    slug: "ai-in-red-teaming",
    title: "Where AI helps—and where it does not—in red teaming",
    description:
      "Practical uses of AI for adversary simulation: hypothesis generation, log summarization, and report clarity—without outsourcing judgment.",
    date: "2026-04-02",
    readMinutes: 7,
    tags: ["Red Team", "AI", "Detection"],
    body: [
      "AI is useful in red teaming when it compresses tedious work: drafting scenario hypotheses from architecture notes, summarizing large log windows, and turning operator timelines into coherent narratives for detection engineers.",
      "AI is not a substitute for rules of engagement, careful scoping, or the craft of knowing when a simulated action would create unacceptable risk. Model suggestions can invent plausible-sounding paths that do not exist in the target environment. Operators must verify against real inventory and telemetry.",
      "The highest leverage today is purple-team adjacent: after an exercise, use models to cluster missed detections, propose SIGMA-style rule candidates, and highlight ATT&CK coverage gaps—then have humans validate every rule against false-positive cost.",
      "Mitiga treats AI as leverage inside a disciplined methodology: Discover → Model → Test → Remediate → Verify. Tools accelerate; accountability stays with the people running the engagement.",
    ],
  },
  {
    slug: "api-security-beyond-owasp",
    title: "API security beyond the OWASP checklist",
    description:
      "Object-level authorization, business-logic abuse, and shadow APIs—why checklist testing alone still misses production risk.",
    date: "2026-05-18",
    readMinutes: 9,
    tags: ["API", "VAPT", "OWASP"],
    body: [
      "OWASP API Top 10 is a useful map, not a finish line. Many production failures sit in business logic: multi-step workflows that allow privilege escalation when steps are reordered, race conditions around coupon or quota endpoints, and “internal” APIs exposed through undocumented gateways.",
      "Object-level authorization remains the recurring miss. Testers who only fuzz parameters may never notice that changing a resource ID returns another tenant’s data. Testing must be identity-aware: multiple roles, multiple tenants, and explicit negative cases.",
      "Shadow APIs compound the problem. Old versions left online, debug endpoints behind feature flags, and partner integrations with weaker auth create surfaces outside the team’s mental model. Discovery—traffic analysis, gateway configs, and OpenAPI drift—belongs in every VAPT kickoff.",
      "Strong API engagements combine automated discovery with manual abuse-case design, map findings to OWASP categories where helpful, and verify fixes on retest. The goal is fewer reachable failures in production—not a longer PDF.",
    ],
  },
];

export function getArticle(slug: string) {
  return researchArticles.find((a) => a.slug === slug);
}

export function getAllSlugs() {
  return researchArticles.map((a) => a.slug);
}
