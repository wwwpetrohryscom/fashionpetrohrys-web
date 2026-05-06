#!/usr/bin/env node
// Validates the rendered sitemap.xml output.
// Usage:
//   SITEMAP_URL=https://fashionarea.top/sitemap.xml node scripts/check-sitemap.mjs
//   (defaults to http://localhost:3000/sitemap.xml when SITEMAP_URL is unset)

const DEFAULT_URL = "http://localhost:3000/sitemap.xml";
const EXPECTED_ORIGIN = "https://fashionarea.top";
const VALID_CHANGE_FREQS = new Set([
  "always",
  "hourly",
  "daily",
  "weekly",
  "monthly",
  "yearly",
  "never",
]);

const url = process.env.SITEMAP_URL ?? DEFAULT_URL;
const targetsProduction = url.startsWith(EXPECTED_ORIGIN);

const errors = [];
const warnings = [];

function fail(msg) {
  errors.push(msg);
}

function warn(msg) {
  warnings.push(msg);
}

const response = await fetch(url).catch((err) => {
  console.error(`Failed to fetch ${url}: ${err.message}`);
  process.exit(2);
});

if (!response.ok) {
  console.error(`Fetch failed: ${response.status} ${response.statusText}`);
  process.exit(2);
}

const contentType = response.headers.get("content-type") ?? "";
if (!/xml/i.test(contentType)) {
  fail(`Content-Type is "${contentType}", expected an xml media type`);
}

const xml = await response.text();

if (!xml.startsWith("<?xml")) {
  fail("Response does not start with <?xml declaration");
}

if (!/<urlset[\s>]/.test(xml)) {
  fail("Response is missing <urlset> root element");
}

const urlBlocks = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => m[1]);
if (urlBlocks.length === 0) {
  fail("No <url> entries found in sitemap");
}

const seen = new Set();

for (const [index, block] of urlBlocks.entries()) {
  const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1];
  const lastmod = block.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1];
  const changefreq = block.match(/<changefreq>([^<]+)<\/changefreq>/)?.[1];
  const priority = block.match(/<priority>([^<]+)<\/priority>/)?.[1];

  const tag = `entry #${index + 1}`;

  if (!loc) fail(`${tag}: missing <loc>`);
  if (!lastmod) fail(`${tag}: missing <lastmod>`);
  if (!changefreq) fail(`${tag}: missing <changefreq>`);
  if (priority === undefined) fail(`${tag}: missing <priority>`);

  if (loc) {
    if (targetsProduction && !loc.startsWith(EXPECTED_ORIGIN)) {
      fail(`${tag}: <loc> "${loc}" does not start with ${EXPECTED_ORIGIN}`);
    }
    if (loc.startsWith("http://")) {
      fail(`${tag}: <loc> uses http:// (must be https): ${loc}`);
    }
    if (loc !== EXPECTED_ORIGIN && loc.endsWith("/")) {
      fail(`${tag}: <loc> has trailing slash: ${loc}`);
    }
    if (/\/{2,}/.test(loc.replace(/^https?:\/\//, ""))) {
      fail(`${tag}: <loc> has duplicated slashes in path: ${loc}`);
    }
    if (seen.has(loc)) {
      fail(`${tag}: duplicate <loc> ${loc}`);
    }
    seen.add(loc);
  }

  if (lastmod && Number.isNaN(Date.parse(lastmod))) {
    fail(`${tag}: <lastmod> "${lastmod}" is not a valid date`);
  }

  if (changefreq && !VALID_CHANGE_FREQS.has(changefreq)) {
    fail(`${tag}: <changefreq> "${changefreq}" is not a valid value`);
  }

  if (priority !== undefined) {
    const num = Number(priority);
    if (Number.isNaN(num) || num < 0 || num > 1) {
      fail(`${tag}: <priority> "${priority}" is out of range [0, 1]`);
    }
  }
}

console.log(`Checked ${urlBlocks.length} sitemap entries from ${url}`);

if (warnings.length) {
  console.log("\nWarnings:");
  for (const w of warnings) console.log(`  - ${w}`);
}

if (errors.length) {
  console.error("\nErrors:");
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}

console.log("Sitemap is valid.");
