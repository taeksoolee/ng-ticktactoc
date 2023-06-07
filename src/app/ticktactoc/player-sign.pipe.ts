import { Pipe, PipeTransform } from '@angular/core';
import { Player } from './enums/player';

@Pipe({
  name: 'playerSign'
})
export class PlayerSignPipe implements PipeTransform {

  transform(value: Player): string {
    switch (value) {
      case Player.PLAYER1:
        return 'O';
      case Player.PLAYER2:
        return 'X';
      case Player.NONE:
        return '';
      default:
        return '';
    }
  }
}
