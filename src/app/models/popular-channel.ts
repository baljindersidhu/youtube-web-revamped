import { PopularChannelScaffold } from '../interfaces/popular-channel-scaffold';

export class PopularChannel {

    public channelName: string;
    public caption: string;
    public subscribersCount: string;
    public videosCount: number; 

    constructor(channel: PopularChannelScaffold){
        this.channelName = channel.channelName;
        this.caption = channel.caption;
        this.subscribersCount = channel.subscribersCount;
        this.videosCount = channel.videosCount;
    }

}
