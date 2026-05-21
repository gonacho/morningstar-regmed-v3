# Client Brief — Morningstar Neuropathy & Pain Treatment Center
**Generated:** 2026-05-21  
**Issue:** COR-87 — MOR-1 Site Migration Kickoff  
**Status:** INTAKE COMPLETE — ready for SEO Architect dispatch  
**Remaining:** Brand hex codes + reference sites (Design phase, not blocking SEO)

---

## Build Flags

```yaml
build_type: migration
build_classification: local-clinic
gbp_count: 1
language_flags: [en]
feature_flags: []
providers_page: false
spanish: false
telehealth: false
attorney_referral: false
```

## Q1 — Business Name + Location

- **Legal Business Name:** Morningstar Neuropathy & Pain Treatment Center, LLC  
- **DBA / Site Title:** Morning Star Neuropathy & Pain Treatment Center  
- **Address:** 4710 Mexico Rd Suite C, St Peters, MO 63376  
- **Phone:** (636) 244-0124  
- **Hours:** Mon–Thu 8am–5pm | Fri–Sun Closed  
- **Single-location build**

## Q2 — Build Classification

**Local Clinic** (patients visit a physical location). Uses LocalBusiness + MedicalClinic schema + Institutional Anchor Piggybacking.

## Q3 — GBP Primary Category

**`Medical clinic`**

## Q4 — GBP Secondary Categories

1. `pain control clinic`
2. `alternative medicine practitioner`
3. `weight loss service`
4. `wellness center`

## Q4b — Local Health Signal

Adults in their late 40s through 60s with arthritic knee/shoulder problems or peripheral neuropathies that have been keeping them from enjoying regular activities — family activities, mobility, daily life. This is the core patient avatar: people who want their active life back, not just pain relief.

**SEO copy anchor:** "Get back to the life you love — family time, active hobbies, and daily independence — with non-surgical pain relief and regenerative care in St. Peters, MO."

## Q5 — Existing Site URL

- **Primary:** https://morningstarregmed.com  
- **Legacy domain:** morningstarnptc.com → **confirmed 301 redirect** to morningstarregmed.com (researched 2026-05-21)

## Q6 — Voice/Tone

**Professional + Warm** — Trustworthy and credentialed, but never cold or clinical.

## Q7 — Providers

**No providers page.** Staff will not be featured individually on the new site. All content refers to the practice/team collectively.

*Internal note: Andrew Morningstar, DC is founder. Heather R Leone, FNP-C and "Kay" mentioned in reviews. Not featured on site per client direction.*

## Q8 — Domain Status

**Keep morningstarregmed.com** — Same domain. Old URLs get 301 redirects.

## Q9 — Insurance / Payment

- Accepts major medical insurance  
- ⚠️ CareCredit confirmation pending (Part 2 interaction) — CareCredit directory listing found

## Q10 — Special Flags

- Spanish pages: **No**
- Telehealth: **No**
- Attorney/referral page: **No**

## Q11 — Content Direction

**Selective** — Keep good pages, rewrite weak ones. SEO Architect will grade A/B/C/F per Core 30 migration rubric.

Existing pages (23 URLs):
- Homepage
- About Us
- Services: Neuropathy Treatment, Platelet Rich Plasma Therapy, Hyaluronic Acid Injections, Regenerative Therapy, Neuromodulation Technique, Medical Weight Loss, Chronic Pain Management
- Conditions: Neuropathy, Knee Pain, Back Pain, Neck Pain, Joint Pain, Sciatica
- Testimonials, Contact, Schedule Appointment
- Blog (2 posts)
- Privacy Policy, Terms of Service

## Q12 — Design Personality

**Warm & Approachable** — Soft tones, hands-in-frame imagery, inviting — patients should feel safe.

## Q13 — Brand Colors & Reference Sites

⚠️ **STILL NEEDED FROM BOBBEE** — not blocking SEO Architect, needed before Design phase.  
Current site appears to use navy blue + sky blue. Direction TBD.

---

## Schema Summary (for SEO Architect)

```json
{
  "@type": ["MedicalClinic", "LocalBusiness"],
  "name": "Morningstar Neuropathy & Pain Treatment Center",
  "url": "https://morningstarregmed.com",
  "telephone": "(636) 244-0124",
  "address": {
    "streetAddress": "4710 Mexico Rd Suite C",
    "addressLocality": "St Peters",
    "addressRegion": "MO",
    "postalCode": "63376"
  },
  "openingHours": ["Mo-Th 08:00-17:00"],
  "gbp": {
    "primaryCategory": "Medical clinic",
    "secondaryCategories": [
      "pain control clinic",
      "alternative medicine practitioner",
      "weight loss service",
      "wellness center"
    ]
  },
  "patientAvatar": "Adults 45-65, arthritic knee/shoulder or peripheral neuropathy, want to return to family activities and daily independence"
}
```

---

## Real Patient Reviews (from GBP — for schema/testimonials)

- Arthur Brewer — neuropathy treatment result
- Tarak Patel — positive (staff mentioned)
- Leah Dubin — non-invasive treatments
- Deb Schneider — medical weight loss (223.6 → 150.4 lbs)
- John Brantley — PRP + HA injections
- Marilyn Adams-Hayden — general positive
