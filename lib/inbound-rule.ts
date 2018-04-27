export interface IInboundRule {
    DID: string;
    Id: string;
    InOfficeRouting: IRouting;
    Name: string;
    OutOfOfficeRouting: IRouting;
    Trunk: string;
    Type: string;
    canMoveDown: boolean;
    canMoveUp: boolean;
}

export interface IRouting {
    Type: string;
    DN: string;
    Voicemail: string;
    ExternalNumber: string;
}