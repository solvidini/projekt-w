const NUMBER_OF_ITEMS = 18;

function generateImports(howMany: number) {
  let sentence = '';
  for (let i = 1; i <= howMany; i++) {
    sentence += 'import p' + i + ' from "./p' + i + '.jpeg";\n';
  }
  console.log(sentence);
}

function generateExports(howMany: number) {
  let sentence = '[';
  for (let i = 1; i <= howMany; i++) {
    sentence += '\np' + i;
    if (i !== howMany) sentence += ',';
  }
  sentence += ']';
  console.log(sentence);
}

generateImports(NUMBER_OF_ITEMS);
console.log('\n');
generateExports(NUMBER_OF_ITEMS);
