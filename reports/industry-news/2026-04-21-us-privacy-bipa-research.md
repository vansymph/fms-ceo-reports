# US Privacy Law Research — Selling Race Photos via FindMyShots
**Date:** 2026-04-21
**Context:** FMS exploring partnerships with 3 Chicago-based race organizers

---

## Direct Answer
Selling race photos in the US is generally legal without individual model releases, because race participants sign event waivers that cover photography. **The major risk is face recognition** — if FMS uses facial data to identify/tag participants, Illinois BIPA applies and requires explicit written consent before any face geometry is processed.

---

## 1. Race Waivers = Foundation
When participants register for a race, they sign a waiver that almost universally includes a photo/likeness release. This grants the event organizer (and official photo partners) the right to photograph and sell images of participants. No individual model release needed. This is the industry standard — Marathonfoto, FinisherPix, Sportograf all operate on this basis.

**Action:** FMS contracts with organizers must explicitly include language that photo rights transfer to FMS as official photographer.

---

## 2. Right of Publicity (All 50 States)
The US recognizes a "right of publicity" — people control commercial use of their likeness. Exception: newsworthy/editorial use and event documentation where consent was given (the waiver). Selling a participant their own race photo = clearly fine. Using their face in FMS *marketing ads* without explicit consent = legal risk.

**Action:** Never use a participant's face in paid ads or promotional materials without a separate explicit consent.

---

## 3. Illinois BIPA — Critical for Chicago 🚨

### What it is
Illinois Biometric Information Privacy Act (BIPA, 740 ILCS 14), signed 2008. Most stringent biometric law in the US.

### What it requires
- Written informed consent **before** collecting biometric identifiers
- Secure storage and timely destruction of biometric data
- Cannot profit from biometric data without consent
- Private right of action — individuals can sue directly

### Damages
- $1,000 per negligent violation
- $5,000 per intentional/reckless violation
- Class actions are common

### 2024 Amendment (confirmed retroactive April 2026)
The 7th Circuit ruled the 2024 BIPA amendment (limiting damages to per-person, not per-scan) applies retroactively. This reduces worst-case exposure but the law remains fully in force.

### Key nuance for FMS
BIPA explicitly excludes *photographs* from the definition of biometric identifiers. But **facial geometry derived from photographs** (what FMS's face recognition engine does) IS covered.

### Settlement precedents
- Facebook: $550M
- Google/YouTube: $6M–$30M
- NCS Pearson (palm scan): pending

---

## 4. Texas & Washington
Similar biometric consent requirements. Texas: AG enforcement only (no private lawsuits). Washington: My Health My Data Act covers biometric data. Lower litigation risk than Illinois but still compliance required.

---

## 5. California CCPA/CPRA
CCPA treats facial recognition data as "sensitive personal information." California residents have rights to:
- Know their biometric data is being collected
- Opt out of its sale
- Delete it on request

FMS processing face data to find photos triggers CCPA disclosure requirements for California residents.

---

## 6. 2026 US State Privacy Landscape
As of Jan 1, 2026: 20 states have comprehensive privacy laws (Indiana, Kentucky, Rhode Island newly added). No federal law (ADPPA/APRA both stalled). Trend is clear — every state is moving toward biometric consent requirements.

---

## Chicago-Specific Guidance

### Safest operating model for Chicago events:
1. **Bib search** — zero BIPA exposure, no biometric data involved
2. **Face search, athlete-initiated (selfie upload)** — athlete initiates = implied consent, defensible
3. **Passive face tagging (FMS auto-scans all photos)** — BIPA exposure without registration-level consent

### What to ask organizers:
> "Can you add a biometric consent opt-in checkbox to your registration form?"

If yes → full face search available to opted-in participants only, clearly BIPA-compliant.

### Sample consent language to propose:
> "I consent to FindMyShots processing facial geometry data from my race photos to help me find my images. This data will not be stored after matching is complete and will not be shared with third parties."

---

## Industry Standard Practice
Competitors (Flashframe, FinisherPix, Marathonfoto) handle this by:
- Relying on event organizer waivers for photo rights
- Framing face search as athlete-initiated "find your photo"
- Adding opt-in language to the search flow
- Keeping face data ephemeral (not stored after search)

---

## Action Items
1. **Engage US attorney (BIPA-experienced)** to review ToS and draft biometric consent clause — est. $500–$1,000 (ClickUp task created)
2. **Confirm with Tim:** Does FMS store face geometry after matching? If yes, this must change before US expansion
3. **Chicago meeting talking points:** Lead with bib search, offer face search only with proper consent in place
4. **Organizer contract language:** Ensure photo rights explicitly transfer to FMS as official partner

---

## Sources
1. Illinois BIPA text — ilga.gov
2. BIPA analysis — johndcook.com, ACLU-IL, UIC Law Review, privacyworld.blog
3. 7th Circuit 2026 ruling — globalpolicywatch.com
4. BIPA settlements — topclassactions.com, jdsupra.com
5. US state privacy laws 2026 — ketch.com, axiomlaw.com, multistate.us
6. Right of publicity — WIPO, lexology.com
7. Race waiver photo rights — threads.com, photo.stackexchange.com, ACC
8. CCPA biometric rules — clarip.com, CA AG office
