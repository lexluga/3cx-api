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
class ReportsClient {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * Download report
     * @param {string} url
     * @param {string} responseType
     * @returns {Promise<IResponse<any>>}
     */
    downloadReport(url, responseType = '') {
        return this.httpClient.get(url, { responseType });
    }
    /**
     * Create default report template
     * @returns {Promise<IReport>}
     */
    getDefaultReport() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.httpClient.get('/api/Reports/DefaultReport')).data;
        });
    }
    /**
     * Get all existing reports
     * @returns {Promise<IListResponse<IExistingReport>>}
     */
    getExistingReports() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.httpClient.get('/api/ExistingReports')).data;
        });
    }
    /**
     * Get all scheduled reports
     * @returns {Promise<IListResponse<IExistingReport>>}
     */
    getScheduledReports() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.httpClient.get('/api/Reports')).data;
        });
    }
    /**
     * Delet array of existing reports
     * @param {string[]} keys
     * @returns {Promise<IResponse<any>>}
     */
    deleteExistingReports(keys) {
        return this.httpClient.post('/api/ExistingReports/delete', keys);
    }
    /**
     * Delete array of scheduled reports
     * @param {string[]} keys
     * @returns {Promise<IResponse<any>>}
     */
    deleteScheduledReports(keys) {
        return this.httpClient.post('/api/Reports/delete', keys);
    }
    /**
     * Delete scheduled report
     * @param {string} key
     * @returns {Promise<IResponse<any>>}
     */
    deleteScheduledReport(key) {
        return this.deleteScheduledReports([key]);
    }
    /**
     * Delete existing report
     * @param {string} key
     * @returns {Promise<IResponse<any>>}
     */
    deleteExistingReport(key) {
        return this.deleteExistingReports([key]);
    }
    /**
     * Schedule report
     * @param {Partial<IReport>} report
     * @returns {Promise<string>}
     */
    scheduleReport(report) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.httpClient.post('/api/Reports/ScheduleReport', report)).data;
        });
    }
}
exports.ReportsClient = ReportsClient;
