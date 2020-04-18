import { Component, OnInit, OnDestroy } from '@angular/core';
import { RestService } from 'src/app/services/rest-service.service';
import { PopularChannel } from 'src/app/models/popular-channel';
import { SubscriptionSink } from 'src/app/models/subscription-sink';
import { PopularChannelScaffold } from 'src/app/interfaces/popular-channel-scaffold';

@Component({
	selector: 'app-popular-channels',
	templateUrl: './popular-channels.component.html',
	styleUrls: ['./popular-channels.component.less']
})
export class PopularChannelsComponent implements OnInit {

	public channels: PopularChannel[] = [];
	private sink: SubscriptionSink = new SubscriptionSink();

	constructor(private restService: RestService) { }

	ngOnInit() {
		this.sink.push = this.restService.getPopularChannels().subscribe(
			(channels: PopularChannelScaffold[]) => this.channels = channels
				.map((channel: PopularChannelScaffold) => new PopularChannel(channel)),
			(error => this.channels = [])
		);
	}

	ngOnDestroy(){
		this.sink.dump();
	}

}
