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
class SettingsClient {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * Post 3CX Client Settings
     * @returns {Promise<IActiveObjectResponse<I3CXClient>>}
     */
    get3CXClientSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.httpClient.post(`/api/Settings/PhoneSettings`, {});
            return response.data.ActiveObject;
        });
    }
    /**
     * Get Blacklisted Numbers
     * @returns {Promise<IBlacklistedNumbers>}
     */
    getBlacklistedNumbers() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.httpClient.get(`/api/NumberBlackList`);
            return response.data.list;
        });
    }
    /**
     * Post Delete Blacklisted Numbers
     * @param {string}
     * @returns {}
     */
    deleteBlacklistedNumber(deletedId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.httpClient.post(`/api/NumberBlackList/delete`, { Ids: [deletedId] });
        });
    }
    /**
     * Post Add Blacklisted Numbers
     * @returns {IActiveObjectResponse<IBlacklistedNumbers>}
     */
    addBlacklistedNumber() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.httpClient.post(`/api/NumberBlackList/new`, { Param: {} });
            return result.data;
        });
    }
    /**
     * Post Call Parking Configurations
     * @returns {Promise<IActiveObjectResponse<ICallParking>>}
     */
    getCallParkingSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.httpClient.post(`/api/Settings/CallParkingSettings`, {});
            return result.data.ActiveObject;
        });
    }
    /**
     * Post CDR Configurations
     * @returns {Promise<IActiveObjectResponse<ICDR>>}
     */
    getCDRSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.httpClient.post(`/api/Settings/CDRSettings`, {});
            return result.data.ActiveObject;
        });
    }
    /**
     * Post Conferencing Configurations
     * @returns {Promise<IActiveObjectResponse<IConferencing>>}
     */
    getConferencingSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.httpClient.post(`/api/Settings/ConferencingSettings`, {});
            return result.data.ActiveObject;
        });
    }
    /**
     * Post Server Side CRM Configurations
     * @returns {Promise<IActiveObjectResponse<IServerSideCRMIntegration>>}
     */
    getServerSideCRMSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.httpClient.post(`/api/CrmList/CrmSettings`, {});
            return result.data.ActiveObject;
        });
    }
    /**
     * Post Download Server Side CRM
     * @param {IUpdateParameters}
     * @returns {Promise<IUpdates>}
     */
    downloadServerSideCRM(crmUpdate) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.httpClient.post(`/api/updateChecker/update`, crmUpdate);
            return result.data;
        });
    }
    /**
     * Post Delete Server Side CRM
     * @returns {Promise<string>}
     */
    deleteServerSideCRM(crmName) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.httpClient.post(`/api/CrmList/deleteServerCrm?crmName=${crmName}`, {});
            return result.data;
        });
    }
    /**
     * Get Server Side CRM Updates
     * @returns {Promise<IUpdates>}
     */
    getServerSideCRMUpdates(crmName) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.httpClient.get(`/api/crm/serverCrmUpdates`);
            return result.data;
        });
    }
    /**
     * Get Client Side CRM Configurations
     * @returns {Promise<IActiveObjectResponse<IClientSideCRMIntegration>>}
     */
    getClientSideCRMSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.httpClient.get(`/api/crm/client`);
            return result.data.list;
        });
    }
    /**
     * Post Download Client Side CRM
     * @param {IUpdateParameters}
     * @returns {Promise<IUpdates>}
     */
    downloadClientSideCRM(crmUpdate) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.httpClient.post(`/api/updateChecker/update`, crmUpdate);
            return result.data;
        });
    }
    /**
     * Post Delete Client Side CRM
     * @param {clientCrm}
     * @returns {}
     */
    deleteClientSideCRM(clientCrm) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.httpClient.post(`/api/crm/delete`, { Name: clientCrm });
        });
    }
    /**
     * Post Dial Codes Settings
     * @returns {Promise<IActiveObjectResponse<IDialCodes>>}
     */
    getDialCodes() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.httpClient.post(`/api/Settings/DialSettings`, {});
            return response.data.ActiveObject;
        });
    }
    /**
     * Post E164 Configurations
     * @returns {Promise<IActiveObjectResponse<IE164>>}
     */
    getE164Settings() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.httpClient.post(`/api/Settings/E164Settings`, {});
            return result.data.ActiveObject;
        });
    }
    /**
     * Post Email
     * @param {IHttpClient} httpClient
     * @returns {Promise<IEmailTemplate>}
     */
    postEmailTemplate(templatePath) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.httpClient.post('/api/emailTemplate', templatePath)).data;
        });
    }
    /**
     * Get Email Template
     * @returns {Promise<IEmailTemplate>}
     */
    getEmailTemplate(template) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.httpClient.get(`/api/emailTemplate?templatePath=${template}`);
            return response.data;
        });
    }
    /**
     * POST Test Email Server
     */
    testEmailServer() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.httpClient.post(`/api/Settings/testEmail`, 1);
        });
    }
    /**
     * Post Fax Server Configurations
     * @returns {Promise<IActiveObjectResponse<IFaxServer>>}
     */
    getFaxServerSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.httpClient.post(`/api/Settings/Fax`, {});
            return result.data.ActiveObject;
        });
    }
    /**
     * Post MOH Configurations
     * @returns {Promise<IActiveObjectResponse<IMusicOnHold>>}
     */
    getMOHSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.httpClient.post(`/api/Settings/MusicOnHoldSettings`, {});
            return result.data.ActiveObject;
        });
    }
    /**
     * Get License Information
     * @returns {Promise<ILicense>}
     */
    getLicenseInformation() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.httpClient.get(`/api/License`);
            return response.data;
        });
    }
    /**
     * Post Timezone Configurations
     * @returns {Promise<IActiveObjectResponse<ITimezoneOfficeHours>>}
     */
    getTimezoneSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.httpClient.post(`/api/Settings/OfficeHoursSettings`, {});
            return result.data.ActiveObject;
        });
    }
    /**
     * Get Parameters list
     * @returns {Promise<IListResponse<IParameters>>}
     */
    getParametersSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.httpClient.get(`/api/CustomParametersList`);
            return result.data.list;
        });
    }
    /**
     * Post PBX Configurations
     * @returns {Promise<IActiveObjectResponse<IPBX>>}
     */
    getPbxSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.httpClient.post(`/api/Settings/PbxSettings`, {});
            return result.data.ActiveObject;
        });
    }
    /**
     * Get Emergency Number list
     * @returns {Promise<IListResponse<IEmergencyNumber>>}
     */
    getEmergencyNumbersSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.httpClient.get(`/api/OutboundRuleList/getEmergencyList`);
            return result.data.list;
        });
    }
    /**
     * Post Security Configurations
     * @returns {Promise<IActiveObjectResponse<ISecurity>>}
     */
    getSecuritySettings() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.httpClient.post(`/api/Settings/SecuritySettings`, {});
            return result.data.ActiveObject;
        });
    }
    /**
     * Get List of System Prompts
     * returns {Promise<IListResponse<ISystemPromptSets>>}
     */
    getSystemPromptsList() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.httpClient.get(`/api/SystemPromptList/promptSets`);
            return response.data.list;
        });
    }
    /**
     * Get List of System Prompts
     * @param {string}
     * returns {Promise<IListResponse<IPrompts>>}
     */
    setActivePromptSet(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.httpClient.post(`/api/SystemPromptList/setActivePromptSet`, { Name: name });
            return response.data.list;
        });
    }
    /**
     * POST Delete System Prompt
     * @param {string}
     * returns {Promise<ISystemPrompts>}
     */
    deleteSystemPrompt(namePromptSet) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.httpClient.post(`/api/SystemPromptList/deletePromptSet`, { Name: namePromptSet });
        });
    }
    /**
     * Get Phone Template
     * @returns {Promise<IPhoneTemplates>}
     */
    getPhoneTemplate(filename) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.httpClient.get(`/api/PhoneTemplates/templateByName?filename=${filename}`);
            return response.data;
        });
    }
    /**
     * POST Copy Phone Template
     * @returns {Promise<IListResponse<string>>}
     */
    copyPhoneTemplate(newTemplate) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.httpClient.post(`/api/PhoneTemplates/copy`, newTemplate);
            return response.data.list;
        });
    }
    /**
     * POST Save Phone Template
     * @returns {Promise<IResponseSaveTemplate>}
     */
    savePhoneTemplate(saveTemplate) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.httpClient.post(`/api/PhoneTemplates/save`, saveTemplate);
            return response.data;
        });
    }
    /**
     * POST Delete Phone Template
     * @returns {Promise<IListResponse<string>>}
     */
    deletePhoneTemplate(templateName) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.httpClient.post(`/api/PhoneTemplates/delete`, { filename: templateName });
            return response.data.list;
        });
    }
    /**
     * Post Voicemail Configurations
     * @returns {Promise<IActiveObjectResponse<IVoicemail>>}
     */
    getVoicemailSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.httpClient.post(`/api/Settings/VoiceMailSettings`, {});
            return response.data.ActiveObject;
        });
    }
    /**
     * Post Hotel Module Configurations
     * @returns {Promise<IActiveObjectResponse<IHotelModule>>}
     */
    getHotelModuleSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.httpClient.post(`/api/Settings/HotelServices`, {});
            return response.data.ActiveObject;
        });
    }
}
exports.SettingsClient = SettingsClient;
