export type Project = Readonly<{
  title: string;
  label: string;
  problem: string;
  role: string;
  approach: string;
  outcome: string;
  stack: readonly string[];
  featured?: boolean;
}>;

export type TimelineEntry = Readonly<{
  date: string;
  title: string;
  organization: string;
  description: string;
  kind: "work" | "research" | "education";
}>;

export type CapabilityGroup = Readonly<{
  title: string;
  items: readonly string[];
}>;

export const siteConfig = {
  email: "hello@xinhe.design",
  location: "Ann Arbor, Michigan",
  resumeUrl: null as string | null,
};

export const projects: readonly Project[] = [
  {
    title: "AI Career Path Recommendation Platform",
    label: "01 / Featured product",
    problem:
      "Career exploration is fragmented across disconnected assessments, job data, and learning resources.",
    role: "Product design · Research · Full-stack implementation",
    approach:
      "Designed a six-module workflow that connects profile discovery, skill-gap analysis, role exploration, learning plans, and actionable recommendations.",
    outcome:
      "Translated a complex decision journey into one guided product system, from user input to an explainable next step.",
    stack: ["Next.js", "TypeScript", "AI workflows", "Data visualization"],
    featured: true,
  },
  {
    title: "Envision Resilience Challenge",
    label: "02 / Systems research",
    problem:
      "A coastal community needed a resilience strategy that connected ecological performance with lived experience.",
    role: "Spatial research · Systems design · Scenario development",
    approach:
      "Mapped risk, access, and habitat conditions into phased design moves evaluated as one connected system.",
    outcome:
      "Increased modeled protective coverage from 0.63 to 0.80 while maintaining a legible public-space strategy.",
    stack: ["GIS", "Spatial analysis", "Scenario modeling", "Adobe CC"],
  },
  {
    title: "Startup Investment Analysis",
    label: "03 / Data product",
    problem:
      "Early-stage investment decisions contain noisy signals across founders, markets, funding history, and outcomes.",
    role: "Data analysis · Modeling · Insight communication",
    approach:
      "Cleaned and analyzed 41,174 valid observations, engineered decision-relevant features, and compared predictive models.",
    outcome:
      "Reached 0.828 accuracy and 0.910 ROC-AUC, then translated model performance into interpretable investment signals.",
    stack: ["Python", "Pandas", "Scikit-learn", "Statistical modeling"],
  },
  {
    title: "UMSI Policy RAG Assistant",
    label: "04 / Applied AI",
    problem:
      "Students need fast, trustworthy answers from dense policy documentation without losing source context.",
    role: "AI prototyping · Information architecture · Evaluation",
    approach:
      "Built a retrieval-augmented assistant with cited retrieval, document chunking, and a persisted vector store.",
    outcome:
      "Produced source-grounded policy answers while preserving citations for verification and repeat use.",
    stack: ["Python", "RAG", "Embeddings", "Vector search"],
  },
];

export const timeline: readonly TimelineEntry[] = [
  {
    date: "Present",
    title: "Information and Data Science",
    organization: "University of Michigan",
    description: "Connecting product design, computation, and evidence-led decision making.",
    kind: "education",
  },
  {
    date: "Jun–Aug 2025",
    title: "Research Assistant",
    organization: "Shanghai Landscape Planning and Design Research Institute",
    description:
      "Organized historical archival materials and supported cross-department project operations.",
    kind: "research",
  },
  {
    date: "2025",
    title: "Envision Resilience Challenge",
    organization: "Interdisciplinary design team",
    description: "Developed an evidence-led spatial resilience strategy through systems research.",
    kind: "research",
  },
  {
    date: "Product internship",
    title: "Product Management Intern",
    organization: "Shanghai Tuyuansu Digital Technology",
    description: "Supported product definition, analysis, and delivery across an interdisciplinary team.",
    kind: "work",
  },
  {
    date: "Aug–Sep 2022",
    title: "Designer Assistant",
    organization: "Shandong Tongyuan Design Company",
    description:
      "Developed architectural and landscape proposals for Academician Valley and a Confucian culture theme park.",
    kind: "work",
  },
  {
    date: "Jun–Jul 2022",
    title: "Designer Assistant",
    organization: "Shandong Garden Design and Research Institute",
    description: "Contributed to the planning and landscape development of the Xingtai Zoo project in Hebei.",
    kind: "work",
  },
  {
    date: "Undergraduate study",
    title: "Landscape Architecture",
    organization: "Beijing Forestry University",
    description: "Built a foundation in spatial systems, field research, and environmental design.",
    kind: "education",
  },
];

export const capabilities: readonly CapabilityGroup[] = [
  {
    title: "Product & Research",
    items: ["Product strategy", "User research", "Journey mapping", "Prototyping"],
  },
  {
    title: "Data & AI",
    items: ["Data analysis", "Machine learning", "RAG systems", "Evaluation"],
  },
  {
    title: "Full-stack Development",
    items: ["React / Next.js", "TypeScript", "Python", "APIs & databases"],
  },
  {
    title: "Spatial Thinking",
    items: ["Systems mapping", "GIS", "Scenario planning", "Visual communication"],
  },
];
