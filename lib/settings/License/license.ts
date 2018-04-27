import {IVersion} from './license-version';

export interface ILicense {
    AdminEMail: string;
    AlreadyActivated: boolean;
    AutoRenew: boolean;
    CompanyName: string;
    ContactName: string;
    CountryID: string;
    CountryName: string;
    Email: string;
    ExpirationDate?: string;
    FirstActivationDate: string;
    IsLoadedFromERP: boolean;
    Key: string;
    MaintenanceExpirationDate: string;
    MaxG729Channels: string;
    MaxSimCalls: number;
    ProFeatures: boolean;
    ProductCode: string;
    ResellerName: string;
    ReviewStatus: number;
    SimMeetingParticipants: number;
    SupportExpirationDate: string;
    Telephone: string;
    Version: IVersion;
}
