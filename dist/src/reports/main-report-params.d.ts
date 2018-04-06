export declare type ReportType = 'ExtensionsStatistics' | 'RingGroupStatistics' | 'BasicQueueStatistics' | 'CallCostByExtensionGroup' | 'OutboundCallsByType' | 'QueuePerformanceOverview' | 'DetailedQueueStatistics' | 'TeamQueueGeneralStatistics' | 'TeamQueueLostCalls' | 'AbandonedQueueCalls' | 'StatisticSLA' | 'BreachesSLA' | 'QueueCallbacks' | 'QueueFailedCallbacks' | 'AgentInQueueStatistics' | 'GraphQueueAnsweredCalls' | 'GraphQueueUnansweredCalls' | 'GraphQueueAllCalls' | 'AgentLoginHistory' | 'QueueAnsweredCallsByWaitTime' | 'CallLogs' | 'ExportedCallLogs' | 'UserActivity' | 'OutgoingIncoming' | 'AverageWaitingTime';
export interface IMainReportParams {
    ReportName: string;
    ReportType: ReportType;
    Key?: string;
}
