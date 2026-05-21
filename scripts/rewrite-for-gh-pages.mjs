/**
 * Rewrites absolute asset paths in dist/ HTML files for GitHub Pages subpath deployment.
 * Usage: node scripts/rewrite-for-gh-pages.mjs /morningstar-regmed-v3
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const base = process.argv[2] || '/morningstar-regmed-v3';
const distDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');

function walkHtml(dir, callback) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkHtml(fullPath, callback);
    } else if (entry.name.endsWith('.html')) {
      callback(fullPath);
    }
  }
}

// Patterns to rewrite: absolute paths that start with / but are not http(s):// or //
function rewriteHtml(content, base) {
  // Attributes: src="/...", href="/...", content="/...", action="/..."
  return content.replace(
    /(\s(?:src|href|action|content|srcset)=")(\/)(?!\/)/g,
    (match, attr, slash) => `${attr}${base}/`
  ).replace(
    // Fix srcset with multiple paths
    /(\ssrcset=")([^"]+)(")/g,
    (match, open, srcset, close) => {
      const fixed = srcset.replace(/(^|,\s*)(\/(?!\/))/g, (m, sep, slash) => `${sep}${base}/`);
      return `${open}${fixed}${close}`;
    }
  );
}

let count = 0;
walkHtml(distDir, (filePath) => {
  const original = fs.readFileSync(filePath, 'utf8');
  const rewritten = rewriteHtml(original, base);
  if (rewritten !== original) {
    fs.writeFileSync(filePath, rewritten, 'utf8');
    count++;
    console.log(`Rewritten: ${path.relative(distDir, filePath)}`);
  }
});

console.log(`\nDone: ${count} HTML file(s) updated with base="${base}"`);
