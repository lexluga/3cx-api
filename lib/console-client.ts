import {IExtension} from './extension';
import {IFax} from './fax';
import {IGroup} from './group';
import {IHttpClient} from './http-client';
import {IListResponse} from './list-response';
import {IPhone} from './phone';
import {IPhonebookEntry} from './phonebook-entry';
import {IQueueList} from './queue';
import {ISystemStatus} from './system-status';
import {IUserInfo} from './userinfo';

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
     * @returns {Promise<IQueueList>}
     */
    public async getQueueList() {
        const response = await this.httpClient.get<IQueueList>('/api/QueueList');
        return response.data.list;
    }

}
