import { Subscription } from 'rxjs';

export class SubscriptionSink {

    private _subscriptions: Array<Subscription> = [];

    set push(subscription: Subscription){
        this._subscriptions.push(subscription);
    }

    dump(){
        if(this._subscriptions.length > 0){
            this._subscriptions.forEach(subscription => subscription.unsubscribe());
        }
    }

}
