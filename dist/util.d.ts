import { IHttpClient } from './http-client';
import { ICredentials } from './credentials';
export declare function login(httpClient: IHttpClient, cred: ICredentials): Promise<string>;
