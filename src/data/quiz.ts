export type Category = "company" | "gtm" | "procurement";

export interface Question {
  id: number;
  category: Category;
  categoryLabel: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const PASS_SCORE = 24; // out of 32 (75%)
export const TOTAL_QUESTIONS = 32;

export const questions: Question[] = [

  // ── ECOPLANET & COMPANY (6 questions) ────────────────────────────────────────

  {
    id: 1,
    category: "company",
    categoryLabel: "Ecoplanet",
    question: "Which regulatory frameworks are the primary demand drivers for ecoplanet's target market?",
    options: [
      "GDPR and the Digital Markets Act, which require companies to disclose energy consumption data to regulators annually",
      "CSRD and the German Supply Chain Due Diligence Act (LkSG), which mandate emissions reporting and supplier sustainability assessments",
      "Basel III and the Solvency II Directive, which create energy risk disclosure requirements for energy-intensive industrial companies",
      "ISO 50001 and ISO 14001, which are mandatory certifications for all German manufacturing companies above 100 employees",
    ],
    correctIndex: 1,
    explanation:
      "CSRD requires large companies to report Scope 3 emissions; LkSG requires supply chain sustainability assessment. Both create direct regulatory demand for structured energy and procurement solutions.",
  },

  {
    id: 2,
    category: "company",
    categoryLabel: "Ecoplanet",
    question: "Approximately what share of a typical company's total carbon footprint comes from its supply chain (Scope 3 emissions)?",
    options: [
      "10–20%, since direct operations and energy use dominate most companies' emission profiles",
      "30–40%, split roughly equally between production processes, logistics, and transport",
      "50–60%, reflecting the combined impact of purchased goods, logistics, and end-of-life product disposal",
      "70–90%, which is why sustainable procurement is so strategically important for decarbonisation",
    ],
    correctIndex: 3,
    explanation:
      "Scope 3 (supply chain) emissions account for 70–90% of most companies' carbon footprint — making sustainable procurement a top-priority lever for corporate decarbonisation.",
  },

  {
    id: 3,
    category: "company",
    categoryLabel: "Ecoplanet",
    question: "What type of software is ecoplanet building, and what makes it fundamentally different from existing energy tools?",
    options: [
      "A sustainability reporting platform that consolidates Scope 1, 2 and 3 data for regulatory disclosure, optimised for mid-market manufacturers",
      "An ERP module for energy-intensive SMBs that integrates procurement, invoicing and consumption tracking in one system",
      "Energy integration software — a new category that connects energy markets directly to core business processes, enabling daily intelligent optimisation",
      "A smart metering and energy audit service combining IoT hardware with consulting for companies with ISO 50001 obligations",
    ],
    correctIndex: 2,
    explanation:
      "Ecoplanet builds energy integration software — a new software category. It connects energy markets directly to a company's operations and runs continuously, enabling daily optimisation. This is distinct from reporting tools, consulting, or ERP modules.",
  },

  {
    id: 4,
    category: "company",
    categoryLabel: "Ecoplanet",
    question: "How many German companies roughly match ecoplanet's Ideal Customer Profile, making up the total addressable market?",
    options: [
      "~15,000 companies — German industrials consuming 5+ GWh/year, primarily in manufacturing",
      "~150,000 companies — German companies with any form of energy management system or ISO certification",
      "~3,000 companies — large industrial groups with 1,000+ employees and dedicated energy management teams",
      "~50,000 companies — all German SMBs with annual energy costs exceeding €500,000",
    ],
    correctIndex: 0,
    explanation:
      "~15,000 companies in Germany match ecoplanet's ICP: German industrials consuming 5+ GWh/year. This is the defined addressable market — not all companies with energy costs or ISO certifications.",
  },

  {
    id: 5,
    category: "company",
    categoryLabel: "Ecoplanet",
    question: "The German Energy Efficiency Act (EnEfG) is currently under revision. What threshold is proposed as the new mandatory level for implementing a certified Energy Management System (ISO 50001 or EMAS)?",
    options: [
      "2 GWh/year — lowered from the previous threshold to capture a broader range of industrial energy users",
      "5 GWh/year — aligned with ecoplanet's ICP entry criterion to create a clear regulatory overlap",
      "7.5 GWh/year — the existing threshold, which the revision proposes to retain without change",
      "23.6 GWh/year — proposed to be raised from 7.5 GWh to reduce administrative burden on smaller companies",
    ],
    correctIndex: 3,
    explanation:
      "The EnEfG revision proposes raising the mandatory EMS threshold from 7.5 GWh to 23.6 GWh (the EU EED minimum). The goal is to reduce bureaucratic burden. The decision is still moving through the legislative process.",
  },

  {
    id: 6,
    category: "company",
    categoryLabel: "Ecoplanet",
    question: "ecoplanet is not a utility. What does this mean for its business model in the energy procurement module?",
    options: [
      "ecoplanet can only advise on procurement strategy but is legally prohibited from participating in energy trades on behalf of customers",
      "ecoplanet works with licensed partner utilities who supply the energy — ecoplanet manages the strategy, analysis and trade execution, earning through contract placement with partners",
      "ecoplanet acts as an energy broker that buys electricity wholesale and resells it to customers at a fixed margin, without involving utility partners",
      "ecoplanet provides software only — all energy procurement decisions and trades are handled directly by the customer with their existing utility",
    ],
    correctIndex: 1,
    explanation:
      "Because ecoplanet is not a licensed energy supplier, it partners with utilities (N-Ergie, enercity, etc.) who supply the energy. ecoplanet manages the strategy, analysis and trade execution on the customer's behalf, earning through the partnership arrangement.",
  },

  // ── GTM & PRODUCT (10 questions) ─────────────────────────────────────────────

  {
    id: 7,
    category: "gtm",
    categoryLabel: "GTM & Product",
    question: "Which of the following best describes ecoplanet's Ideal Customer Profile (ICP)?",
    options: [
      "German retail and logistics companies with 1,000+ employees, a dedicated sustainability team, and active EU ETS participation",
      "Any European industrial company with annual energy costs over €1M, regardless of volume, company size, or location",
      "German manufacturing companies with 5+ GWh/year consumption, 50–500 employees, ISO 50001 certified or in progress, with no adequate EMS",
      "German SMBs with installed solar or wind assets seeking to optimise self-consumption and sell surplus energy back to the grid",
    ],
    correctIndex: 2,
    explanation:
      "ICP: German manufacturing, 5+ GWh/year, 50–500 employees (mid-market), ISO 50001 certified or in progress. The ~15,000 matching companies in Germany are the core target — not all energy-intensive companies or renewable asset owners.",
  },

  {
    id: 8,
    category: "gtm",
    categoryLabel: "GTM & Product",
    question: "What is the key difference between a Part-Time and a Full-Time Energy Manager as ecoplanet Champion profiles?",
    options: [
      "Part-time managers are overwhelmed by manual data work and fear compliance failures; full-time managers have a plateaued savings program and struggle to prove ROI to leadership — requiring a different pitch for each",
      "Part-time managers only exist at companies under 100 employees; full-time managers are exclusively found at companies with 500+ employees and long-standing ISO 50001 certification",
      "Part-time managers are harder to win because they lack authority to approve software budgets; full-time managers have direct budget approval and can close deals without further sign-off",
      "The distinction is no longer relevant — most companies now have a hybrid role combining energy compliance and procurement, regardless of time allocation",
    ],
    correctIndex: 0,
    explanation:
      "The key difference is pain and fear: Part-time managers drown in manual data consolidation and fear audit failures. Full-time managers have deep expertise but hit a plateau — they need insights that manual analysis misses. Both are valid Champions but require completely different conversations.",
  },

  {
    id: 9,
    category: "gtm",
    categoryLabel: "GTM & Product",
    question: "What is the correct sequence of ecoplanet's 6 pre-sales stages?",
    options: [
      "Discovery → Lead / Outreach → Demo → Solution Evaluation → Offer Sent → Closing",
      "Lead / Outreach → Discovery → Demo → Solution Evaluation → Offer Sent → Closing",
      "Lead / Outreach → Demo → Discovery → Solution Evaluation → Offer Sent → Closing",
      "Lead / Outreach → Discovery → Solution Evaluation → Demo → Offer Sent → Closing",
    ],
    correctIndex: 1,
    explanation:
      "The correct order is Lead / Outreach → Discovery → Demo → Solution Evaluation → Offer Sent → Closing. Discovery always precedes Demo — running a demo without confirmed pain and urgency is wasted effort and advances nothing.",
  },

  {
    id: 10,
    category: "gtm",
    categoryLabel: "GTM & Product",
    question: "What does 'U' stand for in the CUSTOM framework, and what is its role in the Discovery stage?",
    options: [
      "User Adoption — confirming the Champion has internal authority and capacity to drive implementation across the organisation",
      "Unique Value — quantifying ecoplanet's specific advantage over the customer's current solution or alternatives being evaluated",
      "Upsell Potential — mapping which additional product modules the customer could adopt post-signature to maximise ARR",
      "Urgency & Solution Fit — confirming real urgency to act and that ecoplanet actually solves the customer's pain; a deal without confirmed U should not advance to Demo",
    ],
    correctIndex: 3,
    explanation:
      "U = Urgency & Solution Fit. It answers two questions: Is there real urgency (compelling event, cost of inaction)? And can ecoplanet actually solve this customer's specific pain? Both must be true before investing in a Demo.",
  },

  {
    id: 11,
    category: "gtm",
    categoryLabel: "GTM & Product",
    question: "What are the two primary decision triggers that create urgency in ecoplanet's target customers?",
    options: [
      "A new procurement director joining and issuing an RFP, combined with a peer company publicly announcing energy management investment",
      "Completion of a large PV installation changing the energy balance, combined with pressure from the works council on sustainability reporting",
      "An upcoming ISO audit or unexpected energy bill spike, combined with management scrutiny on rising energy spend",
      "Expiry of a fixed-price energy contract creating a procurement window, combined with BAFA subsidy availability in the current budget year",
    ],
    correctIndex: 2,
    explanation:
      "The primary triggers are: ISO audit pressure (compliance fear) and an unexpected energy bill spike or CFO/management scrutiny on costs. These create real urgency — without a trigger like this, there is rarely a compelling reason to act now.",
  },

  {
    id: 12,
    category: "gtm",
    categoryLabel: "GTM & Product",
    question: "Which of the following is a hard disqualification criterion — a prospect that should NOT enter the sales pipeline?",
    options: [
      "The customer requires ISO 27001 certification from ecoplanet, which ecoplanet does not currently hold",
      "The customer consumes 4.5 GWh/year — slightly below the 5 GWh ICP threshold but in the right industry and geography",
      "The customer has started ISO 50001 certification but has not yet received formal certification",
      "The customer currently uses a basic Excel-based tracking tool with no systematic energy management system in place",
    ],
    correctIndex: 0,
    explanation:
      "ISO 27001 requirement is a hard disqualifier — ecoplanet does not hold it and cannot commit to it in the near term. Customers slightly below 5 GWh or without formal ISO 50001 certification are not hard disqualifiers; they can still be qualified case-by-case.",
  },

  {
    id: 13,
    category: "gtm",
    categoryLabel: "GTM & Product",
    question: "At which sales stage is the 3× ROI guarantee first introduced to the customer?",
    options: [
      "Discovery — it is part of the initial qualification pitch to establish credibility and justify the customer's time investment",
      "Demo — it is presented during the demo to anchor value expectation before the Champion reports internally",
      "Offer Sent — it appears in the commercial offer as a contractual commitment linked to pricing terms",
      "Solution Evaluation — it is used to validate the business case with decision-makers and secure organisational buy-in beyond the Champion",
    ],
    correctIndex: 3,
    explanation:
      "The 3× ROI guarantee is introduced at Solution Evaluation, where the goal is to convince decision-makers (beyond the Champion) that the investment is justified. It is a key commercial tool at that stage, not used earlier.",
  },

  {
    id: 14,
    category: "gtm",
    categoryLabel: "GTM & Product",
    question: "What is the primary goal of the Demo stage, and what must happen before advancing to Solution Evaluation?",
    options: [
      "Deliver a comprehensive product walkthrough to the full buying committee and collect written sign-off from all stakeholders present",
      "Validate that ecoplanet solves the Champion's core pain and secure Champion buy-in before expanding to the broader buying center",
      "Present the commercial offer including pricing, ROI, and implementation timeline to the Champion and their direct manager",
      "Run a technical proof-of-concept using the customer's own data to confirm integration feasibility before the contract is drafted",
    ],
    correctIndex: 1,
    explanation:
      "Demo goal: validate that ecoplanet solves the Champion's specific pain, and secure their buy-in. Only then does it make sense to expand the conversation to the buying center and decision-makers in Solution Evaluation.",
  },

  {
    id: 15,
    category: "gtm",
    categoryLabel: "GTM & Product",
    question: "What does 'M' stand for in CUSTOM, and when does it typically become the focus?",
    options: [
      "Mutual Action Plan — the agreed path to a decision with clear next steps from both sides; becomes critical in later stages to prevent deals from stalling after initial interest",
      "Market Positioning — establishing how ecoplanet compares to alternatives being evaluated; addressed in Discovery to neutralise competition early",
      "Management Alignment — confirming senior leadership supports the initiative; typically resolved at Solution Evaluation before the offer is sent",
      "Measurable Outcomes — quantifying the exact savings amount expected by the customer, locked in during Discovery to set expectations before the Demo",
    ],
    correctIndex: 0,
    explanation:
      "M = Mutual Action Plan. It defines the agreed path to a decision: what happens next, who does what, and by when. Without it, deals stall after demos and solution evaluation meetings. It becomes critical in the later stages of the process.",
  },

  {
    id: 16,
    category: "gtm",
    categoryLabel: "GTM & Product",
    question: "A Full-Time Energy Manager's savings program has plateaued. What specifically makes ecoplanet's pitch compelling for this Champion?",
    options: [
      "Faster ISO 50001 audit preparation and automated compliance reporting, reducing documentation time from weeks to hours",
      "A lower energy price than their current contract through bulk purchasing power, delivering immediate bill reduction without process change",
      "AI-powered anomaly detection that surfaces what manual analysis misses, simulation before committing budget, and auditable proof of savings",
      "A managed service model where ecoplanet takes over the full energy management function, freeing the manager for strategic projects",
    ],
    correctIndex: 2,
    explanation:
      "For the Full-Time Energy Manager, the low-hanging fruit is gone. The pitch must address their specific challenge: finding the next level of savings that manual analysis can't surface, proving ROI to leadership with auditable data, and simulating impact before committing budget.",
  },

  // ── PROCUREMENT: MARKETS & OPERATIONS (16 questions) ─────────────────────────

  {
    id: 17,
    category: "procurement",
    categoryLabel: "Procurement",
    question: "Which procurement strategy does ecoplanet use for its customers, and what is the core rationale?",
    options: [
      "Festpreisbeschaffung — cost certainty is the primary concern of manufacturing customers and simplifies internal budgeting",
      "Spotmarktbeschaffung — the Day-Ahead market is historically cheapest and ecoplanet's software can shift customer load to low-price periods",
      "Equal weighting of all three strategies, chosen based on the customer's current utility contract terms and renewal date",
      "Strukturierte Beschaffung — combines multiple instruments across time horizons to smooth price risk, more robust than pure fixed or pure spot in volatile markets",
    ],
    correctIndex: 3,
    explanation:
      "ecoplanet always uses Strukturierte Beschaffung. It avoids dependence on a single market moment (unlike Festpreis) and protects against price spikes (unlike Spot). 2022/23 proved that pure spot exposure can be catastrophic in crisis years.",
  },

  {
    id: 18,
    category: "procurement",
    categoryLabel: "Procurement",
    question: "In the German electricity spot market, what mechanism determines the price at any given moment?",
    options: [
      "The merit order — generators offer capacity from cheapest to most expensive, and the price is set by the most expensive generator needed to cover demand at that moment",
      "A bilateral auction between the 10 largest utilities and industrial consumers, where the clearing price is the volume-weighted average of all accepted bids",
      "A regulatory price cap set by the Bundesnetzagentur based on the rolling 90-day average wholesale price, adjusted quarterly",
      "Direct negotiation between large industrial consumers and renewable generators, published as an average of all concluded bilateral contracts",
    ],
    correctIndex: 0,
    explanation:
      "The merit order sets the price: generators offer capacity in order of cost (cheapest first), and the price is set by the most expensive generator needed to balance supply and demand. This is why gas plants — expensive to run — often set the price, and why gas prices indirectly affect electricity costs.",
  },

  {
    id: 19,
    category: "procurement",
    categoryLabel: "Procurement",
    question: "What structural change was introduced to the German Day-Ahead electricity market in October 2025, and what is its key consequence?",
    options: [
      "Germany introduced a carbon price floor of €45/MWh for gas-fired power plants, raising the minimum electricity price and reducing market volatility",
      "The EPEX SPOT exchange merged with Nord Pool, creating a unified European Day-Ahead market with standardised prices across all member states",
      "Trading switched from hourly to 15-minute intervals, making prices more granular and volatile — allowing consumption and generation profiles to be matched with greater precision",
      "Large industrial consumers gained direct access to the wholesale market, bypassing utilities entirely and removing the Versorgeraufschlag from their energy bills",
    ],
    correctIndex: 2,
    explanation:
      "In October 2025, the German Day-Ahead market switched from hourly to 15-minute trading intervals (EPEX SPOT reform). This makes prices more transparent and precise, but also more volatile — both a risk and an opportunity for customers on spot-exposed contracts.",
  },

  {
    id: 20,
    category: "procurement",
    categoryLabel: "Procurement",
    question: "What are the four building blocks of ecoplanet's structured procurement approach?",
    options: [
      "Festpreis, Spot, Hedge-Fonds-Produkte, and Eigenerzeugung — covering fixed, variable, financial, and self-generation exposure respectively",
      "Tranche (Terminmarkt), Spotmodell, Power Purchase Agreement (PPA), and Eigenerzeugung (PV) — each targeting a different time horizon and risk profile",
      "Day-Ahead, Intraday, Terminmarkt, and Balancing — the four electricity market timeframes combined in each customer portfolio",
      "Base Load, Peak Load, Off-Peak Load, and Flexibility Premium — the four standard exchange product categories used in portfolio construction",
    ],
    correctIndex: 1,
    explanation:
      "The four building blocks are: Tranche (forward hedging via exchange products), Spotmodell (short-term market exposure), PPA (long-term green energy at fixed price), and Eigenerzeugung/PV (customer-owned solar). The mix is tailored per customer.",
  },

  {
    id: 21,
    category: "procurement",
    categoryLabel: "Procurement",
    question: "A customer's energy contract has a tight volume tolerance band. What is the pricing implication, and why?",
    options: [
      "A tighter band results in a lower price — the utility can hedge the volume with more standardised exchange products, reducing their internal hedging cost",
      "Tolerance bands have no direct effect on the upfront price — they only affect the financial settlement process after delivery has occurred",
      "A tighter band results in a lower price — less risk is transferred to the portfolio and the utility's imbalance settlement cost decreases proportionally",
      "A tighter band results in a higher price — the utility must hedge the volume more precisely, and prices the additional deviation risk into the Versorgeraufschlag",
    ],
    correctIndex: 3,
    explanation:
      "Tighter tolerance = higher price. The utility must commit to a precise volume and hedge it accordingly — the cost of managing deviation from the forecast volume is priced into the Versorgeraufschlag. Wider bands give the utility more flexibility, which they pass on as a lower price.",
  },

  {
    id: 22,
    category: "procurement",
    categoryLabel: "Procurement",
    question: "Which component of a customer's energy price is a regulated pass-through that neither ecoplanet nor the partner utility can influence?",
    options: [
      "The Versorgeraufschlag — set annually by the Bundesnetzagentur and applied uniformly to all electricity supply contracts in Germany",
      "The PPA-Preis — fixed by European renewable energy regulation for a minimum of 10 years and not subject to commercial negotiation",
      "The Netzkosten — set by the grid operator (Netzbetreiber) and regulated by the BNetzA; a mandatory pass-through that cannot be reduced through procurement strategy",
      "The Marktpreis — determined by the EEX order book and passed through at cost without any utility markup or adjustment",
    ],
    correctIndex: 2,
    explanation:
      "Netzkosten (grid costs) are set by the local grid operator and regulated by the BNetzA. They are a mandatory pass-through — neither ecoplanet nor the utility can negotiate or reduce them. They must be included in any total cost of ownership analysis.",
  },

  {
    id: 23,
    category: "procurement",
    categoryLabel: "Procurement",
    question: "The German Industriestrompreis planned for 2026 targets a specific effective electricity price for eligible companies. What is the target, and what is a key condition?",
    options: [
      "~5 ct/kWh as EU lower bound, capped at 50% of annual consumption — it cannot push prices below 50 €/MWh, and reinvestment into decarbonisation measures is required",
      "~3 ct/kWh covering 100% of consumption, conditional on ISO 50001 certification and a public commitment to carbon neutrality by 2035",
      "~7 ct/kWh covering up to 80% of consumption, applied automatically to all companies above 5 GWh without requiring an application",
      "~10 ct/kWh maximum price guarantee for 60% of consumption, funded through increased grid fees charged to residential customers",
    ],
    correctIndex: 0,
    explanation:
      "Target: ~5 ct/kWh (EU floor). Key conditions: capped at 50% of annual consumption, cannot reduce price below 50 €/MWh, and subsidy requires reinvestment into decarbonisation (PPAs, efficiency, storage). Abwicklung is ex-post — companies must pre-finance and claim later.",
  },

  {
    id: 24,
    category: "procurement",
    categoryLabel: "Procurement",
    question: "What was the approximate average Day-Ahead electricity spot price in Germany in the second half of 2025?",
    options: [
      "~4 ct/kWh — reflecting continued growth in renewable capacity and more frequent periods of excess supply pushing down average prices",
      "~9 ct/kWh — a 30% increase from H1 2025, driven by higher demand, lower wind output, and the full transition to 15-minute trading",
      "~13 ct/kWh — elevated by early winter demand, low European hydro levels, and reduced French nuclear availability",
      "~6 ct/kWh — stabilising after the 2022/23 crisis as LNG infrastructure expanded and gas storage levels normalised",
    ],
    correctIndex: 1,
    explanation:
      "H2 2025 average: ~9.1 ct/kWh — up ~30% from H1 (~6.96 ct/kWh). Key drivers: higher seasonal demand, lower wind output in autumn, and the switch to 15-minute trading amplifying intraday volatility. Individual daily averages ranged from 4.2 to over 21 ct/kWh.",
  },

  {
    id: 25,
    category: "procurement",
    categoryLabel: "Procurement",
    question: "What is the primary business trigger for the ecoplanet Energy Procurement Upsell process?",
    options: [
      "A cold outreach campaign by the SDR team targeting manufacturing companies with expiring fixed-price contracts, run quarterly",
      "A referral from an existing customer who recommends the procurement module to a peer in their industry network",
      "Customer Success identifying an existing customer whose consumption data is already in the product — triggered by contract renewal, data availability, or proactive customer inquiry",
      "An automated platform alert when a customer's energy spend exceeds a threshold, routed directly to the procurement team",
    ],
    correctIndex: 2,
    explanation:
      "The procurement module is primarily a CS-driven Upsell — not cold outbound. CS identifies the opportunity at existing customers: upcoming contract renewal, available Lastgang data, or a customer proactively asking for help with procurement. Walid supports with the analysis.",
  },

  {
    id: 26,
    category: "procurement",
    categoryLabel: "Procurement",
    question: "What does a Lastganganalyse primarily derive from a customer's load profile, and what is it used for?",
    options: [
      "Annual GWh, peak load in MW, base vs. variable consumption split, and PPA suitability — determining the optimal mix of Terminmarktprodukte, spot exposure, and green sourcing",
      "The customer's carbon footprint per MWh, ISO 50006 compliance status, and sector benchmark position — used to build the sustainability business case for procurement investment",
      "Current utility contract terms, remaining duration, and switching costs — used to calculate the ROI of moving to structured procurement",
      "Real-time anomaly data and production scheduling patterns — used to identify load flexibility potential and automate demand-response signals",
    ],
    correctIndex: 0,
    explanation:
      "Lastganganalyse derives: annual GWh (utility eligibility), peak load in MW (tranche sizing), base vs. variable split (Terminmarkt vs. spot allocation), and PPA suitability (renewable energy fit). These four outputs determine the entire procurement strategy.",
  },

  {
    id: 27,
    category: "procurement",
    categoryLabel: "Procurement",
    question: "In a Tranchenplan, why is the annual procurement volume split into multiple tranches with staggered fixation windows?",
    options: [
      "To meet N-Ergie's pool model requirements, which mandate a minimum of 4 tranches per customer to qualify for pooled pricing and credit insurance",
      "To allow the customer to cancel individual tranches if production volume changes, giving flexibility to reduce commitment without breaking the full contract",
      "To comply with EEX exchange rules that prohibit purchasing more than 20% of annual volume in a single transaction for contracts above 2 MW",
      "To achieve a smoothed average purchase price by buying at different market moments — reducing dependency on any single entry point and avoiding unlucky timing",
    ],
    correctIndex: 3,
    explanation:
      "The core logic: by splitting the volume into tranches bought at different times, the customer achieves a weighted average price across multiple market moments. This eliminates the risk of one badly-timed fixation determining the entire annual energy cost.",
  },

  {
    id: 28,
    category: "procurement",
    categoryLabel: "Procurement",
    question: "In the operative Fullservice procurement process, what is the correct sequence after a Kaufsignal arrives at 11:30?",
    options: [
      "Forward the signal to the customer for approval → await written confirmation → call Handelstelefon before 16:00 → enter prices in Retool by end of business",
      "Review the collected email → call Handelstelefon before 14:00 → confirm price verbally → enter prices in Retool before 17:00",
      "Send an offer request by email to the utility → receive quote within 2 hours → approve by return email → enter in Retool by end of next business day",
      "Log into the utility's trading portal → submit a bid at current market price → receive electronic confirmation → update the product automatically via API",
    ],
    correctIndex: 1,
    explanation:
      "Fullservice sequence: collect the 11:30 signal email → (N-Ergie only: forward Tranchenübersicht) → call Handelstelefon before 14:00 → confirm price verbally → receive Fixierungsbestätigung → enter in Retool before 17:00 → auto-email goes to CSM to forward to customer.",
  },

  {
    id: 29,
    category: "procurement",
    categoryLabel: "Procurement",
    question: "When calling a utility's Handelstelefon to execute a Fullservice energy trade, what information must be provided?",
    options: [
      "Company name and customer ID, followed by the annual volume in MWh and the desired maximum price — the trader then offers a binding quote valid for 60 minutes",
      "The Tranchenübersicht reference number, product type, and volume in MWh — the utility confirms automatically if the price is within the day's fixing range",
      "The energy type (Strom/Gas), the product (e.g., 'Jahresprodukt 2027'), and the volume in MW — the utility quotes a price which is checked against the market and confirmed or declined",
      "The customer's account number, the CSM's name as authorisation, and the specific 15-minute delivery periods to hedge with a maximum acceptable price per MWh",
    ],
    correctIndex: 2,
    explanation:
      "Call sequence: state the energy type (Strom/Gas) + product name (e.g., 'Jahresprodukt 2027') + volume in MW (not MWh). Utility quotes a price → check against current market → confirm. They repeat the price. Optionally ask them to confirm the MWh volume too.",
  },

  {
    id: 30,
    category: "procurement",
    categoryLabel: "Procurement",
    question: "What happens if a Selfservice customer does not send the Fixierungsbestätigung after one reminder?",
    options: [
      "The Kaufsignal is automatically re-triggered the next trading day and the process repeats until the customer confirms or formally opts out",
      "The CSM escalates to the contract manager; if no response within 5 business days the tranche is cancelled and the customer moves to advisory-only status",
      "The trade is executed by ecoplanet on the customer's behalf, transitioning them to Fullservice for that tranche without a contract amendment",
      "No second signal is sent — the tranche is closed; to re-trigger the buying signal, the entire tranche must be deleted from the product and recreated",
    ],
    correctIndex: 3,
    explanation:
      "After one reminder: no further signal is sent and the tranche is closed. If the customer later wants to buy, the full tranche must be deleted and recreated in the product from scratch to generate a new Kaufsignal. There is no automatic retry.",
  },

  {
    id: 31,
    category: "procurement",
    categoryLabel: "Procurement",
    question: "For which customer profile is N-Ergie the most suitable utility partner, and what is a key risk in the onboarding process?",
    options: [
      "Electricity customers under 10 GWh — N-Ergie's pool model makes tranche procurement feasible for small volumes, but the credit check is strict (Allianz Trade reinsurance) so weak credit may be rejected",
      "All ecoplanet customers regardless of volume — N-Ergie is the preferred partner for both Strom and Gas across all sizes and credit profiles due to established processes",
      "Gas customers over 8 GWh — N-Ergie specialises in large industrial gas procurement and offers the most competitive gas conditions in the German market",
      "Customers with active PV installations only — N-Ergie's pool model is designed for prosumers combining self-generation with variable grid supply",
    ],
    correctIndex: 0,
    explanation:
      "N-Ergie: best for electricity customers under 10 GWh. The pool model aggregates small customers, making tranche procurement viable. Key risk: strict credit assessment through Allianz Trade reinsurance — customers with weak credit may not qualify.",
  },

  {
    id: 32,
    category: "procurement",
    categoryLabel: "Procurement",
    question: "A new prospect consumes 9 GWh/year (electricity), is in German manufacturing, but has a mediocre credit rating that makes N-Ergie and SachsenEnergie unsuitable. What is the right next step?",
    options: [
      "Decline the prospect — ecoplanet's partner network cannot accommodate customers with below-average credit in the 5–10 GWh range",
      "Approach enercity — their credit assessment via Creditreform (Crefo) is significantly more flexible, and 9 GWh fits within their target range for electricity customers",
      "Approach Stadtwerke Herne first — they offer the best conditions for mid-sized customers with non-standard credit and have a structured pool model similar to N-Ergie",
      "Approach Flexpower — they specialise in mid-market electricity customers with credit challenges and can structure supply around a PPA volume",
    ],
    correctIndex: 1,
    explanation:
      "enercity is the right fallback here. N-Ergie and SachsenEnergie both use strict credit processes (Allianz Trade / own insurance). enercity uses Creditreform (Crefo), which is more flexible. 9 GWh is within their target range for electricity. Stadtwerke Herne is the last resort (operationally weak). Flexpower handles PPAs only.",
  },
];
