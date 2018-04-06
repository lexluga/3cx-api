export type ExtensionsFilterType =
    'AllExtensions' |
    'ExtensionsFilter';

export interface IExtensionFilter {
    ExtensionsFilter: string;
    ExtensionsFilterType: ExtensionsFilterType;
}
