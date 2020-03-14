export const apiEndpoint =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000'
    : 'https://sleepy-headland-61561.herokuapp.com';
