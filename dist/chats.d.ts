export interface IChats {
    ChatMessages: IChat[];
    TotalRowsCount: number;
}
export interface IChat {
    ChatMessageId: number;
    FromNo: string;
    FromName: string;
    TimeReceived: string;
    Message: string;
    Recepients: string;
}
