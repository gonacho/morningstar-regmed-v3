globalThis.process ??= {}; globalThis.process.env ??= {};
import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BofWBgYe.mjs';
import { manifest } from './manifest_BRoCCgck.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/about.astro.mjs');
const _page1 = () => import('./pages/blog/neuropathy-treatment-long-term-support.astro.mjs');
const _page2 = () => import('./pages/blog/regenerative-therapy-back-pain-recovery.astro.mjs');
const _page3 = () => import('./pages/blog.astro.mjs');
const _page4 = () => import('./pages/conditions/back-pain.astro.mjs');
const _page5 = () => import('./pages/conditions/joint-pain.astro.mjs');
const _page6 = () => import('./pages/conditions/knee-pain.astro.mjs');
const _page7 = () => import('./pages/conditions/neck-pain.astro.mjs');
const _page8 = () => import('./pages/conditions/neuropathy.astro.mjs');
const _page9 = () => import('./pages/conditions/sciatica.astro.mjs');
const _page10 = () => import('./pages/conditions.astro.mjs');
const _page11 = () => import('./pages/contact.astro.mjs');
const _page12 = () => import('./pages/insurance.astro.mjs');
const _page13 = () => import('./pages/medical-weight-loss.astro.mjs');
const _page14 = () => import('./pages/new-patients.astro.mjs');
const _page15 = () => import('./pages/pain-management/chronic-pain-management.astro.mjs');
const _page16 = () => import('./pages/pain-management/neuromodulation-technique.astro.mjs');
const _page17 = () => import('./pages/pain-management/neuropathy-treatment.astro.mjs');
const _page18 = () => import('./pages/pain-management.astro.mjs');
const _page19 = () => import('./pages/privacy-policy.astro.mjs');
const _page20 = () => import('./pages/regenerative-medicine/hyaluronic-acid-injections.astro.mjs');
const _page21 = () => import('./pages/regenerative-medicine/platelet-rich-plasma-therapy.astro.mjs');
const _page22 = () => import('./pages/regenerative-medicine/regenerative-therapy.astro.mjs');
const _page23 = () => import('./pages/regenerative-medicine.astro.mjs');
const _page24 = () => import('./pages/schedule-appointment.astro.mjs');
const _page25 = () => import('./pages/terms-of-service.astro.mjs');
const _page26 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/about.astro", _page0],
    ["src/pages/blog/neuropathy-treatment-long-term-support.astro", _page1],
    ["src/pages/blog/regenerative-therapy-back-pain-recovery.astro", _page2],
    ["src/pages/blog/index.astro", _page3],
    ["src/pages/conditions/back-pain/index.astro", _page4],
    ["src/pages/conditions/joint-pain/index.astro", _page5],
    ["src/pages/conditions/knee-pain/index.astro", _page6],
    ["src/pages/conditions/neck-pain/index.astro", _page7],
    ["src/pages/conditions/neuropathy/index.astro", _page8],
    ["src/pages/conditions/sciatica/index.astro", _page9],
    ["src/pages/conditions/index.astro", _page10],
    ["src/pages/contact.astro", _page11],
    ["src/pages/insurance/index.astro", _page12],
    ["src/pages/medical-weight-loss.astro", _page13],
    ["src/pages/new-patients/index.astro", _page14],
    ["src/pages/pain-management/chronic-pain-management/index.astro", _page15],
    ["src/pages/pain-management/neuromodulation-technique/index.astro", _page16],
    ["src/pages/pain-management/neuropathy-treatment/index.astro", _page17],
    ["src/pages/pain-management/index.astro", _page18],
    ["src/pages/privacy-policy.astro", _page19],
    ["src/pages/regenerative-medicine/hyaluronic-acid-injections/index.astro", _page20],
    ["src/pages/regenerative-medicine/platelet-rich-plasma-therapy/index.astro", _page21],
    ["src/pages/regenerative-medicine/regenerative-therapy/index.astro", _page22],
    ["src/pages/regenerative-medicine/index.astro", _page23],
    ["src/pages/schedule-appointment.astro", _page24],
    ["src/pages/terms-of-service.astro", _page25],
    ["src/pages/index.astro", _page26]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = undefined;
const _exports = createExports(_manifest);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
