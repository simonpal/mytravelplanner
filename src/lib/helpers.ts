import { GoogleJWTProfile } from '@/types';
import jwt_decode from 'jwt-decode';

export const getClasses = (input: { [key: string]: boolean }): string => {
  let classes: string[] = [];
  Object.entries(input).forEach(([key, isTrue]) => {
    if (isTrue) classes.push(key);
  });
  return classes.join(' ');
};

export const getUserId = (id_token: string) => {
  const dec = jwt_decode(id_token) as GoogleJWTProfile;
  return dec?.sub;
};

export const apiFetch = async (
  token: string,
  url: string,
  options: RequestInit = { headers: {} }
): Promise<Response> => {
  const _options = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      ...options.headers,
    },
  };
  return fetch(url, _options);
};
