import { IElementType, IItemSetType } from '../common';
export interface ICDR {
    Enabled: IElementType;
    Fields: IItemSetType;
    FileSize: IElementType;
    IPAddress: IElementType;
    IPPort: IElementType;
    LogType: IItemSetType;
    NetworkInterface: IItemSetType;
    RemoveCommaDelimiters: IElementType;
    Id: string;
    IsNew: boolean;
    _str: string;
}
