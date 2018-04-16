import { IHttpClient } from '../http-client';
import { IEmailTemplate } from './email-template';
export declare class SettingsClient {
    private readonly httpClient;
    constructor(httpClient: IHttpClient);
    /**
     * Start Firewall
     * @param {IHttpClient} httpClient
     * @returns {Promise<IEmailTemplate>}
     */
    postEmailTemplate(template: IEmailTemplate): Promise<IEmailTemplate>;
    /**
     * Get Email Template
     * @returns {Promise<IEmailTemplate>}
     */
    getEmailTemplate(template: string): Promise<IEmailTemplate>;
}
