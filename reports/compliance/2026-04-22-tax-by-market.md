# FMS Tax Responsibility by Market

> Reference doc for Van and the team. Updated as FMS expands into new markets. Not legal advice — confirm thresholds with local accountant before going live.

---

## How to Read This Doc

Each market entry covers:
- **Tax type & rate** — what it's called, what % it is
- **Trigger threshold** — when FMS is legally required to collect and remit
- **FMS status** — current obligation level
- **Pricing behavior** — how to display prices (inclusive vs. exclusive)
- **Payment processing** — Stripe fee impact on net revenue

---

## 🇵🇭 Philippines (Home Market)

| Field | Detail |
|-------|--------|
| Tax Type | VAT (Value Added Tax) |
| Rate | 12% |
| Threshold | PHP 3,000,000 gross annual sales |
| FMS Status | ✅ Active — VAT registered |
| Pricing | VAT-inclusive (baked into displayed price) |
| Stripe Fee | 3.9% + $0.30 (international card rate) |

**Notes:** Standard VAT applies to digital goods and services. FMS invoices must reflect VAT component.

---

## 🇺🇸 United States — Illinois / Chicago

| Field | Detail |
|-------|--------|
| Tax Type | Sales Tax |
| Rate | 10.25% (Chicago combined: state 6.25% + Cook County 1.75% + city 1.25% + special 1%) |
| Threshold | $100,000 gross revenue OR 200+ transactions from Illinois buyers in 12 months |
| FMS Status | ⚠️ Pre-threshold — no obligation yet |
| Pricing | Tax added on top at checkout (US standard) |
| Stripe Fee | 2.9% + $0.30 per transaction |

**Notes:**
- Once threshold is crossed, register with Illinois Dept of Revenue and enable Stripe Tax
- Digital photo downloads are taxable as "photo processing" (general merchandise)
- Revenue split applies to net revenue after Stripe fee. Sales tax is fully passed through to government — not included in split calculation.

**Revenue model example (1 event, $16,417.68 gross):**
- Sales tax collected (10.25%): $1,682.81 → remitted to Illinois
- Stripe fee: $619.51 → deducted before split
- Net for splitting: $15,798.17
- Photographer 45%: $7,109.18 | Organizer 20%: $3,159.63 | FMS 20%: $3,159.63 | CAN 15%: $2,369.73

---

## 🇸🇬 Singapore

| Field | Detail |
|-------|--------|
| Tax Type | GST (Goods & Services Tax) |
| Rate | 9% |
| Threshold | SGD 100,000 in Singapore sales AND global annual turnover ≥ SGD 1,000,000 |
| FMS Status | ⚠️ Pre-threshold — no obligation yet |
| Pricing | GST-inclusive by law (baked into displayed price) |
| Stripe Fee | 2.9% + $0.30 per transaction (SGD) |

**Notes:**
- Singapore's Overseas Vendor Registration (OVR) regime applies to digital services sold to Singapore consumers
- Once threshold is crossed, must register for GST with IRAS (Inland Revenue Authority of Singapore)
- Pricing must show GST-inclusive prices; GST is extracted from revenue at 9/109 ratio
- Revenue split applies to net revenue after Stripe fee. GST extracted separately before distribution.

**Negotiation script for pre-threshold clients:**
> "We haven't crossed the SGD 1M global revenue threshold yet, so we're not currently GST-registered. Prices shown are final — no GST on top. Once we cross that threshold, pricing will be adjusted to reflect GST and we'll give you advance notice. Payment processing fees (Stripe: 2.9% + $0.30/transaction) are deducted from gross revenue before the revenue share calculation."

---

## 🇲🇾 Malaysia (SEA Expansion — Q3 2026)

| Field | Detail |
|-------|--------|
| Tax Type | SST (Sales and Service Tax) |
| Rate | 8% on digital services |
| Threshold | MYR 500,000 annual revenue from Malaysian customers |
| FMS Status | 🔍 Pre-expansion — monitoring |
| Pricing | TBD — confirm with local accountant |
| Stripe Fee | 2.9% + $0.30 per transaction |

**Notes:** Malaysia's Digital Services Tax (DST) applies to foreign digital service providers. Research needed before Q3 2026 go-live.

---

## 🇹🇭 Thailand (SEA Expansion — Q3 2026)

| Field | Detail |
|-------|--------|
| Tax Type | VAT |
| Rate | 7% |
| Threshold | THB 1,800,000 annual revenue from Thai customers |
| FMS Status | 🔍 Pre-expansion — monitoring |
| Pricing | TBD — confirm with local accountant |
| Stripe Fee | 2.9% + $0.30 per transaction |

**Notes:** Thailand VAT on e-services from foreign providers applies via the Electronic Service VAT regime (since 2021). Research needed before Q3 2026 go-live.

---

## General Rules (Applies Everywhere)

1. **Stripe fee always deducted before revenue split** — splits apply to net, not gross
2. **Sales/GST/VAT is pass-through** — collected from buyer, remitted to government, never part of the revenue split
3. **Pre-threshold = no obligation** — but track revenue approaching thresholds and flag when within 20% of limit
4. **Always notify partners in advance** — before any tax-driven pricing change, give at least 30 days notice

---

*Last updated: 2026-04-22 | Maintained by Paw 🐾*
