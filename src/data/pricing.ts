export interface PricingPlan {
  price: string;
  features: string[];
  /** left-hand plan description */
  name: string;
  description: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    price: "$2,500 /monthly",
    name: "Starter Plan",
    description: "Emerging brands & early launches",
    features: [
      "Brand messaging & visual refresh",
      "High-converting landing page build",
      "SEO & analytics baseline setup",
      "Monthly strategy check-in",
    ],
  },
  {
    price: "$4,800 /monthly",
    name: "Professional",
    description: "Growing teams scaling acquisition",
    features: [
      "Full brand identity & web system",
      "Multi-channel campaign creative",
      "Lifecycle email & CRM automation",
      "Bi-weekly conversion optimization",
    ],
  },
  {
    price: "$8,500 /monthly",
    name: "Growth Partner",
    description: "Dedicated studio pod for category leaders",
    features: [
      "Dedicated strategist & senior designers",
      "Custom CMS & interactive product site",
      "Ongoing SEO, content & paid creative",
      "Weekly sprint reviews & reporting",
    ],
  },
];
