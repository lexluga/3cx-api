export declare type DateRangeType = 'Today' | 'Yesterday' | 'LastWeek' | 'LastSevenDays' | 'LastMonth' | 'LastThirtyDays' | 'LastNinetyDays' | 'Custom' | 'NoLimit';
export interface IDateRangeFilter {
    RangeType: DateRangeType;
    CustomDateFrom?: string;
    CustomDateTo?: string;
}
