export interface IRequestConfig {
    responseType?: string;
}

export interface IResponse<T = any>  {
    data: T;
}

export interface IHttpClient {
    get<T = any>(url: string, config?: IRequestConfig): Promise<IResponse<T>>;
    post<T = any>(url: string, data?: any): Promise<IResponse<T>>;
}
