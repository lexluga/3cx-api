export declare type NumberFilterType = 'Any' | 'Internal' | 'ExtensionOrRangeOfExtensions' | 'External' | 'MatchNumber' | 'NumberStartsWith' | 'NumberContains' | 'BillingCode';
export interface INumberFilter {
    NumberFilterType: NumberFilterType;
    Filter: string;
    ExtensionRanges?: string;
}
