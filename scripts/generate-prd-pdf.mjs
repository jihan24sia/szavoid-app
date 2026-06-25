import fs from 'node:fs';
import path from 'node:path';

const inputPath = path.resolve('docs/prd-landing-page-crm.md');
const outputPath = path.resolve('docs/prd-landing-page-crm.pdf');

const markdown = fs.readFileSync(inputPath, 'utf8');

function normalizeText(value) {
  return value
    .replace(/\r/g, '')
    .replace(/\t/g, '  ')
    .replace(/[^\x09\x0A\x0D\x20-\x7E]/g, '')
    .split('\n');
}

function cleanLine(line) {
  return line
    .replace(/^#{1,6}\s*/, '')
    .replace(/^\|\s*/, '| ')
    .replace(/\*\*/g, '')
    .replace(/`/g, '')
    .replace(/\s+$/g, '');
}

function wrapLine(line, maxChars) {
  const cleaned = cleanLine(line);
  if (!cleaned) return [''];
  const words = cleaned.split(/\s+/);
  const lines = [];
  let current = '';

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }

  if (current) lines.push(current);
  return lines;
}

function escapePdfText(text) {
  return text
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)');
}

const sourceLines = normalizeText(markdown);
const pages = [];
let pageLines = [];
const maxLinesPerPage = 48;
const maxCharsPerLine = 92;

for (const line of sourceLines) {
  const wrapped = wrapLine(line, maxCharsPerLine);
  for (const wrappedLine of wrapped) {
    if (pageLines.length >= maxLinesPerPage) {
      pages.push(pageLines);
      pageLines = [];
    }
    pageLines.push(wrappedLine);
  }
}

if (pageLines.length) pages.push(pageLines);

const objects = [];

function addObject(content) {
  objects.push(content);
  return objects.length;
}

const catalogId = addObject('<< /Type /Catalog /Pages 2 0 R >>');
const pagesId = addObject('');
const fontId = addObject('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>');
const pageIds = [];

for (let i = 0; i < pages.length; i += 1) {
  const page = pages[i];
  const textCommands = [
    'BT',
    '/F1 10 Tf',
    '14 TL',
    '50 790 Td',
  ];

  page.forEach((line, index) => {
    if (index > 0) textCommands.push('0 -14 Td');
    textCommands.push(`(${escapePdfText(line)}) Tj`);
  });

  textCommands.push('ET');
  const stream = textCommands.join('\n');
  const contentId = addObject(`<< /Length ${Buffer.byteLength(stream, 'utf8')} >>\nstream\n${stream}\nendstream`);
  const pageId = addObject(`<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 ${fontId} 0 R >> >> /Contents ${contentId} 0 R >>`);
  pageIds.push(pageId);
}

objects[pagesId - 1] = `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(' ')}] /Count ${pageIds.length} >>`;

let pdf = '%PDF-1.4\n';
const offsets = [0];

objects.forEach((content, index) => {
  offsets.push(Buffer.byteLength(pdf, 'utf8'));
  pdf += `${index + 1} 0 obj\n${content}\nendobj\n`;
});

const xrefOffset = Buffer.byteLength(pdf, 'utf8');
pdf += `xref\n0 ${objects.length + 1}\n`;
pdf += '0000000000 65535 f \n';
for (let i = 1; i < offsets.length; i += 1) {
  pdf += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`;
}
pdf += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

fs.writeFileSync(outputPath, pdf, 'binary');
console.log(`Generated ${outputPath}`);
