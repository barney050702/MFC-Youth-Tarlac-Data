const fs = require('fs');
let text = fs.readFileSync('app.js', 'utf-8');

// The mojibake characters for UTF-8 sequences when interpreted as Windows-1252
text = text.replace(/â€”/g, '-'); // Em dash
text = text.replace(/â€“/g, '-'); // En dash
text = text.replace(/âœ”/g, '\\u2714'); // Checkmark
text = text.replace(/â”€/g, '-'); // Box drawing line

fs.writeFileSync('app.js', text, 'utf-8');
console.log('Fixed encoding issues in app.js by replacing with safe ASCII');
