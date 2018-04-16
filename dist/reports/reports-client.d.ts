import { IHttpClient, IResponse } from '../http-client';
import { IListResponse } from '../list-response';
import { IExistingReport } from './existing-report';
import { IReport } from './report';
export declare class ReportsClient {
    private readonly httpClient;
    constructor(httpClient: IHttpClient);
    /**
     * Download report
     * @param {string} url
     * @param {string} responseType
     * @returns {Promise<IResponse<any>>}
     */
    downloadReport<T>(url: string, responseType?: string): Promise<IResponse<T>>;
    /**
     * Create default report template
     * @returns {Promise<IReport>}
     */
    getDefaultReport(): Promise<IReport>;
    /**
     * Get all existing reports
     * @returns {Promise<IListResponse<IExistingReport>>}
     */
    getExistingReports(): Promise<IListResponse<IExistingReport>>;
    /**
     * Get all scheduled reports
     * @returns {Promise<IListResponse<IExistingReport>>}
     */
    getScheduledReports(): Promise<IListResponse<IExistingReport>>;
    /**
     * Delet array of existing reports
     * @param {string[]} keys
     * @returns {Promise<IResponse<any>>}
     */
    deleteExistingReports(keys: string[]): Promise<IResponse<any>>;
    /**
     * Delete array of scheduled reports
     * @param {string[]} keys
     * @returns {Promise<IResponse<any>>}
     */
    deleteScheduledReports(keys: string[]): Promise<IResponse<any>>;
    /**
     * Delete scheduled report
     * @param {string} key
     * @returns {Promise<IResponse<any>>}
     */
    deleteScheduledReport(key: string): Promise<IResponse<any>>;
    /**
     * Delete existing report
     * @param {string} key
     * @returns {Promise<IResponse<any>>}
     */
    deleteExistingReport(key: string): Promise<IResponse<any>>;
    /**
     * Schedule report
     * @param {Partial<IReport>} report
     * @returns {Promise<string>}
     */
    scheduleReport(report: Partial<IReport>): Promise<string>;
}
