export interface IEmailTemplate {
    Body: string;
    From: string;
    isDefault: boolean;
    Subject: string;
    templatePath: string;
}
