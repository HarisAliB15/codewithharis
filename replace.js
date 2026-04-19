const fs = require('fs');
const path = require('path');

const directoriesToSearch = ['app', 'components'];
const fileExtensions = ['.js', '.jsx', '.css'];

const replacements = [
  { find: /Code With Nomi/g, replace: 'Code With Haris' },
  { find: /CodeWithNomi/g, replace: 'CodeWithHaris' },
  { find: /codewithnomi/g, replace: 'codewithharis' },
  { find: /Nomi/g, replace: 'Haris' },
  { find: /nomi/g, replace: 'haris' },
];

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else {
      if (fileExtensions.includes(path.extname(filePath))) {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        
        for (const { find, replace } of replacements) {
          if (content.match(find)) {
            content = content.replace(find, replace);
            modified = true;
          }
        }
        
        if (modified) {
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`Updated: ${filePath}`);
        }
      }
    }
  }
}

for (const dir of directoriesToSearch) {
  processDirectory(path.join(__dirname, dir));
}

console.log('Replacement complete.');
