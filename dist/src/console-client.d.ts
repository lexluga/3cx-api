import { IExtension } from './extension';
import { IGroup } from './group';
import { IHttpClient } from './http-client';
import { IPhonebookEntry } from './phonebook-entry';
export declare class ConsoleClient {
    private readonly httpClient;
    constructor(httpClient: IHttpClient);
    getExtensionList(): Promise<IExtension[]>;
    getGroupList(): Promise<IGroup[]>;
    getPhonebookList(): Promise<IPhonebookEntry[]>;
}
