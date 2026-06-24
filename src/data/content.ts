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
    title: "Energy Markets & Procurement Strategies",
    subtitle: "Understanding the Market Before You Buy",
    emoji: "⚡",
    estimatedMinutes: 180,
    accent: "violet",
    objectives: [
      "Explain the key mechanics of the German energy market: spot, forward, merit order, volatility",
      "Know the 3 procurement strategies and their trade-offs cold",
      "Understand ecoplanet's structured procurement approach and its 4 building blocks",
      "Know what makes up a customer's energy price (all 4 components)",
      "Be able to hold a confident conversation about market developments and strategy options with a customer",
    ],
    sections: [
      {
        id: "energiemarkt",
        title: "The German Energy Market — Key Dynamics",
        body: `Energy markets are not like other commodity markets — they are highly volatile, structurally complex, and directly affected by weather, geopolitics, and regulation. Understanding the basics is essential to do your job.\n\nHOW POWER PRICES ARE SET — THE MERIT ORDER\nElectricity prices on the spot market are set by the merit order: generators offer capacity from cheapest to most expensive, and the price is set by the most expensive generator needed to meet demand at that moment. This means:\n• When lots of cheap renewables are online: prices can go negative (solar + wind flood the grid)\n• When wind drops and demand is high: gas plants set the price — and gas is expensive\n\n15-MINUTE TRADING (since October 2025)\nThe German Day-Ahead market switched from hourly to 15-minute intervals. This makes prices more precise — but also more volatile. Customers on spot contracts see 15-min-level billing, which creates both risk and opportunity.\n\n2025 IN NUMBERS:\n• Electricity (H2 2025 average): ~9.1 ct/kWh — up 30% from H1\n• Electricity (daily range): 4.2–21.4 ct/kWh on average days; individual hours hit -9.9 to +47.6 ct/kWh\n• Gas (H2 2025 average): ~3.2 ct/kWh — down 11% from H1; markets calmer than 2022/23\n\n2026 KEY WATCHLIST:\n• Gas still sets the power price in peak situations — gas price = indirect electricity risk\n• Industriestrompreis: German industrial electricity subsidy planned for 2026, targeting ~5 ct/kWh, but capped at 50% of consumption and linked to decarbonisation commitments\n• Grid fee (Stromnetzentgelt) reform: repeatedly delayed; unresolved as of 2026 — creates planning uncertainty\n• Structural trend: more extreme price situations (full renewable coverage → negative; gas-only peak → spikes)`,
        highlight: "Read the Energy Market Insights report for the full 2025 review and 2026 outlook — it's essential context for every customer conversation.",
        keyPoints: [
          "Merit order: the most expensive generator needed sets the price — gas is usually at the margin",
          "15-min trading since Oct 2025: more precise, more volatile, relevant for spot customers",
          "2025 electricity average ~9 ct/kWh (H2); individual hours ranged from negative to 47 ct/kWh",
          "2026: watch gas coupling, Industriestrompreis rollout, and grid fee reform — all affect customer strategy",
        ],
      },
      {
        id: "strategien",
        title: "The Three Procurement Strategies",
        body: `Every energy customer uses one of three procurement approaches — or a combination. Understanding these is the foundation for everything we do.\n\nFESTPREISBESCHAFFUNG (Fixed Price)\nHow it works: The full annual volume is hedged at one price, either on a set date or in a few tranches.\nAdvantages: Maximum cost certainty; protection against price spikes; easy to budget.\nDisadvantages: No upside if prices fall after fixing; wrong timing = locked into a bad price.\nTolerance band risk: Tighter volume tolerance (less deviation allowed) → higher price, because the utility prices that deviation risk.\nBest for: Companies with very low risk tolerance and stable, predictable consumption.\n\nSPOTMARKTBESCHAFFUNG (Spot Market)\nHow it works: Energy is bought daily at the Day-Ahead or Intraday market price. Billing is usage-matched at 15-minute intervals.\nAdvantages: Historically cheapest over time; full transparency; participates in negative prices.\nDisadvantages: Maximum exposure to volatility; no cost certainty; 2022/23 showed the downside risk clearly.\nBest for: Companies with high risk tolerance, flexible production, and the operational capability to shift load.\n\nSTRUKTURIERTE BESCHAFFUNG (Structured — ecoplanet's approach)\nHow it works: Combines multiple instruments (tranches, spot, PPAs, PV) over multiple time horizons. Volume is split into portions that are fixated at different points in time.\nAdvantages: Smooths price risk across time; doesn't depend on a single market moment; more robust than pure fixed or pure spot.\nDisadvantages: More complex to manage; requires active steering; higher advisory need.\nBest for: Most companies. It balances cost optimisation with risk management — and it's what we build for every customer.`,
        keyPoints: [
          "Festpreis = maximum certainty, no upside / Spot = maximum exposure, historically cheapest / Strukturiert = balanced",
          "ecoplanet always uses structured procurement — it's what the product is built for",
          "Tolerance bands matter: tighter = more certainty = higher price (utility prices the deviation risk)",
          "2022/23 proved that pure spot is catastrophic in crisis years — structured procurement protects against that",
        ],
      },
      {
        id: "ecoplanet-approach",
        title: "ecoplanet's Approach: The 4 Building Blocks",
        body: `At ecoplanet, we use structured procurement for all customers. The strategy for each customer is built from 4 instruments — the mix depends on their consumption profile, risk appetite, market conditions, and sustainability goals.\n\nBUILDING BLOCK 1 — TRANCHE (Terminmarkt)\nExchange-traded forward products (standard products: monthly, quarterly, annual Base/Peak). Volume is split into tranches, each with its own fixation window. Goal: achieve a smooth average purchase price across time, not depend on one market moment.\n→ Full details: Tranche sub-page (Notion)\n\nBUILDING BLOCK 2 — SPOTMODELL\nThe portion of the customer's volume exposed to short-term market prices. Adds flexibility and access to low-price periods. Portion is calibrated based on customer risk tolerance.\n→ Full details: Spotmodell sub-page (Notion)\n\nBUILDING BLOCK 3 — POWER PURCHASE AGREEMENT (PPA)\nDirect bilateral contract between the customer and a renewable energy generator. Fixed price for green energy over 5–20 years. Reduces dependency on wholesale market. Important for customers with sustainability commitments.\n→ Full details: PPA sub-page (Notion)\n\nBUILDING BLOCK 4 — EIGENERZEUGUNG (PV)\nCustomer-owned solar generation. Direct consumption of own generation at near-zero marginal cost reduces exposure to market prices. Often combined with PPAs and storage.\n→ Full details: PV sub-page (Notion)\n\nHOW WE CHOOSE THE MIX:\nThe ratio of Tranche : Spot : PPA is decided per customer based on:\n• Consumption volume and load profile\n• Risk appetite (how much volatility can they absorb?)\n• Current market environment (entry points on the forward curve)\n• Sustainability goals (PPA relevant for green targets)`,
        highlight: "No two customers have the same strategy — the mix is always tailored. That's exactly what makes our product valuable.",
        keyPoints: [
          "4 building blocks: Tranche (forward hedging), Spot (short-term exposure), PPA (long-term green), PV (own generation)",
          "Every customer gets a custom mix — no standard package",
          "Tranche is the core: forward products in multiple portions fixated over time → smooth average price",
          "PPA = green energy at a fixed long-term price; growing importance due to decarbonisation targets",
        ],
      },
      {
        id: "preisbestandteile",
        title: "What's in the Price? — Energy Price Components",
        body: `A customer's energy price is not just the wholesale market price. It has 4 layers — and understanding all of them is crucial for customer conversations and pricing analysis.\n\n1. MARKTPREISE (Market Prices)\nThe wholesale cost of procuring the energy volume — driven by the forward and spot markets. This is the component that our procurement strategy directly manages. The lower (and more stable) this is, the better the customer outcome.\n→ Details: Marktpreise sub-page\n\n2. PPA-PREIS\nIf the customer's strategy includes a PPA, the PPA has its own fixed price which replaces part of the Marktpreis for the PPA volume. Typically a long-term fixed price for renewable energy, independent of market movements.\n→ Details: PPA-Preis sub-page\n\n3. VERSORGERAUFSCHLAG (Utility Surcharge)\nThe margin and service fee added by the partner utility (N-Ergie, SachsenEnergie, etc.) on top of the market price. Includes their procurement service, imbalance settlement, regulatory compliance, and profit margin. Each utility has different base conditions; we negotiate these.\n→ Details: Versorgeraufschlag sub-page\n\n4. NETZKOSTEN (Grid Costs)\nCharges for using the electricity grid — set by the grid operator (Netzbetreiber), not by the utility or ecoplanet. Includes: network usage fees (Netznutzungsentgelt), metering, and various levies. These are a pass-through — we can't negotiate them, but we must include them in TCO analysis.\n→ Details: Netzkosten sub-page\n\nWHY TOLERANCE BANDS MATTER:\nThe utility prices a tolerance band — the allowed deviation between forecasted and actual consumption. A tighter band (less deviation allowed) means higher certainty for the utility → they price that risk lower → actually: wait, tighter = higher price because more precision needed in hedging. A customer with volatile consumption needs a wider band → the utility prices that uncertainty higher.`,
        keyPoints: [
          "4 components: Marktpreis + PPA-Preis + Versorgeraufschlag + Netzkosten",
          "Only Marktpreis and Versorgeraufschlag are directly influenceable by our strategy",
          "Netzkosten are a regulated pass-through — neither ecoplanet nor the utility controls them",
          "Tolerance bands affect the Versorgeraufschlag: tighter band = utility prices deviation risk differently; always factor into customer pricing",
        ],
      },
    ],
    resources: [
      {
        title: "📋 Procurement — Full Notion Page",
        description: "Main procurement reference: strategies, operations, partner utilities",
        url: "https://app.notion.com/p/2e8182495b09806fad61f7106c2cdf2b",
        type: "document",
      },
      {
        title: "📊 Energy Market Insights Juli 2025",
        description: "H1 2025 market review — spot/forward prices, volatility, regulatory changes",
        url: "https://docs.google.com/presentation/d/1bbMp8pQDcrkh4JE70O_vNsOOrkWUg89oXTyFUUeZk8E/edit?usp=sharing",
        type: "document",
      },
      {
        title: "📁 Energy Market Insights Aug–Dez 2025",
        description: "H2 2025 monthly market reports — full year picture",
        url: "https://drive.google.com/drive/folders/165EuhQZKEiXENg0iCAobin4ub2N6Vfvs?usp=drive_link",
        type: "document",
      },
      {
        title: "📄 Industriestrompreis Overview",
        description: "German industrial electricity subsidy planned for 2026 — details and conditions",
        url: "https://docs.google.com/document/d/1GuiAKBXWwwlvU85MwTJHyGx7RBzDp4ODtNxRN93JP2E/edit?usp=sharing",
        type: "document",
      },
      {
        title: "⚡ Tranche (Notion)",
        description: "Forward hedging building block — mechanics and process",
        url: "https://app.notion.com/p/2f4182495b0980f8ab3dcdffa663a4ee",
        type: "document",
      },
      {
        title: "🔄 Spotmodell (Notion)",
        description: "Spot market exposure building block",
        url: "https://app.notion.com/p/2f4182495b09805596e8e00ba0a10d34",
        type: "document",
      },
      {
        title: "🌱 PPA (Notion)",
        description: "Power Purchase Agreement — green energy at fixed long-term price",
        url: "https://app.notion.com/p/2f4182495b0980d9a392ecb0ede1f9c5",
        type: "document",
      },
      {
        title: "☀️ Eigenerzeugung PV (Notion)",
        description: "Customer-owned solar generation building block",
        url: "https://app.notion.com/p/2f4182495b0980d78c4ddd9567187a7b",
        type: "document",
      },
    ],
    keyTakeaways: [
      "German energy markets are volatile — 2025 electricity prices ranged from negative to 47 ct/kWh; this volatility is the core reason structured procurement exists",
      "3 strategies: Festpreis (certainty, no upside), Spot (exposure, historically cheap), Strukturiert (balanced) — ecoplanet always uses Strukturiert",
      "4 building blocks: Tranche (forward hedging) + Spot + PPA (long-term green) + PV (own generation) — mixed per customer",
      "Energy price = Marktpreis + PPA-Preis + Versorgeraufschlag + Netzkosten — only the first two are directly managed by our strategy",
      "2026 watchlist: gas-power price coupling, Industriestrompreis rollout, grid fee reform — all affect customer strategy decisions",
    ],
  },

  {
    id: 4,
    title: "Operational Procurement — How We Work",
    subtitle: "From Load Profile Analysis to the Trading Floor",
    emoji: "📞",
    estimatedMinutes: 180,
    accent: "amber",
    objectives: [
      "Know how ecoplanet's procurement sales process works (Upsell & Renewal)",
      "Be able to perform a Lastganganalyse using the ecoplanet tools and Loom walkthroughs",
      "Understand how a Tranchenplan (procurement strategy) is created from the analysis",
      "Walk through the full operative Terminmarktbeschaffung process end-to-end (Fullservice + Selfservice)",
      "Know our partner utilities and when to use each one",
    ],
    sections: [
      {
        id: "sales-process",
        title: "The Sales Process: Upsell & Renewal",
        body: `The Energy Procurement module is primarily an Upsell product — it's sold to existing ecoplanet customers, not cold-prospected.\n\nHOW IT STARTS:\nCustomer Success identifies the opportunity: a customer has consumption data in the product, is coming up for contract renewal, or proactively asks about better procurement options. CS initiates — Walid supports with the analysis and strategy.\n\nUPSELL PROCESS:\n1. CS identifies a customer who could benefit from structured procurement\n2. Lastganganalyse: Walid analyses the customer's load profile (see next section)\n3. Strategy proposal: Walid builds a Tranchenplan showing how we'd structure their procurement\n4. Customer presentation: CS presents the strategy + projected savings vs. current price\n5. If the customer agrees: contract is set up with the appropriate utility partner\n\nRENEWAL:\nFor existing procurement customers, the contract has a fixed term. At renewal, Walid reviews the strategy and proposes adjustments based on market developments and customer profile changes.\n\nKEY PRINCIPLE:\nWe show concrete savings vs. the customer's current energy price. The analysis starts with their Lastgang data — that's the anchor for everything. No analysis = no offer.`,
        highlight: "The procurement module is primarily a CS-driven upsell — Walid's job is to make the analysis fast and the strategy compelling. Speed and accuracy of the Lastganganalyse is the critical bottleneck.",
        keyPoints: [
          "Procurement module = Upsell, not cold outbound — CS triggers the process at existing customers",
          "Always starts with Lastganganalyse: no consumption data → no strategy → no offer",
          "Goal: show concrete savings vs. current energy price (not vs. market abstract)",
          "Renewal = review + adjust strategy; market conditions and customer profile may have changed",
        ],
      },
      {
        id: "lastganganalyse",
        title: "Lastganganalyse — Reading Customer Data",
        body: `The Lastgang (load profile) is the 15-minute-interval consumption record of a customer's energy usage. It's the raw data from which we build the entire procurement strategy.\n\nWHAT WE DERIVE FROM IT:\n• Total annual consumption (GWh/year) → determines which utilities can accept this customer\n• Load shape: how consumption varies by time of day, day of week, season\n• Peak load (in MW) → determines tranche sizing\n• Base load vs. variable load → guides split between Terminmarktprodukte (stable base) and Spot (flexible portion)\n• PPA suitability: does the load profile match renewable generation patterns?\n\nTWO PROCESSES (use the new one):\n\nNEW PROCESS:\n1. Lastganganalyse: import load profile, derive key metrics\n2. Portfolioaufteilung und Fixierung: split into products, plan fixation windows\n3. Google Sheet: tool for calculation and documentation\n→ Watch the Loom walkthroughs (linked in resources) before your first analysis\n\nOLD PROCESS (reference only — useful for edge cases):\nLoad Profile from scratch, including time zone correction for daylight saving transitions\n\nThe new process is faster and more standardised — always start there.`,
        highlight: "Watch the Lastganganalyse Loom video before you do your first real analysis. The process has specific steps and the Google Sheet has formulas that break if used incorrectly.",
        keyPoints: [
          "Lastgang = 15-minute consumption record — the foundation of every procurement strategy",
          "Key outputs: annual GWh, peak load (MW), base vs. variable split, PPA suitability",
          "Use the new process (Loom videos in resources) — the old process is only for edge cases",
          "The Google Sheet is the calculation tool — handle it carefully, formulas are interdependent",
        ],
      },
      {
        id: "strategieerstellung",
        title: "Strategieerstellung — Building the Procurement Plan",
        body: `After the Lastganganalyse, the Terminmarkt volume is divided into tranches. Each tranche represents a portion of the customer's annual volume, bought at a different point in time to achieve a smoothed average price.\n\nHOW TRANCHES WORK:\n• Total annual volume (e.g., 10,000 MWh) is split into portions — e.g., 5 × 2,000 MWh tranches\n• Each tranche has a Fixierungszeitraum: a defined window during which it will be bought (e.g., "Q2 2025" = buy during this quarter, whenever the market signal triggers)\n• The result: a weighted average purchase price across 5 different market moments — far less dependent on any one entry point\n\nPRODUCT TYPES USED:\nExchange-traded standard products: Monthly Base, Monthly Peak, Quarterly Base, Annual Base. These are the building blocks — combined to match the customer's load shape.\n\nSTRATEGY UPLOAD (RETOOL):\nOnce the strategy is finalised, it must be entered into the product via Retool — before 17:00 on the day of fixation.\n→ Watch the Retool upload Loom video before your first upload.\n\nOLD PROCESS (reference): Tranchenplanung video covers the manual approach.`,
        keyPoints: [
          "Tranchenplan: divide total volume into portions, each with its own Fixierungszeitraum → smooth average price",
          "Standard products: Monthly/Quarterly/Annual Base and Peak — matched to the customer's load shape",
          "Strategy must be uploaded to Retool before 17:00 on fixation day — no exceptions",
          "Watch the Portfolioaufteilung and Retool Loom videos before your first real strategy upload",
        ],
      },
      {
        id: "terminmarkt-operativ",
        title: "Operative Procurement — Fullservice vs. Selfservice",
        body: `Once a strategy is in place and a Kaufsignal (buy signal) is triggered, the actual energy must be purchased. Two models apply depending on the customer setup.\n\nFULLSERVICE — WE BUY FOR THE CUSTOMER\nWe make the trade with the utility on the customer's behalf.\n\nStep 1 — 11:30 Uhr: Kaufsignal arrives as a collected email listing all products to buy across all customers.\n\nStep 2 — (N-Ergie only): Forward the Tranchenübersicht email to the utility so they have the full picture.\n\nStep 3 — Call the Handelstelefon before 14:00:\nName: Energieträger (Strom/Gas) + Produkt (e.g., "Jahresprodukt 2027") + Menge (in MW, e.g., "0.6 MW")\nUtility quotes a price → check against current market → confirm → they repeat the price.\nOptionally: ask them to confirm the MWh volume too.\n\nStep 4 — Receive Fixierungsbestätigung by email. For SachsenEnergie: also confirm back by email.\n\nStep 5 — Enter prices in Retool before 17:00.\nAuto-email is sent to beschaffung@ecoplanet.tech → CSM forwards to customer.\n\nSELFSERVICE — CUSTOMER BUYS THEMSELVES\nCSM forwards the Kaufsignal to the customer. Customer buys with their utility and sends us the Fixierungsbestätigung. We enter it into the product.\nImportant: if no confirmation arrives, send one reminder — then close the tranche. To re-trigger, the entire tranche must be deleted and recreated.\n\nALL UTILITY COMMUNICATION: beschaffung@ecoplanet.tech — always use this inbox, not personal email.`,
        keyPoints: [
          "Fullservice: 5 steps — signal → (Tranchenübersicht) → call before 14:00 → confirm price → enter Retool before 17:00",
          "Trading call format: 'Strom Jahresprodukt 2027, 0.6 MW' — know this by heart",
          "Selfservice: signal → CSM → customer → Fixierungsbestätigung → we enter in product",
          "All communication via beschaffung@ecoplanet.tech — never personal email",
        ],
      },
      {
        id: "partnerversorger",
        title: "Partner Utilities — Who, When, Why",
        body: `ecoplanet is not a utility — we work with partner utilities who supply the energy to our customers. Each partner has different strengths, weaknesses, and credit requirements.\n\nN-ERGIE (Stadtwerke Nürnberg) — OUR MOST IMPORTANT PARTNER\n• Best for: Strom customers under 10 GWh, PPA-capable customers\n• Pool model: N-Ergie aggregates many small customers into a pool — makes tranche procurement feasible even for small volumes\n• Credit check: strict — N-Ergie takes out insurance via Allianz Trade, so they're careful about credit risk\n• Conditions: pool conditions apply; adjusted for unusual load profiles\n• Trading: +49 911 8025 4998 | Mon–Thu 9–16h, Fri 9–15h\n\nSACHSENENERGIE / DREWAG (Stadtwerke Dresden)\n• Best for: Strom + Gas customers over 8 GWh\n• Key customer: Leipfinger-Bader\n• Credit check: strict (also requires insurance)\n• Minimum tranche size: significantly higher than N-Ergie → small customers won't qualify\n• Trading: +49 351 5630 48032 | Mon–Thu 9–16h, Fri 9–15h\n\nENERCITY (Stadtwerke Hannover)\n• Best for: Strom + Gas customers over 8 GWh\n• Key differentiator: credit check via Creditreform (Crefo) — much more flexible than N-Ergie/SachsenEnergie → good fallback for credit-challenged customers\n• Conditions: negotiated individually per customer\n• Trading: +49 511 430 6688 | Mon–Thu 9–16h, Fri 9–15h (note: need customer password for each trade — find in contract)\n\nSTADTWERKE HERNE — LAST RESORT\n• Accepts customers of any credit rating → useful when N-Ergie and enercity both decline\n• Operationally weak: does not always meet timelines, sometimes requires chasing\n• Procurement via email (not phone) — use template in beschaffung@ecoplanet.tech inbox\n\nFLEXPOWER — PPAs ONLY\n• Used exclusively for PPA volumes (third-party renewable volumes)\n• No regular supply contracts\n\nUNIPER — LARGE STROM CUSTOMERS ONLY\n• Strom only, 10+ GWh — no gas\n• Credit check via Crefo\n• Enquiries: anfragen@uniper.de`,
        keyPoints: [
          "N-Ergie = most important partner; pool model for <10 GWh; strict credit (Allianz Trade reinsurance)",
          "SachsenEnergie = >8 GWh, great for Gas, high min tranche size — strict credit",
          "enercity = >8 GWh, easier credit (Crefo) → best fallback when N-Ergie/Sachsen decline",
          "Stadtwerke Herne = last resort; any credit rating, but operationally unreliable",
          "Flexpower = PPAs only; Uniper = Strom >10 GWh only",
        ],
      },
    ],
    resources: [
      {
        title: "📋 Procurement — Full Notion Page",
        description: "Complete operational reference: processes, utilities, templates",
        url: "https://app.notion.com/p/2e8182495b09806fad61f7106c2cdf2b",
        type: "document",
      },
      {
        title: "🎥 Lastganganalyse (Loom)",
        description: "Step-by-step walkthrough of the load profile analysis process",
        url: "https://www.loom.com/share/0d13b38776a44ebdac0ea4adb12209e7",
        type: "video",
      },
      {
        title: "🎥 Portfolioaufteilung und Fixierung (Loom)",
        description: "How to split the portfolio and plan fixation windows",
        url: "https://www.loom.com/share/041ef6bde80447ed92493360b37ff470",
        type: "video",
      },
      {
        title: "🎥 Google Sheet walkthrough (Loom)",
        description: "How to use the calculation sheet for the Lastganganalyse",
        url: "https://www.loom.com/share/aa04fb6180a44cd797173621b7618637",
        type: "video",
      },
      {
        title: "🎥 Tranchenplanung (Loom)",
        description: "Building the tranche plan from the analysis output",
        url: "https://www.loom.com/share/a738772e4a0d42d19e5ebc0e148ab191",
        type: "video",
      },
      {
        title: "🎥 Strategie im Produkt hinterlegen (Loom)",
        description: "How to upload the procurement strategy into the product via Retool",
        url: "https://www.loom.com/share/584d1fcda72a403f965a88fb8d0fdb0e",
        type: "video",
      },
      {
        title: "📊 Beschaffungskunden Übersicht",
        description: "All procurement customers, operational status, ARR, renewal dates",
        url: "https://docs.google.com/spreadsheets/d/11gxpeamTDAPlT_9YmiCUqBHePbwRGjaJPua54xMpEXE/edit?gid=1715866018#gid=1715866018",
        type: "tool",
      },
    ],
    keyTakeaways: [
      "Procurement module = primarily a CS-driven Upsell; Walid's trigger is the Lastganganalyse — no data, no offer",
      "Lastgang analysis → Tranchenplan: split the annual volume into time-spread portions to smooth the average purchase price",
      "Fullservice: call Handelstelefon before 14:00, confirm, enter in Retool before 17:00 — strict timing",
      "N-Ergie is our anchor partner (<10 GWh, pool, strict credit); enercity is the credit-flexible fallback",
      "All utility communication goes through beschaffung@ecoplanet.tech — never personal email",
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
        title: "Day 2 Recap: GTM Playbook & Product",
        body: `Key points from Day 2:\n• ICP: German manufacturing, 5+ GWh/year, 50–500 employees, ISO 50001 certified or in progress (~15,000 companies)\n• Two Champion profiles: Part-time Energy Manager (manual data hell, fears compliance failure) and Full-time Energy Manager (plateaued savings, needs to prove ROI)\n• 6-stage sales process: Lead / Outreach → Discovery → Demo → Solution Evaluation → Offer Sent → Closing\n• CUSTOM discovery framework: Context · Urgency & Fit · Stakeholder Mapping · Total Alternatives · Outcome Quantification · Mutual Action Plan\n• U (Urgency & Solution Fit) must be confirmed before advancing to Demo — no exceptions\n• Product: energy integration software — use the demo account (app.ecoplanet.tech) for 30+ minutes hands-on`,
      },
      {
        id: "review-d3",
        title: "Day 3 Recap: Energy Markets & Procurement Strategies",
        body: `Key points from Day 3:\n• Merit order: gas usually sets the power price at the margin — gas price = indirect electricity cost risk\n• 15-minute trading since Oct 2025: more granular, more volatile\n• 2025 electricity: avg ~9 ct/kWh H2; ranges from negative to 47 ct/kWh intraday\n• 3 strategies: Festpreis (certainty, no upside) / Spot (exposure, historically cheap) / Strukturiert (balanced)\n• ecoplanet always uses Strukturierte Beschaffung\n• 4 building blocks: Tranche (forward hedging) + Spot + PPA (green, long-term) + PV (own generation)\n• 4 price components: Marktpreis + PPA-Preis + Versorgeraufschlag + Netzkosten`,
      },
      {
        id: "review-d4",
        title: "Day 4 Recap: Operational Procurement",
        body: `Key points from Day 4:\n• Procurement module = CS-driven Upsell; Lastganganalyse is the trigger and foundation\n• Lastganganalyse: 15-min interval data → annual GWh, peak load (MW), base vs. variable split, PPA suitability\n• Tranchenplan: split annual volume into time-spread tranches → smooth average purchase price\n• Fullservice process: 11:30 signal → call Handelstelefon before 14:00 → confirm price → Retool entry before 17:00\n• Selfservice: signal forwarded to customer, they buy, send us Fixierungsbestätigung\n• Partner utilities: N-Ergie (main, <10 GWh, strict credit), enercity (fallback, flexible credit), SachsenEnergie (>8 GWh, gas-strong), Herne (last resort)\n• All utility communication: beschaffung@ecoplanet.tech`,
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
      "ICP: German manufacturing, 5+ GWh, 50–500 employees, ISO 50001 — and know both Champion profiles cold",
      "6-stage sales process: Lead → Discovery → Demo → Solution Evaluation → Offer → Closing; CUSTOM drives Discovery",
      "3 procurement strategies: Festpreis / Spot / Strukturiert — ecoplanet always uses Strukturiert with 4 building blocks",
      "Operative procurement: Lastganganalyse → Tranchenplan → Handelstelefon before 14:00 → Retool before 17:00",
      "N-Ergie is our main partner (<10 GWh); enercity is the credit-flexible fallback; all via beschaffung@ecoplanet.tech",
    ],
  },
];
