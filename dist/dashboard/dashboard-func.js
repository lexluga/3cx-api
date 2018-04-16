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
class DashboardClient {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * Start Firewall
     * @param {IHttpClient} httpClient
     * @returns {Promise<IResponseFirewall>}
     */
    startFirewall() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.httpClient.post('/api/firewall/start')).data;
        });
    }
    /**
     * Stop Firewall
     * @param {IHttpClient} httpClient
     * @returns {Promise<IResponseFirewall>}
     */
    stopFirewall() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.httpClient.post('/api/firewall/stop')).data;
        });
    }
    /**
     * Get Firewall Status
     * @param {IHttpClient} httpClient
     * @returns {Promise<IResponseFirewall>}
     */
    getFirewallStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.httpClient.get('/api/firewall');
            return response.data;
        });
    }
}
exports.DashboardClient = DashboardClient;
