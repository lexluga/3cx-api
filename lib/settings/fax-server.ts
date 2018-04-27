import {IElementType, IItemSetType} from '../common';

export interface IFaxServer {
    AuthId: IElementType;
    AuthPassword: IElementType;
    DirectFromIVR: IElementType;
    DnType: IItemSetType;
    Email: IElementType;
    ExtensionDID: IItemSetType;
    FaxServer: IElementType;
    G711ToT38Failback: IElementType;
    Number: IElementType;
    OutboundCallerId: IElementType;
    Id: string;
    IsNew: boolean;
    _str: string;
}
