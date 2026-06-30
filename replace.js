const fs = require('fs');

let content = fs.readFileSync('style.css', 'utf8');

// Replace standard dark rgba with secondary glass
content = content.replace(/background:\s*rgba\(15,\s*23,\s*42,\s*0\.\d+\);/g, 'background: var(--glass-bg-secondary);');

// Replace linear gradients with primary glass
content = content.replace(/background:\s*linear-gradient\(\d+deg,\s*rgba\(30,\s*41,\s*59[^)]+\),\s*rgba\(15,\s*23,\s*42[^)]+\)\);/g, 'background: var(--glass-bg-primary);');
content = content.replace(/background:\s*linear-gradient\(180deg,\s*rgba\(15,\s*23,\s*42[^)]+\),\s*rgba\(\d+,\s*\d+,\s*\d+[^)]+\)\);/g, 'background: var(--glass-bg-primary);');

// Replace 135deg gradient explicitly if any
content = content.replace(/background:\s*linear-gradient\(135deg,\s*rgba\(30,\s*41,\s*59[^)]+\),\s*rgba\(15,\s*23,\s*42[^)]+\)\);/g, 'background: var(--glass-bg-primary);');

fs.writeFileSync('style.css', content);
console.log("Replaced colors successfully");
