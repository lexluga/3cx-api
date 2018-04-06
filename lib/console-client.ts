import {IExtension} from './extension';
import {IGroup} from './group';
import {IHttpClient, IResponse} from './http-client';
import {IListResponse} from './list-response';
import {IPhonebookEntry} from './phonebook-entry';
import {ISystemStatus} from './system-status';

export class ConsoleClient {
    constructor(private readonly httpClient: IHttpClient) {
    }

    public async getSystemStatus() {
        return await this.httpClient.get<ISystemStatus>('/api/SystemStatus');
    }

    public async getExtensionList() {
        const response = await this.httpClient.get<IListResponse<IExtension>>('/api/ExtensionList');
        return response.data.list;
    }

    public async getGroupList() {
        const response = await this.httpClient.get<IListResponse<IGroup>>('/api/GroupList');
        return response.data.list;
    }

    public async getPhonebookList() {
        const response = await this.httpClient.get<IListResponse<IPhonebookEntry>>('/api/PhoneBookEntryList');
        return response.data.list;
    }
}
