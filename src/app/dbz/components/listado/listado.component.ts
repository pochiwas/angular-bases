import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  }];

  //evento para la eliminacion del personaje mediante el id
@Output()

public onDelete:EventEmitter<string>= new EventEmitter(); 
 //obtener el id mediante la emision y recepcion del evento
 //utilizar el metodo splice para la solucion

onDeleteCharacter(id?:string):void{
  if (!id) return;
  this.onDelete.emit(id);

}


}
