export interface IRecordingParameters {
    count: number;
    dateTimeParts: string;
    filter: string;
    from: number;
    onlyTime: boolean;
}

export interface IRecordings {
    TotalRowsCount: number;
    list: IRecording[];
}

export interface IRecording {
    CallerId: string;
    Date: string;
    DestDn: string;
    DisplayName: string;
    Dn?: string;
    Filename: string;
    Id: string;
    SourceDn: string;
}
