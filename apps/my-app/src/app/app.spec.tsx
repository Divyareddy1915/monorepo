import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import { API_URL } from '@integrated-poc1/api-interface';

import App from './app';

global.fetch = jest.fn();

const mockFetch = fetch as jest.MockedFunction<typeof fetch>;

describe('App', () => {

  it('should return message object in response', async() => {
    mockFetch.mockResolvedValue({
      json: () => Promise.resolve('message')
    } as any);

    const result = await mockFetch(API_URL);
    expect(fetch).toHaveBeenCalled();
    expect(result).toBeTruthy();
  });

  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(baseElement).toBeTruthy();
  });

});
