import {IHttpClient} from '../http-client';
import {IEmailTemplate} from './email-template';

export class SettingsClient {
    constructor(private readonly httpClient: IHttpClient) {
    }

    /**
     * Start Firewall
     * @param {IHttpClient} httpClient
     * @returns {Promise<IEmailTemplate>}
     */
    public async postEmailTemplate(template: IEmailTemplate) {
        return (await this.httpClient.post<IEmailTemplate>('/api/login', template)).data;
    }

    /**
     * Get Email Template
     * @returns {Promise<IEmailTemplate>}
     */
    public async getEmailTemplate(template: string) {
        const response = await this.httpClient.get<IEmailTemplate>(`/api/emailTemplate?templatePath=${template}`);
        return response.data;
    }
}