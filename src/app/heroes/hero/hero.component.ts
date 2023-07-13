import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

public name:string = 'ironMan';
public age:number = 45;

//simulacion del principio del pipe
getHeroDescription():string {

  return `${this.age} - ${this.name}`
}
get capitalizedName():string{
 
  return this.name.toUpperCase();
}

changeHero():void{

  this.name = "Cap America"
}

changeAge():void{

  this.age = 31;
}
reset():void{
  this.age = 45;
  this.name = "ironMan";
   
}

}
