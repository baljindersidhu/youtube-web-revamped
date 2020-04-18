import { Component, OnInit, OnDestroy } from '@angular/core';
import { RestService } from 'src/app/services/rest-service.service';
import { SubscriptionSink } from 'src/app/models/subscription-sink';
import { RecommendedVideo } from 'src/app/models/recommended-video';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
	selector: 'app-recommended-videos',
	templateUrl: './recommended-videos.component.html',
	styleUrls: ['./recommended-videos.component.less']
})
export class RecommendedVideosComponent implements OnInit {

	private sink: SubscriptionSink = new SubscriptionSink();
	public videos: RecommendedVideo[] = [];

	constructor(private restService: RestService) { }

	ngOnInit() {
		this.sink.push = this.restService.getRecommendedVideos().subscribe(
			videos => this.updateRecommendedVideos(videos),
			error => this.handleResponseError(error));
	}

	ngOnDestroy(){ this.sink.dump(); }

	updateRecommendedVideos(videos: Array<any>){
		this.videos = videos.map(video => new RecommendedVideo(
			video.title, video.duration, video.channelName, video.caption, video.postedAt
		));
	}

	handleResponseError(error: HttpErrorResponse){
		console.log(`Error occured while fetching recommendations. ${error.message}`);
	}

}
