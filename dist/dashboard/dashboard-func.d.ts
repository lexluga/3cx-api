import { IHttpClient } from '../http-client';
import { IResponseFirewall } from './firewall';
export declare class DashboardClient {
    private readonly httpClient;
    constructor(httpClient: IHttpClient);
    /**
     * Start Firewall
     * @param {IHttpClient} httpClient
     * @returns {Promise<IResponseFirewall>}
     */
    startFirewall(): Promise<IResponseFirewall>;
    /**
     * Stop Firewall
     * @param {IHttpClient} httpClient
     * @returns {Promise<IResponseFirewall>}
     */
    stopFirewall(): Promise<IResponseFirewall>;
    /**
     * Get Firewall Status
     * @param {IHttpClient} httpClient
     * @returns {Promise<IResponseFirewall>}
     */
    getFirewallStatus(): Promise<IResponseFirewall>;
}
