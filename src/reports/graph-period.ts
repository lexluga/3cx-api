export type GraphPeriod =
    'Hour' |
    'Day' |
    'Month';

export interface IGraphPeriodFilter {
    GraphPeriodType: GraphPeriod;
    PeriodDate: string;
}
