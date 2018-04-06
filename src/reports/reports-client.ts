import {IHttpClient, IResponse} from '../http-client';
import {IListResponse} from '../list-response';
import {IExistingReport} from './existing-report';
import {IReport} from './report';

export class ReportsClient {
    constructor(private readonly httpClient: IHttpClient) {
    }

    public downloadReport<T>(url: string, responseType: string = '') {
        return this.httpClient.get<T>(url, {responseType});
    }

    public async getDefaultReport() {
        return (await this.httpClient.get<IReport>('/api/Reports/DefaultReport')).data;
    }

    public async getExistingReports() {
        return (await this.httpClient.get<IListResponse<IExistingReport>>('/api/ExistingReports')).data;
    }

    public async getScheduledReports() {
        return (await  this.httpClient.get<IListResponse<IExistingReport>>('/api/Reports')).data;
    }

    public deleteExistingReports(keys: string[]) {
        return this.httpClient.post('/api/ExistingReports/delete', keys);
    }

    public deleteScheduledReports(keys: string[]) {
        return this.httpClient.post('/api/Reports/delete', keys);
    }

    public deleteScheduledReport(key: string) {
        return this.deleteScheduledReports([key]);
    }

    public deleteExistingReport(key: string) {
        return this.deleteExistingReports([key]);
    }

    public async scheduleReport(report: Partial<IReport>) {
        return (await this.httpClient.post<string>('/api/Reports/ScheduleReport', report)).data;
    }
}
