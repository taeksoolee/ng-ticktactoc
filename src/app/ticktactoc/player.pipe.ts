import { Pipe, PipeTransform } from '@angular/core';
import { Player } from './enums/player';

@Pipe({
  name: 'player'
})
export class PlayerPipe implements PipeTransform {
  transform(value: Player): string {
    switch (value) {
      case Player.PLAYER1:
        return 'Player 1';
      case Player.PLAYER2:
        return 'Player 2';
      case Player.NONE:
        return '-';
      default:
        return '';
    }
  }
}
