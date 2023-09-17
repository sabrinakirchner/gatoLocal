import * as usersAPI from './users-api';

export async function signUp(userData) {
  const token = await usersAPI.signUp(userData);
  localStorage.setItem('token', token);
  return getUser();
}

export function getToken() {
  return localStorage.getItem('token');
}

function getUser() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export async function login(credentials) {
  const token = await usersAPI.login(credentials);
  localStorage.setItem('token', token);
  return getUser();
}

export async function checkToken() {
  const dateStr = await usersAPI.checkToken();
  return new Date(dateStr);
}

export function logOut() {
  localStorage.removeItem('token');
}