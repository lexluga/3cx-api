import { ISystemPromptSets } from './system-promptsets';
import { IListResponse } from '../../list-response';
import { IPrompts } from './prompts';
export interface ISystemPrompts {
    PromptSets: ISystemPromptSets[];
    Prompts: IListResponse<IPrompts>;
    name: string;
}
