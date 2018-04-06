import { ICredentials } from './credentials';
import { IHttpClient } from './http-client';
export declare function createClient(baseURL: string, credentials: ICredentials): Promise<IHttpClient>;
