export interface IUpdateParameters {
    $type: string;
    Category: string;
    Description: string;
    DescriptionLink?: string;
    DownloadLink: string;
    Filename: string;
    Ignore: false;
    Image?: string;
    LocalVersion: string;
    Name: string;
    OutOfDate: boolean;
    ServerVersion: string;
    TargetDirectory: string;
}
