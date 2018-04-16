export interface IQueueList {
    list: IQueueList[];
    licenseRestricted: boolean;
}

export interface IQueue {
    Id: string;
    Number: string;
    Name: string;
    PollingStrategy: string;
    RingTime: number;
    Language: string;
}
