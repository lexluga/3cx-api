import { IHttpClient, IResponse } from '../http-client';
import { IListResponse } from '../list-response';
import { IExistingReport } from './existing-report';
import { IReport } from './report';
export declare class ReportsClient {
    private readonly httpClient;
    constructor(httpClient: IHttpClient);
    downloadReport<T>(url: string, responseType?: string): Promise<IResponse<T>>;
    getDefaultReport(): Promise<IReport>;
    getExistingReports(): Promise<IListResponse<IExistingReport>>;
    getScheduledReports(): Promise<IListResponse<IExistingReport>>;
    deleteExistingReports(keys: string[]): Promise<IResponse<any>>;
    deleteScheduledReports(keys: string[]): Promise<IResponse<any>>;
    deleteScheduledReport(key: string): Promise<IResponse<any>>;
    deleteExistingReport(key: string): Promise<IResponse<any>>;
    scheduleReport(report: Partial<IReport>): Promise<string>;
}
