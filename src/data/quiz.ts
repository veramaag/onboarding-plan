export type Category = "company" | "gtm" | "procurement" | "stakeholders";

export interface Question {
  id: number;
  category: Category;
  categoryLabel: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const PASS_SCORE = 9; // out of 12
export const TOTAL_QUESTIONS = 12;

export const questions: Question[] = [
  // ── ECOPLANET & COMPANY (3 questions) ───────────────────────────────────────
  {
    id: 1,
    category: "company",
    categoryLabel: "Ecoplanet",
    question:
      "Which regulatory frameworks are primary drivers for demand in the sustainable procurement market? (Select the best answer.)",
    options: [
      "GDPR and the Digital Markets Act",
      "CSRD (Corporate Sustainability Reporting Directive) and the German Supply Chain Due Diligence Act (LkSG)",
      "Basel III and the Solvency II Directive",
      "ISO 9001 and ISO 14001 certification requirements",
    ],
    correctIndex: 1,
    explanation:
      "CSRD and LkSG require companies to report on Scope 3 emissions and assess supplier sustainability, creating direct regulatory demand for sustainable procurement solutions.",
  },
  {
    id: 2,
    category: "company",
    categoryLabel: "Ecoplanet",
    question:
      "Approximately what share of a typical company's total carbon footprint comes from its supply chain (Scope 3 emissions)?",
    options: ["10–20%", "30–40%", "50–60%", "70–90%"],
    correctIndex: 3,
    explanation:
      "Scope 3 (supply chain) emissions account for 70–90% of most companies' carbon footprint, which is why sustainable procurement is so strategically important.",
  },
  {
    id: 3,
    category: "company",
    categoryLabel: "Ecoplanet",
    question:
      "What type of software is ecoplanet building, and what makes it different from existing energy tools?",
    options: [
      "A sustainability reporting platform that helps companies track and disclose their Scope 1, 2 and 3 emissions to regulators",
      "Energy integration software that connects energy markets directly to core business processes, enabling daily intelligent optimisation",
      "An ERP module for SMBs to manage procurement, invoicing and supply chain operations in one system",
      "A smart meter installation service combined with energy consulting for medium-sized companies",
    ],
    correctIndex: 1,
    explanation:
      "Ecoplanet builds energy integration software — a new software category. It connects energy markets directly to a company's core operations (consumption, production, supply) and runs continuously, so companies consume energy when it's cheapest and greenest. This is fundamentally different from reporting tools, consulting, or ERP modules.",
  },

  // ── GTM & PRODUCT (4 questions) ─────────────────────────────────────────────
  {
    id: 4,
    category: "gtm",
    categoryLabel: "GTM & Product",
    question:
      "Which of the following best describes ecoplanet's Ideal Customer Profile (ICP)?",
    options: [
      "German retail and logistics companies with 1,000+ employees and a dedicated sustainability team",
      "German manufacturing companies with 5+ GWh/year energy consumption, 50–500 employees, and ISO 50001 certified or in progress",
      "Any European industrial company spending over €1M/year on energy without an ERP system",
      "German SMBs with solar installations looking to optimise their energy mix",
    ],
    correctIndex: 1,
    explanation:
      "ICP: German manufacturing, 5+ GWh/year, 50–500 employees (mid-market), ISO 50001 certified or in progress. These are the ~15,000 companies in Germany that fit our target market.",
  },
  {
    id: 5,
    category: "gtm",
    categoryLabel: "GTM & Product",
    question:
      "What is the key difference between a Part-Time Energy Manager and a Full-Time Energy Manager as ecoplanet Champion profiles?",
    options: [
      "Part-time managers work at smaller companies; full-time managers only exist at companies with 500+ employees",
      "Part-time managers are drowning in manual data work and fear compliance failures; full-time managers have plateaued savings and struggle to prove ROI to leadership",
      "Part-time managers need ISO 50001 guidance; full-time managers are mainly interested in cost savings",
      "There is no meaningful difference — both Champion profiles have the same core pain",
    ],
    correctIndex: 1,
    explanation:
      "Part-time Energy Managers spend 5–20 hours/month on energy as a secondary role and are overwhelmed by manual data consolidation. Full-time Energy Managers have deep energy expertise but have hit a savings plateau and struggle to surface new insights and prove ROI to leadership. The pitch is different for each.",
  },
  {
    id: 6,
    category: "gtm",
    categoryLabel: "GTM & Product",
    question:
      "What is the correct sequence of the 6 pre-sales stages in ecoplanet's sales process?",
    options: [
      "Discovery → Lead → Demo → Offer Sent → Solution Evaluation → Closing",
      "Lead / Outreach → Demo → Discovery → Solution Evaluation → Offer Sent → Closing",
      "Lead / Outreach → Discovery → Demo → Solution Evaluation → Offer Sent → Closing",
      "Discovery → Demo → Lead / Outreach → Offer Sent → Solution Evaluation → Closing",
    ],
    correctIndex: 2,
    explanation:
      "The correct sequence is: Lead / Outreach → Discovery → Demo → Solution Evaluation → Offer Sent → Closing. Discovery always comes before Demo — a demo without a confirmed pain and urgency is wasted effort.",
  },
  {
    id: 7,
    category: "gtm",
    categoryLabel: "GTM & Product",
    question:
      "What does the 'U' stand for in ecoplanet's CUSTOM discovery framework, and why is it the most critical element?",
    options: [
      "Unique Value — quantifying what makes ecoplanet superior to alternatives",
      "Urgency & Solution Fit — confirming real urgency and that ecoplanet can actually solve the pain; a deal without this should not advance to Demo",
      "User Adoption — ensuring the Champion has the authority to drive internal rollout",
      "Upsell Potential — identifying additional product modules the customer may need later",
    ],
    correctIndex: 1,
    explanation:
      "U = Urgency & Solution Fit. It confirms two things: (1) there is real urgency — the customer has a pressing reason to act now, and (2) ecoplanet is the right solution for their specific pain. A deal where U is unconfirmed should never advance to Demo — it wastes everyone's time.",
  },

  // ── PROCUREMENT (3 questions) ────────────────────────────────────────────────
  {
    id: 8,
    category: "procurement",
    categoryLabel: "Procurement",
    question:
      "What is the correct sequence of the 7-stage procurement lifecycle?",
    options: [
      "Sourcing → Specification → Need → Market Research → Negotiation → Contract Mgmt → SRM",
      "Need → Market Research → Specification → Sourcing → Negotiation → Contract Mgmt → SRM",
      "Need → Specification → Market Research → Sourcing → Negotiation → Contract Mgmt → SRM",
      "Specification → Need → Sourcing → Market Research → Negotiation → SRM → Contract Mgmt",
    ],
    correctIndex: 2,
    explanation:
      "Need → Specification → Market Research → Sourcing → Negotiation → Contract Management → SRM. Specification must come before market research so you know what you're benchmarking.",
  },
  {
    id: 9,
    category: "procurement",
    categoryLabel: "Procurement",
    question:
      "You need to procure a complex software platform for which there is no single right solution. Multiple factors matter: technical approach, implementation team, integration capability, and price. Which sourcing document should you use?",
    options: [
      "RFQ (Request for Quotation) — to compare pricing across vendors",
      "PO (Purchase Order) — to move quickly once you identify the right vendor",
      "RFP (Request for Proposal) — to evaluate multiple factors with a weighted scorecard",
      "LOI (Letter of Intent) — to signal interest before committing",
    ],
    correctIndex: 2,
    explanation:
      "An RFP is the right choice when requirements are complex, solutions are not standardized, and you need to evaluate multiple factors beyond price. Use a weighted scorecard to compare proposals fairly.",
  },
  {
    id: 10,
    category: "procurement",
    categoryLabel: "Procurement",
    question:
      "Which contract type gives the buyer the most cost certainty, and who bears the cost risk if the project runs over budget?",
    options: [
      "Time & Materials — cost risk sits with the buyer",
      "Cost-Plus — cost risk sits with the buyer",
      "Fixed-Price — cost risk sits with the supplier",
      "Framework Agreement — cost risk is shared equally",
    ],
    correctIndex: 2,
    explanation:
      "In a fixed-price contract the price is agreed upfront and cannot change — the supplier bears the risk of cost overruns. This gives the buyer maximum cost certainty, which is why fixed-price is preferred for well-defined scope.",
  },

  // ── STAKEHOLDERS & COMMUNICATION (2 questions) ───────────────────────────────
  {
    id: 11,
    category: "stakeholders",
    categoryLabel: "Stakeholders",
    question:
      "A supplier verbally agrees to a 10% price reduction during a phone call. What is the correct next step?",
    options: [
      "Update the purchase order immediately — the verbal agreement is binding",
      "Note it in your personal records and follow up at the next meeting",
      "Send a written confirmation email to the supplier and request their written acknowledgement",
      "Inform your manager and wait for them to follow up with the supplier",
    ],
    correctIndex: 2,
    explanation:
      "Verbal commitments in procurement have no contractual weight. Always follow up in writing immediately and request written acknowledgement. This protects both parties and creates a clear audit trail.",
  },
  {
    id: 12,
    category: "stakeholders",
    categoryLabel: "Stakeholders",
    question:
      "You identify a potential supplier quality risk that could affect a critical delivery in 3 weeks. What is the right approach?",
    options: [
      "Wait until you have all the facts before raising it, so you don't alarm people unnecessarily",
      "Handle it yourself first — only escalate if it becomes an actual problem",
      "Escalate the risk to your manager immediately, even if you don't have the full picture yet",
      "Inform the supplier directly and wait for their response before involving internal stakeholders",
    ],
    correctIndex: 2,
    explanation:
      "Escalate risks early — always. Surprises are always more expensive than problems raised proactively. Your manager needs lead time to activate contingencies. 'I didn't have all the facts' is never a valid reason to delay escalation of a known risk.",
  },
];
