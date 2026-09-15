import ts from 'typescript';
import {readFile,mkdir,writeFile} from 'node:fs/promises';
import {spawnSync} from 'node:child_process';
await mkdir('.test-build',{recursive:true});
for(const name of ['data','engine','advice']){
 let source=await readFile(`lib/${name}.ts`,'utf8');
 for(const json of ['roster','megas'])source=source.replace(`import ${json} from './${json}.json';`,`const ${json} = ${await readFile(`lib/${json}.json`,'utf8')};`);
 source=source.replace(/from '\.\/(data|engine)'/g,"from './$1.mjs'");
 await writeFile(`.test-build/${name}.mjs`,ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText);
}
const result=spawnSync(process.execPath,['--test','tests/engine.test.mjs'],{stdio:'inherit'});process.exit(result.status??1);
