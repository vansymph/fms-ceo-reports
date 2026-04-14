# US Sales Tax & Tax Obligations for FindMyShots
**Research Date:** April 14, 2026  
**Prepared by:** Paw 🐾  
**Context:** FMS is a Philippines-incorporated company selling digital photo downloads to US runners via findmyshots.com, processed through Stripe. Target markets: Illinois (Chicago), California (San Francisco), Massachusetts (Boston). Price points: $9.99/photo, $19.99/bundle.

> ⚠️ **Disclaimer:** This is research-level intelligence, not legal advice. Before making compliance decisions, consult a US tax attorney or CPA with international business experience.

---

## 1. State-by-State Digital Goods Tax Table

| State | Digital Downloads Taxable? | State Tax Rate | Economic Nexus Threshold | Notes |
|---|---|---|---|---|
| **Illinois** | ✅ **YES** | 6.25% state + local rates (destination-based for remote sellers) | $100,000 in annual sales | Digital goods explicitly taxed since 2021. Remote sellers use destination sourcing. |
| **California** | ❌ **NO** | N/A (not taxable) | $500,000 in annual sales | No transfer of tangible personal property = not taxable. One of the most favorable states for FMS. |
| **Massachusetts** | ✅ **YES** | 6.25% flat statewide | $100,000 in annual sales | Digital products (including downloadable photos) are taxable in MA. Simple flat rate, no local additions. |

### What Is "Economic Nexus"?
Economic nexus means a state can require you to collect sales tax **purely based on your sales volume** in that state — even if you have zero physical presence there. This applies to foreign companies equally. If FMS sells $100,000+ to Illinois customers in a year, they must register and collect sales tax in Illinois — regardless of being based in the Philippines.

### Revenue Context for FMS
At $9.99/photo and $19.99/bundle, FMS would need roughly:
- **Illinois:** ~10,000+ photo purchases OR ~5,000+ bundles from Chicago runners to hit the $100,000 threshold
- **California:** ~50,000+ photo purchases from CA runners to hit the $500,000 threshold (very high bar)
- **Massachusetts:** ~10,000+ photo purchases from Boston runners to hit the $100,000 threshold

**Near-term reality:** FMS is very unlikely to hit these thresholds in year 1-2 in any single state. But you should monitor it and have a plan ready.

---

## 2. Foreign Company Obligations

### Does a Philippines Company Need to Collect US Sales Tax?
**Yes — if you exceed economic nexus thresholds in a state.**  
Economic nexus laws (post-*South Dakota v. Wayfair*, 2018) apply to **all sellers**, foreign or domestic. There is no "but we're overseas" exemption. If FMS hits $100,000 in Illinois sales, Illinois wants its 6.25%.

### Do They Need a US Entity (LLC/Corp) to Sell Legally?
**No — not strictly required to sell digitally.** A foreign company can sell digital products to US consumers without forming a US LLC. However:
- A US LLC (Wyoming or Delaware are common choices) simplifies banking, Stripe onboarding, tax registration, and contracts
- Without a US entity, registering for sales tax permits as a foreign entity is more complex — you'll need a US Tax ID (EIN) via IRS Form SS-4
- For the actual *collection* of sales tax, you register with each state's tax authority — no US entity strictly required

**Recommendation:** Form a US LLC eventually (especially once US revenue gets meaningful), but it's not a blocker to start operating.

### Marketplace Facilitator Rule — Does Stripe Handle It?
**No — Stripe is a payment processor, not a marketplace facilitator.**  
Marketplace facilitator laws (which exist in every US state with sales tax) require *marketplaces* like Amazon, Etsy, or eBay to collect and remit tax on behalf of third-party sellers. Stripe processes payments but does not take on tax liability as a marketplace facilitator.

**FMS's situation:** FMS runs its own platform (findmyshots.com). FMS is the seller of record. FMS is responsible for collecting and remitting sales tax — Stripe just moves the money. However, Stripe Tax (see Section 3) can automate the calculation and collection piece.

---

## 3. Stripe Tax — Capability Summary

### What Is Stripe Tax?
Stripe Tax is Stripe's built-in tax compliance tool that automates calculation, collection, and reporting of sales tax, VAT, and GST on transactions processed through Stripe.

### Key Capabilities
| Feature | Details |
|---|---|
| **Tax Calculation** | Real-time calculation based on buyer location, product type, and tax rules. Covers 100+ countries and 600+ product categories. |
| **US Coverage** | Full support for all 50 US states + DC + territories. Handles state, county, city, and district tax rates. |
| **Digital Goods Support** | Full support — FMS can assign product tax codes for "digital downloads" and Stripe calculates the correct rate per state. |
| **Philippines Business** | ✅ Supported for **remote sales of digital products** (Philippines listed as eligible for remote sellers). |
| **Threshold Monitoring** | Stripe monitors your transaction volumes and alerts you when you're approaching economic nexus thresholds in each state. |
| **Tax Registration** | Stripe can register on your behalf with state tax authorities — huge time saver. |
| **Collection** | Tax is added to checkout and collected from the buyer automatically. |
| **Remittance/Filing** | Stripe Tax itself does NOT remit — but it integrates with filing partners (Taxually, Marosa, HOST) who automate filing and payment to each state on your behalf. |

### What Stripe Tax Does NOT Do
- It does not automatically remit tax to the state — that requires either a filing partner (extra cost) or you filing manually
- It cannot file returns itself — but its reporting makes manual filing straightforward

### Pricing
Stripe Tax pricing: **0.5% per transaction** where tax is calculated (no flat monthly fee for the calculation layer). Filing via partners is a separate cost (typically $20–$100/month per state depending on volume and partner).

### How FMS Would Set It Up
1. Enable Stripe Tax in the Stripe Dashboard (one click)
2. Assign the "digital download / electronically transferred photo" product tax code to FMS products
3. Register for a sales tax permit in Illinois and Massachusetts (when thresholds are approaching) — Stripe can do this for you
4. Add those registrations to Stripe Tax so it knows to collect tax in those states
5. Use a filing partner (e.g., Taxually) to automate remittance
6. California: No action needed (digital downloads not taxable)

**Bottom line:** Stripe Tax is the right tool for FMS. It handles the complexity of multi-state US digital goods taxation automatically.

---

## 4. Photographer & Organizer Payouts — Tax Implications

### 1099 Reporting Obligations

**When FMS pays US-based photographers or race organizers, does it need to issue 1099s?**

Yes — with important nuances:

#### 1099-NEC (Non-Employee Compensation)
- **Threshold:** $600+ paid to a US contractor/individual in a calendar year
- **When it applies:** If FMS pays a US-based photographer for their photos, licensing fees, or services totaling $600+ in a year
- **FMS's obligation as a foreign entity:** Even as a Philippines company, if you pay US persons for services, you generally have a 1099-NEC obligation
- **Action:** Collect a **W-9 form** from each US-based photographer before paying them. The W-9 confirms their Tax ID and that they're a US person.

#### 1099-K (Payment Card / Third-Party Network Transactions)
- This applies to payment platforms (like Stripe) that process payments — not to FMS directly
- Stripe will issue 1099-Ks to US photographers who receive payments through Stripe if they exceed the threshold
- **Current threshold (2025–2026):** The IRS has been phasing this in — $5,000 for 2024, $2,500 for 2025, $600 for 2026 and beyond
- **FMS's obligation:** If payouts to photographers are processed through Stripe Connect, Stripe handles the 1099-K for the photographer. FMS doesn't need to issue a separate 1099-K.

### Withholding Obligations for US Contractors
- **US persons (W-9 on file):** No withholding required. Pay gross, let them handle their own taxes.
- **Foreign persons (W-8BEN on file):** May need to withhold 30% of payments unless a tax treaty applies. Philippines has a tax treaty with the US — this may reduce or eliminate withholding requirements, but needs verification with a tax professional.
- **No form on file:** Default 24% backup withholding required.

### Practical Steps for Photographer Payouts
1. **Collect W-9** from every US photographer before first payout
2. **Issue 1099-NEC** to any US photographer paid $600+ in the calendar year (by January 31 of the following year)
3. **Use Stripe Connect** for payouts — Stripe will handle 1099-K compliance for photographers
4. **For foreign photographers:** Collect W-8BEN; consult on treaty rates

---

## 5. Recommended Action Plan for FMS

### Phase 1: Pre-Launch (Do Now)
| Action | Priority | Notes |
|---|---|---|
| Enable Stripe Tax in Stripe Dashboard | 🔴 High | One-click setup. Assign digital download tax codes to products. |
| Assign correct product tax codes | 🔴 High | Use "electronically transferred photograph" or equivalent PTC in Stripe Tax |
| Set up threshold monitoring in Stripe | 🔴 High | Stripe will alert when approaching nexus in each state |
| Create W-9 collection process for photographers | 🔴 High | Required before paying any US photographer |

### Phase 2: When Approaching Nexus Thresholds
| Action | Trigger | Notes |
|---|---|---|
| Register for Illinois sales tax permit | ~$75K IL sales | Stripe can do this for you. Then add to Stripe Tax. |
| Register for Massachusetts sales tax permit | ~$75K MA sales | Same process. Flat 6.25%, easy state to comply with. |
| California | No action needed | Digital downloads not taxable in CA |
| Sign up for Stripe Tax filing partner | Same time as registration | Taxually or HOST — automates monthly/quarterly remittance |

### Phase 3: As US Revenue Scales
| Action | Trigger | Notes |
|---|---|---|
| Form a US LLC (Wyoming or Delaware) | ~$50K–$100K annual US revenue | Simplifies banking, tax registration, contracts |
| Get a US EIN from the IRS | With LLC formation | Required for 1099 issuance and tax registration |
| Hire a US tax CPA | ~$200K annual US revenue | Ongoing compliance oversight, treaty optimization |
| Review 1099-NEC obligations annually | Every January | Issue to all US photographers paid $600+ in prior year |

### Can Stripe Tax Automate Everything?
**Mostly yes, for the collection and calculation side.** Here's the breakdown:
- ✅ Tax calculation: Fully automated via Stripe Tax
- ✅ Tax collection from buyers: Fully automated
- ✅ Threshold monitoring: Automated with alerts
- ✅ Filing reports: Automated (exportable)
- ⚠️ Tax registration: Stripe can do it for you (for a fee), but you still initiate
- ⚠️ Tax remittance/filing: Requires a filing partner (extra cost) or manual filing

**The gap:** Stripe Tax does NOT automatically pay the tax to each state. You need a filing partner like Taxually (~$20–$100/month per state) or you file manually. For early stage (under threshold in most states), this isn't needed. Once you hit nexus in IL and MA, get Taxually.

---

## Summary: The Simplest Compliant Path for FMS

1. **Enable Stripe Tax now** with digital download product tax codes → handles IL and MA tax collection automatically once registered
2. **Don't worry about California** — digital downloads are not taxable there
3. **Monitor thresholds** — you're unlikely to hit $100K in IL or MA in year 1, but Stripe will alert you when you're close
4. **Collect W-9s from all US photographers** before paying them; issue 1099-NECs annually
5. **Register for IL and MA permits** when approaching thresholds; add to Stripe Tax; sign up for a filing partner
6. **Form a US LLC when US revenue justifies it** (not a blocker to start)

**The worst-case tax exposure at current price points:** Even if FMS somehow sold to 10,000 Illinois runners before registering (unlikely), the sales tax owed would be ~$62,500 (6.25% × $100K). That's real money, but manageable. Start clean, monitor early.

---

## Sources
- Stripe Tax: stripe.com/tax + docs.stripe.com/tax/supported-countries
- TaxJar State Guides: taxjar.com/sales-tax/illinois, /california, /massachusetts
- Stripe Docs: docs.stripe.com/tax/supported-countries/united-states (marketplace facilitator, nexus monitoring)
- IRS 1099-K: IRS phased threshold rules (2024: $5K, 2025: $2.5K, 2026: $600)
- South Dakota v. Wayfair (2018): Supreme Court case establishing economic nexus for remote sellers
