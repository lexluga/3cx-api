import {IItemSetType, IElementType} from '../common';

export interface IHotelModule {
    Enabled: IElementType;
    FromGroups: IItemSetType;
    IPAddr: IElementType;
    IntegrationType: IItemSetType;
    NoAnswerDestination: IElementType;
    NoAnswerTimeout: IElementType;
    Port: IElementType;
    Id: string;
    IsNew: boolean;
    _str: string;
}
