import { IDictionaryItem } from './dictionary-item';
export declare type UserFilter = 'ExtensionRange' | 'ExtensionGroups';
export interface IUserFilterFilter {
    Range?: string;
    RangeGroups: IDictionaryItem[];
    UserFilterType: UserFilter;
}
