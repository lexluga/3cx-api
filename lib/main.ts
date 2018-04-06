import Axios from 'axios';
import axiosCookieJarSupport from 'axios-cookiejar-support';
import {CookieJar} from 'tough-cookie';
import {ICredentials} from './credentials';
import {IHttpClient} from './http-client';
import {login} from './util';

/**
 * Create logged in HTTP client
 * @param {string} baseURL
 * @param {ICredentials} credentials
 * @returns {Promise<IHttpClient>}
 */
export async function createClient(baseURL: string, credentials: ICredentials): Promise<IHttpClient> {
    const jar = new CookieJar();
    const http = Axios.create({baseURL, withCredentials: true, jar});
    axiosCookieJarSupport(http);
    if (await login(http, credentials) !== 'AuthSuccess') {
        throw new Error('Invalid credentials');
    }

    const cookies = jar.getCookiesSync(baseURL);
    const token = cookies.find((x) => x.key === 'XSRF-TOKEN');
    if (token) {
        http.defaults.headers['X-XSRF-TOKEN'] = token.value;
    }

    return http;
}
