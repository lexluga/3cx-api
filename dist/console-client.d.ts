import { IExtension } from './extension';
import { IGroup } from './group';
import { IHttpClient, IResponse } from './http-client';
import { IPhonebookEntry } from './phonebook-entry';
import { ISystemStatus } from './system-status';
export declare class ConsoleClient {
    private readonly httpClient;
    constructor(httpClient: IHttpClient);
    getSystemStatus(): Promise<IResponse<ISystemStatus>>;
    getExtensionList(): Promise<IExtension[]>;
    getGroupList(): Promise<IGroup[]>;
    getPhonebookList(): Promise<IPhonebookEntry[]>;
}
