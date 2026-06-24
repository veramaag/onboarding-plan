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
    title: "GTM Playbook & Product",
    subtitle: "Who We Sell To, How We Win & What We Build",
    emoji: "📊",
    estimatedMinutes: 180,
    accent: "blue",
    objectives: [
      "Know our ICP and Champion profile well enough to explain them to a new colleague",
      "Understand the 6-stage sales process and what happens at each stage",
      "Know the CUSTOM framework used in Discovery",
      "Have explored the ecoplanet product firsthand in the demo account",
      "Understand what makes the product compelling for our target customer",
    ],
    sections: [
      {
        id: "gtm-overview",
        title: "Block 1 — The GTM Playbook: Big Picture",
        body: `The GTM Playbook documents how ecoplanet finds, wins, and keeps customers. It's a living document — shared ownership, continuously updated.\n\nOur sales motion has two phases:\n\nPRE-SALES (6 stages):\n1. Lead / Outreach — Identify the right person at the right company before the first call\n2. Discovery — Understand the customer's situation deeply: confirm pain, urgency, and fit before investing in a demo\n3. Demo — Validate that ecoplanet solves the Champion's core pain; secure Champion buy-in\n4. Solution Evaluation — Validate the business case with decision-makers; secure organisational buy-in\n5. Offer Sent — Present a compelling, low-risk commercial offer that makes saying yes easy\n6. Closing — Remove the last obstacles and secure the final commitment\n\nPOST-SALES:\n• Onboarding — Bring customers into the software and up to speed\n• Upsell — Drive and close product-led upsell opportunities\n\nDetailed process and stage transitions can be found on the Sales Process Miro board (linked in the GTM Playbook).`,
        highlight: "Read the full GTM Playbook on Notion — it's the single source of truth for everything commercial at ecoplanet.",
        keyPoints: [
          "6 pre-sales stages: Lead → Discovery → Demo → Solution Evaluation → Offer → Closing",
          "Post-sales: Onboarding + Upsell — the job doesn't end at contract signature",
          "The playbook is a living doc — if something is outdated, it's everyone's responsibility to update it",
          "Detailed talk tracks, templates, and resources live inside each stage page",
        ],
      },
      {
        id: "icp",
        title: "Who We Sell To: ICP & Champion",
        body: `Knowing our ICP and Champion by heart is non-negotiable. Every good commercial decision starts here.\n\nOUR TARGET MARKET:\nGerman Industrials with a minimum combined energy consumption of 5 GWh/year. Based on our market sizing, ~15,000 companies in Germany match this profile.\n\nIDEAL CUSTOMER PROFILE (ICP):\n• Industry: Manufacturing (all sub-sectors), Germany\n• Annual Energy Consumption: 5+ GWh/year\n• Company Size: Mid-market, typically 50–500 employees\n• ISO Status: ISO 50001 certified or certification in progress\n• EMS Status: No energy management system, or existing EMS without problem-solution fit\n• Primary Pain: Energy costs are a significant, rising cost driver — managed manually and without systematic insight\n• Decision Trigger: ISO audit pressure, unexpected energy bill spike, or CFO/management scrutiny on energy spend\n\nOUR CHAMPION — two profiles:\n\nPart-Time Energy Manager:\n• Typical title: Production Engineer, Facility Manager, Technical Manager\n• Time on energy: 5–20 hours/month — energy is a secondary responsibility\n• Reports to: Plant Manager or Operations Director\n• Core pain: Drowning in manual data consolidation; spends the first week of every month copy-pasting meter readings\n• Biggest fear: A compliance "fuck-up" — unexpected cost spike, missed invoice, or audit failure they didn't see coming\n• What wins them: Show that ecoplanet runs without their capacity, setup in a day, 24/7 monitoring, compliance-ready reporting with no manual effort\n\nFull-Time Energy Manager:\n• Typical title: Energy Manager, Head of Energy, Energy & Sustainability Manager\n• Time on energy: 100% — dedicated role, ISO 50001 long-standing\n• Reports to: COO, Plant Director, or Board\n• Core pain: Low-hanging fruit is gone — can't find the next level of savings; operational drift goes undetected; struggles to prove ROI to leadership\n• Biggest fear: Stagnating savings program while the CEO demands numbers\n• What wins them: AI-powered insights that surface what manual analysis misses, simulation before committing budget, auditable before/after proof of savings`,
        highlight: "Read the full Lead/Outreach page on Notion for calling scripts, qualification criteria, and objection handling.",
        keyPoints: [
          "ICP: German manufacturing, 5+ GWh/year, 50–500 employees, ISO 50001 certified or in progress",
          "Two champion profiles: Part-time (drowning in manual work) and Full-time (plateaued savings program)",
          "Decision triggers: ISO audit, unexpected energy bill spike, or CFO scrutiny — look for urgency",
          "Hard disqualifiers: customer wants on-premise only, requires ISO27001 (we don't have it), complete budget stop",
        ],
      },
      {
        id: "sales-stages",
        title: "The Sales Stages — What Happens Where",
        body: `Each stage has clear entry criteria, exit criteria, and materials. Here's the one-liner on what matters most at each:\n\n1. LEAD / OUTREACH\nGoal: Get the right person on a call. Qualify early — within 2–3 minutes. Max 5–10 attempts per contact.\n→ Full details: Lead/Outreach page\n\n2. DISCOVERY\nGoal: Confirm pain, urgency, and fit before demo. Use the CUSTOM framework (see next section).\nEntry: Qualification criteria met (≥5 GWh, Manufacturing, Germany), champion willing to engage.\nExit: Pain confirmed, urgency clear, demo scheduled with specific use case, first dataset requested.\n→ Full details: Discovery page\n\n3. DEMO\nGoal: Validate that ecoplanet solves the Champion's core pain. Secure Champion buy-in before expanding to the buying center.\n→ Full details: Demo page\n\n4. SOLUTION EVALUATION\nGoal: Validate the business case with decision-makers. 3× ROI guarantee introduced.\nKey tool: Pricing calculator, competitor battlecards, savings database.\n→ Full details: Solution Evaluation page\n\n5. OFFER SENT\nGoal: Present a compelling, low-risk offer. ROI Hedge is the key mechanism here.\n→ Full details: Offer Sent page\n\n6. CLOSING\nGoal: Remove last obstacles, secure final commitment. BAFA subsidy process is relevant here for many customers.\n→ Full details: Closing page`,
        keyPoints: [
          "Each stage has hard entry/exit criteria — don't advance without meeting them",
          "Discovery is the most critical stage: no clear pain = no demo",
          "3× ROI guarantee is introduced at Solution Evaluation — it's a key commercial tool",
          "BAFA subsidy (German government grant for energy management) is a closing lever — know it exists",
        ],
      },
      {
        id: "custom",
        title: "The CUSTOM Framework (Discovery)",
        body: `CUSTOM is ecoplanet's deal qualification framework, used from Discovery through to closing. It accumulates across calls — it's not a one-call checklist.\n\nC — Context Understanding\nCapture the customer's current operational, financial, and strategic environment. What systems do they use? What's their energy management maturity?\n\nU — Urgency & Solution Fit\nIs there real urgency? Can ecoplanet actually solve the pain? Timeline < 6 months and cost of inaction qualified?\n\nS — Stakeholder Mapping\nWho are the key decision-makers, influencers, and blockers? Is the Champion actively engaged?\n\nT — Total Alternatives\nWhat is the customer currently doing instead? What are the alternatives — status quo, competitors, internal build?\n\nO — Outcome Quantification\nWhat is the quantified value case? Cost savings, compliance benefits, time saved? Champion's case defined, Budget Holder's case sketched?\n\nM — Mutual Action Plan\nIs there an agreed-upon path to a decision? Demo scheduled, dataset requested, next steps mutual?\n\nKey principle: CUSTOM info accumulates across calls — each conversation adds to what's known. Missing elements from a stage are yellow flags to address in the next meeting, not reasons to freeze the deal.`,
        highlight: "Read the full Discovery page on Notion for the complete CUSTOM requirements, entry/exit criteria, and talk tracks.",
        keyPoints: [
          "CUSTOM = Context · Urgency & Fit · Stakeholder Mapping · Total Alternatives · Outcome Quantification · Mutual Action Plan",
          "It evolves across calls — Discovery fills C, U, T; later stages deepen S, O, M",
          "A deal without a clear pain (U) should not advance to Demo — ever",
          "Missing elements aren't deal-killers, they're agenda items for the next call",
        ],
      },
      {
        id: "product-deepdive",
        title: "Block 2 — Product Deep Dive",
        body: `The best way to understand what we sell is to use it.\n\nSTEP 1: Watch the product demo video\nThere's a recorded software demo available in Notion (Explore Product page). Start here — it gives you the guided tour before you explore on your own.\n\nSTEP 2: Explore the product yourself\nLog into the demo account and click through the product:\n• Domain: app.ecoplanet.tech\n• Login: newdemo@ecoplanet.tech\n• Password: password of the week — posted in the Slack #full-team channel\n\nWhat to look for while exploring:\n• How is energy data presented? What does the main dashboard show?\n• How does the anomaly detection work? How does the system surface insights?\n• What does a "measure" look like? How does a user simulate savings?\n• How is ISO 50006 reporting handled?\n• What does the onboarding / data integration flow look like?\n\nSTEP 3: Explore the Help Center\nFor deeper explanations of specific features: app.ecoplanet.tech/help-center`,
        highlight: "You can't sell or procure for a product you haven't used. This is a hands-on task — open the demo account and spend at least 30 minutes exploring.",
        keyPoints: [
          "Demo login: app.ecoplanet.tech — credentials in Slack #full-team",
          "Watch the recorded demo first (Notion Explore Product page), then explore freely",
          "Focus areas: dashboard, anomaly detection, measure simulation, ISO 50006 reporting",
          "Help Center at app.ecoplanet.tech/help-center for feature-level documentation",
        ],
      },
    ],
    resources: [
      {
        title: "📋 GTM Playbook",
        description: "Full commercial playbook — ICP, sales process, talk tracks, templates",
        url: "https://app.notion.com/p/2f7182495b09812ab9b2c9f409503e40",
        type: "document",
      },
      {
        title: "🔊 Lead / Outreach",
        description: "ICP, Champion profiles, calling scripts, qualification criteria",
        url: "https://app.notion.com/p/2f7182495b0980528184ecb739302eb5",
        type: "document",
      },
      {
        title: "❓ Discovery",
        description: "CUSTOM framework, entry/exit criteria, talk tracks",
        url: "https://app.notion.com/p/2f7182495b09800e9104f38929663c2c",
        type: "document",
      },
      {
        title: "🤝 Solution Evaluation",
        description: "Modules & pricing, competitor battlecards, savings database",
        url: "https://app.notion.com/p/2f7182495b0980d1a7d2e0a88bce4988",
        type: "document",
      },
      {
        title: "🔍 Explore Product (Notion)",
        description: "Demo video + access credentials for the demo account",
        url: "https://app.notion.com/p/367182495b09813884c8ca7cad3d5f11",
        type: "document",
      },
      {
        title: "🖥️ Product Demo Account",
        description: "Live demo — login: newdemo@ecoplanet.tech, password in #full-team Slack",
        url: "https://app.ecoplanet.tech/login",
        type: "tool",
      },
      {
        title: "📖 Help Center",
        description: "Feature-level product documentation",
        url: "https://app.ecoplanet.tech/help-center",
        type: "article",
      },
    ],
    keyTakeaways: [
      "ICP: German manufacturing, 5+ GWh/year, 50–500 employees, ISO 50001 certified or in progress",
      "Two Champion profiles: Part-time Energy Manager (manual data hell) and Full-time (plateaued savings program) — know both cold",
      "6-stage sales process: Lead → Discovery → Demo → Solution Evaluation → Offer → Closing",
      "CUSTOM framework = the backbone of Discovery — it evolves across multiple calls, not just one",
      "Use the demo account yourself — 30 minutes of hands-on exploration beats any description",
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
