import {
  Tree,
  formatFiles,
  installPackagesTask,
  logger,
  names,
  readProjectConfiguration,
  generateFiles,
  joinPathFragments,
} from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';
import { InterfaceSchema } from './schema';

export default async function (tree: Tree, schema: InterfaceSchema) {
  await libraryGenerator(tree, { name: names(schema.name).fileName });

  const libRoot = readProjectConfiguration(
    tree,
    names(schema.name).fileName
  ).root;

  const libSrc = readProjectConfiguration(
    tree,
    names(schema.name).fileName
  ).sourceRoot;
  // generate different name variations for substitutions
  const interfaceNames = names(schema.name);

  const substitutions = {
    // remove __tmpl__ from file endings
    tmpl: '',
    // make the different name variants available as substitutions
    ...interfaceNames,
  };

  //delete files generated through built in generators
  tree.delete(joinPathFragments(libRoot, 'tsconfig.spec.json'));

  await generateFiles(
    tree,
    joinPathFragments(__dirname, './files'),
    `${libRoot}`,
    substitutions
  );

  logger.info(
    `Hello, ${names(schema.name).className} attendees!! ${libRoot} ${__dirname}`
  );
  
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
