# FMS Privacy Compliance Tracker
_Last Updated: April 22, 2026_
_Owner: Van (legal/product tasks) + Tim (engineering tasks)_
_Add new regions as FMS expands. Update checklist items as they're completed._

---

## How to Use This Doc
- Add a new region when FMS is about to operate in a new jurisdiction
- Check off items as they're completed
- Status: 🔴 Not Started | 🟡 In Progress | 🟢 Done
- Each checklist item links to its ClickUp task where available

---

## 🇵🇭 Philippines (National)
**Governing Law:** Data Privacy Act of 2012 (Republic Act 10173)
**Enforced By:** National Privacy Commission (NPC)
**Status:** 🟡 In Progress
**ClickUp Task:** <https://app.clickup.com/t/86d2qw8fv>

**Key Requirements:**
- Written consent before collecting personal data
- Purpose limitation — data used only as stated
- Retention limits — delete when no longer needed
- Right to access, correction, deletion
- Data breach notification to NPC + affected individuals
- NPC registration required once processing >1,000 data subjects
- DPO appointment required for platforms processing sensitive personal information

**Infrastructure:** ✅ All data in Singapore (ap-southeast-1) — compliant for cross-border transfer

**Checklist:**

*Legal/Van:* ([task](https://app.clickup.com/t/86d2qw8fv))
- [x] Privacy Policy published (findmyshots.com/privacy-policy)
- [x] T&C published (findmyshots.com/terms-and-conditions)
- [ ] Privacy Policy updated with biometric section (draft ready, needs publishing)
- [ ] T&C updated with biometric + consent language
- [ ] Set up privacy@findmyshots.com (replace "Data Privacy Rights Request Form" placeholder)
- [ ] Register FMS with NPC at privacy.gov.ph/registration
- [ ] Appoint Data Protection Officer (DPO) — can be Van, Lenli, or external counsel
- [ ] File DPO info with NPC

*Engineering/Tim:* ([BIPA task](https://app.clickup.com/t/86d2qrj8n) — shared across PH/SG/US)
- [ ] Consent prompt at selfie upload (logged with timestamp + user ID)
- [ ] Auto-delete retention job (selfie photo + FaceId: 90 days post-event)
- [ ] Deletion request handler (privacy@findmyshots.com → delete selfie + FaceId + call AWS DeleteFaces)
- [ ] Confirm AWS DeleteFaces API called on every FaceId removal
- [ ] Data breach detection + notification pipeline

**Notes:**
- FMS is a personal information controller under RA 10173
- AWS Rekognition facial geometry = sensitive personal information under PH law
- NPC registration threshold: 1,000+ data subjects → likely already triggered

---

## 🇸🇬 Singapore (National)
**Governing Law:** Personal Data Protection Act 2012 (PDPA), amended 2022
**Enforced By:** Personal Data Protection Commission (PDPC)
**Status:** 🟡 In Progress
**ClickUp Task:** <https://app.clickup.com/t/86d2qw8hg>

**Key Requirements:**
- Consent before collecting personal data (including biometric)
- Purpose limitation
- Retention: delete when no longer needed
- Right to access, correction, withdrawal of consent
- Data breach notification: within 3 calendar days to PDPC + affected individuals (if significant harm)
- Transfer limitation: data leaving Singapore must go to countries with comparable protection

**Infrastructure:** ✅ All data in ap-southeast-1 (Singapore) — zero cross-border transfer issue

**Checklist:**

*Legal/Van:* ([task](https://app.clickup.com/t/86d2qw8hg))
- [x] Singapore PDPA referenced in Privacy Policy (Section 12 of new draft)
- [ ] Privacy Policy updated with biometric section published
- [ ] T&C updated
- [ ] Attorney review — confirm PDPA compliance alongside BIPA review

*Engineering/Tim:* ([task](https://app.clickup.com/t/86d2qw8hg))
- [ ] Accept AWS Data Processing Addendum — AWS Console → Account Settings → Data Privacy (2 min fix)
- [ ] Data breach detection + notification pipeline (3-day SLA to PDPC)
- [ ] Consent prompt at selfie upload — shared, see [BIPA task](https://app.clickup.com/t/86d2qrj8n)
- [ ] Auto-delete retention job — shared, see [BIPA task](https://app.clickup.com/t/86d2qrj8n)
- [ ] Deletion request handler — shared, see [BIPA task](https://app.clickup.com/t/86d2qrj8n)

**Notes:**
- No private right of action (unlike BIPA) — enforcement is regulator only, max SGD $1M
- Singapore server location confirmed — no transfer limitation issue
- Spartan SEA (Rio partnership) will trigger SG compliance requirement
- AWS DPA acceptance is a 2-minute task in AWS console — Tim should do this immediately

---

## 🇺🇸 Illinois, USA (State — Chicago events)
**Governing Law:** Biometric Information Privacy Act (BIPA), 740 ILCS 14
**Enforced By:** Private individuals (lawsuits) + Illinois courts
**Status:** 🔴 Not Started (blocks US launch)
**ClickUp Task:** <https://app.clickup.com/t/86d2qrj8n>

**Key Requirements:**
- Written opt-in consent BEFORE any biometric data is collected or processed
- Published retention schedule (must state how long data is kept)
- Delete biometric data when purpose is fulfilled or within 3 years (whichever first)
- Private right of action: $1,000–$5,000 per person per violation, class action eligible
- 2024 Amendment: damages capped per-person (not per-incident) — confirmed retroactive by 7th Circuit April 2026

**Infrastructure:** ✅ Singapore servers — BIPA does not require US-based servers. Compliant.

**Checklist:**

*Legal/Van:* ([task](https://app.clickup.com/t/86d2qrj8n))
- [ ] Engage BIPA-experienced US attorney (Chicago preferred) — est. $500–$1,500
- [ ] Attorney confirms 2024 BIPA amendment (per-person damages) applies to FMS
- [ ] Attorney reviews consent prompt copy, Privacy Policy, T&C, organizer waiver language
- [ ] Privacy Policy updated with biometric section (draft ready — needs attorney sign-off + publishing)
- [ ] T&C updated with BIPA language and explicit consent requirement
- [ ] Set up privacy@findmyshots.com for deletion requests
- [ ] Organizer waiver language agreed with Chicago race organizers

*Engineering/Tim:* ([task](https://app.clickup.com/t/86d2qrj8n))
- [ ] Consent prompt at selfie upload — mandatory checkbox, cannot be pre-checked, logged with timestamp + user ID
- [ ] Auto-delete retention job — selfie photo + FaceId: 90 days post-event; event photo FaceIds: end of sales window (max 3 years)
- [ ] AWS DeleteFaces API called on every deletion (FaceId removed from Rekognition Collection)
- [ ] Deletion request handler — privacy@findmyshots.com → delete selfie photo + FaceId within 30 days, log completions

**Chicago Meeting Talking Points:**
- "Bib search is our primary method — zero biometric data"
- "Face search is opt-in — athletes consent before we process anything"
- "We store the selfie and a facial identifier temporarily — both deleted 90 days post-event"
- "Athletes can request deletion anytime at privacy@findmyshots.com"
- "We are working with US legal counsel on full BIPA compliance before Illinois go-live"

**Notes:**
- Three Chicago organizer meetings coming up — lead with bib search
- DPA available for organizers whose legal teams require it
- Server location (Singapore) is irrelevant to BIPA jurisdiction
- Facebook paid $550M, Google $6–30M — class action risk is real without consent prompt

---

## Template: Adding a New Region

Copy this block when FMS enters a new jurisdiction:

```
## 🏳️ [Country/State/City]
**Governing Law:** [Law name + year]
**Enforced By:** [Regulator or courts]
**Status:** 🔴 Not Started
**ClickUp Task:** [create task → paste URL here]

**Key Requirements:**
- [Requirement 1]
- [Requirement 2]

**Infrastructure:** [Any region-specific infra notes]

**Checklist:**

*Legal/Van:* ([task](URL))
- [ ] [Task]

*Engineering/Tim:* ([task](URL))
- [ ] [Task]

**Notes:**
- [Gotcha or key context]
```

---

## Regions on Radar (not yet active)
- 🇲🇾 Malaysia — PDPA 2010. Triggered when Spartan SEA events run in KL.
- 🇮🇩 Indonesia — PDP Law 2022. Triggered when Spartan ID or other ID events go live.
- 🇺🇸 California, USA — CCPA. Triggered if FMS sells to CA residents at any US event.
- 🇦🇺 Australia — Privacy Act 1988. Triggered if FMS expands to AUS marathons.
