import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent{
    allowNewServer=false;
    serverCreationStatus = 'no server was created';
    serverName='';

    constructor(){
        setTimeout(() => {
            this.allowNewServer = true;
        },2000);
    }
    serverId:number= 10;
    serverStatus: string= 'offline';

    getServerStatus(){
        return this.serverStatus;
    }

    OnCreateServer()
    {
        this.serverCreationStatus = 'Server was created';
    }

    onUpdateServerName(event : Event){
        this.serverName=(<HTMLInputElement>event.target).value;
    }
}