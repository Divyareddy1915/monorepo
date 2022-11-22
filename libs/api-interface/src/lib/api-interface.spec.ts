import { API_URL } from './api-interface';

describe('apiInterface', () => {
  it('should work', () => {
    expect(API_URL).toEqual('/api/message');
  });
});
