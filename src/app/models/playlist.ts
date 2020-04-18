import { PlaylistScaffold } from '../interfaces/playlist';

export class Playlist {

    public title: string;
    public caption: string;
    public videosCount: number;

    constructor(playlist: PlaylistScaffold){
        this.title = playlist.title;
        this.caption = playlist.caption;
        this.videosCount = playlist.videosCount;
    }
}
