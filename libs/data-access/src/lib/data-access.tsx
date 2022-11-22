import { useState, useEffect } from 'react';
import { ApiResponse , API_URL } from '@integrated-poc1/api-interface';


/* eslint-disable-next-line */
export function useApi() {
  const [apiResponse, setApiResponse] = useState<ApiResponse[]>([]);

    useEffect (() => {
      fetch(API_URL)
        .then(res => res.json())
        .then(setApiResponse)
    }, []);

  return apiResponse;
}

