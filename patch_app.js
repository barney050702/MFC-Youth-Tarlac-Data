const fs = require('fs');
let c = fs.readFileSync('public/app.js', 'utf8');
c = c.replace('  loadFromStorage() {', `  loadFromStorage() {
    const FORCE_CLEAR_KEY = 'force_clear_v4';
    if (!localStorage.getItem(FORCE_CLEAR_KEY)) {
      localStorage.removeItem(this.storageKey);
      localStorage.setItem(FORCE_CLEAR_KEY, 'true');
    }`);
fs.writeFileSync('public/app.js', c);
console.log('patched app.js');
