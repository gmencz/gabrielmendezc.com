export const apiEndpoint =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000'
    : 'https://api.gabrielmendezc.com';
