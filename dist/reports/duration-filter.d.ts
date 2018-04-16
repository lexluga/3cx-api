export declare type DurationFilterType = 'All' | 'RingingOnly' | 'TalkingOnly';
export interface IDurationFilter {
    DurationFilterType: DurationFilterType;
    From: number;
    To: number;
}
