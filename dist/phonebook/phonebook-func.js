"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class PhonebookClient {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * Add new Contact
     * @param {IActiveObjectResponse<IContactEntries>} newContact
     * @returns {Promise<IContacts>}
     */
    addNewContact() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.httpClient.post('/api/PhoneBookEntryList/new')).data;
        });
    }
    /**
     * Edit Contact
     * * @param {IProperty} updateContact
     * @returns {Promise<IContactEntries[]>}
     */
    editContact(updateContact) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.httpClient.post('/api/edit/update', updateContact)).data;
        });
    }
}
exports.PhonebookClient = PhonebookClient;
