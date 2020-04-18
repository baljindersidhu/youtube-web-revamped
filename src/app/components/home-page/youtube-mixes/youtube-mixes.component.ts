import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest-service.service';
import { Playlist } from 'src/app/models/playlist';
import { SubscriptionSink } from 'src/app/models/subscription-sink';
import { PlaylistScaffold } from 'src/app/interfaces/playlist';

@Component({
	selector: 'app-youtube-mixes',
	templateUrl: './youtube-mixes.component.html',
	styleUrls: ['./youtube-mixes.component.less']
})
export class YoutubeMixesComponent implements OnInit {

	private playlists: Playlist[] = [];
	private sink: SubscriptionSink = new SubscriptionSink();

	constructor(private restSerivce: RestService) { }

	ngOnInit() {
		this.sink.push = this.restSerivce.getYoutubeMixes().subscribe(
			(playlists: PlaylistScaffold[]) => this.playlists = playlists.map((playlist: PlaylistScaffold) => new Playlist(playlist)),
			error => this.playlists = []
		);
	}

}
