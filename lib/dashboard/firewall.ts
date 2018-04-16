import {IHttpClient} from '../http-client';

export interface IResponseFirewall {
    html?: any;
    log?: any;
    running: boolean;
    stopping: boolean;
}
