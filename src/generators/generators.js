function generateImports(howMany) {
	let sentence = "";
	for (let i=1; i<=howMany; i++) {
		sentence+='import p'+i+' from \"./p'+i+'.jpg\";'+'\n';
		sentence+='import p'+i+'_tn from \"./p'+i+'_tn.jpg\";'+'\n';
    }
	console.log(sentence);
}

function generateExports(howMany) {
	let sentence = "[";
	for (let i=1; i<=howMany; i++) {
		sentence+='\n{\nsrc: p'+i+',\n'+'tn: p'+i+'_tn\n}';
		if (i !== howMany) sentence+=','
    }
	sentence+='\n]';
	console.log(sentence);
}

generateImports(10);
console.log('\n')
generateExports(10);
