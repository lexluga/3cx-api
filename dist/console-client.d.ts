import { IChats } from './chats';
import { IExtension } from './extension';
import { IFax } from './fax';
import { IGroup } from './group';
import { IHttpClient } from './http-client';
import { IPhone } from './phone';
import { IPhonebookEntry } from './phonebook/phonebook-entry';
import { IQueue } from './queue';
import { ISystemStatus } from './system-status';
import { IUserInfo } from './userinfo';
import { ITrunks } from './trunk';
import { IOutboundRule } from './outbound-rule';
import { IInboundRule } from './inbound-rule';
import { IIVR } from './digital-receptionist';
import { IFaxExtension } from './fax-extension';
import { IFxsDect } from './fxs-dect';
import { IBackup } from './backup/backup';
import { ICallLogs } from './call-logs/call-logs';
import { IRecordings, IRecordingParameters } from './recording';
import { ICallLogsParameters } from './call-logs/call-log-parameters';
import { INewBackup } from './backup/newBackup';
import { IRingGroup } from './ring-group';
export declare class ConsoleClient {
    private readonly httpClient;
    constructor(httpClient: IHttpClient);
    /**
     * Get system status
     * @returns {Promise<ISystemStatus>}
     */
    getSystemStatus(): Promise<ISystemStatus>;
    /**
     * Get extensions
     * @returns {Promise<IExtension[]>}
     */
    getExtensionList(): Promise<IExtension[]>;
    /**
     * Get faxes
     * @returns {Promise<IFax[]>}
     */
    getFaxList(): Promise<IFax[]>;
    /**
     * Get current user info
     * @returns {Promise<IUserInfo>}
     */
    getCurrentUser(): Promise<IUserInfo>;
    /**
     * Get groups
     * @returns {Promise<IGroup[]>}
     */
    getGroupList(): Promise<IGroup[]>;
    /**
     * Get phonebook
     * @returns {Promise<IPhonebookEntry[]>}
     */
    getPhonebookList(): Promise<IPhonebookEntry[]>;
    /**
     * Get phones
     * @returns {Promise<IPhone[]>}
     */
    getPhonesList(): Promise<IPhone[]>;
    /**
     * Get Queues
     * @returns {Promise<IQueue>}
     */
    getQueueList(): Promise<IQueue[]>;
    /**
     * Get Chats
     * @returns {Promise<IChats>}
     */
    getChatsList(count: number, from: number): Promise<IChats>;
    /**
     * Get Trunk List
     * @returns {Promise<ITrunks>}
     */
    getTrunkList(): Promise<ITrunks[]>;
    /**
     * Get Inbound List
     * @returns {Promise<IInboundRule>}
     */
    getInboundRuleList(): Promise<IInboundRule[]>;
    /**
     * Get Outbound List
     * @returns {Promise<IOutboundRule>}
     */
    getOutboundRuleList(): Promise<IOutboundRule[]>;
    /**
     * Get IVR List
     * @returns {Promise<IIVR>}
     */
    getIVRList(): Promise<IIVR[]>;
    /**
     * Get Ring Group List
     * @returns {Promise<IRingGroup>}
     */
    getRingGroupList(): Promise<IRingGroup[]>;
    /**
     * Get FAX Extension List
     * @returns {Promise<IFaxExtension>}
     */
    getFaxExtensionList(): Promise<IFaxExtension[]>;
    /**
     * Get FXS/Dect List
     * @returns {Promise<IFxsDect>}
     */
    getFXSDectList(): Promise<IFxsDect>;
    /**
     * Get Hotdesking List
     * @returns {Promise<IFxsDect>}
     */
    getHotdeskingList(): Promise<IFxsDect[]>;
    /**
     * Get Recordings List
     * @param {IRecordingParameters}
     * @returns {Promise<IRecordings>}
     */
    getRecordingsList(recordingParams: IRecordingParameters): Promise<IRecordings>;
    /**
     * Get Backup List
     * @returns {Promise<IBackup>}
     */
    getBackupList(): Promise<IBackup[]>;
    /**
     * Post New Backup List
     * @param {INewBackup}
     */
    newBackup(backupOptions: INewBackup): Promise<void>;
    /**
     * Post Delete Backup List
     * @param {string}
     */
    deleteBackup(id: string): Promise<void>;
    /**
     * Get Call Log List
     * @param {ICallLogsParameters}
     * @returns {Promise<ICallLogs>}
     */
    getCallLogList(filterParams: ICallLogsParameters): Promise<ICallLogs>;
    /**
     * Delete Chat
     * @param {string}
     */
    deleteChat(id: string): Promise<void>;
}
