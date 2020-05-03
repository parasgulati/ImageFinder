import { Component } from '@angular/core'

@Component({
    selector:'app-server',
    templateUrl:'./Server.Component.html'
})
export class ServerComponent{
    server="no server was created";
    servername='';
    servers=[
        {
            name:'pa'
        },
    ];
    constructor(){}       
    addserver(event:Event)
    {
        this.servername=(<HTMLInputElement>event.target).value;
        this.server=this.servername+" server was added";
    }
    servercreate(name:string){
        this.servers.push({
        name:name
    });
    }  
}
