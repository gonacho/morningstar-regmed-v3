# Schema Plan — Morningstar Neuropathy & Pain Treatment Center

## Build Classification
- Type: Local Clinic
- LocalBusiness schema on homepage: ON
- Institutional Anchor Piggybacking: ON
- GBP CID/PlaceID hardcoding: Required (PENDING administrator approval)
- GeoCircle service area: Required (25 mi / 40,234 m radius from St. Peters, MO)
- MedicalWebPage wrapper for YMYL pages: ON (always for healthcare)
- TherapeuticProcedure for healthcare services: ON
- Semantic review filtering: Required for all review arrays
- dateModified governance: lastEdited frontmatter (NOT auto-bump)
- Reasoning: Morningstar is a single-location medical clinic where patients visit a physical location at 4710 Mexico Rd Suite C, St Peters, MO 63376. The practice has an active Google Business Profile with the primary category "Medical clinic." Full LocalBusiness/MedicalClinic schema is required, with CID/PlaceID hardcoding for GBP entity association, institutional anchor piggybacking for entity weight borrowing from nearby major hospitals (Barnes-Jewish St. Peters, SSM Health St. Joseph), and GeoCircle service area for geographic relevance signals across St. Charles County.

## Block Inventory (per page type)

### Homepage
- **Block A:** MedicalOrganization (practice-level entity, `@id: https://morningstarregmed.com/#organization`)
- **Block B:** MedicalClinic + LocalBusiness (geo-enriched with GeoCircle service area, institutional anchors in `areaServed.containsPlace`, semantic-filtered reviews on LocalBusiness, CID URL in `sameAs`, PlaceID URL in `hasMap`)
- **Block E:** MedicalWebPage
- **Block F:** WebSite (with SearchAction)
- **Block G:** BreadcrumbList (position 1 only — homepage)
- **Block H:** FAQPage (if homepage FAQs exist)
- Note: No Block C (Person) — providers not featured individually

### Category Pages (Pain Management, Regenerative Medicine)
- **Block D-category:** OfferCatalog (listing child services)
- **Block E:** MedicalWebPage
- **Block G:** BreadcrumbList (2 levels: Home → Category)
- **Block H:** FAQPage (if FAQs present)

### Service Pages (all 7)
- **Block D-service:** TherapeuticProcedure (with `indication` → MedicalCondition @id refs, semantic-filtered reviews per service binding)
- **Block E:** MedicalWebPage (aspect=Treatment)
- **Block G:** BreadcrumbList (3 levels: Home → Category → Service; or 2 levels for standalone Medical Weight Loss)
- **Block H:** FAQPage (already present in all existing service pages)
- **Block J:** VideoObject (if video added)

### Condition Pages (all 6)
- **Block I:** MedicalCondition (with `possibleTreatment` → TherapeuticProcedure @id refs, `cause`, `signOrSymptom`)
- **Block E:** MedicalWebPage (aspect=Cause/Symptom)
- **Block G:** BreadcrumbList (2 levels: Home → Conditions → Condition)
- **Block H:** FAQPage (already present in all existing condition pages)

### Blog Posts
- **Block L:** MedicalScholarlyArticle (or BlogPosting — currently using BlogPosting, upgrade to Article with medical properties)
- **Block E:** MedicalWebPage
- **Block G:** BreadcrumbList (Home → Blog → Post)

### Standard Pages
- Contact: Block B-reference (LocalBusiness reference) + Block E (WebPage) + Block G
- About: Block E (MedicalWebPage) + Block G
- New Patients: Block E (MedicalWebPage) + Block G
- Insurance: Block E (WebPage) + Block G
- Conditions Hub: Block E (MedicalWebPage) + Block G
- Privacy Policy / Terms: Block E (WebPage) + Block G
- Schedule Appointment: Block E (WebPage) + Block G

## Strategic Type Choices
- Organization @type: MedicalOrganization
- LocalBusiness @type: ["MedicalClinic", "LocalBusiness"]
- medicalSpecialty: [PainMedicine, Musculoskeletal] (with sameAs to Wikipedia for non-enum values)
- Service @type: TherapeuticProcedure for all services (all non-surgical)
- WebPage wrapper: MedicalWebPage for all YMYL pages (services, conditions, about, new patients, conditions hub); WebPage for Contact, Insurance, Privacy, Terms, Schedule

## Cross-References to ENTITY-VARIABLES.md
- GBP Locks: see §GBP Locks (PENDING administrator approval)
- Institutional Anchors: see §Institutional Anchor Entities (PENDING administrator selection)
- Semantic Reviews: see §Review Data (PENDING verbatim text + administrator approval)
- NAICS: see §Business Entity > NAICS Code (621399)

## Tech Builder Notes
- Render every JSON-LD block via individual `.astro` components in `src/components/schemas/` (`OrganizationSchema.astro`, `LocalBusinessSchema.astro`, `TherapeuticProcedureSchema.astro`, `MedicalConditionSchema.astro`, `MedicalWebPageSchema.astro`, `FAQPageSchema.astro`, `BreadcrumbSchema.astro`, `WebSiteSchema.astro`). NEVER centralized in `src/utils/schema.ts`.
- Use `set:html={JSON.stringify(schema)}` for every JSON-LD block (XSS prevention)
- All `@id` absolute (`https://morningstarregmed.com/#fragment`), never bare `#fragment`
- `dateModified` sourced from per-page `lastEdited` frontmatter — NEVER `new Date()` at build
- CID URL injected into Organization.sameAs AND LocalBusiness.sameAs (once approved)
- PlaceID URL injected into LocalBusiness.hasMap (once approved)
- Institutional anchors injected into LocalBusiness.areaServed.containsPlace AND MedicalWebPage.mentions
- Per-service reviews on TherapeuticProcedure @type (not LocalBusiness) — star snippets only render on Service pages
- Homepage reviews on LocalBusiness @type
- Bidirectional graph closure: TherapeuticProcedure.indication → MedicalCondition @ids; MedicalCondition.possibleTreatment → TherapeuticProcedure @ids
- No provider schema blocks since `providers_page: false`

### @id Reference Table

| Entity | @id |
|--------|-----|
| Organization | `https://morningstarregmed.com/#organization` |
| LocalBusiness | `https://morningstarregmed.com/#localbusiness` |
| WebSite | `https://morningstarregmed.com/#website` |
| Neuropathy Treatment | `https://morningstarregmed.com/#service-neuropathy-treatment` |
| Chronic Pain Management | `https://morningstarregmed.com/#service-chronic-pain-management` |
| Neuromodulation Technique | `https://morningstarregmed.com/#service-neuromodulation-technique` |
| Regenerative Therapy | `https://morningstarregmed.com/#service-regenerative-therapy` |
| PRP Therapy | `https://morningstarregmed.com/#service-platelet-rich-plasma-therapy` |
| HA Injections | `https://morningstarregmed.com/#service-hyaluronic-acid-injections` |
| Medical Weight Loss | `https://morningstarregmed.com/#service-medical-weight-loss` |
| Neuropathy (condition) | `https://morningstarregmed.com/#condition-neuropathy` |
| Knee Pain (condition) | `https://morningstarregmed.com/#condition-knee-pain` |
| Back Pain (condition) | `https://morningstarregmed.com/#condition-back-pain` |
| Neck Pain (condition) | `https://morningstarregmed.com/#condition-neck-pain` |
| Joint Pain (condition) | `https://morningstarregmed.com/#condition-joint-pain` |
| Sciatica (condition) | `https://morningstarregmed.com/#condition-sciatica` |

## SEO Writer Notes
- Every Institutional Anchor (once approved) must appear in visible body content using neutral proximity language ("Located near…", "Minutes from…", "Serving the same community as…"). Never imply affiliation, partnership, or endorsement.
- Every Semantic Review (once approved) must appear verbatim in the testimonials section of the page bound to its service/condition
- FAQ Q&A pairs verbatim-match the FAQPage schema (already present in most pages — maintain this)
- MedicalCondition page Causes/Symptoms/Treatments visible H3 sections match the schema arrays
- `lastEdited` frontmatter set to actual edit date — equals `publishDate` at first publish, bumped only on real content edits
- Homepage H1 = ONE city only: "Medical Clinic in St. Peters" — never two cities
- All service page H1s include "in St. Peters, MO"
- All condition page H1s include "Treatment in St. Peters, MO"
