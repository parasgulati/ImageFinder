import {Injectable} from '@angular/core'
import {Http, Headers,Response} from '@angular/http'

@Injectable()
export class ServerService{
    constructor(private http:Http){}
    getServers(name:string){
        var y:string='https://pixabay.com/api/?key=13710192-cd04e92e1119d5dfaa913e772&q='+name+'&image_type=photo';
        return this.http.get(y);
    }
}
