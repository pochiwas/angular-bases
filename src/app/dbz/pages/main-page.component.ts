import { Component, Input } from '@angular/core';
import { ICharacter } from '../interfaces/character.interface';
import { jsDocComment } from '@angular/compiler';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'main-page-component',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(private dbzService: dbzService) {}

  get characters(): ICharacter[] {
    return this.dbzService.characters;
  }

  onDeleteCharacter(id:string){
    this.dbzService.deletedCharacterById(id);
  }

  onNewCharacter(character:ICharacter){
    this.dbzService.addCharacter(character);
  }
}
