export const signup = (username, password) => {
  return fetch('http://localhost:7891/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
    .then(res => res.json());
};

export const login = (username, password) => {
  return fetch('http://localhost:7891/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application'jason
    },
    body: JSON.stringify({ username, password })
  })
    .then(res => res.json());
};