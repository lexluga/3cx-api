import {IUpdateParameters} from './update-parameters';

export interface IUpdates {
    IsMaintananceExpired: boolean;
    Updates: IUpdateParameters[];
}
