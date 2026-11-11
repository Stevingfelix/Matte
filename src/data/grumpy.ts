import type { BlogPostTwo } from "./blog";
import type { Testimonial } from "./content";
import type { PricingPlan } from "./pricing";
import { ROUTES } from "./routes";

export const grumpyHeroLinks = [
  { label: "AI Interface Design", to: ROUTES.serviceResearch },
  { label: "SaaS UX Architecture", to: ROUTES.serviceBrand },
  { label: "Design Systems", to: ROUTES.serviceCommunication },
  { label: "Product Prototyping", to: ROUTES.serviceConsultation },
];

export const grumpyWorks = [
  {
    title: "Copilot Workflow Studio",
    subtitle: "2025 . AI Agent Workspace",
    tags: ["AI UX", "SaaS"],
    image: "work-4-1.jpg",
    to: ROUTES.serviceResearch,
  },
  {
    title: "Metricly Billing Cloud",
    subtitle: "2025 . FinOps Dashboard",
    tags: ["Product", "Design System"],
    image: "work-4-2.jpg",
    to: ROUTES.serviceBrand,
  },
  {
    title: "Synthos Model Console",
    subtitle: "2025 . Enterprise AI Platform",
    tags: ["LLM UI", "Research"],
    image: "work-4-3.jpg",
    to: ROUTES.serviceResearch,
    full: true,
  },
  {
    title: "PulseOps Incident Hub",
    subtitle: "2025 . DevTools SaaS",
    tags: ["UX/UI", "Prototyping"],
    image: "work-4-4.jpg",
    to: ROUTES.serviceCommunication,
  },
  {
    title: "Lumen Data Canvas",
    subtitle: "2025 . Analytics Suite",
    tags: ["AI UX", "Product"],
    image: "work-4-5.jpg",
    to: ROUTES.serviceConsultation,
  },
];

export const grumpyApproach = {
  subtitle: "AI & SaaS Approach",
  years: 12,
  yearsText: "Years shipping B2B SaaS & AI products",
  title: "We Turn Complex AI Into Intuitive Products.",
  features: [
    {
      icon: "icon-megaphone",
      title: "User & Prompt Flows",
      text: "We map real operator workflows, edge cases, and human-in-the-loop states before pushing a single pixel.",
      delay: "300ms",
    },
    {
      icon: "icon-settings",
      title: "Tokenized Design Systems",
      text: "We deliver production-ready Figma libraries and React component specs engineered for rapid SaaS iteration.",
      delay: "500ms",
    },
  ],
};

export const grumpyFunfacts = {
  title: "Product Impact",
  intro:
    "From seed-stage AI startups to Series C SaaS platforms, Grumpy designs interfaces that boost activation, retention, and enterprise adoption.",
  stats: [
    { text: "SaaS Products\nShipped", stop: 85, suffix: "+", delay: "100ms" },
    { text: "Active End-Users\nWorldwide", stop: 2.4, suffix: "M", delay: "300ms" },
    { text: "Client Valuation\nRaised", stop: 420, suffix: "M", prefix: "$", delay: "500ms" },
  ],
};

export const grumpyServices = [
  {
    title: "AI UX & Copilot Flows",
    to: ROUTES.serviceResearch,
    icon: "service-4-1.png",
    tags: ["LLM UI", "Agent UX"],
    text: "Conversational workspaces, inline copilots, confidence states, and human-in-the-loop review patterns designed so users trust and adopt your AI features.",
  },
  {
    title: "SaaS Design Systems",
    to: ROUTES.serviceBrand,
    icon: "service-4-2.png",
    tags: ["Figma", "React UI"],
    text: "Scalable multi-theme token architectures, dense data tables, keyboard-first command palettes, and developer-ready specs built for fast product squads.",
  },
  {
    title: "0→1 Product Sprints",
    to: ROUTES.serviceConsultation,
    icon: "service-4-3.png",
    tags: ["Prototype", "UX Audit"],
    text: "Interactive MVP prototypes, onboarding teardowns, and activation experiments delivered in focused weekly sprints so you validate faster with real users.",
  },
];

export const grumpyTestimonials: Testimonial[] = [
  {
    name: "Nadia Kowalski",
    designation: "VP of Product, Synthos AI",
    text: "Grumpy redesigned our entire agent orchestration console in four weeks. Trial-to-paid activation jumped 38% right after launch.",
  },
  {
    name: "Devon Takahashi",
    designation: "Co-Founder & CTO, Metricly",
    text: "Most agencies hand over pretty slides. Grumpy delivered a battle-tested SaaS design system our React engineers loved shipping.",
  },
  {
    name: "Hannah Lindholm",
    designation: "Head of Design, PulseOps",
    text: "Their UX teardown exposed friction we'd overlooked for a year. Onboarding completion climbed from 52% to 84% in one sprint.",
  },
  {
    name: "Mateo Silva",
    designation: "Founder, Lumen Analytics",
    text: "Sharp opinions, zero fluff, and deep AI product intuition. Grumpy feels like a senior founding design team on demand.",
  },
];

export const grumpyPricingPlans: PricingPlan[] = [
  {
    price: "$4,500 /sprint",
    name: "UX Audit Sprint",
    description: "2-week SaaS & AI onboarding teardown",
    features: [
      "Full product & AI workflow UX audit",
      "Annotated Figma teardown & quick wins",
      "Interactive prototype for key flow",
      "Engineering handoff & QA review",
    ],
  },
  {
    price: "$8,500 /monthly",
    name: "Product Design Pod",
    description: "Ongoing SaaS UI/UX & feature shipping",
    features: [
      "Dedicated senior AI/SaaS product designer",
      "Weekly async Looms & sprint reviews",
      "Figma component library & design tokens",
      "Direct Slack collaboration with founders",
    ],
  },
  {
    price: "$14,000 /monthly",
    name: "Full AI Product Team",
    description: "End-to-end 0→1 product & design system",
    features: [
      "Product UX lead + systems designer",
      "Multi-brand & dark-mode token architecture",
      "User testing & activation experiments",
      "Production React/CSS alignment support",
    ],
  },
];

export const grumpyFaqs = [
  {
    title: "How quickly can Grumpy embed with our SaaS engineering team?",
    content: "We kick off within 48 hours of signing. You get a shared Slack channel, a Figma workspace, and weekly sprint deliverables right alongside your engineers.",
  },
  {
    title: "What makes designing AI products different from traditional SaaS?",
    content: "AI interfaces deal with probabilistic outputs, latency, streaming states, and user trust. We specialize in transparent citation UIs, undoable agent actions, and frictionless fallback flows.",
  },
  {
    title: "Do you build design systems that match React and Tailwind/CSS code?",
    content: "Yes—every component ships with Figma variables, responsive states, accessibility contrast checks, and clean token naming mapped directly to your frontend stack.",
  },
  {
    title: "Can we start with a fixed-scope UX audit before a monthly retainer?",
    content: "Definitely. Many SaaS teams start with our 2-week UX Audit Sprint to fix onboarding drop-off or validate an AI copilot workflow before scaling into a pod.",
  },
  {
    title: "Do you work with early-stage startups as well as Series B+ teams?",
    content: "Yes—we help seed founders ship credible v1 products to win enterprise pilots, and partner with growth-stage teams overhauling legacy dashboards.",
  },
];

export const grumpyBlogPosts: BlogPostTwo[] = [
  {
    title: "Designing Trustworthy AI Copilots: UX Patterns That Work",
    image: "blog-2-1.jpg",
    tags: ["AI UX", "Product"],
    text: "How streaming states, inline diff previews, and confidence cues turn skeptical users into daily AI power users.",
    to: ROUTES.blogDetailsRight,
  },
  {
    title: "Simplifying Dense B2B SaaS Onboarding Without Dumbing It Down",
    image: "blog-2-2.jpg",
    tags: ["SaaS", "Design Systems"],
    text: "A practical teardown of progressive disclosure, empty-state templates, and fast time-to-value for technical tools.",
    to: ROUTES.blogDetailsRight,
  },
];

