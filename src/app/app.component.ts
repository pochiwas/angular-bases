import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public title:string = '02-bases';
  public count:number = 10;

  increaseBy():void{
  this.count += 1;
}

decreaseBy():void{

  this.count -= 1;
}
reset():void{
  
}

}
