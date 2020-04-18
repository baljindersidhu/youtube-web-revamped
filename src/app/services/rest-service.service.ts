import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservableLike } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class RestService {

	private dataDirectory: string = 'assets/data/';

	constructor(private http: HttpClient) { }

	getRecommendedVideos(): Observable<any>{
		return this.http.get(this.dataDirectory + 'recommended-videos.json');
	}

	getPopularChannels(): Observable<any>{
		return this.http.get(this.dataDirectory + 'popular-channels.json');
	}

	getYoutubeMixes(): Observable<any>{
		return this.http.get(this.dataDirectory + 'youtube-mixes.json');
	}

}
