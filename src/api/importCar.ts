import { apiFetch } from './apiFetch/apiFetch';

export const fetchImage = (url: string) => {
  return apiFetch({
    method: 'PUT',
    url,
  });
};