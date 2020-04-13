import { Injectable } from '@angular/core';
import { SidenavAction } from '../models/sidenav-action';
import { SidenavActionType } from '../constants/application-constants';

@Injectable({
    providedIn: 'root'
})
export class SidenavActionsService {

    constructor() { }

    getMenuActions(): SidenavAction[]{
        let labels: string[] = ["Home", "Trending", "Subscriptions", "Live"];
        let icons: string[] = ["home-automation", "fire", "youtube", "record-circle-outline"];
        icons = this.appendIconClass(icons);

        return labels.map((label, index)=> new SidenavAction(label, icons[index], SidenavActionType.MENU));
    }

    getLibraryActions(): SidenavAction[]{
        let labels: string[] = ["History", "Queue", "Liked videos"];
        let icons: string[] = ["clock", "playlist-music", "cards-heart"];
        icons = this.appendIconClass(icons);

        return labels.map((label, index)=> new SidenavAction(label, icons[index], SidenavActionType.LIBRARY));
    }

    getPlaylists(): SidenavAction[]{
        let labels: string[] = ["Daily vlogs", "Trap remixes"];
        let icons: string[] = ["playlist-play", "playlist-play"];
        icons = this.appendIconClass(icons);

        return labels.map((label, index)=> new SidenavAction(label, icons[index], SidenavActionType.PLAYLIST));
    }

    private appendIconClass(icons: string[]): string[]{
        return icons.map(icon => "mdi mdi-".concat(icon));
    }

}
