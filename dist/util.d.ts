import { ICredentials } from './credentials';
import { IHttpClient } from './http-client';
export declare function login(httpClient: IHttpClient, cred: ICredentials): Promise<string>;
