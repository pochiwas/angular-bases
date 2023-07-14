import { Injectable } from '@angular/core';
import { ICharacter } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class dbzService {
  constructor() {}

  public characters: ICharacter[] = [
    { id:uuid(),name: 'Goku', power: 1500 },
    { id:uuid(),name: 'Gohan', power: 1300 },
    { id:uuid(),name: 'Krilin', power: 500 },
  ];

  addCharacter(character: ICharacter): void {
    
    const newCharacter:ICharacter = {id:uuid(),...character};
    this.characters.push(newCharacter);
  }

  deletedCharacterById(id: string): void {
    //this.characters.splice(index, 1);
    //Eliminacion de personaje segun su id unico
    this.characters= this.characters.filter(character => character.id !== id);
    console.log(this.characters);
  }
}
