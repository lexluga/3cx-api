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
}
exports.ConsoleClient = ConsoleClient;
