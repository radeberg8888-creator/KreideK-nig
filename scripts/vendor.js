// Kopiert three.js und die Schriften lokal nach www/, damit die App komplett offline läuft.
const fs = require('fs'), path = require('path');
const www = path.join(__dirname, '..', 'www');
const nm = path.join(__dirname, '..', 'node_modules');
fs.copyFileSync(path.join(nm, 'three/build/three.min.js'), path.join(www, 'three.min.js'));
const out = path.join(www, 'fonts'); fs.mkdirSync(out, { recursive: true });
const faces = [
  ['Limelight', 'limelight', [400]],
  ['IBM Plex Sans Condensed', 'ibm-plex-sans-condensed', [400, 500, 600, 700]],
  ['IBM Plex Mono', 'ibm-plex-mono', [400, 500]],
];
let css = '';
for (const [family, pkg, weights] of faces) {
  for (const w of weights) {
    for (const sub of ['latin', 'latin-ext']) {
      const file = `${pkg}-${sub}-${w}-normal.woff2`;
      const src = path.join(nm, '@fontsource', pkg, 'files', file);
      if (!fs.existsSync(src)) continue;
      fs.copyFileSync(src, path.join(out, file));
      css += `@font-face{font-family:'${family}';font-style:normal;font-weight:${w};font-display:swap;src:url(${file}) format('woff2');}\n`;
    }
  }
}
fs.writeFileSync(path.join(out, 'fonts.css'), css);
console.log('three.js und', css.split('\n').length - 1, 'Schriftschnitte kopiert');
