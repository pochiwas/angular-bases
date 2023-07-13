import { Component, Input } from '@angular/core';
import { ICharacter } from '../interfaces/character.interface';

@Component({
  selector: 'main-page-component',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
 
  public characters: ICharacter[] = [
    { name: 'Goku', power: 1500 },
    { name: 'Gohan', power: 1300 },
    { name: 'Krilin', power: 500 },
  ];
}
