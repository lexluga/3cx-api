export interface IListResponse<T> {
    list: T[];
    licenseRestricted?: boolean;
    name?: string;
}

