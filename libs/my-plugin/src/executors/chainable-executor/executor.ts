import { ExecutorContext, runExecutor} from '@nrwl/devkit';
import { ChainableExecutorExecutorSchema } from './schema';

export default async function composedExecutor(
  options: ChainableExecutorExecutorSchema,
  context: ExecutorContext
) {
  // const result = await Promise.all([
  //   await runExecutor(
  //     { project: 'my-plans', target: 'build' },
  //     options,
  //     context
  //   ),
  //   await runExecutor(
  //     { project: 'my-plans', target: 'lint' },
  //     options,
  //     context
  //   )
  // ]);
  // for await (const res of result) {
  //   if (!res) return res;
  // }

  await runExecutor(
    { project: 'my-plans', target: 'build' },
    options,
    context
  );
  await runExecutor(
    { project: 'my-plans', target: 'lint' },
    options,
    context
  );
  return {
    success: true
  };
}
