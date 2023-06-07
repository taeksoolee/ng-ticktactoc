import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { Player } from './enums/player';

@Directive({
  selector: '[ticktactocPlayer]'
})
export class PlayerDirective implements AfterViewInit {

  @Input() player!: Player;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    // const val = (this.el.nativeElement as HTMLElement).getAttribute('ticktactocPlayer');
    // console.log(val);
    // console.log(this.player);
    const classList = this.el.nativeElement.classList;
    classList.remove('player-none');
    classList.remove('player-1');
    classList.remove('player-2');

    if (this.player === Player.PLAYER1) classList.add('player-1');
    if (this.player === Player.PLAYER2) classList.add('player-2');
    if (this.player === Player.NONE) classList.add('player-none');
  }
}
