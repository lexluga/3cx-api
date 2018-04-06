import {IExtension} from './extension';
import {IGroup} from './group';
import {IHttpClient} from './http-client';
import {IListResponse} from './list-response';
import {IPhonebookEntry} from './phonebook-entry';

export class ConsoleClient {
    constructor(private readonly httpClient: IHttpClient) {
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
