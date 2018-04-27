export interface IFxsDect {
    isRefreshTrunksRegistrationProhibited: boolean;
    list: IFxsDectList[];
}
export interface IFxsDectList {
    Brand: string;
    CanBeDeleted: boolean;
    Id: string;
    LineCount: number;
    MacAddress: string;
    ModelName: string;
    Name: string;
}
