import {IHttpClient} from '../http-client';
import {IResponseFirewall} from './firewall';

export class DashboardClient {
    constructor(private readonly httpClient: IHttpClient) {
    }

    /**
     * Start Firewall
     * @param {IHttpClient} httpClient
     * @returns {Promise<IResponseFirewall>}
     */
    public async startFirewall() {
        return (await this.httpClient.post<IResponseFirewall>('/api/firewall/start')).data;
    }


    /**
     * Stop Firewall
     * @param {IHttpClient} httpClient
     * @returns {Promise<IResponseFirewall>}
     */
    public async stopFirewall() {
        return (await this.httpClient.post<IResponseFirewall>('/api/firewall/stop')).data;
    }


    /**
     * Get Firewall Status
     * @param {IHttpClient} httpClient
     * @returns {Promise<IResponseFirewall>}
     */
    public async getFirewallStatus() {
        const response = await this.httpClient.get<IResponseFirewall>('/api/firewall');
        return response.data;
    }
}