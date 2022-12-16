import { ChainableExecutorExecutorSchema } from './schema';
import executor from './executor';

const options: ChainableExecutorExecutorSchema = {};

describe('ChainableExecutor Executor', () => {
  it('can run', async () => {
    const output = await executor(options);
    expect(output.success).toBe(true);
  });
});