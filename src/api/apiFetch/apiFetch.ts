import axios from 'axios';
import { IApiFetch, IApiHeaders } from './types';

export const apiFetch = ({ method, url, config }: IApiFetch) => {
  const headers: IApiHeaders = {
    ...(config?.headers || {}),
  };

  const params = {
    ...(config?.params || {}),
  };

  return axios({ method, url, headers, params });
};
