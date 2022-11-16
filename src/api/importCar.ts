import { apiFetch } from './apiFetch/apiFetch';

export const fetchCars = (url: string) => {
  return apiFetch({
    method: 'PUT',
    url,
  });
};