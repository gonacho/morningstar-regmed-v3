#!/usr/bin/env node
/**
 * Injects MedicalCondition + MedicalWebPage + BreadcrumbList schema
 * into each condition page.
 *
 * Run: node scripts/add-condition-schema.js
 */

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const ROOT = new URL('..', import.meta.url).pathname;

const conditions = [
  {
    path: 'src/pages/conditions/neuropathy/index.astro',
    conditionId: 'condition-neuropathy',
    name: 'Peripheral Neuropathy',
    description:
      'Peripheral neuropathy causes nerve damage leading to numbness, tingling, and pain, most often in the feet and hands. Learn about causes, symptoms, and treatment options in St. Peters, MO.',
    url: 'https://morningstarregmed.com/conditions/neuropathy/',
    possibleTreatments: [
      'service-neuropathy-treatment',
      'service-neuromodulation-technique',
      'service-regenerative-therapy',
    ],
    causes: ['Diabetes mellitus', 'Autoimmune disorders', 'Nutritional deficiencies', 'Certain medications', 'Physical trauma'],
    signOrSymptom: ['Numbness in feet and hands', 'Burning sensation', 'Tingling', 'Muscle weakness', 'Balance problems'],
    associatedAnatomy: 'Peripheral nervous system',
    riskFactor: ['Diabetes', 'Alcohol use disorder', 'Vitamin B12 deficiency', 'Chemotherapy'],
    breadcrumbs: [
      { name: 'Home', url: 'https://morningstarregmed.com' },
      { name: 'Conditions', url: 'https://morningstarregmed.com/conditions/' },
      { name: 'Neuropathy', url: 'https://morningstarregmed.com/conditions/neuropathy/' },
    ],
  },
  {
    path: 'src/pages/conditions/knee-pain/index.astro',
    conditionId: 'condition-knee-pain',
    name: 'Knee Pain',
    description:
      'Knee pain from arthritis, injury, or degeneration affects daily mobility. Discover non-surgical treatment options available in St. Peters, MO.',
    url: 'https://morningstarregmed.com/conditions/knee-pain/',
    possibleTreatments: [
      'service-platelet-rich-plasma-therapy',
      'service-hyaluronic-acid-injections',
      'service-regenerative-therapy',
    ],
    causes: ['Osteoarthritis', 'Meniscus tear', 'Ligament injury', 'Bursitis', 'Patellar tendinitis'],
    signOrSymptom: ['Joint pain', 'Swelling', 'Stiffness', 'Reduced range of motion', 'Clicking or popping'],
    associatedAnatomy: 'Knee joint',
    riskFactor: ['Overweight', 'Age over 45', 'Prior knee injury', 'Repetitive stress activities'],
    breadcrumbs: [
      { name: 'Home', url: 'https://morningstarregmed.com' },
      { name: 'Conditions', url: 'https://morningstarregmed.com/conditions/' },
      { name: 'Knee Pain', url: 'https://morningstarregmed.com/conditions/knee-pain/' },
    ],
  },
  {
    path: 'src/pages/conditions/back-pain/index.astro',
    conditionId: 'condition-back-pain',
    name: 'Back Pain',
    description:
      'Chronic back pain affects millions of adults. Learn about causes, symptoms, and non-surgical back pain treatment options in St. Peters, MO.',
    url: 'https://morningstarregmed.com/conditions/back-pain/',
    possibleTreatments: [
      'service-regenerative-therapy',
      'service-chronic-pain-management',
      'service-platelet-rich-plasma-therapy',
    ],
    causes: ['Herniated disc', 'Degenerative disc disease', 'Muscle strain', 'Spinal stenosis', 'Osteoarthritis'],
    signOrSymptom: ['Lower back pain', 'Radiating leg pain', 'Muscle spasm', 'Limited mobility', 'Pain when sitting'],
    associatedAnatomy: 'Lumbar spine',
    riskFactor: ['Sedentary lifestyle', 'Poor posture', 'Age', 'Overweight', 'Heavy lifting'],
    breadcrumbs: [
      { name: 'Home', url: 'https://morningstarregmed.com' },
      { name: 'Conditions', url: 'https://morningstarregmed.com/conditions/' },
      { name: 'Back Pain', url: 'https://morningstarregmed.com/conditions/back-pain/' },
    ],
  },
  {
    path: 'src/pages/conditions/neck-pain/index.astro',
    conditionId: 'condition-neck-pain',
    name: 'Neck Pain',
    description:
      'Neck pain from muscle strain, disc issues, or nerve compression can disrupt daily life. Explore non-surgical neck pain treatment in St. Peters, MO.',
    url: 'https://morningstarregmed.com/conditions/neck-pain/',
    possibleTreatments: [
      'service-neuromodulation-technique',
      'service-chronic-pain-management',
    ],
    causes: ['Muscle strain', 'Cervical disc herniation', 'Osteoarthritis', 'Poor posture', 'Whiplash injury'],
    signOrSymptom: ['Neck stiffness', 'Radiating arm pain', 'Headache', 'Shoulder pain', 'Numbness in arms'],
    associatedAnatomy: 'Cervical spine',
    riskFactor: ['Desk work', 'Poor posture', 'Prior neck injury', 'Age'],
    breadcrumbs: [
      { name: 'Home', url: 'https://morningstarregmed.com' },
      { name: 'Conditions', url: 'https://morningstarregmed.com/conditions/' },
      { name: 'Neck Pain', url: 'https://morningstarregmed.com/conditions/neck-pain/' },
    ],
  },
  {
    path: 'src/pages/conditions/joint-pain/index.astro',
    conditionId: 'condition-joint-pain',
    name: 'Joint Pain',
    description:
      'Joint pain from arthritis or wear and tear limits daily activity. Explore non-surgical joint pain treatment options at Morning Star in St. Peters, MO.',
    url: 'https://morningstarregmed.com/conditions/joint-pain/',
    possibleTreatments: [
      'service-platelet-rich-plasma-therapy',
      'service-hyaluronic-acid-injections',
      'service-regenerative-therapy',
    ],
    causes: ['Osteoarthritis', 'Rheumatoid arthritis', 'Bursitis', 'Gout', 'Joint injury'],
    signOrSymptom: ['Joint stiffness', 'Swelling', 'Warmth at joint', 'Reduced range of motion', 'Aching pain'],
    associatedAnatomy: 'Synovial joints',
    riskFactor: ['Age', 'Prior joint injury', 'Overweight', 'Family history of arthritis'],
    breadcrumbs: [
      { name: 'Home', url: 'https://morningstarregmed.com' },
      { name: 'Conditions', url: 'https://morningstarregmed.com/conditions/' },
      { name: 'Joint Pain', url: 'https://morningstarregmed.com/conditions/joint-pain/' },
    ],
  },
  {
    path: 'src/pages/conditions/sciatica/index.astro',
    conditionId: 'condition-sciatica',
    name: 'Sciatica',
    description:
      'Sciatica causes shooting leg pain from a compressed sciatic nerve. Discover non-surgical sciatica treatment options in St. Peters, MO.',
    url: 'https://morningstarregmed.com/conditions/sciatica/',
    possibleTreatments: [
      'service-neuromodulation-technique',
      'service-chronic-pain-management',
      'service-regenerative-therapy',
    ],
    causes: ['Herniated lumbar disc', 'Spinal stenosis', 'Piriformis syndrome', 'Degenerative disc disease'],
    signOrSymptom: ['Shooting leg pain', 'Numbness in leg or foot', 'Tingling', 'Weakness in leg', 'Pain when sitting'],
    associatedAnatomy: 'Sciatic nerve',
    riskFactor: ['Age 30-50', 'Sedentary lifestyle', 'Prolonged sitting', 'Obesity', 'Diabetes'],
    breadcrumbs: [
      { name: 'Home', url: 'https://morningstarregmed.com' },
      { name: 'Conditions', url: 'https://morningstarregmed.com/conditions/' },
      { name: 'Sciatica', url: 'https://morningstarregmed.com/conditions/sciatica/' },
    ],
  },
];

const schemaImports = `import MedicalConditionSchema from '@/components/schemas/MedicalConditionSchema.astro';
import MedicalWebPageSchema from '@/components/schemas/MedicalWebPageSchema.astro';
import BreadcrumbSchema from '@/components/schemas/BreadcrumbSchema.astro';
import FAQPageSchema from '@/components/schemas/FAQPageSchema.astro';`;

for (const cond of conditions) {
  const fullPath = join(ROOT, cond.path);
  let content = readFileSync(fullPath, 'utf8');

  if (content.includes('MedicalConditionSchema')) {
    console.log(`SKIP (already done): ${cond.path}`);
    continue;
  }

  // Check if file exists and has faqs variable
  const hasFaqs = content.includes('const faqs');

  content = content.replace(
    /import BaseLayout from '@\/layouts\/BaseLayout\.astro';/,
    `import BaseLayout from '@/layouts/BaseLayout.astro';
${schemaImports}`
  );

  // Remove old inline faqSchema if present
  content = content.replace(
    /\n\nconst faqSchema = JSON\.stringify\(\{[\s\S]*?\}\);\n---/,
    '\n---'
  );

  // Remove old jsonLd prop from BaseLayout opening tag
  content = content.replace(
    /<BaseLayout title=\{title\} description=\{description\}[^>]*>/,
    `<BaseLayout title={title} description={description}>`
  );

  // Build schema fragment
  const possibleTreatmentsProp = cond.possibleTreatments.length > 0
    ? `possibleTreatments={${JSON.stringify(cond.possibleTreatments)}}`
    : '';
  const causesProp = cond.causes
    ? `causes={${JSON.stringify(cond.causes)}}`
    : '';
  const signOrSymptomProp = cond.signOrSymptom
    ? `signOrSymptom={${JSON.stringify(cond.signOrSymptom)}}`
    : '';
  const anatomyProp = cond.associatedAnatomy
    ? `associatedAnatomy="${cond.associatedAnatomy}"`
    : '';
  const riskProp = cond.riskFactor && cond.riskFactor.length > 0
    ? `riskFactor={${JSON.stringify(cond.riskFactor)}}`
    : '';

  const faqsProp = hasFaqs ? 'faqs={faqs}' : 'faqs={[]}';

  const schemaFragment = `  <Fragment slot="head">
    <MedicalConditionSchema
      id="${cond.conditionId}"
      name="${cond.name}"
      description="${cond.description}"
      url="${cond.url}"
      publishDate="2024-01-01"
      lastEdited="2025-05-13"
      ${possibleTreatmentsProp}
      ${causesProp}
      ${signOrSymptomProp}
      ${anatomyProp}
      ${riskProp}
    />
    <MedicalWebPageSchema
      url="${cond.url}"
      name={title}
      description={description}
      publishDate="2024-01-01"
      lastEdited="2025-05-13"
      mainEntityId="https://morningstarregmed.com/#${cond.conditionId}"
      aspect="Symptom"
    />
    <BreadcrumbSchema items={${JSON.stringify(cond.breadcrumbs)}} />
    <FAQPageSchema ${faqsProp} />
  </Fragment>`;

  content = content.replace(
    /<BaseLayout title=\{title\} description=\{description\}>\n/,
    `<BaseLayout title={title} description={description}>\n${schemaFragment}\n`
  );

  writeFileSync(fullPath, content, 'utf8');
  console.log(`UPDATED: ${cond.path}`);
}

console.log('\nDone! All condition pages updated with schema.');
