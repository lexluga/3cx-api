"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const axios_cookiejar_support_1 = require("axios-cookiejar-support");
const tough_cookie_1 = require("tough-cookie");
const util_1 = require("./util");
/**
 * Create logged in HTTP client
 * @param {string} baseURL
 * @param {ICredentials} credentials
 * @returns {Promise<IHttpClient>}
 */
function createClient(baseURL, credentials) {
    return __awaiter(this, void 0, void 0, function* () {
        const jar = new tough_cookie_1.CookieJar();
        const http = axios_1.default.create({ baseURL, withCredentials: true, jar });
        axios_cookiejar_support_1.default(http);
        if ((yield util_1.login(http, credentials)) !== 'AuthSuccess') {
            throw new Error('Invalid credentials');
        }
        const cookies = jar.getCookiesSync(baseURL);
        const token = cookies.find((x) => x.key === 'XSRF-TOKEN');
        if (token) {
            http.defaults.headers['X-XSRF-TOKEN'] = token.value;
        }
        return http;
    });
}
exports.createClient = createClient;
