import {ICallLog} from './call-log';

export interface ICallLogs {
    CallLogRows: ICallLog[];
    HasMoreRows: boolean;
    IsExportAllowed: boolean;
}
