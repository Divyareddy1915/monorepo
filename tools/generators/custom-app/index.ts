import {
  Tree,
  formatFiles,
  installPackagesTask,
  logger,
  names,
  generateFiles,
  joinPathFragments,
  getWorkspaceLayout,
} from '@nrwl/devkit';
import { InterfaceSchema } from './schema';
import { applicationGenerator } from '@nrwl/react';
import { Linter } from '@nrwl/linter';

export default async function (tree: Tree, schema: InterfaceSchema) {

  const projectRoot = `${getWorkspaceLayout(tree).appsDir}/${schema.name}`
  await applicationGenerator(tree, {
    name: names(schema.name).fileName,
    unitTestRunner: 'jest',
    skipFormat: false,
    style: 'css',
    linter: Linter.EsLint,
    e2eTestRunner: 'cypress'
  });

  const interfaceNames = names(schema.name);
  const substitutions = {
    // remove __tmpl__ from file endings
    tmpl: '',
    // make the different name variants available as substitutions
    ...interfaceNames,
  };

  //delete files generated through built in generators
  tree.delete(joinPathFragments(projectRoot, 'tsconfig.spec.json'));

  await generateFiles(tree, joinPathFragments(__dirname, './files'), `${projectRoot}`, substitutions)
  await formatFiles(tree);
  logger.info(`${__dirname} ${projectRoot} `)

  return () => {
    installPackagesTask(tree);
  };
  
}
