import {ICredentials} from './credentials';
import {IHttpClient} from './http-client';

export async function login(httpClient: IHttpClient, cred: ICredentials) {
    return (await httpClient.post<string>('/api/login', cred)).data;
}
