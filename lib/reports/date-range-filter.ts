export type DateRangeType =
    'Today' |
    'Yesterday' |
    'LastWeek' |
    'LastSevenDays' |
    'LastMonth' |
    'LastThirtyDays' |
    'LastNinetyDays' |
    'Custom' |
    // Is obsolete?
    'NoLimit';

export interface IDateRangeFilter {
    RangeType: DateRangeType;
    CustomDateFrom?: string;
    CustomDateTo?: string;
}
