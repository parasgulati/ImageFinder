import { Component } from '@angular/core';
import {ServerService} from './server.service';
import {Http, Headers,Response} from '@angular/http'
//import {url} from 'inspector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  data=[
    {
        images:78
    }
  ]
  image_link=[]
  constructor(private serverService:ServerService){}

onGet(name:string){
   this.serverService.getServers(name)
  .subscribe(
    (response:Response) =>{ 
      const data=response.json();      
      data.images=data.hits;
  
      for(var i=0;i<20;i++)
      {
        //document.write('<br>');  
        this.image_link.push(data.images[i].largeImageURL);
        //document.write(this.image_link[i]);
        //document.getElementsByTagName("div")[i].innerHTML=this.image_link[i];
      }
  //  window.open(this.image_link[0],'_top','width=100,height=100');
      this.onNext(0);
    console.log(data);
    return data;    
    },
    (error)=> console.log(error));

}
onNext(i:number)
{
  var k=0;
      for(var j=i;j<i+10;j++)
      {
          document.getElementsByTagName("span")[k].innerHTML="<a href="+this.image_link[j]+" target='_top'>"+"<img src="+this.image_link[j]+"height='100px' width='150px' alt='! sorry'>"+"</a>";
        k++;
      }

}

}
