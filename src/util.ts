import {IHttpClient} from './http-client';
import {ICredentials} from './credentials';

export async function login(httpClient: IHttpClient, cred: ICredentials) {
    return (await httpClient.post<string>('/api/login', cred)).data;
}

