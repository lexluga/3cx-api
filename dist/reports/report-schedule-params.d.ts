export declare type ReportDocumentType = 'Pdf' | 'Html' | 'Csv' | 'Rft' | 'Excel' | 'Image';
export declare type ReportFrequency = 'Once' | 'Daily' | 'FirstDayOfWeek' | 'Weekly' | 'Every2Weeks' | 'FirstDayOfMonth';
export declare type DayOfWeek = 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';
export interface IReportScheduleParams {
    DocumentType: ReportDocumentType;
    SendToEmail: string;
    ReportFrequency: ReportFrequency;
    ReportDayOfWeek: DayOfWeek;
    ReportGenerationTime: string;
}
