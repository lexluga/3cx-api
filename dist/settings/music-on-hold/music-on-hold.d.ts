import { IMusicOnHoldPlaylists } from './music-on-hold-playlists';
import { IItemSetType } from '../../common';
export interface IMusicOnHold {
    Id: string;
    IsNew: boolean;
    MusicOnHold: IItemSetType;
    MusicOnHold1: IItemSetType;
    MusicOnHold2: IItemSetType;
    MusicOnHold3: IItemSetType;
    MusicOnHold4: IItemSetType;
    MusicOnHold5: IItemSetType;
    MusicOnHold6: IItemSetType;
    MusicOnHold7: IItemSetType;
    MusicOnHold8: IItemSetType;
    MusicOnHold9: IItemSetType;
    Playlists: IMusicOnHoldPlaylists;
    _str: string;
}
