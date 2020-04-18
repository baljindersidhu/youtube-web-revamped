const TIME_FRAME = {
    SECONDS: 1000,
    MINUTES: (1000 * 60),
    HOURS: (1000 * 60 * 60),
    DAYS: (1000 * 60 * 60 * 24)
}

export class RecommendedVideo {

    private title: string;
    private duration: string;
    private channelName: string;
    private caption: string;
    private postedAt: number;

    constructor(
        title: string, duration: string, 
        channelName: string, caption: string,
        postedAt: number
    ){
        this.title = title;
        this.duration = duration;
        this.channelName = channelName;
        this.caption = caption;
        this.postedAt = postedAt;
    }

    getTitle(): string{
        return this.title;
    }

    getDuration(): string{
        return this.duration;
    }

    getPostedAt(): string{
        let time_elapsed_in_ms = (Date.now() - this.postedAt);
        
        if(this.postedInLastMinute(time_elapsed_in_ms)){
            return (Number(time_elapsed_in_ms / TIME_FRAME.SECONDS).toFixed(0) + " secs ago");
        }else if(this.postedInLastHour(time_elapsed_in_ms)){
            return (Number(time_elapsed_in_ms / TIME_FRAME.MINUTES).toFixed(0) + " mins ago");
        }else if(this.postedOnSameDay(time_elapsed_in_ms)){
            return (Number(time_elapsed_in_ms / TIME_FRAME.HOURS).toFixed(0) + " hours ago");
        }else{
            return (Number(time_elapsed_in_ms / TIME_FRAME.DAYS).toFixed(0) + " days ago");
        }
    }

    private postedInLastMinute(timestamp: number): boolean{
        return (timestamp < TIME_FRAME.MINUTES);
    }

    private postedInLastHour(timestamp: number): boolean{
        return (timestamp < TIME_FRAME.HOURS);
    }

    private postedOnSameDay(timestamp: number): boolean{
        return (timestamp < TIME_FRAME.DAYS);
    }

    getChannelName():string{
        return this.channelName;
    }

    getCaption():string{
        let isRemote = this.caption.includes("http");
        return (isRemote ? this.caption: `assets/captions/${this.caption}`);
    }

}
