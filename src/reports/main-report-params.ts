export type ReportType =
    'ExtensionsStatistics' |
    'RingGroupStatistics' |
    'BasicQueueStatistics' |
    'CallCostByExtensionGroup' |
    'OutboundCallsByType' |
    'QueuePerformanceOverview' |
    'DetailedQueueStatistics' |
    'TeamQueueGeneralStatistics' |
    'TeamQueueLostCalls' |
    'AbandonedQueueCalls' |
    'StatisticSLA' |
    'BreachesSLA' |
    'QueueCallbacks' |
    'QueueFailedCallbacks' |
    'AgentInQueueStatistics' |
    'GraphQueueAnsweredCalls' |
    'GraphQueueUnansweredCalls' |
    'GraphQueueAllCalls' |
    'AgentLoginHistory' |
    'QueueAnsweredCallsByWaitTime' |
    'CallLogs' |
    'ExportedCallLogs' |

    /// <summary>
    /// User Activity IReport
    /// </summary>
    'UserActivity' |

    /// <summary>
    /// Outgoing / Incoming IReport
    /// </summary>
    'OutgoingIncoming' |

    /// <summary>
    /// Average Waiting Time IReport
    /// </summary>
    'AverageWaitingTime';

export interface IMainReportParams {
    ReportName: string;
    ReportType: ReportType;
    Key?: string;
}
