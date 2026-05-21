# Entity Variables — Morningstar Neuropathy & Pain Treatment Center

## Business Entity
- Legal Name: Morningstar Neuropathy & Pain Treatment Center, LLC
- DBA / Site Title: Morning Star Neuropathy & Pain Treatment Center
- NAICS Code: 621399 (Offices of All Other Miscellaneous Health Practitioners)
- LocalBusiness Subtype: MedicalClinic
- Service Subtype: TherapeuticProcedure (all services are non-surgical)
- medicalSpecialty: [PainMedicine, Musculoskeletal]
- Primary Geo Coordinates: 38.7696, -90.6268
- Service Radius: 25 miles → 40,234 meters (for ServiceArea GeoCircle schema)
- Telephone: +16362440124
- Opening Hours: Mo-Th 08:00-17:00

## GBP Locks (PENDING — Administrator Approval Required)

### Location 1 — St. Peters
- CID: **PENDING** — must extract from Google Maps URL `?cid=` parameter
- CID URL (verified): PENDING
- PlaceID: **PENDING** — must extract from Maps `data=` parameter or Place ID Finder
- hasMap URL (verified): PENDING
- Administrator approved: NOT YET

> **Action Required:** Administrator must extract CID and PlaceID from the Google Maps listing for "Morningstar Neuropathy & Pain Treatment Center, 4710 Mexico Rd Suite C, St Peters, MO 63376" and approve before schema injection.

## GBP Locations

### Location 1 — St. Peters
- Address: 4710 Mexico Rd Suite C, St Peters, MO 63376
- Phone: +16362440124
- Geo: 38.7696, -90.6268
- GBP URL (share): PENDING — extract from GBP listing
- Landmarks (3, tier-2):
  - St. Peters Rec-Plex — @type: SportsFacility — Wikipedia: https://en.wikipedia.org/wiki/St._Peters,_Missouri (referenced in city article; hosted 2004 US Olympic Diving Trials; 236,000 sq ft recreation complex)
  - St. Charles County Heritage Museum — @type: Museum — Wikipedia: N/A (county museum with free interpretive displays on local/state history, connected to Katy Trail)
  - Mid Rivers Mall — @type: ShoppingCenter — Wikipedia: N/A (St. Charles County's largest shopping center, local commercial landmark)
- Local Event: Festival of the Little Hills — Wikipedia: N/A — Annual timing: Third weekend of August (350,000+ attendees, 300+ vendors, held since 1971 in Historic St. Charles Main Street)
- City Wikipedia: https://en.wikipedia.org/wiki/St._Peters,_Missouri

## Institutional Anchor Entities (PENDING — Administrator Approval Required)

### Location 1 — St. Peters

**Candidates (3-5 for administrator selection of 1-3):**

1. **Barnes-Jewish St. Peters Hospital** — @type: Hospital — Wikipedia: https://en.wikipedia.org/wiki/BJC_HealthCare (referenced as BJC member facility) — 111-bed acute care hospital in St. Peters, part of BJC HealthCare / Washington University School of Medicine system. Houses Siteman Cancer Center satellite. Directly in the service area.
   - Rationale: Highest entity weight hospital in St. Peters proper. BJC HealthCare parent has strong Wikipedia presence. Not a competitor (hospital vs. outpatient pain clinic).

2. **SSM Health St. Joseph Hospital - St. Charles** — @type: Hospital — Wikipedia: https://en.wikipedia.org/wiki/SSM_Health (parent org page) — 329-bed acute care hospital in St. Charles, serving the county since 1885. Primary Stroke Center, Level II STEMI Center.
   - Rationale: Largest hospital in St. Charles County by bed count. SSM Health has robust Wikipedia presence. Adjacent city, well within service area. Not a competitor.

3. **Washington University School of Medicine** — @type: CollegeOrUniversity — Wikipedia: https://en.wikipedia.org/wiki/Washington_University_School_of_Medicine — Top-10 US medical school, academic partner of Barnes-Jewish Hospital system.
   - Rationale: Tier-1 entity weight. Barnes-Jewish St. Peters is a BJC/WashU affiliated facility. Establishes regional medical prestige context. Not a competitor.

4. **Siteman Cancer Center (St. Charles County satellite)** — @type: MedicalClinic — Wikipedia: https://en.wikipedia.org/wiki/Siteman_Cancer_Center — NCI-designated comprehensive cancer center. Has a facility on the Barnes-Jewish St. Peters Hospital campus.
   - Rationale: NCI-designated center with strong Knowledge Graph presence. Located on hospital campus in St. Peters. Not a competitor.

- Administrator approved: NOT YET

> **Action Required:** Administrator selects 1-3 anchors from the candidates above.

## Provider Entities

**NOT APPLICABLE** — per client direction (`providers_page: false`), no providers are featured individually. Content refers to the practice/team collectively.

*Internal note for schema: Andrew Morningstar, DC is founder. Heather R Leone, FNP-C on staff. "Kay" mentioned in reviews. If providers are ever added, these are the starting profiles.*

## Industry Topic Entities
- Primary Industry: Regenerative medicine — Wikipedia: https://en.wikipedia.org/wiki/Regenerative_medicine
- Service Topic 1: Peripheral neuropathy — Wikipedia: https://en.wikipedia.org/wiki/Peripheral_neuropathy
- Service Topic 2: Pain management — Wikipedia: https://en.wikipedia.org/wiki/Pain_management
- Service Topic 3: Platelet-rich plasma — Wikipedia: https://en.wikipedia.org/wiki/Platelet-rich_plasma

## Condition Topic Entities
- Condition 1: Peripheral neuropathy — Wikipedia: https://en.wikipedia.org/wiki/Peripheral_neuropathy
- Condition 2: Knee pain (Osteoarthritis) — Wikipedia: https://en.wikipedia.org/wiki/Osteoarthritis
- Condition 3: Sciatica — Wikipedia: https://en.wikipedia.org/wiki/Sciatica

## Business Profile URLs (sameAs Stacking)
- Google Business Profile (share URL): PENDING
- Google Maps CID URL: PENDING (inject into Organization.sameAs AND LocalBusiness.sameAs once approved)
- Facebook: https://www.facebook.com/p/Morningstar-Neuropathy-Pain-Treatment-Center-St-Peters-100070536960997/
- Instagram: PENDING — check with client
- LinkedIn: PENDING — check with client
- YouTube: PENDING — check with client
- CareCredit Directory: https://www.carecredit.com/doctor-locator/st-peters-mo/morningstar-neuropathy-pain-treatment-center-llc-854dgw/
- NPI Registry: https://npiregistry.cms.hhs.gov/provider-view/1073184248
- Birdeye: https://reviews.birdeye.com/morningstar-neuropathy-pain-treatment-center-llc-168923824805952
- Wikidata entry: N/A

## Review Data (Semantic-Filtered — PENDING Administrator Approval)

### Verbatim Reviews — Administrator-Provided (from GBP)

4 verbatim reviews provided by administrator. Semantic page bindings assigned below.

#### Review 1 — Brenda Landers
- **Verbatim text:** "I found out I had neuropathy in my feet. I had no idea where to go. I Googled neuropathy places and came across Morningstar. I am so thankful I did! I felt welcome the 1st time I went there. When I first started treatments, they had to wheel me in from the car to the treatment room in a wheelchair. I have been going for about 2 months. I went from arriving in a wheelchair to walking with a cane! Marvelous improvement from not being able to walk at all. I owe all this to the wonderful staff of Morningstar! I love these people, Heather, Mandy, Rochelle, Brad and Ron. They are such caring people. Please give them a try if you need help with neuropathy."
- **Service/Condition mentioned:** Neuropathy treatment (dramatic outcome — wheelchair to cane)
- **Schema page binding:** `/pain-management/neuropathy-treatment/` (TherapeuticProcedure.review)
- **Secondary binding:** `/conditions/neuropathy/` (contextual testimonial in body)
- **Status:** APPROVED — verbatim text confirmed

#### Review 2 — John Brantley
- **Verbatim text:** "I have had two separate rounds of treatment done with the team at Morningstar. First, I had hyaluronic acid gel injections done on my knee. My pain went from an 8/10 to at most a 2/10. Great success if you ask me! Kay's bedside manner is absolutely wonderful and the admin staff made me feel welcomed and stress-free. After I finished with my knee, I did PRP treatments to both of my shoulders. My shoulders have been very weak and causing me a lot of pain due to what I do for a living, and this has been the only thing to help so far. Definitely helped me avoid shoulder surgery and now my pain is maybe a 2/10 on a bad day! These people work absolute miracles for non-invasive pain management options, and I recommend them hands down to anyone looking for relief! 5 stars!"
- **Service/Condition mentioned:** Hyaluronic acid injections (knee, 8→2 pain scale), PRP therapy (shoulders, avoided surgery)
- **Schema page binding (primary):** `/regenerative-medicine/hyaluronic-acid-injections/` (TherapeuticProcedure.review)
- **Schema page binding (secondary):** `/regenerative-medicine/platelet-rich-plasma-therapy/` (TherapeuticProcedure.review)
- **Tertiary binding:** `/conditions/knee-pain/` (contextual testimonial in body)
- **Status:** APPROVED — verbatim text confirmed

#### Review 3 — Arthur Brewer
- **Verbatim text:** "I had neuropathy in my feet and now it's about gone with the treatment they're giving me and they do actually work. They know what they're doing this is a very good place if you have neuropathy. The treatments are helping very much so and I really love it's starting to help."
- **Service/Condition mentioned:** Neuropathy treatment (feet, "about gone")
- **Schema page binding:** `/conditions/neuropathy/` (MedicalCondition page — contextual testimonial)
- **Secondary binding:** `/pain-management/neuropathy-treatment/` (contextual testimonial in body)
- **Status:** APPROVED — verbatim text confirmed

#### Review 4 — Clyde Steese
- **Verbatim text:** "The people working here are fantastic. They are great help with everything. The treatments were just fantastic. They started off slow but then they started picking up and they have finished and I am 100% very very happy with everything. Thank you so very much the end."
- **Service/Condition mentioned:** General positive (no specific service named)
- **Schema page binding:** Homepage (LocalBusiness.review — general practice endorsement)
- **Status:** APPROVED — verbatim text confirmed

### Semantic Review Binding Summary

| Page | Reviews Bound | Reviewer(s) |
|------|--------------|-------------|
| Homepage (LocalBusiness.review) | 1 | Clyde Steese |
| `/pain-management/neuropathy-treatment/` | 2 | Brenda Landers (primary), Arthur Brewer (secondary) |
| `/regenerative-medicine/hyaluronic-acid-injections/` | 1 | John Brantley (primary — knee HA) |
| `/regenerative-medicine/platelet-rich-plasma-therapy/` | 1 | John Brantley (secondary — shoulder PRP) |
| `/conditions/neuropathy/` | 2 | Arthur Brewer (primary), Brenda Landers (secondary) |
| `/conditions/knee-pain/` | 1 | John Brantley (tertiary — knee HA outcome) |

### Still Pending (from client-brief.md — not yet provided verbatim)

| Reviewer | Topic | Proposed Binding | Status |
|----------|-------|-----------------|--------|
| Deb Schneider | Medical weight loss (223.6 → 150.4 lbs) | `/medical-weight-loss/` | PENDING verbatim text |
| Leah Dubin | Non-invasive treatments | Homepage (LocalBusiness) | PENDING verbatim text |
| Tarak Patel | Positive / staff mentioned | Homepage (LocalBusiness) | PENDING verbatim text |
| Marilyn Adams-Hayden | General positive | Homepage (LocalBusiness) | PENDING verbatim text |

### CRITICAL: Fabricated Reviews Must Be Removed
The existing `/testimonials` page contains fabricated reviews (Sarah M., Robert T., Linda K., James W., Patricia D.). These are NOT real GBP reviews. They must be replaced with administrator-approved verbatim reviews or the page must be removed. Zero fabrication rule applies.

## Insurance / Payment Data
- Accepted insurance plans: Major medical insurance (specific plan list TBD from client)
- Workers comp accepted: Unknown — verify with client
- Auto accident billing: Unknown — verify with client
- Payment methods: CareCredit (confirmed via directory listing), other methods TBD
- CareCredit listing: https://www.carecredit.com/doctor-locator/st-peters-mo/morningstar-neuropathy-pain-treatment-center-llc-854dgw/

## Local Health Signal
- Signal: High prevalence of peripheral neuropathy and arthritic joint conditions in adults 45-65 in the St. Charles County / western St. Louis metro area. Sedentary suburban lifestyles + aging population drive demand for non-surgical pain relief.
- Relevance: Directly maps to the practice's core services (neuropathy treatment, joint injections, regenerative therapy). Patient avatar: adults wanting to "get back to the life you love" — family time, active hobbies, daily independence.
- Usage: Homepage hero messaging, service page intros, condition page epidemiology sections, blog posts, GBP posts.

## llms.txt Content (Tech Builder uses these verbatim)

- positioning_statement: "Morning Star Neuropathy & Pain Treatment Center provides advanced non-surgical neuropathy treatment, regenerative therapy, and chronic pain management for adults in St. Peters, MO and the greater St. Louis area."
- about_paragraph: "Morning Star Neuropathy & Pain Treatment Center is located in St. Peters, Missouri, serving patients throughout St. Charles County and the St. Louis metropolitan area. The clinic specializes in non-surgical neuropathy treatment, regenerative therapies including PRP and exosome therapy, hyaluronic acid injections, neuromodulation, and medically supervised weight loss using semaglutide and tirzepatide."
- service_area_description: "St. Peters, Missouri. Service radius: 25 miles. Serving St. Peters, O'Fallon, St. Charles, Wentzville, Lake St. Louis, Cottleville, Dardenne Prairie, and the greater St. Louis metro area."
- service_one_liners:
  - service: "Neuropathy Treatment"
    one_line: "Customized treatment plans to restore peripheral nerve health and relieve neuropathic pain."
    url: /pain-management/neuropathy-treatment/
  - service: "Chronic Pain Management"
    one_line: "Personalized pain management combining regenerative, neuromodulation, and lifestyle therapies."
    url: /pain-management/chronic-pain-management/
  - service: "Neuromodulation Technique"
    one_line: "Controlled electrical stimulation to restore nerve function and reduce chronic pain signals."
    url: /pain-management/neuromodulation-technique/
  - service: "Regenerative Therapy"
    one_line: "Exosome-based treatments that reduce inflammation and support cellular tissue repair."
    url: /regenerative-medicine/regenerative-therapy/
  - service: "Platelet Rich Plasma Therapy"
    one_line: "PRP injections using your own platelets to accelerate joint and soft tissue healing."
    url: /regenerative-medicine/platelet-rich-plasma-therapy/
  - service: "Hyaluronic Acid Injections"
    one_line: "Minimally invasive joint lubrication injections for improved mobility and pain relief."
    url: /regenerative-medicine/hyaluronic-acid-injections/
  - service: "Medical Weight Loss"
    one_line: "Medically supervised weight loss using semaglutide and tirzepatide for lasting results."
    url: /medical-weight-loss/
- booking_url: https://morningstarregmed.com/schedule-appointment/
