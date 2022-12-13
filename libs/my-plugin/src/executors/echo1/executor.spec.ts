import { Echo1ExecutorSchema } from './schema';
import executor from './executor';

const options: Echo1ExecutorSchema = {};

describe('Echo1 Executor', () => {
  it('can run', async () => {
    const output = await executor(options);
    expect(output.success).toBe(true);
  });
});