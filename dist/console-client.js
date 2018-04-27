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
class ConsoleClient {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * Get system status
     * @returns {Promise<ISystemStatus>}
     */
    getSystemStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.httpClient.get('/api/SystemStatus');
            return response.data;
        });
    }
    /**
     * Get extensions
     * @returns {Promise<IExtension[]>}
     */
    getExtensionList() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.httpClient.get('/api/ExtensionList');
            return response.data.list;
        });
    }
    /**
     * Get faxes
     * @returns {Promise<IFax[]>}
     */
    getFaxList() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.httpClient.get('/api/FaxList');
            return response.data.list;
        });
    }
    /**
     * Get current user info
     * @returns {Promise<IUserInfo>}
     */
    getCurrentUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.httpClient.get('/api/CurrentUser');
            return response.data;
        });
    }
    /**
     * Get groups
     * @returns {Promise<IGroup[]>}
     */
    getGroupList() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.httpClient.get('/api/GroupList');
            return response.data.list;
        });
    }
    /**
     * Get phonebook
     * @returns {Promise<IPhonebookEntry[]>}
     */
    getPhonebookList() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.httpClient.get('/api/PhoneBookEntryList');
            return response.data.list;
        });
    }
    /**
     * Get phones
     * @returns {Promise<IPhone[]>}
     */
    getPhonesList() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.httpClient.get('/api/PhoneList');
            return response.data.list;
        });
    }
    /**
     * Get Queues
     * @returns {Promise<IQueue>}
     */
    getQueueList() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.httpClient.get('/api/QueueList');
            return response.data.list;
        });
    }
    /**
     * Get Chats
     * @returns {Promise<IChats>}
     */
    getChatsList(count, from) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.httpClient.get(`/api/Chat/messages?count=${count}&filter=&from=${from}`);
            return response.data;
        });
    }
    /**
     * Get Trunk List
     * @returns {Promise<ITrunks>}
     */
    getTrunkList() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.httpClient.get(`/api/TrunkList`);
            return response.data.list;
        });
    }
    /**
     * Get Inbound List
     * @returns {Promise<IInboundRule>}
     */
    getInboundRuleList() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.httpClient.get(`/api/InboundRulesList`);
            return response.data.list;
        });
    }
    /**
     * Get Outbound List
     * @returns {Promise<IOutboundRule>}
     */
    getOutboundRuleList() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.httpClient.get(`/api/OutboundRuleList`);
            return response.data.list;
        });
    }
    /**
     * Get IVR List
     * @returns {Promise<IIVR>}
     */
    getIVRList() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.httpClient.get(`/api/IVRList`);
            return response.data.list;
        });
    }
    /**
     * Get Ring Group List
     * @returns {Promise<IRingGroup>}
     */
    getRingGroupList() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.httpClient.get(`/api/RingGroupList`);
            return response.data.list;
        });
    }
    /**
     * Get FAX Extension List
     * @returns {Promise<IFaxExtension>}
     */
    getFaxExtensionList() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.httpClient.get(`/api/FaxList`);
            return response.data.list;
        });
    }
    /**
     * Get FXS/Dect List
     * @returns {Promise<IFxsDect>}
     */
    getFXSDectList() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.httpClient.get(`/api/FxsList`);
            return response.data;
        });
    }
    /**
     * Get Hotdesking List
     * @returns {Promise<IFxsDect>}
     */
    getHotdeskingList() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.httpClient.get(`/api/HotdeskingList`);
            return response.data.list;
        });
    }
    /**
     * Get Recordings List
     * @param {IRecordingParameters}
     * @returns {Promise<IRecordings>}
     */
    getRecordingsList(recordingParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `/api/RecordingList?count=${recordingParams.count}&dateTimeParts=${recordingParams.dateTimeParts}&filter=${recordingParams.filter}&from=${recordingParams.from}&onlyTime=${recordingParams.onlyTime}`;
            const response = yield this.httpClient.get(url);
            return response.data;
        });
    }
    /**
     * Get Backup List
     * @returns {Promise<IBackup>}
     */
    getBackupList() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.httpClient.get(`/api/BackupAndRestoreList`);
            return response.data.list;
        });
    }
    /**
     * Post New Backup List
     * @param {INewBackup}
     */
    newBackup(backupOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.httpClient.post(`/api/BackupAndRestoreList/backup`, backupOptions);
        });
    }
    /**
     * Post Delete Backup List
     * @param {string}
     */
    deleteBackup(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.httpClient.post(`/api/BackupAndRestoreList/delete`, { Ids: [id] });
        });
    }
    /**
     * Get Call Log List
     * @param {ICallLogsParameters}
     * @returns {Promise<ICallLogs>}
     */
    getCallLogList(filterParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `/api/CallLog?TimeZoneName=${filterParams.TimeZoneName}&callState=${filterParams.callState}&dateRangeType=${filterParams.dateRangeType}&fromFilter=${filterParams.fromFilter}&fromFilterType=${filterParams.fromFilterType}&numberOfRows=${filterParams.numberOfRows}&searchFilter=${filterParams.searchFilter}&startRow=${filterParams.startRow}&toFilter=${filterParams.toFilter}&toFilterType=${filterParams.toFilterType}`;
            const response = yield this.httpClient.get(url);
            return response.data;
        });
    }
    /**
     * Delete Chat
     * @param {string}
     */
    deleteChat(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.httpClient.post(`/api/Chat/delete`, [id]);
        });
    }
}
exports.ConsoleClient = ConsoleClient;
