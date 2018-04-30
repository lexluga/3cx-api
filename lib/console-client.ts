import {IChats} from './chats';
import {IExtension} from './extension';
import {IFax} from './fax';
import {IGroup} from './group';
import {IHttpClient} from './http-client';
import {IListResponse} from './list-response';
import {IPhone} from './phone';
import {IPhonebookEntry} from './phonebook/phonebook-entry';
import {IQueue} from './queue';
import {ISystemStatus} from './system-status';
import {IUserInfo} from './userinfo';
import {ITrunks} from './trunk';
import {IOutboundRule} from './outbound-rule';
import {IInboundRule} from './inbound-rule';
import {IIVR} from './digital-receptionist';
import {IFaxExtension} from './fax-extension';
import {IFxsDect} from './fxs-dect';
import {IBackup} from './backup/backup';
import {ICallLogs} from './call-logs/call-logs';
import {IRecordings, IRecordingParameters} from './recording';
import {ICallLogsParameters} from './call-logs/call-log-parameters';
import {INewBackup} from './backup/newBackup';
import {IRingGroup} from './ring-group';
import {IUpdateParameters} from './updates/update-parameters';
import {IUpdates} from './updates/updates';

export class ConsoleClient {
    constructor(private readonly httpClient: IHttpClient) {
    }

    /**
     * Get system status
     * @returns {Promise<ISystemStatus>}
     */
    public async getSystemStatus() {
        const response = await this.httpClient.get<ISystemStatus>('/api/SystemStatus');
        return response.data;
    }

    /**
     * Get extensions
     * @returns {Promise<IExtension[]>}
     */
    public async getExtensionList() {
        const response = await this.httpClient.get<IListResponse<IExtension>>('/api/ExtensionList');
        return response.data.list;
    }

    /**
     * Get faxes
     * @returns {Promise<IFax[]>}
     */
    public async getFaxList() {
        const response = await this.httpClient.get<IListResponse<IFax>>('/api/FaxList');
        return response.data.list;
    }

    /**
     * Get current user info
     * @returns {Promise<IUserInfo>}
     */
    public async getCurrentUser() {
        const response = await this.httpClient.get<IUserInfo>('/api/CurrentUser');
        return response.data;
    }

    /**
     * Get groups
     * @returns {Promise<IGroup[]>}
     */
    public async getGroupList() {
        const response = await this.httpClient.get<IListResponse<IGroup>>('/api/GroupList');
        return response.data.list;
    }

    /**
     * Get phonebook
     * @returns {Promise<IPhonebookEntry[]>}
     */
    public async getPhonebookList() {
        const response = await this.httpClient.get<IListResponse<IPhonebookEntry>>('/api/PhoneBookEntryList');
        return response.data.list;
    }

    /**
     * Get phones
     * @returns {Promise<IPhone[]>}
     */
    public async getPhonesList() {
        const response = await this.httpClient.get<IListResponse<IPhone>>('/api/PhoneList');
        return response.data.list;
    }

    /**
     * Get Queues
     * @returns {Promise<IQueue>}
     */
    public async getQueueList() {
        const response = await this.httpClient.get<IListResponse<IQueue>>('/api/QueueList');
        return response.data.list;
    }

    /**
     * Get Chats
     * @returns {Promise<IChats>}
     */
    public async getChatsList(count: number, from: number) {
        const response = await this.httpClient.get<IChats>(`/api/Chat/messages?count=${count}&filter=&from=${from}`);
        return response.data;
    }

    /**
     * Get Trunk List
     * @returns {Promise<ITrunks>}
     */
    public async getTrunkList() {
        const response = await this.httpClient.get<IListResponse<ITrunks>>(`/api/TrunkList`);
        return response.data.list;
    }

    /**
     * Get Inbound List
     * @returns {Promise<IInboundRule>}
     */
    public async getInboundRuleList() {
        const response = await this.httpClient.get<IListResponse<IInboundRule>>(`/api/InboundRulesList`);
        return response.data.list;
    }

    /**
     * Get Outbound List
     * @returns {Promise<IOutboundRule>}
     */
    public async getOutboundRuleList() {
        const response = await this.httpClient.get<IListResponse<IOutboundRule>>(`/api/OutboundRuleList`);
        return response.data.list;
    }

    /**
     * Get IVR List
     * @returns {Promise<IIVR>}
     */
    public async getIVRList() {
        const response = await this.httpClient.get<IListResponse<IIVR>>(`/api/IVRList`);
        return response.data.list;
    }

    /**
     * Get Ring Group List
     * @returns {Promise<IRingGroup>}
     */
    public async getRingGroupList() {
        const response = await this.httpClient.get<IListResponse<IRingGroup>>(`/api/RingGroupList`);
        return response.data.list;
    }

    /**
     * Get FAX Extension List
     * @returns {Promise<IFaxExtension>}
     */
    public async getFaxExtensionList() {
        const response = await this.httpClient.get<IListResponse<IFaxExtension>>(`/api/FaxList`);
        return response.data.list;
    }


    /**
     * Get FXS/Dect List
     * @returns {Promise<IFxsDect>}
     */
    public async getFXSDectList() {
        const response = await this.httpClient.get<IFxsDect>(`/api/FxsList`);
        return response.data;
    }

    /**
     * Get Hotdesking List
     * @returns {Promise<IFxsDect>}
     */
    public async getHotdeskingList() {
        const response = await this.httpClient.get<IListResponse<IFxsDect>>(`/api/HotdeskingList`);
        return response.data.list;
    }

    /**
     * Get Recordings List
     * @param {IRecordingParameters}
     * @returns {Promise<IRecordings>}
     */
    public async getRecordingsList(recordingParams: IRecordingParameters) {
        const url = `/api/RecordingList?count=${recordingParams.count}&dateTimeParts=${recordingParams.dateTimeParts}&filter=${recordingParams.filter}&from=${recordingParams.from}&onlyTime=${recordingParams.onlyTime}`;
        const response = await this.httpClient.get<IRecordings>(url);
        return response.data;
    }

    /**
     * Get Backup List
     * @returns {Promise<IBackup>}
     */
    public async getBackupList() {
        const response = await this.httpClient.get<IListResponse<IBackup>>(`/api/BackupAndRestoreList`);
        return response.data.list;
    }

    /**
     * Post New Backup List
     * @param {INewBackup}
     */
    public async newBackup(backupOptions: INewBackup) {
        await this.httpClient.post(`/api/BackupAndRestoreList/backup`, backupOptions);
    }

    /**
     * Post Delete Backup List
     * @param {string}
     */
    public async deleteBackup(id: string) {
        await this.httpClient.post(`/api/BackupAndRestoreList/delete`, {Ids: [id]});
    }

    /**
     * Get Call Log List
     * @param {ICallLogsParameters}
     * @returns {Promise<ICallLogs>}
     */
    public async getCallLogList(filterParams: ICallLogsParameters) {
        const url = `/api/CallLog?TimeZoneName=${filterParams.TimeZoneName}&callState=${filterParams.callState}&dateRangeType=${filterParams.dateRangeType}&fromFilter=${filterParams.fromFilter}&fromFilterType=${filterParams.fromFilterType}&numberOfRows=${filterParams.numberOfRows}&searchFilter=${filterParams.searchFilter}&startRow=${filterParams.startRow}&toFilter=${filterParams.toFilter}&toFilterType=${filterParams.toFilterType}`;
        const response = await this.httpClient.get<ICallLogs>(url);
        return response.data;
    }

    /**
     * Delete Chat
     * @param {string}
     */
    public async deleteChat(id: string) {
        await this.httpClient.post(`/api/Chat/delete`, [id]);
    }


    /**
     * POST Download Update
     * @param {IUpdateParameters}
     * returns {Promise<IUpdateParameters>}
     */
    public async getUpdate(updates: IUpdateParameters[]) {
        const response = await this.httpClient.post<IUpdates>(`/api/updateChecker/update`, updates);
        return response.data.Updates;
    }

}
