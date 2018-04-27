import {IElementType, IItemSetType} from '../common';

export interface IVoicemail {
    VMailAutoDeleteDays: IElementType;
    VMailAutoDeleteEnabled: IElementType;
    VMailExchangeServerHost: IElementType;
    VMailExchangeServerPort: IElementType;
    VMailExtension: IElementType;
    VMailQuota: IElementType;
    VMailSaveMoreThen: IElementType;
    VMailSendEmailQuotaEnabled: IElementType;
    VMailSendEmailQuotaPercentage: IElementType;
    VMailTranscribeEnabled: IElementType;
    VMailTranscribeLanguage: IItemSetType;
    VMailTranscribeSecretKey: IElementType;
    VMailUseExchangeServer: IElementType;
    VMailUsedSpace: IElementType;
    Id: string;
    IsNew: boolean;
    _str: string;
}
