# Image Manifest — Morningstar Neuropathy & Pain Treatment Center

## Build Type: migration (selective)

## Brand Variables (substituted into all prompts)
- {city}: St. Peters
- {state}: Missouri
- {primary_gbp_category}: Medical clinic
- {specialty_descriptor}: neuropathy and pain treatment
- {hex_primary}: PENDING (brand colors TBD from client — current site uses navy blue)
- {hex_accent}: PENDING (brand colors TBD — current site uses sky blue)
- {design_personality}: Warm
- {tone}: Professional + Warm
- {regional_setting}: Midwest suburban — tree-lined streets, brick commercial buildings, green parks, family neighborhoods
- {time_of_day}: soft mid-morning
- {patient_demographics}: Adults 45-65, mixed gender, suburban Midwestern families

> **Note:** Brand hex codes are pending from client (not blocking architecture, needed before image generation). Current site palette appears to be navy blue + sky blue. Substitute actual hex codes once confirmed.

## REUSE Section (from existing migration)

No Grade A images identified in the existing Astro build — the current site uses no photographic images (text-only with SVG icons and Tailwind CSS styling). All image slots require fresh generation.

## EDIT Section

No Grade B images to edit — no existing photographic assets.

## GENERATE Section (new images — POST /v1/images/generations)

### Homepage Hero
- target: /public/images/homepage/medical-clinic-st-peters-mo-hero.webp
  api: gpt-image-2-generations
  model_snapshot: gpt-image-2-2026-04-21
  size: 1920x1080
  quality: high
  prompt: |
    Professional medical clinic interior in a warm, inviting Midwest suburban setting. A modern treatment room with natural light streaming through windows, showing comfortable patient seating and clean medical equipment. The scene conveys trust and warmth — soft earth tones with navy blue accents. {hex_primary} tint on medical cabinetry. No faces visible, focus on the welcoming environment. Photorealistic, editorial healthcare photography style. Soft mid-morning light.
  alt_text: "Neuropathy and pain treatment clinic interior in St. Peters, Missouri"

### Category Page Heroes

#### Pain Management Hub
- target: /public/images/pain-management/pain-management-st-peters-mo-hero.webp
  api: gpt-image-2-generations
  size: 1920x1080
  quality: high
  prompt: |
    Close-up of a medical professional's hands gently examining a patient's lower back in a clean, modern treatment room. Warm lighting, professional setting, conveying care and expertise. Navy blue medical scrubs. No faces visible. Photorealistic healthcare photography. Midwest clinic aesthetic with warm wood accents.
  alt_text: "Pain management treatment at Morning Star clinic in St. Peters, MO"

#### Regenerative Medicine Hub
- target: /public/images/regenerative-medicine/regenerative-medicine-st-peters-mo-hero.webp
  api: gpt-image-2-generations
  size: 1920x1080
  quality: high
  prompt: |
    Close-up of a medical centrifuge processing blood sample in a clean regenerative medicine lab setting. PRP tubes visible with golden platelet-rich plasma separated. Modern medical equipment, warm ambient lighting. Professional, clinical yet inviting atmosphere. Photorealistic, editorial medical photography.
  alt_text: "Regenerative medicine lab at Morning Star clinic in St. Peters, MO"

### Service Page Heroes

#### Neuropathy Treatment
- target: /public/images/pain-management/neuropathy-treatment-st-peters-mo.webp
  api: gpt-image-2-generations
  size: 1600x900
  quality: high
  prompt: |
    Medical professional's hands performing a nerve conduction assessment on a patient's foot in a modern clinic. Diagnostic equipment visible. Warm, professional setting with navy blue accents. No faces visible. Photorealistic healthcare photography. Focus on the careful, attentive treatment approach.
  alt_text: "Neuropathy treatment nerve assessment in St. Peters, MO"

#### Chronic Pain Management
- target: /public/images/pain-management/chronic-pain-management-st-peters-mo.webp
  api: gpt-image-2-generations
  size: 1600x900
  quality: high
  prompt: |
    Patient consultation scene in a warm medical office. Medical provider and patient seated across a desk reviewing a treatment plan document. Soft natural light, modern clinic interior with warm wood and navy accents. Shot from behind/side angle, no clear faces. Conveys personalized care and trust. Photorealistic.
  alt_text: "Chronic pain management consultation in St. Peters, MO"

#### Neuromodulation Technique
- target: /public/images/pain-management/neuromodulation-technique-st-peters-mo.webp
  api: gpt-image-2-generations
  size: 1600x900
  quality: high
  prompt: |
    Close-up of electrical nerve stimulation device being applied to a patient's lower extremity in a clinical setting. Small electrode pads visible on skin. Modern treatment room with clean surfaces and warm lighting. Professional medical atmosphere. No faces visible. Photorealistic healthcare photography.
  alt_text: "Neuromodulation nerve stimulation therapy in St. Peters, MO"

#### Regenerative Therapy
- target: /public/images/regenerative-medicine/regenerative-therapy-st-peters-mo.webp
  api: gpt-image-2-generations
  size: 1600x900
  quality: high
  prompt: |
    Medical professional preparing an exosome therapy injection in a modern regenerative medicine clinic. Sterile vials and medical instruments on a clean tray. Warm, professional environment with natural light. Navy blue medical attire. No faces visible. Photorealistic, editorial medical photography.
  alt_text: "Regenerative exosome therapy preparation in St. Peters, MO"

#### PRP Therapy
- target: /public/images/regenerative-medicine/platelet-rich-plasma-therapy-st-peters-mo.webp
  api: gpt-image-2-generations
  size: 1600x900
  quality: high
  prompt: |
    Close-up of golden PRP (platelet-rich plasma) in a syringe being prepared for injection. Centrifuge and blood collection tubes visible in background. Clean medical setting with warm lighting. Focus on the concentrated golden plasma. Professional, clinical atmosphere. Photorealistic medical photography.
  alt_text: "Platelet-rich plasma PRP therapy in St. Peters, MO"

#### Hyaluronic Acid Injections
- target: /public/images/regenerative-medicine/hyaluronic-acid-injections-st-peters-mo.webp
  api: gpt-image-2-generations
  size: 1600x900
  quality: high
  prompt: |
    Medical professional performing a knee injection on a patient in a treatment room. Gloved hands carefully administering the injection into the knee joint area. Clean, modern clinic environment with warm lighting. No faces visible. Conveys precision and gentle care. Photorealistic healthcare photography.
  alt_text: "Hyaluronic acid knee injection treatment in St. Peters, MO"

#### Medical Weight Loss
- target: /public/images/medical-weight-loss/medical-weight-loss-st-peters-mo.webp
  api: gpt-image-2-generations
  size: 1600x900
  quality: high
  prompt: |
    Medical consultation scene for a weight loss program. Provider and patient reviewing health metrics on a tablet in a warm, modern medical office. Healthy lifestyle elements subtly visible — water bottle, nutrition guide. Professional, supportive atmosphere. No clear faces. Navy blue accents. Photorealistic.
  alt_text: "Medical weight loss program consultation in St. Peters, MO"

### Condition Page Heroes (anatomical illustrations)

#### Neuropathy
- target: /public/images/conditions/neuropathy-st-peters-mo-illustration.webp
  api: gpt-image-2-generations
  size: 1600x900
  quality: high
  prompt: |
    Clean medical illustration of peripheral nerve anatomy in the foot and lower leg. Detailed cross-section showing healthy nerve fibers alongside damaged/inflamed nerve fibers. Educational anatomical style with navy blue and warm gold color palette. White background. Professional medical illustration quality. Labels optional.
  alt_text: "Peripheral neuropathy nerve damage illustration"

#### Knee Pain
- target: /public/images/conditions/knee-pain-st-peters-mo-illustration.webp
  api: gpt-image-2-generations
  size: 1600x900
  quality: high
  prompt: |
    Medical illustration of knee joint anatomy showing cartilage wear, meniscus, and joint fluid. Cross-section view highlighting areas of osteoarthritis damage and inflammation. Clean, educational style with navy blue and warm gold color palette. White background. Professional anatomical illustration.
  alt_text: "Knee pain and osteoarthritis anatomy illustration"

#### Back Pain
- target: /public/images/conditions/back-pain-st-peters-mo-illustration.webp
  api: gpt-image-2-generations
  size: 1600x900
  quality: high
  prompt: |
    Medical illustration of lumbar spine anatomy showing a herniated disc compressing a spinal nerve. Side profile cross-section with vertebrae, discs, and nerve roots clearly visible. Educational anatomical style with navy blue and warm gold color palette. White background. Professional medical illustration.
  alt_text: "Back pain herniated disc spinal anatomy illustration"

#### Neck Pain
- target: /public/images/conditions/neck-pain-st-peters-mo-illustration.webp
  api: gpt-image-2-generations
  size: 1600x900
  quality: high
  prompt: |
    Medical illustration of cervical spine anatomy showing muscle tension and nerve compression. Side profile view of neck vertebrae with stressed muscles highlighted. Educational anatomical style with navy blue and warm gold color palette. White background. Professional medical illustration.
  alt_text: "Neck pain cervical spine anatomy illustration"

#### Joint Pain
- target: /public/images/conditions/joint-pain-st-peters-mo-illustration.webp
  api: gpt-image-2-generations
  size: 1600x900
  quality: high
  prompt: |
    Medical illustration of a shoulder joint showing cartilage degradation and synovial inflammation. Cross-section with healthy vs damaged cartilage comparison. Educational anatomical style with navy blue and warm gold color palette. White background. Professional medical illustration quality.
  alt_text: "Joint pain and arthritis anatomy illustration"

#### Sciatica
- target: /public/images/conditions/sciatica-st-peters-mo-illustration.webp
  api: gpt-image-2-generations
  size: 1600x900
  quality: high
  prompt: |
    Medical illustration showing the sciatic nerve pathway from lumbar spine through hip and down the leg. Highlighted compression point at the lower back with radiating pain path indicated. Educational anatomical style with navy blue and warm gold color palette. White background. Professional medical illustration.
  alt_text: "Sciatica sciatic nerve pathway anatomy illustration"

### Standard Page Images

#### New Patient Page
- target: /public/images/new-patients/new-patients-st-peters-mo.webp
  api: gpt-image-2-generations
  size: 1600x900
  quality: high
  prompt: |
    Welcoming medical clinic reception area with a friendly front desk. Clean, modern waiting room with comfortable seating, warm lighting, and navy blue accent colors. Plant and natural elements visible. Conveys a calming, patient-friendly first impression. No faces visible. Photorealistic healthcare photography. Midwest clinic aesthetic.
  alt_text: "Morning Star clinic reception area for new patients in St. Peters, MO"

#### About Page
- target: /public/images/about/about-morning-star-st-peters-mo.webp
  api: gpt-image-2-generations
  size: 1600x900
  quality: high
  prompt: |
    Exterior establishing shot of a professional medical clinic building in a suburban Midwest setting. Clean modern architecture with brick and glass elements. Landscaped entrance with trees, well-maintained parking area. Morning light. Professional signage area (no text rendered). Warm, inviting curb appeal. Photorealistic.
  alt_text: "Morning Star Neuropathy & Pain Treatment Center exterior in St. Peters, MO"

### GBP Post Imagery (12 posts for 90-day calendar)

All GBP posts use 1080x1080 square format, medium quality.

- Week 1: /public/images/gbp-posts/week-01-neuropathy-signs.webp — nerve health awareness graphic
- Week 2: /public/images/gbp-posts/week-02-prp-healing.webp — PRP therapy golden plasma visual
- Week 3: /public/images/gbp-posts/week-03-knee-pain-options.webp — knee joint care scene
- Week 4: /public/images/gbp-posts/week-04-neuromodulation.webp — nerve stimulation device
- Week 5: /public/images/gbp-posts/week-05-weight-loss.webp — healthy lifestyle consultation
- Week 6: /public/images/gbp-posts/week-06-exosome-therapy.webp — regenerative medicine lab
- Week 7: /public/images/gbp-posts/week-07-back-pain.webp — spine care professional scene
- Week 8: /public/images/gbp-posts/week-08-ha-injections.webp — joint injection treatment
- Week 9: /public/images/gbp-posts/week-09-sciatica.webp — sciatic nerve educational
- Week 10: /public/images/gbp-posts/week-10-pain-management.webp — patient consultation
- Week 11: /public/images/gbp-posts/week-11-joint-pain.webp — joint health awareness
- Week 12: /public/images/gbp-posts/week-12-first-visit.webp — welcoming clinic scene

Each will use TEMPLATE 9 from gpt-image-2 skill with brand variables substituted once hex codes are confirmed.

## Total Image Count
- Reuse (no API call): 0
- Edit (GPT-image-2 edits API): 0
- Generate (GPT-image-2 generations API): 26
  - Homepage hero: 1
  - Category heroes: 2
  - Service heroes: 7
  - Condition illustrations: 6
  - Standard pages: 2
  - GBP posts: 12 (medium quality, 1080x1080 — estimated $0.04 each)
  - Comparison pages: 0
  - Provider pages: 0
- TOTAL: 26 images
- Estimated cost: ~$2.00 (14 high-quality 1600+ images × $0.08 + 12 medium-quality 1080×1080 × $0.04 = $1.12 + $0.48 = $1.60, rounded up for safety)

> **Blocked on:** Brand hex codes from client. Image generation cannot proceed until `{hex_primary}` and `{hex_accent}` are confirmed. Prompts above use placeholder "navy blue" descriptions.
