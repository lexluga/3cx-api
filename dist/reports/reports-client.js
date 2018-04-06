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
    downloadReport(url, responseType = '') {
        return this.httpClient.get(url, { responseType });
    }
    getDefaultReport() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.httpClient.get('/api/Reports/DefaultReport')).data;
        });
    }
    getExistingReports() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.httpClient.get('/api/ExistingReports')).data;
        });
    }
    getScheduledReports() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.httpClient.get('/api/Reports')).data;
        });
    }
    deleteExistingReports(keys) {
        return this.httpClient.post('/api/ExistingReports/delete', keys);
    }
    deleteScheduledReports(keys) {
        return this.httpClient.post('/api/Reports/delete', keys);
    }
    deleteScheduledReport(key) {
        return this.deleteScheduledReports([key]);
    }
    deleteExistingReport(key) {
        return this.deleteExistingReports([key]);
    }
    scheduleReport(report) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.httpClient.post('/api/Reports/ScheduleReport', report)).data;
        });
    }
}
exports.ReportsClient = ReportsClient;
