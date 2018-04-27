import { IContactEntries } from './phonebook';
import { IProperty } from '../common';
import { IHttpClient } from '../http-client';
import { IActiveObjectResponse } from '../active-object-response';
export declare class PhonebookClient {
    private readonly httpClient;
    constructor(httpClient: IHttpClient);
    /**
     * Add new Contact
     * @param {IActiveObjectResponse<IContactEntries>} newContact
     * @returns {Promise<IContacts>}
     */
    addNewContact(): Promise<IActiveObjectResponse<IContactEntries>>;
    /**
     * Edit Contact
     * * @param {IProperty} updateContact
     * @returns {Promise<IContactEntries[]>}
     */
    editContact(updateContact: IProperty): Promise<IContactEntries[]>;
}
