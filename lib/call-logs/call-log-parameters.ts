export interface ICallLogsParameters {
    TimeZoneName: string;
    callState: string;
    dateRangeType: string;
    fromFilter?: string;
    fromFilterType: string;
    numberOfRows: number;
    searchFilter?: string;
    startRow: number;
    toFilter?: string;
    toFilterType: string;
}
