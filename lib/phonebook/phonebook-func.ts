import {IContactEntries} from './phonebook';
import {IProperty} from '../common';
import {IHttpClient} from '../http-client';
import {IActiveObjectResponse} from '../active-object-response';

export class PhonebookClient {
    constructor(private readonly httpClient: IHttpClient) {
    }

    /**
     * Add new Contact
     * @param {IActiveObjectResponse<IContactEntries>} newContact
     * @returns {Promise<IContacts>}
     */
    public async addNewContact() {
        return (await this.httpClient.post<IActiveObjectResponse<IContactEntries>>('/api/PhoneBookEntryList/new')).data;
    }

    /**
     * Edit Contact
     * * @param {IProperty} updateContact
     * @returns {Promise<IContactEntries[]>}
     */
    public async editContact(updateContact: IProperty) {
        return (await this.httpClient.post<IContactEntries[]>('/api/edit/update', updateContact)).data;
    }


}
