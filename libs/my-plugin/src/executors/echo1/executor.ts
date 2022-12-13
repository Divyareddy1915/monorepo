import { Echo1ExecutorSchema } from './schema';

export default async function runExecutor(
  options: Echo1ExecutorSchema,
) {
  console.log('Executor ran for Echo1', options);
  return {
    success: true
  };
}

