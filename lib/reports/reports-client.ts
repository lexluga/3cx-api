import {IHttpClient, IResponse} from '../http-client';
import {IListResponse} from '../list-response';
import {IExistingReport} from './existing-report';
import {IReport} from './report';

export class ReportsClient {
    constructor(private readonly httpClient: IHttpClient) {
    }

    /**
     * Download report
     * @param {string} url
     * @param {string} responseType
     * @returns {Promise<IResponse<any>>}
     */
    public downloadReport<T>(url: string, responseType: string = '') {
        return this.httpClient.get<T>(url, {responseType});
    }

    /**
     * Create default report template
     * @returns {Promise<IReport>}
     */
    public async getDefaultReport() {
        return (await this.httpClient.get<IReport>('/api/Reports/DefaultReport')).data;
    }

    /**
     * Get all existing reports
     * @returns {Promise<IListResponse<IExistingReport>>}
     */
    public async getExistingReports() {
        return (await this.httpClient.get<IListResponse<IExistingReport>>('/api/ExistingReports')).data;
    }

    /**
     * Get all scheduled reports
     * @returns {Promise<IListResponse<IExistingReport>>}
     */
    public async getScheduledReports() {
        return (await  this.httpClient.get<IListResponse<IExistingReport>>('/api/Reports')).data;
    }

    /**
     * Delet array of existing reports
     * @param {string[]} keys
     * @returns {Promise<IResponse<any>>}
     */
    public deleteExistingReports(keys: string[]) {
        return this.httpClient.post('/api/ExistingReports/delete', keys);
    }

    /**
     * Delete array of scheduled reports
     * @param {string[]} keys
     * @returns {Promise<IResponse<any>>}
     */
    public deleteScheduledReports(keys: string[]) {
        return this.httpClient.post('/api/Reports/delete', keys);
    }

    /**
     * Delete scheduled report
     * @param {string} key
     * @returns {Promise<IResponse<any>>}
     */
    public deleteScheduledReport(key: string) {
        return this.deleteScheduledReports([key]);
    }

    /**
     * Delete existing report
     * @param {string} key
     * @returns {Promise<IResponse<any>>}
     */
    public deleteExistingReport(key: string) {
        return this.deleteExistingReports([key]);
    }

    /**
     * Schedule report
     * @param {Partial<IReport>} report
     * @returns {Promise<string>}
     */
    public async scheduleReport(report: Partial<IReport>) {
        return (await this.httpClient.post<string>('/api/Reports/ScheduleReport', report)).data;
    }
}
