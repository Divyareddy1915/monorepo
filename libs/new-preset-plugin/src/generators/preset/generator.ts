import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  getWorkspaceLayout,
  names,
  offsetFromRoot,
  Tree,
} from '@nrwl/devkit';
import * as path from 'path';
import { PresetGeneratorSchema } from './schema';

interface NormalizedSchema extends PresetGeneratorSchema {
  projectName: string;
  projectRoot: string;
  projectDirectory: string;
  parsedTags: string[];
}

function normalizeOptions(tree: Tree, options: PresetGeneratorSchema): NormalizedSchema {
  const name = names(options.name).fileName;
  const projectDirectory = name;
  const projectName = projectDirectory.replace(new RegExp('/', 'g'), '-');
  const projectRoot = `${getWorkspaceLayout(tree).appsDir}/${projectDirectory}`;
  const parsedTags = options.tags
    ? options.tags.split(',').map((s) => s.trim())
    : [];

  return {
    ...options,
    projectName,
    projectRoot,
    projectDirectory,
    parsedTags,
  };
}

function addFiles(tree: Tree, options: NormalizedSchema) {
    const templateOptions = {
      ...options,
      ...names(options.name),
      offsetFromRoot: offsetFromRoot(options.projectRoot),
      template: ''
    };
    generateFiles(tree, path.join(__dirname, 'files'), options.projectRoot, templateOptions);
}

export default async function (tree: Tree, options: PresetGeneratorSchema) {
  const normalizedOptions = normalizeOptions(tree, options);
  addProjectConfiguration(
    tree,
    normalizedOptions.projectName,
    {
      root: normalizedOptions.projectRoot,
      projectType: 'application',
      sourceRoot: `${normalizedOptions.projectRoot}/src`,
      targets: {
        serve: {
          executor: "nx:run-commands",
          options: {
            command: `node ${normalizedOptions.projectRoot}/src/index.ts`
          }
        },
      },
      tags: normalizedOptions.parsedTags,
    }
  );
  addFiles(tree, normalizedOptions);
  await formatFiles(tree);
}
