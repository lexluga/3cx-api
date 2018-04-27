
export interface IProperty {
    Path: IPath;
    PropertyValue: string;
}

export interface IPath {
    ObjectId: string;
    PropertyPath: INameType[];
}

export interface INameType {
    Name: string;
}

export interface IElementType {
    type: string;
    _value: string;
    disabled?: boolean;
    hide?: boolean;
}

export interface IItemSetType {
    possibleValues: string[];
    selected: string;
    translatable: boolean;
    type: string;
    hide?: boolean;
}

