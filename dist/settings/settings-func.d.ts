import { IHttpClient } from '../http-client';
import { IEmailTemplate } from './email-template';
import { IPhoneTemplates } from './templates/phone-template';
import { IDialCodes } from './dial-codes';
import { IActiveObjectResponse } from '../active-object-response';
import { ILicense } from './License';
import { IBlacklistedNumbers } from './blacklisted-numbers';
import { IMusicOnHold } from './music-on-hold';
import { IFaxServer } from './fax-server';
import { IE164 } from './e164';
import { ICallParking } from './call-parking';
import { ICDR } from './cdr';
import { ITimezoneOfficeHours } from './timezone-and-office-hours';
import { IConferencing } from './conferencing';
import { I3CXClient } from './tcx-client';
import { IServerSideCRMIntegration, IClientSideCRMIntegration } from './crm';
import { IParameters } from './paramaters';
import { IPBX, IEmergencyNumber } from './pbx';
import { ISecurity } from './security';
import { IVoicemail } from './voicemail';
import { IHotelModule } from './hotel-module';
import { ICopyTemplate } from './templates/copy-template';
import { ISaveTemplate } from './templates/saveTemplate';
import { IResponseSaveTemplate } from './templates/response-save-template';
import { ISystemPromptSets } from './system-prompts/system-promptsets';
import { IPrompts } from './system-prompts/prompts';
export declare class SettingsClient {
    private readonly httpClient;
    constructor(httpClient: IHttpClient);
    /**
     * Post 3CX Client Settings
     * @returns {Promise<IActiveObjectResponse<I3CXClient>>}
     */
    get3CXClientSettings(): Promise<I3CXClient>;
    /**
     * Get Blacklisted Numbers
     * @returns {Promise<IBlacklistedNumbers>}
     */
    getBlacklistedNumbers(): Promise<IBlacklistedNumbers[]>;
    /**
     * Post Delete Blacklisted Numbers
     * @param {string}
     * @returns {}
     */
    deleteBlacklistedNumber(deletedId: string): Promise<void>;
    /**
     * Post Add Blacklisted Numbers
     * @returns {IActiveObjectResponse<IBlacklistedNumbers>}
     */
    addBlacklistedNumber(): Promise<IActiveObjectResponse<IBlacklistedNumbers>>;
    /**
     * Post Call Parking Configurations
     * @returns {Promise<IActiveObjectResponse<ICallParking>>}
     */
    getCallParkingSettings(): Promise<ICallParking>;
    /**
     * Post CDR Configurations
     * @returns {Promise<IActiveObjectResponse<ICDR>>}
     */
    getCDRSettings(): Promise<ICDR>;
    /**
     * Post Conferencing Configurations
     * @returns {Promise<IActiveObjectResponse<IConferencing>>}
     */
    getConferencingSettings(): Promise<IConferencing>;
    /**
     * Post Server Side CRM Configurations
     * @returns {Promise<IActiveObjectResponse<IServerSideCRMIntegration>>}
     */
    getServerSideCRMSettings(): Promise<IServerSideCRMIntegration>;
    /**
     * Get Client Side CRM Configurations
     * @returns {Promise<IActiveObjectResponse<IClientSideCRMIntegration>>}
     */
    getClientSideCRMSettings(): Promise<IClientSideCRMIntegration[]>;
    /**
     * Post Dial Codes Settings
     * @returns {Promise<IActiveObjectResponse<IDialCodes>>}
     */
    getDialCodes(): Promise<IDialCodes>;
    /**
     * Post E164 Configurations
     * @returns {Promise<IActiveObjectResponse<IE164>>}
     */
    getE164Settings(): Promise<IE164>;
    /**
     * Post Email
     * @param {IHttpClient} httpClient
     * @returns {Promise<IEmailTemplate>}
     */
    postEmailTemplate(templatePath: IEmailTemplate): Promise<any>;
    /**
     * Get Email Template
     * @returns {Promise<IEmailTemplate>}
     */
    getEmailTemplate(template: string): Promise<IEmailTemplate>;
    /**
     * Post Fax Server Configurations
     * @returns {Promise<IActiveObjectResponse<IFaxServer>>}
     */
    getFaxServerSettings(): Promise<IFaxServer>;
    /**
     * Post MOH Configurations
     * @returns {Promise<IActiveObjectResponse<IMusicOnHold>>}
     */
    getMOHSettings(): Promise<IMusicOnHold>;
    /**
     * Get License Information
     * @returns {Promise<ILicense>}
     */
    getLicenseInformation(): Promise<ILicense>;
    /**
     * Post Timezone Configurations
     * @returns {Promise<IActiveObjectResponse<ITimezoneOfficeHours>>}
     */
    getTimezoneSettings(): Promise<ITimezoneOfficeHours>;
    /**
     * Get Parameters list
     * @returns {Promise<IListResponse<IParameters>>}
     */
    getParametersSettings(): Promise<IParameters[]>;
    /**
     * Post PBX Configurations
     * @returns {Promise<IActiveObjectResponse<IPBX>>}
     */
    getPbxSettings(): Promise<IPBX>;
    /**
     * Get Emergency Number list
     * @returns {Promise<IListResponse<IEmergencyNumber>>}
     */
    getEmergencyNumbersSettings(): Promise<IEmergencyNumber[]>;
    /**
     * Post Security Configurations
     * @returns {Promise<IActiveObjectResponse<ISecurity>>}
     */
    getSecuritySettings(): Promise<ISecurity>;
    /**
     * Get List of System Prompts
     * returns {Promise<IListResponse<ISystemPromptSets>>}
     */
    getSystemPromptsList(): Promise<ISystemPromptSets[]>;
    /**
     * Get List of System Prompts
     * @param {string}
     * returns {Promise<IListResponse<IPrompts>>}
     */
    setActivePromptSet(name: string): Promise<IPrompts[]>;
    /**
     * POST Delete System Prompt
     * @param {string}
     * returns {Promise<ISystemPrompts>}
     */
    deleteSystemPrompt(namePromptSet: string): Promise<void>;
    /**
     * Get Phone Template
     * @returns {Promise<IPhoneTemplates>}
     */
    getPhoneTemplate(filename: string): Promise<IPhoneTemplates>;
    /**
     * POST Copy Phone Template
     * @returns {Promise<IListResponse<string>>}
     */
    copyPhoneTemplate(newTemplate: ICopyTemplate): Promise<string[]>;
    /**
     * POST Save Phone Template
     * @returns {Promise<IResponseSaveTemplate>}
     */
    savePhoneTemplate(saveTemplate: ISaveTemplate): Promise<IResponseSaveTemplate>;
    /**
     * POST Delete Phone Template
     * @returns {Promise<IListResponse<string>>}
     */
    deletePhoneTemplate(templateName: string): Promise<string[]>;
    /**
     * Post Voicemail Configurations
     * @returns {Promise<IActiveObjectResponse<IVoicemail>>}
     */
    getVoicemailSettings(): Promise<IVoicemail>;
    /**
     * Post Hotel Module Configurations
     * @returns {Promise<IActiveObjectResponse<IHotelModule>>}
     */
    getHotelModuleSettings(): Promise<IHotelModule>;
}
