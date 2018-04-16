import { ICredentials } from './credentials';
import { IHttpClient } from './http-client';
/**
 * Create logged in HTTP client
 * @param {string} baseURL
 * @param {ICredentials} credentials
 * @returns {Promise<IHttpClient>}
 */
export declare function createClient(baseURL: string, credentials: ICredentials): Promise<IHttpClient>;
