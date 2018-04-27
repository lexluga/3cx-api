export interface IPhone {
    Id?: string;
    UserAgent?: any;
    ProvMethod?: string;
    DeviceType?: number;
    Model?: string;
    Vendor?: string;
    FirmwareVersion?: string;
    Name?: string;
    UserId?: string;
    UserPassword?: string;
    Pin?: string;
    Ip?: string;
    InterfaceLink?: string;
    SipPort?: number;
    MacAddress?: string;
    Status?: string;
    PhoneWebPassword?: string;
    ProvLink?: any;
    IsNew: boolean;
    AssignExtensionEnabled: boolean;
    CanBeRebooted: boolean;
    CanBeUpgraded: boolean;
    CanBeProvisioned: boolean;
    HasInterface: boolean;
    IsCustomProvisionTemplate: boolean;
    UnsupportedFirmware: boolean;
    HotdeskingExtension?: string;
    DisplayText?: string;
    ExtensionNumber?: any;
}