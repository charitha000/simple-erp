const fs = require('fs');

const files = [
  'index.html',
  'signup.html',
  'dashboard.html',
  'files.html',
  'audio.html',
  'pdf.html',
  'profile.html'
];

files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  c = c.replace(/href="\/(.*?)\.html"/g, 'href="$1.html"');
  fs.writeFileSync(f, c);
  console.log('Updated ' + f);
});

// Also check src/main.js
let mainJs = fs.readFileSync('src/main.js', 'utf8');
mainJs = mainJs.replace(/href="\/(.*?)\.html"/g, 'href="$1.html"');
fs.writeFileSync('src/main.js', mainJs);
console.log('Updated src/main.js');
