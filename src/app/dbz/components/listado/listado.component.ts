import { Component, Input } from '@angular/core';
import { ICharacter } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  @Input()
  public characterList:ICharacter[] =[{
    name:'Trunks',
    power:1400
  }]

}
