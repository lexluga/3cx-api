export interface ISystemStatus {
    Activated: boolean;
    BackupScheduled: boolean;
    BlacklistedIpCount: number;
    CallHistoryCount: number;
    CallsActive: number;
    ChatMessagesCount: number;
    CpuUsage: number;
    CurrentLocalIp: string;
    DiskUsage: number;
    ExtensionsRegistered: number;
    ExtensionsTotal: number;
    FQDN: string;
    FreeDiskSpace: number;
    FreeFirtualMemory: number;
    FreePhysicalMemory: number;
    HasNotRunningServices: boolean;
    HasUnregisteredSystemExtensions: boolean;
    Ip: string;
    IsSpla: boolean;
}
