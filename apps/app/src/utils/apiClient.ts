import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const client = axios.create({
  baseURL: `/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const httpGet = async <R, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R> => {
  try {
    const { data } = await client.get<any, AxiosResponse<R>, D>(url, config);
    return data;
  } catch (error: any) {
    throw Error(error.response.data);
  }
};

export const httpPost = async <T = any, R = AxiosResponse<T>, D = any>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig<D>
): Promise<R> => {
  try {
    const { data: response } = await client.post<T, AxiosResponse<R>, D>(url, data, config);
    return response;
  } catch (error: any) {
    throw Error(error.response.data);
  }
};

export const httpDelete = async <T = any, R = AxiosResponse<T>, D = any>(
  url: string,
  config?: AxiosRequestConfig<D>
): Promise<R> => {
  try {
    const { data: response } = await client.delete<T, AxiosResponse<R>, D>(url, config);
    return response;
  } catch (error: any) {
    throw Error(error.response.data);
  }
};

export const httpPatch = async <T = any, R = AxiosResponse<T>, D = any>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig<D>
): Promise<R> => {
  try {
    const { data: response } = await client.patch<T, AxiosResponse<R>, D>(url, data, config);
    return response;
  } catch (error: any) {
    throw Error(error.response.data);
  }
};

export const httpPut = async <T = any, R = AxiosResponse<T>, D = any>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig<D>
): Promise<R> => {
  try {
    const { data: response } = await client.put<T, AxiosResponse<R>, D>(url, data, config);
    return response;
  } catch (error: any) {
    throw Error(error?.response?.data);
  }
};

export const httpHead = async <T = any, R = AxiosResponse<T>, D = any>(
  url: string,
  config?: AxiosRequestConfig<D>
): Promise<R> => {
  try {
    const { data } = await client.head<any, AxiosResponse<R>, D>(url, config);
    return data;
  } catch (error: any) {
    throw Error(error.response.data);
  }
};
