import {IHttpClient} from '../http-client';
import {IEmailTemplate} from './email-template';
import {IPhoneTemplates} from './templates/phone-template';
import {IDialCodes} from './dial-codes';
import {IActiveObjectResponse} from '../active-object-response';
import {ILicense} from './License';
import {IBlacklistedNumbers} from './blacklisted-numbers';
import {IListResponse} from '../list-response';
import {IMusicOnHold} from './music-on-hold';
import {IFaxServer} from './fax-server';
import {IE164} from './e164';
import {ICallParking} from './call-parking';
import {ICDR} from './cdr';
import {ITimezoneOfficeHours} from './timezone-and-office-hours';
import {IConferencing} from './conferencing';
import {I3CXClient} from './tcx-client';
import {IServerSideCRMIntegration, IClientSideCRMIntegration} from './crm';
import {IParameters} from './paramaters';
import {IPBX, IEmergencyNumber} from './pbx';
import {ISecurity} from './security';
import {IVoicemail} from './voicemail';
import {IHotelModule} from './hotel-module';
import {ICopyTemplate} from './templates/copy-template';
import {ISaveTemplate} from './templates/saveTemplate';
import {IResponseSaveTemplate} from './templates/response-save-template';

export class SettingsClient {
    constructor(private readonly httpClient: IHttpClient) {
    }

    /**
     * Post 3CX Client Settings
     * @returns {Promise<IActiveObjectResponse<I3CXClient>>}
     */
    public async get3CXClientSettings() {
        const response = await this.httpClient.post<IActiveObjectResponse<I3CXClient>>(`/api/Settings/PhoneSettings`, {});
        return response.data.ActiveObject;
    }

    /**
     * Get Blacklisted Numbers
     * @returns {Promise<IBlacklistedNumbers>}
     */
    public async getBlacklistedNumbers() {
        const response = await this.httpClient.get<IListResponse<IBlacklistedNumbers>>(`/api/NumberBlackList`);
        return response.data.list;
    }

    /**
     * Post Delete Blacklisted Numbers
     * @param {string}
     * @returns {}
     */
    public async deleteBlacklistedNumber(deletedId: string) {
        await this.httpClient.post(`/api/NumberBlackList/delete`, {Ids: [deletedId]});
    }

    /**
     * Post Add Blacklisted Numbers
     * @returns {IActiveObjectResponse<IBlacklistedNumbers>}
     */
    public async addBlacklistedNumber() {
        const result = await this.httpClient.post<IActiveObjectResponse<IBlacklistedNumbers>>(`/api/NumberBlackList/new`, {Param: {}});
        return result.data;
    }

    /**
     * Post Call Parking Configurations
     * @returns {Promise<IActiveObjectResponse<ICallParking>>}
     */
    public async getCallParkingSettings() {
        const result = await this.httpClient.post<IActiveObjectResponse<ICallParking>>(`/api/Settings/CallParkingSettings`, {});
        return result.data.ActiveObject;
    }

    /**
     * Post CDR Configurations
     * @returns {Promise<IActiveObjectResponse<ICDR>>}
     */
    public async getCDRSettings() {
        const result = await this.httpClient.post<IActiveObjectResponse<ICDR>>(`/api/Settings/CDRSettings`, {});
        return result.data.ActiveObject;
    }

    /**
     * Post Conferencing Configurations
     * @returns {Promise<IActiveObjectResponse<IConferencing>>}
     */
    public async getConferencingSettings() {
        const result = await this.httpClient.post<IActiveObjectResponse<IConferencing>>(`/api/Settings/ConferencingSettings`, {});
        return result.data.ActiveObject;
    }

    /**
     * Post Server Side CRM Configurations
     * @returns {Promise<IActiveObjectResponse<IServerSideCRMIntegration>>}
     */
    public async getServerSideCRMSettings() {
        const result = await this.httpClient.post<IActiveObjectResponse<IServerSideCRMIntegration>>(`/api/CrmList/CrmSettings`, {});
        return result.data.ActiveObject;
    }

    /**
     * Get Client Side CRM Configurations
     * @returns {Promise<IActiveObjectResponse<IClientSideCRMIntegration>>}
     */
    public async getClientSideCRMSettings() {
        const result = await this.httpClient.get<IListResponse<IClientSideCRMIntegration>>(`/api/crm/client`);
        return result.data.list;
    }

    /**
     * Post Dial Codes Settings
     * @returns {Promise<IActiveObjectResponse<IDialCodes>>}
     */
    public async getDialCodes() {
        const response = await this.httpClient.post<IActiveObjectResponse<IDialCodes>>(`/api/Settings/DialSettings`, {});
        return response.data.ActiveObject;
    }

    /**
     * Post E164 Configurations
     * @returns {Promise<IActiveObjectResponse<IE164>>}
     */
    public async getE164Settings() {
        const result = await this.httpClient.post<IActiveObjectResponse<IE164>>(`/api/Settings/E164Settings`, {});
        return result.data.ActiveObject;
    }

    /**
     * Post Email
     * @param {IHttpClient} httpClient
     * @returns {Promise<IEmailTemplate>}
     */
    public async postEmailTemplate(templatePath: IEmailTemplate) {
        return (await this.httpClient.post<any>('/api/emailTemplate', templatePath)).data;
    }

    /**
     * Get Email Template
     * @returns {Promise<IEmailTemplate>}
     */
    public async getEmailTemplate(template: string) {
        const response = await this.httpClient.get<IEmailTemplate>(`/api/emailTemplate?templatePath=${template}`);
        return response.data;
    }

    /**
     * Post Fax Server Configurations
     * @returns {Promise<IActiveObjectResponse<IFaxServer>>}
     */
    public async getFaxServerSettings() {
        const result = await this.httpClient.post<IActiveObjectResponse<IFaxServer>>(`/api/Settings/Fax`, {});
        return result.data.ActiveObject;
    }

    /**
     * Post MOH Configurations
     * @returns {Promise<IActiveObjectResponse<IMusicOnHold>>}
     */
    public async getMOHSettings() {
        const result = await this.httpClient.post<IActiveObjectResponse<IMusicOnHold>>(`/api/Settings/MusicOnHoldSettings`, {});
        return result.data.ActiveObject;
    }

    /**
     * Get License Information
     * @returns {Promise<ILicense>}
     */
    public async getLicenseInformation() {
        const response = await this.httpClient.get<ILicense>(`/api/License`);
        return response.data;
    }

    /**
     * Post Timezone Configurations
     * @returns {Promise<IActiveObjectResponse<ITimezoneOfficeHours>>}
     */
    public async getTimezoneSettings() {
        const result = await this.httpClient.post<IActiveObjectResponse<ITimezoneOfficeHours>>(`/api/Settings/OfficeHoursSettings`, {});
        return result.data.ActiveObject;
    }

    /**
     * Get Parameters list
     * @returns {Promise<IListResponse<IParameters>>}
     */
    public async getParametersSettings() {
        const result = await this.httpClient.get<IListResponse<IParameters>>(`/api/CustomParametersList`);
        return result.data.list;
    }

    /**
     * Post PBX Configurations
     * @returns {Promise<IActiveObjectResponse<IPBX>>}
     */
    public async getPbxSettings() {
        const result = await this.httpClient.post<IActiveObjectResponse<IPBX>>(`/api/Settings/PbxSettings`, {});
        return result.data.ActiveObject;
    }

    /**
     * Get Emergency Number list
     * @returns {Promise<IListResponse<IEmergencyNumber>>}
     */
    public async getEmergencyNumbersSettings() {
        const result = await this.httpClient.get<IListResponse<IEmergencyNumber>>(`/api/OutboundRuleList/getEmergencyList`);
        return result.data.list;
    }

    /**
     * Post Security Configurations
     * @returns {Promise<IActiveObjectResponse<ISecurity>>}
     */
    public async getSecuritySettings() {
        const result = await this.httpClient.post<IActiveObjectResponse<ISecurity>>(`/api/Settings/SecuritySettings`, {});
        return result.data.ActiveObject;
    }

    /**
     * Get Phone Template
     * @returns {Promise<IPhoneTemplates>}
     */
    public async getPhoneTemplate(filename: string) {
        const response = await this.httpClient.get<IPhoneTemplates>(`/api/PhoneTemplates/templateByName?filename=${filename}`);
        return response.data;
    }

    /**
     * POST Copy Phone Template
     * @returns {Promise<IListResponse<string>>}
     */
    public async copyPhoneTemplate(newTemplate: ICopyTemplate) {
        const response = await this.httpClient.post<IListResponse<string>>(`/api/PhoneTemplates/copy`, newTemplate);
        return response.data.list;
    }

    /**
     * POST Save Phone Template
     * @returns {Promise<IResponseSaveTemplate>}
     */
    public async savePhoneTemplate(saveTemplate: ISaveTemplate) {
        const response = await this.httpClient.post<IResponseSaveTemplate>(`/api/PhoneTemplates/save`, saveTemplate);
        return response.data;
    }

    /**
     * POST Delete Phone Template
     * @returns {Promise<IListResponse<string>>}
     */
    public async deletePhoneTemplate(templateName: string) {
        const response = await this.httpClient.post<IListResponse<string>>(`/api/PhoneTemplates/delete`, {filename: templateName});
        return response.data.list;
    }

    /**
     * Post Voicemail Configurations
     * @returns {Promise<IActiveObjectResponse<IVoicemail>>}
     */
    public async getVoicemailSettings() {
        const response = await this.httpClient.post<IActiveObjectResponse<IVoicemail>>(`/api/Settings/VoiceMailSettings`, {});
        return response.data.ActiveObject;
    }

    /**
     * Post Hotel Module Configurations
     * @returns {Promise<IActiveObjectResponse<IHotelModule>>}
     */
    public async getHotelModuleSettings() {
        const response = await this.httpClient.post<IActiveObjectResponse<IHotelModule>>(`/api/Settings/HotelServices`, {});
        return response.data.ActiveObject;
    }

}

