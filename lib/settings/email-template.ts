import {IResponseFirewall} from '../dashboard/firewall';

export interface IEmailTemplate {
    Body: string;
    From: string;
    isDefault: boolean;
    Subject: string;
    templatePath: string;
}