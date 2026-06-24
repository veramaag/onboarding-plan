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

  // ── ECOPLANET & COMPANY (8 questions) ────────────────────────────────────────

  {
    id: 1,
    category: "company",
    categoryLabel: "Ecoplanet",
    question: "ecoplanet calls itself 'energy integration software' — a new category. What does this mean in practice?",
    options: [
      "It consolidates energy billing data from multiple utilities into one dashboard and generates monthly cost reports for finance teams",
      "It connects energy market signals directly to operational decisions, continuously optimising consumption, procurement, and costs based on live market data",
      "It automates ISO 50001 audit documentation by capturing meter readings and linking them to energy policy targets for certification bodies",
      "It acts as an energy broker, negotiating bulk contracts with utilities on behalf of a pool of manufacturing companies to reduce unit costs",
    ],
    correctIndex: 1,
    explanation:
      "Energy integration software means the platform connects energy markets to core business processes and runs continuously — making daily, market-responsive decisions. This is distinct from reporting tools, audit software, or brokerage services.",
  },

  {
    id: 2,
    category: "company",
    categoryLabel: "Ecoplanet",
    question: "ecoplanet was built to fill a specific market gap. Which gap does it address?",
    options: [
      "The absence of a digital platform for utilities to manage their pool of B2B industrial customers in a single interface",
      "The lack of standardised ISO 50001 audit software that works across all German manufacturing sub-sectors",
      "The difficulty for mid-market manufacturers to find certified energy consultants willing to work on project-based pricing",
      "The gap between static annual energy procurement strategies and volatile energy markets that create daily optimisation opportunities",
    ],
    correctIndex: 3,
    explanation:
      "ecoplanet was built because most companies buy energy once a year (static) while markets move daily. Energy integration software bridges that gap — connecting live market conditions to operational decisions, rather than locking customers into an annual fixed strategy.",
  },

  {
    id: 3,
    category: "company",
    categoryLabel: "Ecoplanet",
    question: "Why can't existing energy management tools (basic EMS software, Excel, consultants) solve the same problem as ecoplanet?",
    options: [
      "They require ISO 27001 certification to connect to industrial SCADA systems, which most software providers cannot obtain",
      "They are limited to electricity and cannot handle the combined optimisation of electricity, gas, and heat in one integrated system",
      "They focus on historical reporting and static annual strategies — ecoplanet operates continuously, making market-responsive decisions in real time",
      "They only work for large industrial customers above 50 GWh, leaving the entire mid-market segment without suitable software options",
    ],
    correctIndex: 2,
    explanation:
      "Traditional tools report on what happened (historical data, annual reviews). ecoplanet operates in real time — monitoring markets, surfacing anomalies, and enabling procurement decisions continuously. The difference is static vs. dynamic, reactive vs. proactive.",
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
    question: "The German Energy Efficiency Act (EnEfG) is currently under revision. What threshold is proposed as the new mandatory level for implementing a certified Energy Management System?",
    options: [
      "2 GWh/year — lowered from the previous threshold to capture a broader range of industrial energy users",
      "5 GWh/year — aligned with ecoplanet's ICP entry criterion to create a clear regulatory overlap",
      "7.5 GWh/year — the existing threshold, which the revision proposes to retain without change",
      "23.6 GWh/year — proposed to be raised from 7.5 GWh to reduce administrative burden on smaller companies",
    ],
    correctIndex: 3,
    explanation:
      "The EnEfG revision proposes raising the mandatory EMS threshold from 7.5 GWh to 23.6 GWh (the EU EED minimum). Goal: reduce bureaucratic burden. The decision is still moving through the legislative process as of mid-2026.",
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
      "Because ecoplanet is not a licensed energy supplier, it partners with utilities (N-Ergie, enercity, etc.) who supply the energy. ecoplanet manages strategy, analysis, and trade execution on the customer's behalf, earning through the partnership arrangement.",
  },

  {
    id: 7,
    category: "company",
    categoryLabel: "Ecoplanet",
    question: "What specifically does ecoplanet's product give a Part-time Energy Manager that manual processes cannot?",
    options: [
      "Continuous monitoring and automated alerts that remove the need for daily manual data collection — the platform runs autonomously and flags issues before they escalate",
      "A compliance-certified audit trail that automatically satisfies ISO 50006 documentation requirements without any manual input from the energy manager",
      "A direct connection to the customer's utility account manager, who proactively notifies the energy manager whenever a better tariff becomes available",
      "A built-in procurement algorithm that automatically executes energy trades at pre-set price thresholds without requiring human confirmation for each trade",
    ],
    correctIndex: 0,
    explanation:
      "The Part-time Energy Manager's core pain is manual data work — copying meter readings, building reports, catching issues after the fact. ecoplanet removes that by running 24/7, alerting automatically, and making compliance-ready data available without manual effort.",
  },

  {
    id: 8,
    category: "company",
    categoryLabel: "Ecoplanet",
    question: "Which ecoplanet product module is most directly relevant to Walid's day-to-day role as Value Engineer Procurement?",
    options: [
      "The anomaly detection module, which surfaces consumption irregularities that the energy manager investigates and reports to production teams",
      "The ISO 50006 reporting module, which generates energy baseline documentation for certification audits automatically",
      "The Energy Procurement module — handling structured procurement strategies, Lastganganalyse, and Terminmarktbeschaffung for customers",
      "The sustainability dashboard, which tracks Scope 2 emissions and links them to the customer's decarbonisation targets",
    ],
    correctIndex: 2,
    explanation:
      "Walid's role is Value Engineer Procurement — his core work is the Energy Procurement module: analysing customer load profiles (Lastganganalyse), building Tranchenpläne, executing Terminmarktbeschaffung, and managing partner utility relationships.",
  },

  // ── GTM & PRODUCT (8 questions) ──────────────────────────────────────────────

  {
    id: 9,
    category: "gtm",
    categoryLabel: "GTM & Product",
    question: "Which of the following best describes ecoplanet's Ideal Customer Profile (ICP)?",
    options: [
      "German retail and logistics companies with 1,000+ employees, a dedicated sustainability team, and active EU ETS participation",
      "Any European industrial company with annual energy costs over €1M, regardless of volume, company size, or location",
      "German manufacturing companies with 5+ GWh/year consumption, 50–500 employees, ISO 50001 certified or in progress, with no adequate EMS in place",
      "German SMBs with installed solar or wind assets seeking to optimise self-consumption and sell surplus energy back to the grid",
    ],
    correctIndex: 2,
    explanation:
      "ICP: German manufacturing, 5+ GWh/year, 50–500 employees (mid-market), ISO 50001 certified or in progress. The ~15,000 matching companies in Germany are the core target — not all energy-intensive companies or renewable asset owners.",
  },

  {
    id: 10,
    category: "gtm",
    categoryLabel: "GTM & Product",
    question: "What is the key difference between a Part-Time and a Full-Time Energy Manager as ecoplanet Champion profiles?",
    options: [
      "Part-time managers are overwhelmed by manual data work and fear compliance failures; full-time managers have plateaued savings and struggle to prove ROI to leadership — requiring a different pitch for each",
      "Part-time managers only exist at companies under 100 employees; full-time managers are exclusively found at companies with 500+ employees and long-standing ISO 50001 certification",
      "Part-time managers are harder to win because they lack authority to approve software budgets; full-time managers have direct budget approval and can close deals without further sign-off",
      "The distinction is no longer relevant — most companies now have a hybrid role combining energy compliance and procurement, regardless of time allocation",
    ],
    correctIndex: 0,
    explanation:
      "The key difference is core pain: Part-time managers drown in manual data work and fear audit failures. Full-time managers have deep expertise but hit a savings plateau and need insights manual analysis can't surface. Both are Champions but require completely different conversations.",
  },

  {
    id: 11,
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
      "Lead / Outreach → Discovery → Demo → Solution Evaluation → Offer Sent → Closing. Discovery always precedes Demo — running a demo without confirmed pain and urgency is wasted effort and advances nothing.",
  },

  {
    id: 12,
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
      "U = Urgency & Solution Fit: Is there real urgency (compelling event, cost of inaction)? And can ecoplanet actually solve this customer's specific pain? Both must be true before investing in a Demo.",
  },

  {
    id: 13,
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
      "Demo goal: validate that ecoplanet solves the Champion's specific pain and secure their buy-in. Only then does it make sense to expand the conversation to the buying center and decision-makers in Solution Evaluation.",
  },

  {
    id: 15,
    category: "gtm",
    categoryLabel: "GTM & Product",
    question: "What does 'M' stand for in CUSTOM, and when does it typically become the focus?",
    options: [
      "Market Positioning — establishing how ecoplanet compares to alternatives being evaluated; addressed in Discovery to neutralise competition early",
      "Management Alignment — confirming senior leadership supports the initiative; typically resolved at Solution Evaluation before the offer is sent",
      "Measurable Outcomes — quantifying the exact savings amount expected by the customer, locked in during Discovery to set expectations before the Demo",
      "Mutual Action Plan — the agreed path to a decision with clear next steps from both sides; becomes critical in later stages to prevent deals from stalling",
    ],
    correctIndex: 3,
    explanation:
      "M = Mutual Action Plan: the agreed path to a decision — who does what and by when. Without it, deals stall after demos and solution evaluation meetings. It accumulates across calls and becomes especially critical in the later stages of the process.",
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
      "Spotmarktbeschaffung — the Day-Ahead market is historically cheapest and ecoplanet's software can shift load to low-price periods",
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
      "The merit order — generators offer capacity from cheapest to most expensive, and the price is set by the most expensive generator needed to cover demand",
      "A bilateral auction between the 10 largest utilities and industrial consumers, where the clearing price is the volume-weighted average of all bids",
      "A regulatory price cap set by the Bundesnetzagentur based on the rolling 90-day average wholesale price, adjusted quarterly",
      "Direct negotiation between large industrial consumers and renewable generators, published as an average of all concluded bilateral contracts",
    ],
    correctIndex: 0,
    explanation:
      "The merit order sets the price: generators offer capacity in order of cost (cheapest first), and the price is set by the most expensive generator needed to balance supply and demand. Gas plants often sit at the margin — which is why gas prices indirectly affect electricity costs.",
  },

  {
    id: 19,
    category: "procurement",
    categoryLabel: "Procurement",
    question: "What structural change was introduced to the German Day-Ahead electricity market in October 2025, and what is its key consequence?",
    options: [
      "Germany introduced a carbon price floor of €45/MWh for gas-fired plants, raising the minimum electricity price and reducing market volatility",
      "The EPEX SPOT exchange merged with Nord Pool, creating a unified European Day-Ahead market with standardised prices across all member states",
      "Trading switched from hourly to 15-minute intervals, making prices more granular and volatile — consumption and generation can now be matched with greater precision",
      "Large industrial consumers gained direct wholesale market access, bypassing utilities entirely and removing the Versorgeraufschlag from their bills",
    ],
    correctIndex: 2,
    explanation:
      "October 2025: German Day-Ahead switched from hourly to 15-minute trading intervals (EPEX SPOT reform). Prices are more transparent and precise, but also more volatile — both a risk and an opportunity for customers on spot-exposed contracts.",
  },

  {
    id: 20,
    category: "procurement",
    categoryLabel: "Procurement",
    question: "What are the four building blocks of ecoplanet's structured procurement approach?",
    options: [
      "Festpreis, Spot, Hedge-Fonds-Produkte, and Eigenerzeugung — covering fixed, variable, financial, and self-generation exposure",
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
      "A tighter band results in a lower price — the utility can hedge the volume with more standardised exchange products, reducing internal hedging cost",
      "Tolerance bands have no direct effect on upfront price — they only affect the financial settlement process after delivery has occurred",
      "A tighter band results in a lower price — less risk is transferred to the portfolio and the utility's imbalance settlement cost decreases proportionally",
      "A tighter band results in a higher price — the utility must hedge the volume more precisely, pricing the additional deviation risk into the Versorgeraufschlag",
    ],
    correctIndex: 3,
    explanation:
      "Tighter tolerance = higher price. The utility commits to a precise volume and must hedge it accordingly — the cost of managing deviation from the forecast is priced into the Versorgeraufschlag. Wider bands give the utility more flexibility, passed on as a lower price.",
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
      "Netzkosten are set by the local grid operator and regulated by the BNetzA. They are a mandatory pass-through — neither ecoplanet nor the utility can negotiate or reduce them. They must be included in any total cost of ownership analysis.",
  },

  {
    id: 23,
    category: "procurement",
    categoryLabel: "Procurement",
    question: "The German Industriestrompreis planned for 2026 targets a specific effective electricity price for eligible companies. What is the target, and what is a key condition?",
    options: [
      "~5 ct/kWh as EU lower bound, capped at 50% of annual consumption — cannot push prices below 50 €/MWh, and reinvestment into decarbonisation measures is required",
      "~3 ct/kWh covering 100% of consumption, conditional on ISO 50001 certification and a public commitment to carbon neutrality by 2035",
      "~7 ct/kWh covering up to 80% of consumption, applied automatically to all companies above 5 GWh without requiring a formal application",
      "~10 ct/kWh maximum price guarantee for 60% of consumption, funded through increased grid fees charged to residential customers",
    ],
    correctIndex: 0,
    explanation:
      "Target: ~5 ct/kWh (EU floor). Key conditions: capped at 50% of annual consumption, cannot reduce price below 50 €/MWh, and requires reinvestment into decarbonisation (PPAs, efficiency, storage). Abwicklung is ex-post — companies must pre-finance and claim later.",
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
      "Customer Success identifying an existing customer whose consumption data is already in the product — triggered by contract renewal, data availability, or customer inquiry",
      "An automated platform alert when a customer's energy spend exceeds a threshold, routed directly to the procurement team queue",
    ],
    correctIndex: 2,
    explanation:
      "The procurement module is primarily a CS-driven Upsell — not cold outbound. CS identifies the opportunity at existing customers: upcoming contract renewal, available Lastgang data, or a proactive customer inquiry. Walid supports with analysis.",
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
      "Lastganganalyse derives: annual GWh (utility eligibility), peak load in MW (tranche sizing), base vs. variable split (Terminmarkt vs. spot allocation), and PPA suitability. These four outputs determine the entire procurement strategy.",
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
      "Core logic: by splitting the volume into tranches bought at different times, the customer achieves a weighted average price across multiple market moments. This eliminates the risk of one badly-timed fixation determining the entire annual energy cost.",
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
      "Fullservice sequence: collect the 11:30 signal email → (N-Ergie only: forward Tranchenübersicht) → call Handelstelefon before 14:00 → confirm price verbally → receive Fixierungsbestätigung → enter in Retool before 17:00 → auto-email to CSM to forward to customer.",
  },

  {
    id: 29,
    category: "procurement",
    categoryLabel: "Procurement",
    question: "When calling a utility's Handelstelefon to execute a Fullservice energy trade, what information must be provided?",
    options: [
      "Company name and customer ID, followed by annual volume in MWh and desired maximum price — the trader offers a binding quote valid for 60 minutes",
      "The Tranchenübersicht reference number, product type, and volume in MWh — the utility confirms automatically if price is within the day's fixing range",
      "The energy type (Strom/Gas), the product (e.g. 'Jahresprodukt 2027'), and the volume in MW — the utility quotes a price which is checked and confirmed or declined",
      "The customer's account number and the CSM's name as authorisation, followed by specific 15-minute delivery periods and a maximum acceptable price per MWh",
    ],
    correctIndex: 2,
    explanation:
      "Call sequence: energy type (Strom/Gas) + product name (e.g. 'Jahresprodukt 2027') + volume in MW (not MWh). Utility quotes a price → check against current market → confirm. They repeat the price. Optionally ask them to confirm the MWh volume too.",
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
      "No second signal is sent — the tranche is closed; to re-trigger the buying signal, the entire tranche must be deleted and recreated in the product",
    ],
    correctIndex: 3,
    explanation:
      "After one reminder: no further signal is sent and the tranche is closed. If the customer later wants to buy, the full tranche must be deleted and recreated from scratch to generate a new Kaufsignal. There is no automatic retry.",
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
      "Approach Stadtwerke Herne first — they offer the best conditions for mid-sized customers with non-standard credit and a structured pool model similar to N-Ergie",
      "Approach Flexpower — they specialise in mid-market electricity customers with credit challenges and structure supply around a PPA volume",
    ],
    correctIndex: 1,
    explanation:
      "enercity is the right fallback. N-Ergie and SachsenEnergie both use strict credit processes. enercity uses Creditreform (Crefo), which is more flexible. 9 GWh is within their electricity range. Stadtwerke Herne is the last resort (operationally weak). Flexpower handles PPAs only.",
  },
];
