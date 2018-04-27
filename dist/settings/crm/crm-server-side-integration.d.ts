import { IItemSetType, IElementType } from '../../common';
export interface IServerSideCRMIntegration {
    CrmTypeType: IItemSetType;
    EnabledForDidCalls: IElementType;
    EnabledForExternalCalls: IElementType;
    ExtensionDID: IItemSetType;
    PhonebookPriorityOptions: IItemSetType;
    TemplateCountry: IElementType;
    TemplateName: IElementType;
    VariableChoices: IElementType;
    Id: string;
    IsNew: boolean;
    _str: string;
}
