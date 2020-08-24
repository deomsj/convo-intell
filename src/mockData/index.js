// This module exports mock data fetching functionality,
// to allow for asynchronous data management development in UI

import mockDataByEndpoint from './mockDataByEndpoint';

export function get(endpoint) {
  const delay = Math.floor(Math.random() * 1000) + 500;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!mockDataByEndpoint.hasOwnProperty(endpoint)) {
        const validEndpoints = Object.keys(mockDataByEndpoint)
          .map((endpoint) => ` - "${endpoint}"`)
          .join('\n ');
        reject(
          `"${endpoint}" is an invalid endpoint. Try getting data from: \n ${validEndpoints}`,
        );
      }

      const response = { status: 200, data: mockDataByEndpoint[endpoint] };

      resolve(response);
    }, delay);
  });
}
