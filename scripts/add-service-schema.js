#!/usr/bin/env node
/**
 * Injects TherapeuticProcedure + MedicalWebPage + BreadcrumbList schema
 * into each service page, replacing the inline faqSchema pattern.
 *
 * Run: node scripts/add-service-schema.js
 */

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const ROOT = new URL('..', import.meta.url).pathname;

const services = [
  {
    path: 'src/pages/pain-management/neuropathy-treatment/index.astro',
    serviceId: 'service-neuropathy-treatment',
    name: 'Neuropathy Treatment',
    description:
      'Customized neuropathy treatment plans to restore peripheral nerve health, relieve pain, and improve mobility.',
    url: 'https://morningstarregmed.com/pain-management/neuropathy-treatment/',
    breadcrumbs: [
      { name: 'Home', url: 'https://morningstarregmed.com' },
      { name: 'Pain Management', url: 'https://morningstarregmed.com/pain-management/' },
      { name: 'Neuropathy Treatment', url: 'https://morningstarregmed.com/pain-management/neuropathy-treatment/' },
    ],
    indication: ['condition-neuropathy'],
    bodyLocation: ['feet', 'hands', 'peripheral nerves'],
    reviews: [
      {
        author: 'Brenda Landers',
        datePublished: '2024-01-01',
        reviewBody:
          'I found out I had neuropathy in my feet. I had no idea where to go. I Googled neuropathy places and came across Morningstar. I am so thankful I did! I felt welcome the 1st time I went there. When I first started treatments, they had to wheel me in from the car to the treatment room in a wheelchair. I have been going for about 2 months. I went from arriving in a wheelchair to walking with a cane! Marvelous improvement from not being able to walk at all. I owe all this to the wonderful staff of Morningstar! I love these people, Heather, Mandy, Rochelle, Brad and Ron. They are such caring people. Please give them a try if you need help with neuropathy.',
        ratingValue: '5',
      },
      {
        author: 'Arthur Brewer',
        datePublished: '2024-01-01',
        reviewBody:
          'I had neuropathy in my feet and now it\'s about gone with the treatment they\'re giving me and they do actually work. They know what they\'re doing this is a very good place if you have neuropathy. The treatments are helping very much so and I really love it\'s starting to help.',
        ratingValue: '5',
      },
    ],
    aggregateRating: { ratingValue: '5', reviewCount: '2' },
  },
  {
    path: 'src/pages/pain-management/chronic-pain-management/index.astro',
    serviceId: 'service-chronic-pain-management',
    name: 'Chronic Pain Management',
    description:
      'Personalized chronic pain management combining regenerative, neuromodulation, and lifestyle therapies for lasting relief.',
    url: 'https://morningstarregmed.com/pain-management/chronic-pain-management/',
    breadcrumbs: [
      { name: 'Home', url: 'https://morningstarregmed.com' },
      { name: 'Pain Management', url: 'https://morningstarregmed.com/pain-management/' },
      { name: 'Chronic Pain Management', url: 'https://morningstarregmed.com/pain-management/chronic-pain-management/' },
    ],
    indication: ['condition-back-pain', 'condition-neck-pain', 'condition-sciatica'],
    bodyLocation: ['back', 'neck', 'spine'],
  },
  {
    path: 'src/pages/pain-management/neuromodulation-technique/index.astro',
    serviceId: 'service-neuromodulation-technique',
    name: 'Neuromodulation Technique',
    description:
      'Non-invasive neuromodulation therapy using controlled electrical stimulation to restore nerve function and reduce chronic pain signals.',
    url: 'https://morningstarregmed.com/pain-management/neuromodulation-technique/',
    breadcrumbs: [
      { name: 'Home', url: 'https://morningstarregmed.com' },
      { name: 'Pain Management', url: 'https://morningstarregmed.com/pain-management/' },
      { name: 'Neuromodulation Technique', url: 'https://morningstarregmed.com/pain-management/neuromodulation-technique/' },
    ],
    indication: ['condition-neuropathy', 'condition-neck-pain', 'condition-sciatica'],
    bodyLocation: ['peripheral nerves', 'spinal cord'],
  },
  {
    path: 'src/pages/regenerative-medicine/regenerative-therapy/index.astro',
    serviceId: 'service-regenerative-therapy',
    name: 'Regenerative Therapy',
    description:
      'Exosome-based regenerative therapy that reduces inflammation and supports cellular tissue repair for joints, nerves, and soft tissue.',
    url: 'https://morningstarregmed.com/regenerative-medicine/regenerative-therapy/',
    breadcrumbs: [
      { name: 'Home', url: 'https://morningstarregmed.com' },
      { name: 'Regenerative Medicine', url: 'https://morningstarregmed.com/regenerative-medicine/' },
      { name: 'Regenerative Therapy', url: 'https://morningstarregmed.com/regenerative-medicine/regenerative-therapy/' },
    ],
    indication: ['condition-neuropathy', 'condition-knee-pain', 'condition-back-pain', 'condition-joint-pain'],
    bodyLocation: ['joints', 'soft tissue', 'peripheral nerves'],
  },
  {
    path: 'src/pages/regenerative-medicine/platelet-rich-plasma-therapy/index.astro',
    serviceId: 'service-platelet-rich-plasma-therapy',
    name: 'Platelet Rich Plasma Therapy',
    description:
      'PRP therapy using your own platelets to accelerate joint healing and soft tissue repair without surgery.',
    url: 'https://morningstarregmed.com/regenerative-medicine/platelet-rich-plasma-therapy/',
    breadcrumbs: [
      { name: 'Home', url: 'https://morningstarregmed.com' },
      { name: 'Regenerative Medicine', url: 'https://morningstarregmed.com/regenerative-medicine/' },
      { name: 'PRP Therapy', url: 'https://morningstarregmed.com/regenerative-medicine/platelet-rich-plasma-therapy/' },
    ],
    indication: ['condition-knee-pain', 'condition-back-pain', 'condition-joint-pain'],
    bodyLocation: ['joints', 'shoulders', 'knees'],
    reviews: [
      {
        author: 'John Brantley',
        datePublished: '2024-01-01',
        reviewBody:
          'I have had two separate rounds of treatment done with the team at Morningstar. First, I had hyaluronic acid gel injections done on my knee. My pain went from an 8/10 to at most a 2/10. Great success if you ask me! Kay\'s bedside manner is absolutely wonderful and the admin staff made me feel welcomed and stress-free. After I finished with my knee, I did PRP treatments to both of my shoulders. My shoulders have been very weak and causing me a lot of pain due to what I do for a living, and this has been the only thing to help so far. Definitely helped me avoid shoulder surgery and now my pain is maybe a 2/10 on a bad day! These people work absolute miracles for non-invasive pain management options, and I recommend them hands down to anyone looking for relief! 5 stars!',
        ratingValue: '5',
      },
    ],
    aggregateRating: { ratingValue: '5', reviewCount: '1' },
  },
  {
    path: 'src/pages/regenerative-medicine/hyaluronic-acid-injections/index.astro',
    serviceId: 'service-hyaluronic-acid-injections',
    name: 'Hyaluronic Acid Injections',
    description:
      'Minimally invasive hyaluronic acid joint lubrication injections for improved mobility and reduced knee and joint pain.',
    url: 'https://morningstarregmed.com/regenerative-medicine/hyaluronic-acid-injections/',
    breadcrumbs: [
      { name: 'Home', url: 'https://morningstarregmed.com' },
      { name: 'Regenerative Medicine', url: 'https://morningstarregmed.com/regenerative-medicine/' },
      { name: 'Hyaluronic Acid Injections', url: 'https://morningstarregmed.com/regenerative-medicine/hyaluronic-acid-injections/' },
    ],
    indication: ['condition-knee-pain', 'condition-joint-pain'],
    bodyLocation: ['knee joint', 'hip joint'],
    reviews: [
      {
        author: 'John Brantley',
        datePublished: '2024-01-01',
        reviewBody:
          'I have had two separate rounds of treatment done with the team at Morningstar. First, I had hyaluronic acid gel injections done on my knee. My pain went from an 8/10 to at most a 2/10. Great success if you ask me! Kay\'s bedside manner is absolutely wonderful and the admin staff made me feel welcomed and stress-free. After I finished with my knee, I did PRP treatments to both of my shoulders. My shoulders have been very weak and causing me a lot of pain due to what I do for a living, and this has been the only thing to help so far. Definitely helped me avoid shoulder surgery and now my pain is maybe a 2/10 on a bad day! These people work absolute miracles for non-invasive pain management options, and I recommend them hands down to anyone looking for relief! 5 stars!',
        ratingValue: '5',
      },
    ],
    aggregateRating: { ratingValue: '5', reviewCount: '1' },
  },
  {
    path: 'src/pages/medical-weight-loss.astro',
    serviceId: 'service-medical-weight-loss',
    name: 'Medical Weight Loss',
    description:
      'Medically supervised weight loss in St. Peters, MO using semaglutide and tirzepatide for lasting, clinically guided results.',
    url: 'https://morningstarregmed.com/medical-weight-loss/',
    breadcrumbs: [
      { name: 'Home', url: 'https://morningstarregmed.com' },
      { name: 'Medical Weight Loss', url: 'https://morningstarregmed.com/medical-weight-loss/' },
    ],
    indication: [],
    bodyLocation: ['body weight'],
  },
];

const schemaImports = `import TherapeuticProcedureSchema from '@/components/schemas/TherapeuticProcedureSchema.astro';
import MedicalWebPageSchema from '@/components/schemas/MedicalWebPageSchema.astro';
import BreadcrumbSchema from '@/components/schemas/BreadcrumbSchema.astro';
import FAQPageSchema from '@/components/schemas/FAQPageSchema.astro';`;

for (const svc of services) {
  const fullPath = join(ROOT, svc.path);
  let content = readFileSync(fullPath, 'utf8');

  // Skip if already updated
  if (content.includes('TherapeuticProcedureSchema')) {
    console.log(`SKIP (already done): ${svc.path}`);
    continue;
  }

  // 1. Add imports after "import BaseLayout..."
  content = content.replace(
    /import BaseLayout from '@\/layouts\/BaseLayout\.astro';/,
    `import BaseLayout from '@/layouts/BaseLayout.astro';
${schemaImports}`
  );

  // 2. Remove old inline faqSchema
  content = content.replace(
    /\n\nconst faqSchema = JSON\.stringify\(\{[\s\S]*?\}\);\n---/,
    '\n---'
  );

  // 3. Replace <BaseLayout ...jsonLd={faqSchema}> with clean version
  content = content.replace(
    /<BaseLayout title=\{title\} description=\{description\}[^>]*>/,
    `<BaseLayout title={title} description={description}>`
  );

  // 4. Build the schema props as a JS snippet to insert
  const reviewsProp = svc.reviews && svc.reviews.length > 0
    ? `reviews={${JSON.stringify(svc.reviews, null, 2)}}`
    : '';
  const aggregateProp = svc.aggregateRating
    ? `aggregateRating={${JSON.stringify(svc.aggregateRating)}}`
    : '';
  const indicationProp = svc.indication && svc.indication.length > 0
    ? `indication={${JSON.stringify(svc.indication)}}`
    : '';
  const bodyLocationProp = svc.bodyLocation && svc.bodyLocation.length > 0
    ? `bodyLocation={${JSON.stringify(svc.bodyLocation)}}`
    : '';

  const schemaFragment = `  <Fragment slot="head">
    <TherapeuticProcedureSchema
      id="${svc.serviceId}"
      name="${svc.name}"
      description="${svc.description}"
      url="${svc.url}"
      publishDate="2024-01-01"
      lastEdited="2025-05-13"
      ${indicationProp}
      ${bodyLocationProp}
      ${reviewsProp}
      ${aggregateProp}
    />
    <MedicalWebPageSchema
      url="${svc.url}"
      name={title}
      description={description}
      publishDate="2024-01-01"
      lastEdited="2025-05-13"
      mainEntityId="https://morningstarregmed.com/#${svc.serviceId}"
      aspect="Treatment"
    />
    <BreadcrumbSchema items={${JSON.stringify(svc.breadcrumbs)}} />
    <FAQPageSchema faqs={faqs} />
  </Fragment>`;

  // Insert after <BaseLayout ...>
  content = content.replace(
    /<BaseLayout title=\{title\} description=\{description\}>\n/,
    `<BaseLayout title={title} description={description}>\n${schemaFragment}\n`
  );

  writeFileSync(fullPath, content, 'utf8');
  console.log(`UPDATED: ${svc.path}`);
}

console.log('\nDone! All service pages updated with schema.');
