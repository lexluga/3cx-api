import { IElementType, IItemSetType } from '../../common';
export interface IPBX {
    AllowFwdToExternal: IElementType;
    BusyMonitorDialCode: IElementType;
    BusyMonitorTimeout: IElementType;
    ChatIsEnabled: IElementType;
    DisableOutboundCallsOutOfficeHours: IElementType;
    EnableVMenuOutboundCalls: IElementType;
    LimitCallPickup: IElementType;
    NameOfAvailable2: IElementType;
    NameOfOutOfOffice2: IElementType;
    OperatorExtension: IItemSetType;
    PlayBusy: IElementType;
    Id: string;
    IsNew: boolean;
    _str: string;
}
