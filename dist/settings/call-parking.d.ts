import { IElementType, IItemSetType } from '../common';
export interface ICallParking {
    SPAutoPickupExternalNumber: IElementType;
    SPAutoPickupForwardDN: IItemSetType;
    SPAutoPickupTimeout: IElementType;
    SPAutoPickupVMailExtension: IItemSetType;
    SPEnableAutoPickup: IElementType;
    SPMax: IElementType;
    SPPrompt: IItemSetType;
    SPTypeOfAutoPickupForward: IItemSetType;
    Id: string;
    IsNew: boolean;
    _str: string;
}
