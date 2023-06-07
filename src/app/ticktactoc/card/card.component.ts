import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { TicktactocService } from '../ticktactoc.service';
import { Subscription } from 'rxjs';
import { Player } from '../enums/player';

@Component({
  selector: 'ticktactoc-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnDestroy {
  @Input() value!: number;
  @Output() clickCard = new EventEmitter<null>();

  isGameOver: boolean = false;
  state$!: Subscription;
  constructor(private ticktactoc: TicktactocService) { }

  ngOnInit(): void {
    this.state$ = this.ticktactoc.subscribe((state) => {
      this.isGameOver = state.round === this.ticktactoc.maxRound+1 || state.winner !== Player.NONE;
    });
  }

  ngOnDestroy(): void {
    this.state$.unsubscribe();
  }

  onClick() {
    this.clickCard.emit();
  }
}
