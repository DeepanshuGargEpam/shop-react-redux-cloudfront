export interface IApiHeaders {
  [key: string]: string;
}

type TypeMethod = 'POST' | 'GET' | 'DELETE';

export interface IApiFetch {
  method: TypeMethod;
  url: string;
  config?: {
    headers?: IApiHeaders;
    params?: {
      [key: string]: number | string | boolean;
    };
  };
}
