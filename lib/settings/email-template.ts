export interface IEmailTemplate {
    From?: string;
    Subject?: string;
    Body?: string;
    templatePath: string;
    IsDefault: boolean;
}
