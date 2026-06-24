export interface Resource {
  title: string;
  description: string;
  url: string | null;
  type: "document" | "video" | "tool" | "article";
}

export interface Section {
  id: string;
  title: string;
  body: string;
  highlight?: string;
  keyPoints?: string[];
}

export interface DayData {
  id: number;
  title: string;
  subtitle: string;
  emoji: string;
  estimatedMinutes: number;
  accent: string;
  objectives: string[];
  sections: Section[];
  resources: Resource[];
  keyTakeaways: string[];
}

export const days: DayData[] = [
  {
    id: 1,
    title: "Welcome to Ecoplanet",
    subtitle: "Company, Mission & Market",
    emoji: "🌍",
    estimatedMinutes: 120,
    accent: "emerald",
    objectives: [
      "Know Ecoplanet's core purpose and mission",
      "Understand what we build, who we build it for, and why it matters now",
      "Understand the energy management market we're disrupting",
      "Know our five values and how they show up day-to-day",
      "Know the team structure and who you'll work with most",
    ],
    sections: [
      {
        id: "mission",
        title: "Our Mission & Why We Exist",
        body: `Our core purpose — the north star we'll always work towards:\n\n"Redefining energy for tomorrow"\n\nWe believe energy management is one of the few powerful tools European businesses can truly own to shape their future. At ecoplanet we're driving a shift — we're not just redefining energy itself, but redefining how companies manage energy. We're turning energy management into a meaningful, everyday mission: from passive energy use to active, daily, intelligent optimisation.\n\nOur mission (good for the next 10 years):\n\n"To turn energy management into the competitive advantage every European business uses to win markets"\n\nWe teach companies how to take control of their energy — cutting waste, lowering costs, and driving growth. Through daily, intelligent optimisation, we help them make energy management a habit, not an afterthought.\n\nOur BHAG (Big Hairy Audacious Goal):\n\n"Our platform enables daily energy optimization for 15,000 companies, managing over 300 TWh of energy — more than any utility in Europe."\n\nIt's not just about building software — it's about becoming an essential operational system for energy-intensive companies: a core part of how they run, not an optional add-on.`,
        highlight: "Read the full context on Notion → Our Mission",
        keyPoints: [
          "Core purpose: Redefining energy for tomorrow",
          "Mission: Turn energy management into the competitive advantage every European business uses to win markets",
          "BHAG: 15,000 companies, 300 TWh — becoming the dominant energy management platform in Europe",
        ],
      },
      {
        id: "product",
        title: "What We Build",
        body: `Ecoplanet is a Munich-based, Seed-financed B2B SaaS startup. We're building a new category of software: energy integration software.\n\nThe problem we solve:\nMedium-sized enterprises (SMBs) don't have the time or the specific expertise to navigate today's energy environment — with volatile prices, tightening regulation, and increasingly flexible procurement options. Energy has become complex, but the tools to manage it haven't kept up.\n\nOur solution — an operating system for energy management that covers all three sides at once:\n• Consumption — reducing waste and optimising load in real time\n• Production — integrating on-site generation (solar, CHP, etc.)\n• Supply — connecting directly to energy markets\n\nAnd it connects companies with each other — building an ecosystem, not just a point solution.\n\nHow it works:\n• Smart meter data as the foundation — plug & play, no heavy integration needed\n• Runs continuously — making companies consume energy when it's cheapest and greenest\n• Highly scalable — covers all relevant aspects of companies' green future\n\nWho we serve: Energy-intensive medium-sized enterprises in Europe, where energy is a meaningful cost driver and operational factor.`,
        highlight: "Read the full company and product context on Notion → Our Impact",
        keyPoints: [
          "Product category: Energy integration software — a new category we're defining",
          "We cover all three sides: consumption + production + supply — as an ecosystem",
          "Foundation: smart meter data, plug & play, runs continuously",
          "Target customer: Energy-intensive medium-sized enterprises in Europe",
        ],
      },
      {
        id: "market",
        title: "The Market: Energy Management for European Business",
        body: `Energy management is becoming one of the most strategically important topics for European businesses — and it's happening fast.\n\nKey market drivers:\n• Volatile prices: Since 2021–22, energy costs have surged. For energy-intensive SMBs, energy can represent 10–30% of operating costs — a lever too big to ignore\n• Regulatory pressure: EU energy efficiency directives, CSRD, and national requirements create mandatory demand for better energy management and transparency\n• Decarbonisation targets: Companies face mounting pressure from customers, investors, and regulators to reduce Scope 1, 2, and 3 emissions\n• Grid flexibility: As more renewables enter the grid, prices fluctuate sharply — companies that shift load dynamically capture real savings\n• Smart meter rollout: Mandated across Europe, smart meters are finally creating the data infrastructure our product needs to work\n\nWhy now:\nFor the first time, volatile pricing + smart meter data + regulatory obligation + flexible procurement all align at once. That window is what ecoplanet is built to capture.`,
        keyPoints: [
          "Energy = 10–30% of operating costs for energy-intensive SMBs — a major lever for competitiveness",
          "EU energy directives + CSRD + national grid flexibility requirements = strong regulatory tailwind",
          "Smart meter rollouts across Europe finally create the data infrastructure for our product to work at scale",
          "Volatile energy prices make real-time optimisation financially compelling — today, not in 10 years",
        ],
      },
      {
        id: "values",
        title: "Our Values & How We Work",
        body: `Five values guide how we make decisions and show up for each other every day:\n\n1. CUSTOMER-LED\nWe build from the customer's point of view — listening closely, validating constantly, solving what truly matters. We treat their goals as our own, because their success drives ours.\n\n2. PERSISTENT IMPACT\nWe take full responsibility for what we build — wins, failures, and everything in between. Our customers count on us, and we count on each other. Every day we show up like it matters — because it does.\n\n3. FAIL UPWARDS\nWe move fast, and that means bold risks and real mistakes. We create space where it's safe to speak up, own missteps, and keep learning. We don't point fingers — we grow together.\n\n4. BE PROACTIVE\nWe step up when we see an opportunity to help. Ownership and autonomy are part of our DNA. We stay curious, push boundaries — and don't wait for permission to make things better.\n\n5. BETTER TOGETHER\nWe're all essential to what we're building. We trust each other, show appreciation, assume best intent, and speak our minds with respect.\n\nHow we work day-to-day:\n• Hybrid — always welcome in the office, free to work from wherever suits you best\n• Core hours: 9:00 AM–6:00 PM local time (for meetings and customer calls)\n• Flexible outside core hours — manage your time responsibly\n• Both Windows and MacOS supported\n• No dress code — come as you are\n• Diverse and inclusive by design — all backgrounds welcome`,
        highlight: "Read the full values and culture guide on Notion → Who We Are + Our Way of Working",
        keyPoints: [
          "5 values: Customer-led · Persistent Impact · Fail Upwards · Be Proactive · Better Together",
          "Hybrid team — office is open, remote is fine; what matters is impact, not location",
          "Core hours 9–18 local time; flexible outside that",
          "'Fail Upwards' means mistakes are fine, pointing fingers is not — own it and grow",
        ],
      },
      {
        id: "teams",
        title: "The Team & Who You'll Work With",
        body: `Ecoplanet has 12 departments across four areas:\n\nBusiness:\n• G&A (General & Administration)\n• Finance\n• People\n• Corporate Development / Platform\n\nProduct & Tech:\n• Product\n• Engineering\n• R&D\n\nGo-to-Market:\n• Sales\n• Customer Excellence\n• GTM Enablement\n• Growth Marketing\n\nOperations:\n• Operations — this is your home, Walid\n\nThe live org chart is in Personio. Browse it on Day 1 to get a feel for who's who.\n\nAs Value Engineer Procurement in Operations, your closest working relationships will be with:\n• Finance — spend approvals, cost reporting, savings tracking\n• Product & Engineering — procurement of tools, services, licences\n• Customer Excellence & Sales — understanding customer needs that feed into supply decisions\n• G&A — cross-functional admin and people-related procurement`,
        highlight: "Explore the full team structure on Notion → The Team. Org chart lives in Personio.",
        keyPoints: [
          "12 departments; Operations is your home team",
          "Org chart is in Personio — bookmark it on Day 1",
          "Closest partners: Finance, Product & Engineering, Customer Excellence",
          "When in doubt about who owns what — check the Team page or ask in Slack",
        ],
      },
    ],
    resources: [
      {
        title: "📣 Our Mission",
        description: "Core purpose, mission statement and BHAG",
        url: "https://app.notion.com/p/207182495b098074a7a7effd620f8b77",
        type: "document",
      },
      {
        title: "🌍 Our Impact",
        description: "Company overview, the problem we solve, and why it matters",
        url: "https://app.notion.com/p/21b182495b0980c0a0f9c7ea68b17cd8",
        type: "document",
      },
      {
        title: "❤️‍🔥 Who We Are",
        description: "Our five values and the principles that guide us",
        url: "https://app.notion.com/p/207182495b098043b260fcf698baf5e9",
        type: "document",
      },
      {
        title: "😎 Our Way of Working",
        description: "Working style, culture, hybrid setup and policies",
        url: "https://app.notion.com/p/21b182495b098097b0a9c0ea4885e52d",
        type: "document",
      },
      {
        title: "🗂️ The Team",
        description: "All departments and links to each team's space",
        url: "https://app.notion.com/p/cfa3bd7b4950497f91eb1503705a3ef6",
        type: "document",
      },
      {
        title: "Org Chart (Personio)",
        description: "Live org chart — who reports to whom",
        url: "https://ecoplanet-green-operations-gmbh.app.personio.com/organization/org-chart",
        type: "tool",
      },
    ],
    keyTakeaways: [
      "Core purpose: Redefining energy for tomorrow. Mission: Turn energy management into the competitive advantage every European business uses to win markets",
      "We build energy integration software for energy-intensive European SMBs — a new software category connecting energy markets to core business operations",
      "The market is real and urgent: volatile prices + EU regulation + smart meter rollouts = the right moment to build this",
      "5 values to live by: Customer-led · Persistent Impact · Fail Upwards · Be Proactive · Better Together",
      "Org chart is in Personio — Operations is your department; Finance, Product & Engineering are your closest partners",
    ],
  },

  {
    id: 2,
    title: "Value Engineering",
    subtitle: "Methodology, Frameworks & Application",
    emoji: "⚙️",
    estimatedMinutes: 180,
    accent: "blue",
    objectives: [
      "Define Value Engineering (VE) and explain its purpose",
      "Apply the 5-phase VE Job Plan to a real procurement scenario",
      "Use verb-noun notation to define functions",
      "Calculate and interpret cost-value ratios",
      "Identify VE improvement opportunities in a procurement context",
    ],
    sections: [
      {
        id: "what-is-ve",
        title: "What is Value Engineering?",
        body: `Value Engineering (VE) is a systematic, function-based approach to improving the value of products, services, and processes. Originally developed by Lawrence D. Miles at General Electric in the late 1940s, VE has become a cornerstone methodology in procurement, engineering, and project management worldwide.\n\nThe core question VE asks is not "How can we make this cheaper?" but rather: "What function does this serve, and what is the lowest cost way to reliably deliver that function?"\n\nThis distinction is critical. Cost-cutting without function analysis often leads to quality degradation or hidden costs elsewhere. VE ensures that every dollar spent delivers maximum functional value.\n\nIn procurement, VE is applied to:\n• Challenge over-specified requirements (is a premium component really necessary?)\n• Identify lower-cost alternatives that deliver equal or superior function\n• Reduce total cost of ownership (TCO) while maintaining or improving performance\n• Eliminate features nobody actually needs\n• Standardize components to leverage volume pricing`,
        highlight: "Key insight: VE is not about cutting costs — it's about maximizing the ratio of function delivered to cost paid.",
        keyPoints: [
          "VE was invented by Lawrence D. Miles at GE in the 1940s when war-time material shortages forced creative substitution",
          "The focus is on FUNCTION (what something does), not FORM (what something is)",
          "VE improves Value = Function / Cost — either by increasing function or decreasing cost",
          "VE is team-based: the best results come from cross-functional workshops, not solo analysis",
        ],
      },
      {
        id: "ve-phases",
        title: "The 5-Phase VE Job Plan",
        body: `The VE Job Plan provides a structured process for a VE study. All 5 phases must be completed in order:\n\n1. INFORMATION PHASE\nCollect all relevant data about the item under study:\n• What does it cost today? (detailed cost breakdown by component/function)\n• What does it do? (current functions and specifications)\n• What are the performance requirements?\n• Who uses it, and how?\n• What constraints exist (regulatory, safety, compatibility)?\n\nOutput: A complete fact base. Never skip this step — VE without data is guesswork.\n\n2. FUNCTION ANALYSIS PHASE\nThe analytical core of VE. Identify and define every function the item performs using Verb + Noun pairs (see next section). Then evaluate: What does each function actually cost? What is each function worth?\n\nOutput: A function cost matrix revealing where value gaps exist.\n\n3. CREATIVITY PHASE\nBrainstorm alternative ways to perform each function — especially the high-cost, low-value ones. Rules:\n• No evaluation or criticism at this stage\n• Quantity over quality — generate as many ideas as possible\n• Build on others' ideas\n• Wild ideas welcome — they often spark practical ones\n\nOutput: A long list of alternative approaches (typically 50–200 ideas per VE workshop).\n\n4. EVALUATION PHASE\nScreen and prioritize ideas from Phase 3 against defined criteria:\n• Does it actually deliver the required function?\n• What would it cost?\n• Is it technically feasible? What is the implementation risk?\n• What is the timeline to implement?\n\nOutput: A shortlist of 5–15 high-potential alternatives for development.\n\n5. DEVELOPMENT PHASE\nDevelop each shortlisted alternative into a full proposal:\n• Detailed cost-benefit analysis\n• Implementation plan (who, what, when)\n• Risk assessment and mitigation\n• Recommendation and executive summary\n\nOutput: A Value Improvement Plan (VIP) ready for management approval.`,
        keyPoints: [
          "Information → Function Analysis → Creativity → Evaluation → Development (this order is mandatory)",
          "Most VE savings are found in the Function Analysis phase — that's where value gaps are made visible",
          "Never evaluate ideas during the Creativity phase — it kills the most promising alternatives early",
          "The Development phase produces a business case, not just an idea",
        ],
      },
      {
        id: "function-analysis",
        title: "Function Analysis & FAST Diagrams",
        body: `Function Analysis is the most powerful tool in VE. It forces you to describe what something DOES rather than what it IS.\n\nHOW TO DEFINE FUNCTIONS:\nUse an Active Verb + Measurable Noun:\n• ✅ "Transmit force" — clear, measurable\n• ✅ "Protect surface" — clear, measurable\n• ✅ "Reduce weight" — clear, measurable\n• ❌ "Be durable" — not a verb-noun function\n• ❌ "Quality component" — not a function\n\nFUNCTION TYPES:\n• Basic Function: The primary purpose for which the product/service exists. If this function fails, the item has no value. (e.g., for a knife: "cut material")\n• Secondary Functions: Supporting functions needed to achieve the basic function, or side effects of the design. (e.g., for a knife: "provide grip," "prevent rust")\n\nFAST DIAGRAM (Function Analysis System Technique):\nA FAST diagram organizes all functions hierarchically by asking two questions:\n• HOW do we achieve this function? (answered by moving right on the diagram)\n• WHY do we perform this function? (answered by moving left on the diagram)\n\nThe diagram reveals:\n• Which functions are truly necessary vs. incidental\n• Which secondary functions are over-specified\n• Opportunities to combine or eliminate functions\n\nExample: For a packaging component in procurement:\nWHY ← [Protect product] ← HOW → [Absorb shock] → [Reduce weight] → HOW\n                                    ↓ HOW\n                               [Cushion corners]`,
        highlight: "Try this: Pick any product you procure today and list all its functions using Verb + Noun. You'll be surprised how many are secondary functions that can be simplified or eliminated.",
        keyPoints: [
          "Always use Active Verb + Measurable Noun format for function statements",
          "Every item has exactly ONE basic function — if you find two, you're looking at two items",
          "Secondary functions are often where cost is hidden — they're the first targets for VE",
          "The FAST diagram's 'HOW?' / 'WHY?' logic quickly exposes unnecessary complexity",
        ],
      },
      {
        id: "value-equation",
        title: "Value = Function / Cost",
        body: `The core equation of Value Engineering:\n\nValue = Function / Cost\n\nTo IMPROVE value, you have three levers:\n1. Increase Function, same Cost → more capability for the same spend\n2. Decrease Cost, same Function → same capability for less spend\n3. Increase Function AND Decrease Cost → the ideal outcome\n\nCOST-WORTH ANALYSIS:\nFor each function, ask: "What is the theoretical minimum cost to reliably deliver this function?"\n\nThe gap between actual cost and theoretical minimum = the Value Improvement Opportunity.\n\n• Actual cost: €500 per unit\n• Theoretical minimum (worth): €200 per unit\n• Value gap: €300 = cost reduction potential per unit\n\nTOTAL COST OF OWNERSHIP (TCO):\nVE in procurement always uses TCO, not just purchase price:\n• Acquisition cost (purchase price + freight + customs)\n• Operating cost (energy, consumables, maintenance)\n• Downtime cost (what does a failure cost?)\n• End-of-life cost (disposal, recycling, replacement)\n\nA supplier with a 10% higher purchase price might still be the better value choice if their product has 30% lower maintenance costs.`,
        keyPoints: [
          "Value = Function / Cost — improving either side of the equation increases value",
          "The value gap (actual cost minus theoretical minimum) is your measurable improvement target",
          "Always use TCO in procurement decisions — purchase price is just one component",
          "A low-cost supplier with high hidden costs often has worse TCO than a higher-priced alternative",
        ],
      },
      {
        id: "ve-procurement",
        title: "Applying VE to Procurement Decisions",
        body: `Value Engineering is most powerful when applied systematically at key decision points in the procurement lifecycle:\n\nSPECIFICATION REVIEW:\nBefore issuing an RFQ/RFP, ask:\n• Is every spec actually required? ("Must be stainless steel" vs. "Must resist corrosion")\n• Is any spec over-engineered for the actual use case?\n• Can we describe requirements in functional terms rather than design terms?\nFunctional specs give suppliers freedom to propose innovative (often cheaper) solutions.\n\nSUPPLIER EVALUATION:\n• Does the supplier's solution actually fulfill the required function?\n• Are they adding cost for features we don't need?\n• Can we work with them on a Value Improvement Plan (VIP)?\n\nMAKE vs. BUY ANALYSIS:\n• What function does this serve?\n• Can an external supplier deliver this function more efficiently than we can in-house?\n• What are the TCO implications of each option?\n\nSTANDARDIZATION:\n• Can we replace 5 similar components with 1 standard one?\n• Volume consolidation often delivers 10–30% cost reductions\n• Standardization also reduces complexity, training, and inventory costs\n\n📌 TODO: Add Ecoplanet-specific VE application areas here. Which categories or spend areas are highest priority for VE analysis?`,
        keyPoints: [
          "Write functional specifications, not design specifications — this unlocks supplier innovation",
          "Standardization is often the fastest VE win in procurement (fewer variants = higher volume per part)",
          "Make vs. Buy analysis is fundamentally a VE exercise: what function do we need, and who delivers it best?",
          "A Value Improvement Plan (VIP) formalizes VE results into an actionable proposal",
        ],
      },
    ],
    resources: [
      {
        title: "SAVE International — VE Body of Knowledge",
        description: "The professional standard for Value Engineering methodology",
        url: "https://www.value-eng.org",
        type: "article",
      },
      {
        title: "VE Job Plan Template",
        description: "Internal template for running a VE workshop",
        url: null,
        type: "document",
      },
      {
        title: "FAST Diagram Tutorial",
        description: "Step-by-step guide to building a FAST diagram",
        url: null,
        type: "document",
      },
    ],
    keyTakeaways: [
      "VE is function-first: always start with 'what does this DO?' before asking 'what does this cost?'",
      "The 5 VE phases must be completed in order: Information → Function Analysis → Creativity → Evaluation → Development",
      "Use Verb + Noun to define functions (e.g., 'transmit force', 'protect surface')",
      "Value = Function / Cost — improve value by increasing function, decreasing cost, or both",
      "Always evaluate procurement using TCO, not just purchase price",
    ],
  },

  {
    id: 3,
    title: "Procurement at Ecoplanet",
    subtitle: "Processes, Tools & Best Practices",
    emoji: "🔄",
    estimatedMinutes: 180,
    accent: "violet",
    objectives: [
      "Map the end-to-end procurement lifecycle at Ecoplanet",
      "Know which tools and systems to use at each stage",
      "Understand when to use an RFQ vs. an RFP",
      "Apply a structured supplier qualification framework",
      "Know the basics of contract types and when to use each",
    ],
    sections: [
      {
        id: "lifecycle",
        title: "The Procurement Lifecycle",
        body: `The procurement lifecycle at Ecoplanet (and in best-practice organizations) has 7 core stages:\n\nStage 1 — NEED IDENTIFICATION\n• Internal customer identifies a need\n• Procurement validates: Is this a genuine need? Has it been budgeted? Is there an existing contract or supplier that covers this?\n• Output: Approved Purchase Requisition (PR)\n\nStage 2 — SPECIFICATION DEVELOPMENT\n• Define what is needed: technical specs, quality requirements, quantity, timeline, sustainability criteria\n• Apply VE at this stage: write functional specifications, not design specs\n• Output: Clear, measurable requirements document\n\nStage 3 — MARKET RESEARCH\n• Survey the supplier landscape: who can deliver this?\n• Benchmark pricing: what is the market rate?\n• Check sustainability credentials of potential suppliers\n• Output: Supplier long-list + price benchmark\n\nStage 4 — SOURCING (RFx)\n• Issue an RFI, RFQ, or RFP depending on complexity (see RFQ vs RFP section)\n• Evaluate responses systematically using a weighted scorecard\n• Output: Evaluated supplier proposals + recommendation\n\nStage 5 — NEGOTIATION & AWARD\n• Negotiate price, terms, delivery, quality, and sustainability commitments\n• Select supplier and communicate the award\n• Output: Signed contract or purchase order\n\nStage 6 — CONTRACT MANAGEMENT\n• Monitor delivery and quality performance\n• Manage deviations, claims, and escalations\n• Track KPIs against contract commitments\n• Output: Ongoing supplier performance data\n\nStage 7 — SUPPLIER RELATIONSHIP MANAGEMENT (SRM)\n• Regular performance reviews with strategic suppliers\n• Identify continuous improvement opportunities\n• Build partnerships that create long-term value\n• Output: Supplier scorecards, improvement plans, strategic partnership agreements`,
        keyPoints: [
          "Need Identification → Specification → Market Research → Sourcing → Negotiation → Contract Mgmt → SRM",
          "Apply VE at Stage 2 (Specification) — this is where you have the most leverage on cost",
          "Never skip Stage 3 (Market Research) — benchmarking is your negotiation foundation",
          "SRM (Stage 7) is where strategic value is created, not just at contract signing",
        ],
      },
      {
        id: "supplier-qualification",
        title: "Supplier Qualification & Onboarding",
        body: `A structured supplier qualification process protects Ecoplanet from quality, financial, and reputational risk.\n\nSTEP 1: DEFINE QUALIFICATION CRITERIA\nStandard criteria categories:\n• Financial stability: Minimum 2 years in business, positive cash flow, no insolvency proceedings\n• Quality systems: ISO 9001 or equivalent certification, quality management process\n• Sustainability/ESG: Carbon footprint data, social compliance (no forced/child labor), environmental certifications\n• Capacity: Can they reliably deliver the volumes we need?\n• References: Track record with comparable customers\n• Data security: GDPR compliance, information security standards (especially for tech suppliers)\n\nSTEP 2: REQUEST FOR INFORMATION (RFI)\nSend an RFI to collect baseline information from potential suppliers before investing in a full RFQ/RFP. The RFI covers:\n• Company overview and ownership structure\n• Relevant certifications\n• Key references\n• Initial indication of pricing approach\n\nSTEP 3: DUE DILIGENCE\n• Verify claims (check certifications, call references)\n• Review financial data (credit reports, annual reports)\n• Site visit for strategic or high-risk suppliers\n• Compliance check: sanctions lists, watchlists\n\nSTEP 4: RISK ASSESSMENT\nScore each supplier on:\n• Single-source risk: Are we dangerously dependent on one supplier?\n• Geopolitical risk: Is the supplier in a politically unstable region?\n• ESG risk: Do they have credible sustainability practices?\n• Financial risk: How exposed are we if they fail?\n\nSTEP 5: APPROVED SUPPLIER LIST (ASL)\n• Only procure from ASL-listed suppliers for categories above defined spend thresholds\n• Review ASL annually — remove non-performing or non-compliant suppliers\n• For strategic categories: maintain at least 2 qualified suppliers to avoid single-source dependency`,
        highlight: "Under the German Supply Chain Due Diligence Act (LkSG), Ecoplanet has legal obligations to assess supplier ESG risk. Supplier qualification is not just best practice — in some cases, it's a legal requirement.",
        keyPoints: [
          "Always qualify before you buy — never skip qualification for speed; it costs more later",
          "Financial stability and ESG compliance are non-negotiable qualification criteria",
          "Due diligence must include verification, not just self-declaration by the supplier",
          "Maintain at least 2 qualified suppliers for any critical category",
        ],
      },
      {
        id: "tools",
        title: "Tools & Systems at Ecoplanet",
        body: `📌 TODO: Add the procurement tools and systems Walid will use here.\n\nSuggested content:\n• ERP system (SAP, Oracle, etc.) — how to create PRs, POs\n• Sourcing platform (Jaggaer, Coupa, Ariba, etc.) — how to run RFQs/RFPs\n• Supplier management system — where the ASL lives\n• Contract management tool — where contracts are stored and tracked\n• Communication tools (Slack, Teams, email norms for procurement)\n• Analytics/reporting tools — where spend data and KPIs live\n\nFor each tool, include:\n• What it's used for\n• How to get access\n• Link to training/documentation\n• Who to contact if you have issues`,
        keyPoints: [
          "TODO: Tool 1 — name and primary use",
          "TODO: Tool 2 — name and primary use",
          "TODO: Tool 3 — name and primary use",
          "TODO: How to request system access on Day 1",
        ],
      },
      {
        id: "rfq-rfp",
        title: "RFQ vs. RFP: When to Use Which",
        body: `Choosing the right sourcing document is critical. Using the wrong one wastes time — yours and the supplier's.\n\nRFQ — REQUEST FOR QUOTATION\nUse when:\n• Requirements are fully defined and standardized\n• You're comparing like-for-like pricing across suppliers\n• The item is a commodity or a repeat purchase\n• Price is the primary decision variable\n\nExamples: Office supplies, standard hardware components, raw materials with a fixed spec\n\nRFP — REQUEST FOR PROPOSAL\nUse when:\n• Requirements are complex or the solution is not predefined\n• You want suppliers to propose how they would solve your problem\n• Multiple factors matter (approach, team, innovation, sustainability, price)\n• You're selecting a strategic partner, not just a vendor\n\nExamples: Software platforms, consulting services, custom manufacturing, logistics partnerships\n\nRFI — REQUEST FOR INFORMATION\nUse when:\n• You're exploring the market before committing to a sourcing process\n• You need to understand what's possible before writing specs\n• You're building your supplier long-list\n\nRFP EVALUATION SCORECARD — EXAMPLE WEIGHTS:\n• Technical capability / solution quality: 30%\n• Relevant experience / references: 20%\n• Commercial terms / price: 30%\n• Sustainability credentials: 10%\n• Implementation approach / team: 10%\n\n📌 TODO: Adjust these weights to match Ecoplanet's standard RFP evaluation criteria.`,
        keyPoints: [
          "RFQ = known requirements, price comparison / RFP = complex needs, evaluating approach and value",
          "Use an RFI before an RFP when you're not sure what the market can offer",
          "Never evaluate an RFP on price alone — always use a weighted scorecard",
          "The scoring weights should reflect what matters most for that specific category",
        ],
      },
      {
        id: "contracts",
        title: "Contract Basics",
        body: `Understanding contract types allows you to choose the right risk allocation for each procurement situation.\n\nFIXED-PRICE (LUMP SUM)\n• Price is agreed upfront and does not change\n• Buyer has full cost certainty\n• Supplier bears the risk if costs exceed the agreed price\n• Best for: well-defined scope, stable requirements, commodity purchases\n\nTIME & MATERIALS (T&M)\n• Billed by actual hours worked + materials consumed\n• Maximum flexibility for the buyer\n• Less cost certainty — can run over budget\n• Best for: services with uncertain scope, R&D, iterative development work\n\nCOST-PLUS\n• Buyer pays actual costs + an agreed fee or margin\n• Very low risk for the supplier; most risk sits with the buyer\n• Requires open-book accounting and strong governance\n• Best for: defense/aerospace, complex research projects, emergency situations\n\nFRAMEWORK AGREEMENT\n• Pre-negotiated terms and pricing for a category over a defined period (typically 1–3 years)\n• Individual purchases made via call-off orders within the framework\n• Reduces transaction cost and lead time for recurring purchases\n• Best for: high-volume recurring categories (MRO, IT hardware, logistics)\n\nKEY CONTRACT ELEMENTS (always include):\n• Scope of work / technical specifications\n• Delivery schedule and milestones\n• Pricing, payment terms, and invoicing process\n• Quality acceptance criteria and remedies for non-conformance\n• Liability, indemnification, and insurance requirements\n• Termination rights (for convenience and for cause)\n• Confidentiality and data protection (GDPR)\n• Sustainability / ESG obligations\n• Governing law and dispute resolution`,
        keyPoints: [
          "Fixed-price = cost certainty for buyer, risk for supplier / Cost-plus = risk for buyer",
          "Use Framework Agreements for high-volume recurring categories to reduce transaction cost",
          "Time & Materials is flexible but requires active budget monitoring",
          "Always include sustainability/ESG obligations in contracts — this is a legal requirement under LkSG for relevant spend",
        ],
      },
    ],
    resources: [
      {
        title: "Procurement Handbook",
        description: "Ecoplanet's internal procurement policies and procedures",
        url: null,
        type: "document",
      },
      {
        title: "RFQ Template",
        description: "Standard Ecoplanet RFQ document template",
        url: null,
        type: "document",
      },
      {
        title: "RFP Template + Scorecard",
        description: "Standard Ecoplanet RFP template with evaluation scorecard",
        url: null,
        type: "document",
      },
      {
        title: "Supplier Qualification Checklist",
        description: "Standard criteria checklist for new supplier onboarding",
        url: null,
        type: "document",
      },
    ],
    keyTakeaways: [
      "The 7-stage procurement lifecycle: Need → Spec → Market Research → Sourcing → Negotiation → Contract Mgmt → SRM",
      "Apply VE at specification stage — functional specs give suppliers room to innovate and reduce cost",
      "RFQ = standardized requirements + price focus / RFP = complex needs + weighted evaluation",
      "Always qualify suppliers before onboarding — check financial stability, quality, ESG, and references",
      "Choose contract type based on risk allocation: fixed-price for certainty, T&M for flexibility",
    ],
  },

  {
    id: 4,
    title: "Customers, Partners & Stakeholders",
    subtitle: "Who We Serve and Who We Work With",
    emoji: "🤝",
    estimatedMinutes: 120,
    accent: "amber",
    objectives: [
      "Identify Ecoplanet's key customer segments and their core needs",
      "Know the main partner and supplier ecosystem",
      "Map the internal stakeholders you'll interact with most",
      "Understand communication norms and escalation paths",
      "Know who to contact for what",
    ],
    sections: [
      {
        id: "customers",
        title: "Our Customer Segments",
        body: `📌 TODO: Describe Ecoplanet's customer segments here.\n\nSuggested format for each segment:\n• Segment name (e.g., "Mid-market manufacturing companies")\n• Company profile: size, industry, geography\n• Core pain point: What problem brings them to Ecoplanet?\n• Primary buyer: Who signs the contract? (CPO, CFO, Head of Sustainability?)\n• Success metric: How do they measure value from Ecoplanet?\n• Example customers (if shareable)\n\nAs Value Engineer Procurement, Walid may work directly with customer procurement teams to deliver value engineering analysis — understanding their context is essential.`,
        keyPoints: [
          "TODO: Customer segment 1 — profile and core need",
          "TODO: Customer segment 2 — profile and core need",
          "TODO: What are the top 3 things customers value most about Ecoplanet?",
        ],
      },
      {
        id: "partners",
        title: "Key Partners & Suppliers",
        body: `📌 TODO: Describe Ecoplanet's key partners and strategic suppliers.\n\nSuggested content:\n• Technology partners (platforms, integrations)\n• Data/intelligence providers (sustainability data, market data)\n• Consulting or delivery partners\n• Channel partners / resellers\n\nFor each key partner:\n• Why are they important?\n• What do they provide?\n• Who manages the relationship internally?\n• What does Walid need to know to work with them effectively?`,
        keyPoints: [
          "TODO: Key partner 1 — why they matter",
          "TODO: Key partner 2 — why they matter",
          "TODO: Which supplier relationships are most strategically important?",
        ],
      },
      {
        id: "stakeholders",
        title: "Internal Stakeholder Map",
        body: `📌 TODO: Add the internal stakeholder map here.\n\nFor each key stakeholder or team, describe:\n• Their role and what they own\n• How Procurement interacts with them\n• What they expect from Walid\n• Communication preferences\n\nTypical procurement stakeholder map:\n• Finance / CFO office: Budget approval, cost savings reporting, payment terms\n• Operations / COO office: Delivery performance, supplier quality, inventory\n• Legal: Contract review and approval, compliance, dispute management\n• Product / R&D: Specification development, make-vs-buy decisions, innovation\n• Sustainability / ESG: Supplier ESG assessment, carbon footprint data, reporting\n• IT: Technology procurement, software/SaaS contracts, security requirements\n• HR: People-related services procurement, office supplies\n\nFor Walid's specific role, the most critical stakeholders are likely:\n[TODO: Specify the 3–4 most important stakeholder relationships]`,
        keyPoints: [
          "TODO: Most critical internal stakeholder 1 and what they need from Procurement",
          "TODO: Most critical internal stakeholder 2 and what they need from Procurement",
          "TODO: Decision-making process: who approves what, at what spend threshold?",
        ],
      },
      {
        id: "communication",
        title: "How We Communicate",
        body: `📌 TODO: Add Ecoplanet's communication norms here.\n\nSuggested topics:\n• Primary tools: Slack, Teams, email — what's used for what?\n• Meeting culture: What's the norm for meetings? Required vs. optional? Camera on/off?\n• Response time expectations: What's the expected response time for Slack vs. email?\n• Documentation: Where do decisions get documented? Notion, Confluence, Google Drive?\n• Escalation: How do you escalate an issue? Who should be looped in, and when?\n\nBest practice communication norms for Procurement:\n• Supplier communication: Always in writing (email) for anything that could be contractual\n• Internal stakeholder updates: Proactive, not reactive — don't wait to be asked for a status update\n• Risk escalation: Escalate early — surprises are worse than problems\n• Negotiation: Never communicate a price commitment verbally without written follow-up`,
        keyPoints: [
          "TODO: Primary communication tools at Ecoplanet",
          "TODO: Response time expectations (Slack vs. email)",
          "Always document supplier communication in writing — verbal commitments have no legal weight",
          "Escalate risks early — surprises are always worse than problems",
        ],
      },
      {
        id: "escalation",
        title: "Escalation Framework",
        body: `📌 TODO: Define Ecoplanet's escalation paths for procurement situations.\n\nSuggested framework:\n\nLevel 1 — Handle directly:\n• Routine procurement (under €[X] spend threshold)\n• Standard supplier queries and clarifications\n• Minor delivery or quality deviations with agreed resolution\n\nLevel 2 — Involve your manager:\n• Any single purchase above €[X]\n• Supplier non-performance that isn't resolved within [Y] days\n• Any negotiation where you're not making progress\n• Potential supplier risk (financial distress, compliance issue)\n\nLevel 3 — Involve senior leadership:\n• Any purchase above €[X] (management approval required)\n• Supplier disputes that may lead to legal action\n• Single-source risk for a critical category\n• Strategic partnership decisions\n\nLevel 4 — Board/C-level:\n• Contracts above €[X]\n• Significant regulatory or legal risk\n• ESG incidents in the supply chain\n\n📌 Fill in the spend thresholds and escalation contacts specific to Ecoplanet's policies.`,
        keyPoints: [
          "TODO: Spend approval thresholds at Ecoplanet (Level 1/2/3/4)",
          "TODO: Who is Walid's direct manager for escalation?",
          "TODO: Who approves contracts above [€X]?",
          "Escalate early — if something feels uncertain, loop in your manager proactively",
        ],
      },
    ],
    resources: [
      {
        title: "Customer Profiles Document",
        description: "Detailed profiles of Ecoplanet's key customer segments",
        url: null,
        type: "document",
      },
      {
        title: "Org Chart",
        description: "Internal organizational chart with key contacts",
        url: null,
        type: "document",
      },
      {
        title: "Partner Directory",
        description: "Overview of Ecoplanet's key technology and delivery partners",
        url: null,
        type: "document",
      },
      {
        title: "Procurement Policy",
        description: "Spend approval thresholds, escalation policy, and signing authorities",
        url: null,
        type: "document",
      },
    ],
    keyTakeaways: [
      "TODO: The single most important thing to understand about Ecoplanet's customers",
      "TODO: The 2–3 internal stakeholders Walid will work with most closely",
      "Always communicate supplier commitments in writing — verbal agreements don't hold",
      "Escalate early: surprises are always more expensive than problems disclosed in advance",
      "TODO: The key escalation contact for procurement decisions above a certain threshold",
    ],
  },

  {
    id: 5,
    title: "Review & Certification Test",
    subtitle: "Knowledge Check — Pass to Complete Your Onboarding",
    emoji: "🎓",
    estimatedMinutes: 90,
    accent: "rose",
    objectives: [
      "Review key concepts from all 4 learning days",
      "Achieve 75% or higher on the certification test (9/12 questions)",
      "Complete your Ecoplanet onboarding and receive your certificate",
    ],
    sections: [
      {
        id: "review-d1",
        title: "Day 1 Recap: Ecoplanet — Company & Mission",
        body: `Key points from Day 1:\n• Ecoplanet operates in the sustainable procurement market — a high-growth segment driven by regulation (CSRD, LkSG), cost pressure, and ESG investor demands\n• Scope 3 emissions (from the supply chain) account for 70–90% of most companies' carbon footprint — this is why procurement matters so much for sustainability\n• TODO: Add the 2–3 most important company-specific facts Walid must know for the test\n\nReview the Day 1 content before taking the test, especially the market context section.`,
      },
      {
        id: "review-d2",
        title: "Day 2 Recap: Value Engineering",
        body: `Key points from Day 2:\n• VE is function-based: always start with "what does this DO?" not "what is this?"\n• The 5 VE phases (in order): Information → Function Analysis → Creativity → Evaluation → Development\n• Function definition uses Active Verb + Measurable Noun (e.g., "transmit force")\n• Every item has ONE basic function; all others are secondary\n• Value = Function / Cost — improve value by increasing function, decreasing cost, or both\n• FAST diagrams organize functions hierarchically using HOW? → WHY? logic\n• Always use TCO (Total Cost of Ownership), not just purchase price`,
      },
      {
        id: "review-d3",
        title: "Day 3 Recap: Procurement Processes",
        body: `Key points from Day 3:\n• 7-stage procurement lifecycle: Need → Spec → Market Research → Sourcing → Negotiation → Contract Mgmt → SRM\n• Apply VE at specification stage — write functional specs, not design specs\n• RFQ = standardized requirements, price comparison / RFP = complex needs, weighted evaluation\n• Supplier qualification: financial stability, quality systems, ESG compliance, capacity, references\n• Contract types: Fixed-price (certainty), T&M (flexibility), Cost-plus (buyer bears risk), Framework (recurring categories)\n• Always include sustainability/ESG obligations in contracts (LkSG requirement for relevant spend)`,
      },
      {
        id: "review-d4",
        title: "Day 4 Recap: Stakeholders & Communication",
        body: `Key points from Day 4:\n• Key internal stakeholders for procurement: Finance, Operations, Legal, Product, Sustainability, IT\n• Always document supplier communication in writing — verbal commitments have no legal weight\n• Escalate risks early — surprises are always more expensive than problems disclosed in advance\n• TODO: Add the key company-specific stakeholder facts and escalation thresholds Walid should know\n• Proactive communication: don't wait to be asked for a status update`,
      },
      {
        id: "test-instructions",
        title: "Test Instructions",
        body: `The onboarding certification test consists of 12 multiple-choice questions covering all 4 topic areas from this week.\n\nPassing score: 75% (9 out of 12 correct answers)\n\nAfter submission, you'll see:\n• Your total score\n• Whether you passed or need to retry\n• The correct answer for each question with a brief explanation\n\nTips:\n• Review your day recap sections above before starting\n• Take your time — there's no timer\n• Read each question carefully; some options are deliberately similar\n• You can retake the test if you don't pass on the first attempt\n\nGood luck! 🎓`,
        highlight: "You must achieve 75% (9/12) to complete your onboarding. If you don't pass, review the relevant day's content and retake the test.",
      },
    ],
    resources: [],
    keyTakeaways: [
      "VE phases in order: Information → Function Analysis → Creativity → Evaluation → Development",
      "Value = Function / Cost — always evaluate using TCO",
      "RFQ vs. RFP: RFQ for defined requirements, RFP for complex needs with multiple evaluation criteria",
      "7 procurement stages: Need → Spec → Market Research → Sourcing → Negotiation → Contract Mgmt → SRM",
      "Escalate early, document everything, communicate proactively",
    ],
  },
];
