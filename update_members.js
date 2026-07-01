const fs = require('fs');

function updateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const match = content.match(/const SAMPLE_MEMBERS = \[([\s\S]*?)\];/);
  if (!match) return;
  
  const members = eval('[' + match[1] + ']');
  
  const assigned = [];
  const unassigned = [];
  
  members.forEach(m => {
    if (m.chapter_area === '') {
      unassigned.push(m);
    } else {
      assigned.push(m);
    }
  });

  // Target additions
  let addEast = 11;
  let addNorth = 7;
  let addWest = 5;
  let addSouth = 5;
  
  for (let i = 0; i < unassigned.length; i++) {
    const m = unassigned[i];
    if (addEast > 0) {
      m.chapter_area = 'EAST';
      assigned.push(m);
      addEast--;
    } else if (addNorth > 0) {
      m.chapter_area = 'NORTH';
      assigned.push(m);
      addNorth--;
    } else if (addWest > 0) {
      m.chapter_area = 'WEST';
      assigned.push(m);
      addWest--;
    } else if (addSouth > 0) {
      m.chapter_area = 'SOUTH';
      assigned.push(m);
      addSouth--;
    } else {
      // The rest are skipped (deleted)
    }
  }

  // Format the output
  const newArrayStr = "const SAMPLE_MEMBERS = [\n" + assigned.map(m => {
    let str = "  { ";
    const props = [];
    for (const [k, v] of Object.entries(m)) {
      let valStr = (typeof v === 'string') ? "'" + v.replace(/'/g, "\\'") + "'" : v;
      if (v === null) valStr = 'null';
      props.push(`${k}: ${valStr}`);
    }
    str += props.join(', ') + " }";
    return str;
  }).join(",\n") + "\n];";

  content = content.replace(/const SAMPLE_MEMBERS = \[([\s\S]*?)\];/, newArrayStr);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Updated', filePath, 'Total members now:', assigned.length);
}

try { updateFile('public/js/seed-data.js'); } catch(e) {}
try { updateFile('public/app.js'); } catch(e) {}
