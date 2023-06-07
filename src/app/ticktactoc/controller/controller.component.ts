import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { TicktactocService } from '../ticktactoc.service';
import { Player } from '../enums/player';

@Component({
  selector: 'ticktactoc-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss']
})
export class ControllerComponent implements OnInit, AfterViewInit, OnDestroy {
  isGameOver: boolean = false;
  isFirstRound: boolean = false;
  player!: Player;
  winner!: Player;
  state$!: Subscription;
  @ViewChild('resetBtn') resetBtn!: ElementRef; 

  constructor(private ticktactoc: TicktactocService) { }

  ngOnInit(): void {
    this.state$ = this.ticktactoc.subscribe((state) => {
      this.winner = state.winner;
      this.player = state.player;
      this.isGameOver = state.round === this.ticktactoc.maxRound+1 || state.winner !== Player.NONE;
      this.isFirstRound = state.round === 1;
    });
  }

  ngOnDestroy(): void {
    this.state$.unsubscribe();
  }

  ngAfterViewInit(): void {
    const el = this.resetBtn.nativeElement;
    fromEvent(el, 'click').subscribe((_e) => this.ticktactoc.reset());
  }
}
