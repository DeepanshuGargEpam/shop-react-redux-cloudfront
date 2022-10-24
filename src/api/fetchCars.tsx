import { apiFetch } from './apiFetch/apiFetch';

export const fetchCars = () => {
  return apiFetch({
    method: 'GET',
    url: `https://mv06p6ut5b.execute-api.us-east-1.amazonaws.com/dev/getproducts`,
  });
};
