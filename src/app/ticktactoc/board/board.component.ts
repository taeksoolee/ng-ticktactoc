import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { Board, TicktactocService } from 'src/app/ticktactoc/ticktactoc.service';
import { Player } from '../enums/player';

@Component({
  selector: 'ticktactoc-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, OnDestroy {
  player!: Player;
  round!: number;
  board!: Board;

  state$!: Subscription;

  constructor(private ticktactoc: TicktactocService) { }

  ngOnInit(): void {
    this.state$ = this.ticktactoc.subscribe((state) => {
      this.player = state.player;
      this.round = state.round;
      this.board = state.board;
    });
  }

  ngOnDestroy(): void {
    this.state$.unsubscribe();
  }

  onClick(rowIdx: number, colIdx: number) {
    this.ticktactoc.select(rowIdx, colIdx);
  }
}
