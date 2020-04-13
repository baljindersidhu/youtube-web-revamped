import { Component, OnInit, Input } from '@angular/core';
import { SidenavAction } from 'src/app/models/sidenav-action';
import { SidenavActionsService } from 'src/app/services/sidenav-actions.service';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.less']
})
export class SidenavComponent implements OnInit {

    @Input("appVersion") appVersion: string;

    menuActions: Array<SidenavAction>;
    libraryActions: Array<SidenavAction>;
    playlists: Array<SidenavAction>;

    constructor(private actionsService: SidenavActionsService) { }

    ngOnInit() {
        this.menuActions = this.actionsService.getMenuActions();
        this.libraryActions = this.actionsService.getLibraryActions();
        this.playlists = this.actionsService.getPlaylists();
    }

}
