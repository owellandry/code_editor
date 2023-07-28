const fs = require('fs');
const path = require('path');

function generateFileStructure(dir, level = 0, output = '') {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stats = fs.statSync(fullPath);

    const indentation = '  '.repeat(level);

    if (stats.isDirectory()) {
      output += `${indentation}[${file}]\n`;
      output = generateFileStructure(fullPath, level + 1, output);
    } else {
      output += `${indentation}${file}\n`;
    }
  });

  return output;
}

const projectDir = 'C:/Users/owell/code_editor';
const fileStructure = generateFileStructure(projectDir);

fs.writeFileSync('file_structure.txt', fileStructure, { encoding: 'utf8' });
console.log('Estructura del proyecto exportada en file_structure.txt');
