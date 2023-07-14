import { Component, EventEmitter, Output } from '@angular/core';
import { ICharacter } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent {
  //Definicion de evento de salida
  @Output()
  public onNewCharacter: EventEmitter<ICharacter> = new EventEmitter();

  public character: ICharacter = {
    name: '',
    power: 0,
  };

  emitCharacter(): void {

    console.log(this.character);
    if (this.character.name.length === 0) return ;

    this.onNewCharacter.emit(this.character);
    
  }
}
