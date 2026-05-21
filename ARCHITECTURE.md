# Core 30 Architecture Plan — Morningstar Neuropathy & Pain Treatment Center

## Build Type
- build_type: migration (selective — keep good pages, rewrite weak ones)
- build_classification: local-clinic
- gbp_count: 1
- Flags: [no providers page, no spanish, no telehealth, no attorney page]

## GBP Entity Summary
- GBP 1: Morningstar Neuropathy & Pain Treatment Center — St. Peters, MO
  - Primary Category: `Medical clinic`
  - Secondary Categories: `pain control clinic`, `alternative medicine practitioner`, `weight loss service`, `wellness center`
  - Total GBP Services: 7
  - Phone: (636) 244-0124

## Page Grading — Existing 23 URLs

| # | Current URL | Page Type | Grade | Action |
|---|-------------|-----------|-------|--------|
| 1 | `/` (index) | Homepage | B | Restructure to Core 30 homepage hub with flat-links to all services + categories |
| 2 | `/about-us` | About | B | Restructure to AIDA; add clinic story, community anchors |
| 3 | `/neuropathy-treatment` | Service | A | Preserve + enhance; add condition cross-links, schema upgrade |
| 4 | `/platelet-rich-plasma-therapy` | Service | A | Preserve + enhance; add condition cross-links |
| 5 | `/hyaluronic-acid-injections` | Service | A | Preserve + enhance; add condition cross-links |
| 6 | `/regenerative-therapy` | Service | A | Preserve + enhance; title says "Exosome Therapy" — align with GBP service name |
| 7 | `/neuromodulation-technique` | Service | A | Preserve + enhance; add condition cross-links |
| 8 | `/medical-weight-loss` | Service | A | Preserve + enhance |
| 9 | `/chronic-pain-management` | Service | A | Preserve + enhance; extensive content with 5 FAQs |
| 10 | `/neuropathy` | Condition | B | Restructure; title says "Missouri" not "St. Peters, MO"; overlaps with service page |
| 11 | `/knee-pain` | Condition | A | Preserve + enhance; add treatment cross-links |
| 12 | `/back-pain` | Condition | A | Preserve + enhance |
| 13 | `/neck-pain` | Condition | A | Preserve + enhance |
| 14 | `/joint-pain` | Condition | A | Preserve + enhance |
| 15 | `/sciatica-relief` | Condition | A | Preserve + enhance; slug change to `/conditions/sciatica/` |
| 16 | `/testimonials` | Testimonials | F | **CRITICAL: Uses fabricated reviews** (Sarah M., Robert T., etc.) — NOT real GBP reviews. Must replace with real, administrator-approved semantic-filtered reviews or remove entirely. Consolidate into homepage + service page testimonial sections. |
| 17 | `/contact-us` | Contact | B | Restructure; add map embed, LocalBusiness schema reference |
| 18 | `/schedule-appointment` | Scheduling | B | Functional; consolidate with contact or keep separate |
| 19 | `/blog/` | Blog Index | B | Functional; 2 posts |
| 20 | `/blog/neuropathy-treatment-long-term-support` | Blog Post | B | Good content, BlogPosting schema present |
| 21 | `/blog/regenerative-therapy-back-pain-recovery` | Blog Post | B | Good content, BlogPosting schema present |
| 22 | `/privacy-policy` | Legal | B | Boilerplate, functional |
| 23 | `/terms-service` | Legal | B | Boilerplate, functional |

### Grading Summary
- Grade A: 10 pages (keep content, enhance with Core 30 structure)
- Grade B: 11 pages (restructure to AIDA, add schema/cross-links)
- Grade C: 0 pages
- Grade F: 1 page (testimonials — fabricated reviews, must replace)
- **New pages needed:** 3 (Conditions Hub, New Patient, Insurance)

---

## Site Hierarchy

### Homepage Hub (= GBP Landing Page 1)
- URL: `/`
- H1: Medical Clinic in St. Peters — ONE city only
- H2s:
  - Pain Control Clinic in St. Peters, MO
  - Alternative Medicine Practitioner in St. Peters, MO
  - Weight Loss Service in St. Peters, MO
  - Wellness Center in St. Peters, MO
- Links to: ALL category pages + ALL service pages (flat-linked in server-rendered HTML)

### Category Pages

#### Pain Management Hub (maps to GBP: `pain control clinic`)
- URL: `/pain-management/`
- H1: Pain Control Clinic in St. Peters, MO
- Links DOWN to:
  - `/pain-management/neuropathy-treatment/`
  - `/pain-management/chronic-pain-management/`
  - `/pain-management/neuromodulation-technique/`
- Links UP to: Homepage (contextual anchor text)

#### Regenerative Medicine Hub (maps to GBP: `alternative medicine practitioner`)
- URL: `/regenerative-medicine/`
- H1: Alternative Medicine Practitioner in St. Peters, MO
- Links DOWN to:
  - `/regenerative-medicine/regenerative-therapy/`
  - `/regenerative-medicine/platelet-rich-plasma-therapy/`
  - `/regenerative-medicine/hyaluronic-acid-injections/`
- Links UP to: Homepage (contextual anchor text)

#### Weight Loss (maps to GBP: `weight loss service`)
- 1 service only → **no hub page** per Service Hub Rule (§14)
- Medical Weight Loss linked directly from homepage and footer

### Service Pages

| Service (GBP exact name) | New URL (nested) | Old URL | Parent Category | Schema Type |
|--------------------------|------------------|---------|-----------------|-------------|
| Neuropathy Treatment | `/pain-management/neuropathy-treatment/` | `/neuropathy-treatment` | pain-management | TherapeuticProcedure |
| Chronic Pain Management | `/pain-management/chronic-pain-management/` | `/chronic-pain-management` | pain-management | TherapeuticProcedure |
| Neuromodulation Technique | `/pain-management/neuromodulation-technique/` | `/neuromodulation-technique` | pain-management | TherapeuticProcedure |
| Regenerative Therapy | `/regenerative-medicine/regenerative-therapy/` | `/regenerative-therapy` | regenerative-medicine | TherapeuticProcedure |
| Platelet Rich Plasma Therapy | `/regenerative-medicine/platelet-rich-plasma-therapy/` | `/platelet-rich-plasma-therapy` | regenerative-medicine | TherapeuticProcedure |
| Hyaluronic Acid Injections | `/regenerative-medicine/hyaluronic-acid-injections/` | `/hyaluronic-acid-injections` | regenerative-medicine | TherapeuticProcedure |
| Medical Weight Loss | `/medical-weight-loss/` | `/medical-weight-loss` | (standalone — weight loss service) | TherapeuticProcedure |

Each service page includes:
- H1: [Service Name] in St. Peters, MO
- Conditions linking up (see Coverage Matrix below)
- FAQs with FAQPage schema (already present in most pages)
- CTA to `/schedule-appointment`

### Condition Pages

| Condition | New URL | Old URL | Treatments (link UP to services) |
|-----------|---------|---------|----------------------------------|
| Neuropathy | `/conditions/neuropathy/` | `/neuropathy` | Neuropathy Treatment, Neuromodulation Technique, Regenerative Therapy |
| Knee Pain | `/conditions/knee-pain/` | `/knee-pain` | PRP Therapy, HA Injections, Regenerative Therapy |
| Back Pain | `/conditions/back-pain/` | `/back-pain` | Regenerative Therapy, Chronic Pain Management, PRP Therapy |
| Neck Pain | `/conditions/neck-pain/` | `/neck-pain` | Neuromodulation Technique, Chronic Pain Management |
| Joint Pain | `/conditions/joint-pain/` | `/joint-pain` | PRP Therapy, HA Injections, Regenerative Therapy |
| Sciatica | `/conditions/sciatica/` | `/sciatica-relief` | Neuromodulation Technique, Chronic Pain Management, Regenerative Therapy |

Each condition page includes:
- H1: [Condition] Treatment in St. Peters, MO
- Schema: MedicalCondition with possibleTreatment → TherapeuticProcedure @id refs
- Links UP to all treating service pages (never down)

### Standard Pages

| Page | URL | Notes |
|------|-----|-------|
| Conditions Hub | `/conditions/` | **NEW** — grid of all 6 condition pages |
| New Patient Page | `/new-patients/` | **NEW** — what to expect, forms, first visit info |
| Insurance Page | `/insurance/` | **NEW** — accepted plans, payment options, CareCredit |
| About | `/about/` | Existing `/about-us` — restructure |
| Contact | `/contact/` | Existing `/contact-us` — restructure |
| Schedule Appointment | `/schedule-appointment/` | Existing — keep |
| Blog Index | `/blog/` | Existing — keep |
| Privacy Policy | `/privacy-policy/` | Existing — keep |
| Terms of Service | `/terms-of-service/` | Existing `/terms-service` — slug change |

### Comparison Pages
No comparison pages recommended for this build. The practice's services are complementary (PRP + HA + Regenerative) rather than competing alternatives. Decision-stage queries like "PRP vs cortisone" or "regenerative therapy vs surgery" are better served by FAQ sections on the respective service pages.

### Provider Pages
**NOT APPLICABLE** — per client direction, no providers will be featured individually. All content refers to the practice/team collectively. Provider pages are skipped per `providers_page: false` flag in client brief.

### Blog Posts (Existing)
- `/blog/neuropathy-treatment-long-term-support` — Grade B, keep
- `/blog/regenerative-therapy-back-pain-recovery` — Grade B, keep

### Location Pages (Phase 2 — Geo-Expansion Only)
Build AFTER rank map shows 30-40% green coverage.
- URL pattern: `/locations/[city-slug]/`
- Service area cities: O'Fallon, St. Charles, Wentzville, Lake St. Louis, Cottleville, Dardenne Prairie

---

## 301 Redirect Map (Old Flat → New Nested)

| Old URL | New URL | Status |
|---------|---------|--------|
| `/neuropathy-treatment` | `/pain-management/neuropathy-treatment/` | 301 |
| `/chronic-pain-management` | `/pain-management/chronic-pain-management/` | 301 |
| `/neuromodulation-technique` | `/pain-management/neuromodulation-technique/` | 301 |
| `/regenerative-therapy` | `/regenerative-medicine/regenerative-therapy/` | 301 |
| `/platelet-rich-plasma-therapy` | `/regenerative-medicine/platelet-rich-plasma-therapy/` | 301 |
| `/hyaluronic-acid-injections` | `/regenerative-medicine/hyaluronic-acid-injections/` | 301 |
| `/neuropathy` | `/conditions/neuropathy/` | 301 |
| `/knee-pain` | `/conditions/knee-pain/` | 301 |
| `/back-pain` | `/conditions/back-pain/` | 301 |
| `/neck-pain` | `/conditions/neck-pain/` | 301 |
| `/joint-pain` | `/conditions/joint-pain/` | 301 |
| `/sciatica-relief` | `/conditions/sciatica/` | 301 |
| `/about-us` | `/about/` | 301 |
| `/contact-us` | `/contact/` | 301 |
| `/terms-service` | `/terms-of-service/` | 301 |
| `/testimonials` | `/` | 301 (consolidated into homepage) |
| `/medical-weight-loss` | `/medical-weight-loss/` | No change |
| `/schedule-appointment` | `/schedule-appointment/` | No change |
| `/privacy-policy` | `/privacy-policy/` | No change |
| `/blog/*` | `/blog/*` | No change |

### Legacy Domain Redirects (already confirmed)
- `morningstarnptc.com/*` → `morningstarregmed.com/*` (301, already active)

---

## Navigation Design

```
Main Nav:
Logo | [Services ▾] | [Conditions ▾] | About | Contact | [Schedule Evaluation]
```

### Services Mega Menu
```
Pain Management                    Regenerative Medicine              Weight Loss
├─ Neuropathy Treatment            ├─ Regenerative Therapy            └─ Medical Weight Loss
├─ Chronic Pain Management         ├─ PRP Therapy
└─ Neuromodulation Technique       └─ Hyaluronic Acid Injections
```

### Conditions Dropdown (separate primary nav peer)
```
Conditions
├─ Neuropathy
├─ Knee Pain
├─ Back Pain
├─ Neck Pain
├─ Joint Pain
├─ Sciatica
└─ View All Conditions →
```

### CTA Button
"Schedule Evaluation" — right-aligned, always visible, links to `/schedule-appointment/`

---

## Homepage Flat-Link Inventory

Every service page URL that MUST appear as `<a href>` in homepage server-rendered HTML:

1. `/pain-management/neuropathy-treatment/`
2. `/pain-management/chronic-pain-management/`
3. `/pain-management/neuromodulation-technique/`
4. `/regenerative-medicine/regenerative-therapy/`
5. `/regenerative-medicine/platelet-rich-plasma-therapy/`
6. `/regenerative-medicine/hyaluronic-acid-injections/`
7. `/medical-weight-loss/`
8. `/pain-management/` (category hub)
9. `/regenerative-medicine/` (category hub)
10. `/conditions/neuropathy/`
11. `/conditions/knee-pain/`
12. `/conditions/back-pain/`
13. `/conditions/neck-pain/`
14. `/conditions/joint-pain/`
15. `/conditions/sciatica/`
16. `/conditions/` (conditions hub)

---

## Condition-to-Service Coverage Matrix

| Service Page | Condition Pages Linking To It | Count | Coverage |
|-------------|-------------------------------|-------|----------|
| Neuropathy Treatment | Neuropathy | 1 | ⚠️ Below target (2-3) |
| Chronic Pain Management | Back Pain, Neck Pain, Sciatica | 3 | ✅ |
| Neuromodulation Technique | Neuropathy, Neck Pain, Sciatica | 3 | ✅ |
| Regenerative Therapy | Neuropathy, Knee Pain, Back Pain, Joint Pain | 4 | ✅ |
| PRP Therapy | Knee Pain, Back Pain, Joint Pain | 3 | ✅ |
| HA Injections | Knee Pain, Joint Pain | 2 | ✅ |
| Medical Weight Loss | (none) | 0 | ⚠️ N/A — different patient journey |

**Notes:**
- Neuropathy Treatment has only 1 condition page, but Neuropathy is the comprehensive condition page for this specialty. The overlap between the service page (/neuropathy-treatment) and condition page (/neuropathy) is intentional and sufficient for this practice's primary specialty.
- Medical Weight Loss operates in a separate patient journey (weight loss ≠ pain condition). No condition pages needed.

## Internal Linking Map
- Service pages → link UP to parent category (contextual in-body anchor text)
- Category pages → link UP to homepage (contextual in-body)
- Category pages → link DOWN to all child services
- Condition pages → link UP to all treating service pages (never down)
- Blog posts → link UP to target service page
- Homepage → flat-links to ALL services + ALL categories + conditions hub
- Footer mirrors full Core 30 hierarchy (all service + condition links)
- About page → links to services + conditions contextually
- New Patient page → links to schedule appointment + insurance

## Anchor Text Ratios
- Branded/generic: 60% ("our team", "learn more", "Morning Star")
- Partial match: 30% ("neuropathy care in St. Peters", "pain relief options")
- Exact match: 10% ("neuropathy treatment St. Peters MO" — sparingly)

---

## Keyword Map

### Service Pages

| Page | Primary Keyword | Secondary Keywords | LSI/Long-Tail |
|------|----------------|-------------------|---------------|
| Neuropathy Treatment | neuropathy treatment st peters mo | peripheral neuropathy treatment, neuropathy doctor near me | nerve damage treatment, diabetic neuropathy care, numbness tingling feet |
| Chronic Pain Management | chronic pain management st peters mo | pain management clinic, pain doctor near me | non-surgical pain relief, chronic pain treatment options |
| Neuromodulation Technique | neuromodulation therapy st peters mo | neuromodulation for pain, electrical nerve stimulation | nerve stimulation therapy, pain signal modulation |
| Regenerative Therapy | regenerative therapy st peters mo | exosome therapy, regenerative medicine | cellular repair therapy, tissue regeneration treatment |
| PRP Therapy | prp therapy st peters mo | platelet rich plasma therapy, prp injections | prp for knee pain, prp joint injection |
| HA Injections | hyaluronic acid injections st peters mo | ha injections for knees, viscosupplementation | knee gel injections, joint lubrication injections |
| Medical Weight Loss | medical weight loss st peters mo | semaglutide weight loss, tirzepatide weight loss | medically supervised weight loss, glp-1 weight loss |

### Condition Pages

| Page | Primary Keyword | Secondary Keywords | LSI/Long-Tail |
|------|----------------|-------------------|---------------|
| Neuropathy | neuropathy st peters mo | peripheral neuropathy, nerve damage | numbness in feet, tingling hands, neuropathy symptoms |
| Knee Pain | knee pain treatment st peters mo | knee pain relief, knee doctor near me | meniscus tear treatment, knee arthritis, knee swelling |
| Back Pain | back pain treatment st peters mo | back pain relief, back doctor near me | lower back pain, herniated disc, degenerative disc |
| Neck Pain | neck pain treatment st peters mo | neck pain relief, neck doctor near me | stiff neck, cervical pain, neck strain |
| Joint Pain | joint pain treatment st peters mo | joint pain relief, arthritis treatment | osteoarthritis, joint stiffness, joint inflammation |
| Sciatica | sciatica treatment st peters mo | sciatic nerve pain, sciatica relief | leg pain from back, pinched nerve, radiating pain |

---

## Content Briefs (per page)

### Homepage
- Title Tag: Neuropathy & Pain Treatment in St. Peters, MO | Morning Star
- Meta Description: Morning Star provides advanced neuropathy treatment, regenerative therapy, and pain management in St. Peters, MO. Non-surgical relief. Call (636) 244-0124.
- H1: Medical Clinic in St. Peters
- Target Keywords: neuropathy treatment st peters mo, pain management st peters mo, regenerative medicine st peters mo
- Word Count Target: 800-1,000
- Schema: MedicalOrganization + MedicalClinic (LocalBusiness) + WebSite + MedicalWebPage + BreadcrumbList + FAQPage

### Category: Pain Management
- Title Tag: Pain Control Clinic in St. Peters, MO | Morning Star
- Meta Description: Expert pain management in St. Peters, MO. Neuropathy treatment, chronic pain management, and neuromodulation therapy. Non-surgical relief at Morning Star.
- H1: Pain Control Clinic in St. Peters, MO
- Word Count Target: 500-700
- Schema: OfferCatalog + MedicalWebPage + BreadcrumbList

### Category: Regenerative Medicine
- Title Tag: Alternative Medicine Practitioner in St. Peters, MO | Morning Star
- Meta Description: Regenerative medicine in St. Peters, MO. PRP therapy, exosome therapy, and hyaluronic acid injections. Advanced non-surgical healing at Morning Star.
- H1: Alternative Medicine Practitioner in St. Peters, MO
- Word Count Target: 500-700
- Schema: OfferCatalog + MedicalWebPage + BreadcrumbList

### Service: Neuropathy Treatment
- Title Tag: Neuropathy Treatment in St. Peters, MO | Morning Star
- Meta Description: Advanced neuropathy treatment at Morning Star in St. Peters, MO. Customized plans to restore nerve health, relieve pain, and improve mobility. Call today.
- H1: Neuropathy Treatment in St. Peters, MO
- Word Count Target: 1,200-1,500
- Schema: TherapeuticProcedure + MedicalWebPage (aspect=Treatment) + BreadcrumbList + FAQPage

### Service: Chronic Pain Management
- Title Tag: Pain Management in St. Peters, MO | Morning Star
- Meta Description: Comprehensive chronic pain management at Morning Star in St. Peters, MO. Personalized treatment plans to reduce pain and restore quality of life.
- H1: Chronic Pain Management in St. Peters, MO
- Word Count Target: 1,200-1,500
- Schema: TherapeuticProcedure + MedicalWebPage (aspect=Treatment) + BreadcrumbList + FAQPage

### Service: Neuromodulation Technique
- Title Tag: Neuromodulation Treatment in St. Peters, MO | Morning Star
- Meta Description: Neuromodulation therapy at Morning Star in St. Peters, MO provides targeted, non-invasive pain relief through controlled electrical stimulation.
- H1: Neuromodulation Technique in St. Peters, MO
- Word Count Target: 1,000-1,200
- Schema: TherapeuticProcedure + MedicalWebPage (aspect=Treatment) + BreadcrumbList + FAQPage

### Service: Regenerative Therapy
- Title Tag: Regenerative Therapy in St. Peters, MO | Morning Star
- Meta Description: Exosome therapy at Morning Star in St. Peters, MO harnesses your body's healing power. Reduce inflammation and support tissue repair.
- H1: Regenerative Therapy in St. Peters, MO
- Word Count Target: 1,000-1,200
- Schema: TherapeuticProcedure + MedicalWebPage (aspect=Treatment) + BreadcrumbList + FAQPage

### Service: PRP Therapy
- Title Tag: Platelet Rich Plasma Therapy in St. Peters, MO | Morning Star
- Meta Description: PRP therapy at Morning Star in St. Peters, MO uses your own platelets to accelerate healing. Non-surgical joint and tissue repair.
- H1: Platelet-Rich Plasma (PRP) Therapy in St. Peters, MO
- Word Count Target: 1,000-1,200
- Schema: TherapeuticProcedure + MedicalWebPage (aspect=Treatment) + BreadcrumbList + FAQPage

### Service: Hyaluronic Acid Injections
- Title Tag: Hyaluronic Acid Injections in St. Peters, MO | Morning Star
- Meta Description: Relieve joint pain with hyaluronic acid injections at Morning Star in St. Peters, MO. Minimally invasive joint lubrication for improved mobility.
- H1: Hyaluronic Acid Injections in St. Peters, MO
- Word Count Target: 1,000-1,200
- Schema: TherapeuticProcedure + MedicalWebPage (aspect=Treatment) + BreadcrumbList + FAQPage

### Service: Medical Weight Loss
- Title Tag: Medical Weight Loss in St. Peters, MO | Morning Star
- Meta Description: Medically supervised weight loss in St. Peters, MO using semaglutide and tirzepatide. Personalized plans for lasting results at Morning Star.
- H1: Medical Weight Loss in St. Peters, MO
- Word Count Target: 1,000-1,200
- Schema: TherapeuticProcedure + MedicalWebPage (aspect=Treatment) + BreadcrumbList + FAQPage

### Condition Pages (all 6)
- Word Count Target: 800-1,000 each
- Schema: MedicalCondition + MedicalWebPage (aspect=Cause/Symptom) + BreadcrumbList + FAQPage
- Structure: Causes H3 + Symptoms H3 + Treatments H3 + FAQs + CTA

### Conditions Hub
- Title Tag: Conditions We Treat in St. Peters, MO | Morning Star
- Meta Description: Find relief for neuropathy, knee pain, back pain, neck pain, joint pain, and sciatica at Morning Star in St. Peters, MO. Learn about your condition.
- H1: Conditions We Treat in St. Peters, MO
- Word Count Target: 400-500
- Schema: MedicalWebPage + BreadcrumbList

### New Patient Page
- Title Tag: New Patients | Morning Star in St. Peters, MO
- Meta Description: What to expect at your first visit to Morning Star in St. Peters, MO. New patient information, forms, and appointment preparation guide.
- H1: New Patient Information
- Word Count Target: 600-800
- Schema: MedicalWebPage + BreadcrumbList

### Insurance Page
- Title Tag: Insurance & Payment Options | Morning Star in St. Peters, MO
- Meta Description: Morning Star in St. Peters, MO accepts major medical insurance. Learn about payment options including CareCredit financing.
- H1: Insurance & Payment Options
- Word Count Target: 400-600
- Schema: WebPage + BreadcrumbList

---

## GBP Alignment Notes

### Category → Architecture Mapping
| GBP Category | Architecture Element | Alignment Status |
|--------------|---------------------|-----------------|
| `Medical clinic` (primary) | Homepage H1 + MedicalClinic schema | ✅ Aligned |
| `pain control clinic` | Pain Management category hub + 3 child services | ✅ Aligned |
| `alternative medicine practitioner` | Regenerative Medicine category hub + 3 child services | ✅ Aligned |
| `weight loss service` | Medical Weight Loss standalone page | ✅ Aligned (1 service, no hub needed) |
| `wellness center` | Umbrella — covered by homepage positioning | ✅ Aligned (no dedicated page) |

### GBP Service → Website Page Mapping
Every GBP service has exactly one dedicated page (1:1):
1. Neuropathy Treatment → `/pain-management/neuropathy-treatment/`
2. Chronic Pain Management → `/pain-management/chronic-pain-management/`
3. Neuromodulation Technique → `/pain-management/neuromodulation-technique/`
4. Regenerative Therapy → `/regenerative-medicine/regenerative-therapy/`
5. Platelet Rich Plasma Therapy → `/regenerative-medicine/platelet-rich-plasma-therapy/`
6. Hyaluronic Acid Injections → `/regenerative-medicine/hyaluronic-acid-injections/`
7. Medical Weight Loss → `/medical-weight-loss/`

### GBP Post Cadence — 90-Day Topics
| Week | Topic | Target Service Page |
|------|-------|-------------------|
| 1 | Understanding Peripheral Neuropathy: Signs You Shouldn't Ignore | `/pain-management/neuropathy-treatment/` |
| 2 | How PRP Therapy Accelerates Joint Healing | `/regenerative-medicine/platelet-rich-plasma-therapy/` |
| 3 | 5 Non-Surgical Options for Chronic Knee Pain | `/conditions/knee-pain/` |
| 4 | What Is Neuromodulation and How Does It Relieve Pain? | `/pain-management/neuromodulation-technique/` |
| 5 | Semaglutide vs Tirzepatide: Which Is Right for You? | `/medical-weight-loss/` |
| 6 | Regenerative Therapy: How Exosomes Support Tissue Repair | `/regenerative-medicine/regenerative-therapy/` |
| 7 | Back Pain That Won't Go Away? When to Seek Professional Help | `/conditions/back-pain/` |
| 8 | Hyaluronic Acid Injections: A Non-Surgical Path to Mobility | `/regenerative-medicine/hyaluronic-acid-injections/` |
| 9 | Living with Sciatica: Treatment Options Beyond Medication | `/conditions/sciatica/` |
| 10 | How Chronic Pain Management Plans Are Customized for You | `/pain-management/chronic-pain-management/` |
| 11 | Joint Pain After 50: What's Normal and What's Not | `/conditions/joint-pain/` |
| 12 | Your First Visit to Morning Star: What to Expect | `/new-patients/` |

The SEO Writer will write full 150-word post copy for each.

---

## Critical Issues Found

### 1. Fabricated Testimonials (URGENT)
The `/testimonials` page contains fabricated reviews attributed to "Sarah M.", "Robert T.", "Linda K.", "James W.", "Patricia D." — these are NOT real GBP reviews. The client-brief.md lists real reviewers (Arthur Brewer, Tarak Patel, Leah Dubin, Deb Schneider, John Brantley, Marilyn Adams-Hayden). **This page must be rebuilt with real, verbatim GBP reviews or removed entirely.** Healthcare YMYL + FTC endorsement rules = legal exposure.

### 2. Flat URL Structure
All existing pages use flat URLs (e.g., `/neuropathy-treatment` instead of `/pain-management/neuropathy-treatment/`). Migration to nested Core 30 URLs requires 15 redirects (see Redirect Map above).

### 3. Missing Schema
Homepage and most pages lack LocalBusiness/MedicalClinic/MedicalOrganization schema. Only service and condition pages have FAQPage schema. Blog posts have BlogPosting schema.

### 4. Neuropathy Page Overlap
`/neuropathy` (condition) and `/neuropathy-treatment` (service) have significant content overlap and similar FAQ questions. These need clear differentiation: condition page focuses on causes/symptoms/diagnosis, service page focuses on treatment approach/process/outcomes.
