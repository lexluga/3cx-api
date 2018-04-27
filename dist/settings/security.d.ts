import { IElementType } from '../common';
export interface ISecurity {
    APIKey: IElementType;
    AdminConfirmNewPassword: IElementType;
    AdminName: IElementType;
    AdminNewPassword: IElementType;
    AdminPassword: IElementType;
    Certificate: IElementType;
    CertificateEnabled: IElementType;
    EnablePCIComplianceSSLTransportAndCiphers: IElementType;
    HackAuthRequests: IElementType;
    HackBarrierAmber: IElementType;
    HackBarrierGreen: IElementType;
    HackBarrierRed: IElementType;
    HackBlacklistDuration: IElementType;
    HackChallengeRequests: IElementType;
    NotAllowedCountryCodes: IElementType;
    SRTPEnabled: IElementType;
    TunnelPassword: IElementType;
    Id: string;
    IsNew: boolean;
    _str: string;
}
