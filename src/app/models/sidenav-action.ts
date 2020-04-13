import { SidenavActionType } from '../constants/application-constants';

export class SidenavAction {

    private label: string;
    private iconClass: string;
    private type: SidenavActionType; 

    constructor(label:string, iconClass:string, type:SidenavActionType){
        this.label = label;
        this.iconClass = iconClass;
        this.type = type;
    }

    getLabel(): string{
        return this.label;
    }

    getIconClass(): string{
        return this.iconClass;
    }

    getType(): SidenavActionType{
        return this.type;
    }
}
