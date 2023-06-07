import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Utils } from '../utils';
import { Player } from './enums/player';

export type Board = number[][];
type State = {
  winner: Player,
  player: Player,
  round: number,
  board: Board
}

@Injectable({
  providedIn: 'root',
})
export class TicktactocService {
  readonly size = 3;
  readonly maxRound = this.size**2;


  private state$ = new Subject<State>();
  state!: State;

  constructor() {
    this.state$.subscribe({
      next: (state) => this.state = state
    });

    this.init();
  }

  private init() {
    this.state$.next({
      winner: Player.NONE,
      player: Player.PLAYER1,
      round: 1,
      board: Utils.createGrid(this.size, Player.NONE),
    });
  }

  subscribe(nextFunction: (state: State) => void) {
    const subscription = this.state$.subscribe({
      next: nextFunction
    });

    this.state$.next(this.state);
    return subscription;
  }

  private togglePlayer(player: Player, curRound: number) {
    if (curRound > this.maxRound) return Player.NONE;

    switch (player) {
      case Player.PLAYER1:
        return Player.PLAYER2;
      case Player.PLAYER2:
        return Player.PLAYER1;
      default:
        return Player.NONE;
    }
  }

  private nextRound(round: number) {
    const next = round + 1;
    if (next > this.maxRound+1) throw Error("can't go to the next round");
    return next;
  }

  private getBoard(board: Board, rowIdx: number, colIdx: number) {
    return board.map((row, i) => {
      return row.map((col, j) => {
        return rowIdx === i && colIdx === j ? this.state.player : col;
      });
    });
  }

  private checkWinner(
    board: Board, 
    rowIdx: number, 
    colIdx: number, 
    curPlayer: Player
  ): {
    result: boolean,
    points: number[][],
  } {
    const dirs: Record<string, [number, number][]> = {
      // size 3기준
      cross1: [[-2, -2], [-1, -1], [0, 0], [1, 1], [2, 2]], // from top left to bottom right
      cross2: [[-2, 2], [-1, 1], [0, 0], [1, -1], [2, -2]], // from top right to bottom left
      horizen: [[-2, 0], [-1, 0], [0, 0], [1, 0], [2, 0]],
      vertical: [[0, -2], [0, -1], [0, 0], [0, 1], [0, 2]]
    };

    for (const key of Object.keys(dirs)) {
      let cnt = 0;
      const points = [];
      for (let [x, y] of dirs[key]) {
        y = rowIdx + y;
        x = colIdx + x;

        if (board[y] && board[y][x] === curPlayer) {
          cnt++;
          points.push([y, x]);
        }
        if (cnt === this.size) return {
          result: true,
          points,
        };
      }
    }
    

    return {
      result: false,
      points: [],
    };
  }

  select(rowIdx: number, colIdx: number) {
    try {
      const board = this.getBoard(this.state.board, rowIdx, colIdx);
      const curPlayer = this.state.player;

      const {result, points} = this.checkWinner(board, rowIdx, colIdx, curPlayer);

      if (result) {
        const resultBoard = Utils.createGrid(this.size, Player.NONE);

        points.forEach(([y, x]) => {
          resultBoard[y][x] = curPlayer;
        });

        return this.state$.next({
          winner: curPlayer,
          player: Player.NONE,
          round: this.maxRound+1,
          board: resultBoard,
        });
      }
      
      const round = this.nextRound(this.state.round);
      const player = this.togglePlayer(this.state.player, round);

      this.state$.next({ ...this.state, player, round, board });
    } catch (e) {
      console.warn(e);
      // this.init();
    }
  }

  reset() {
    this.init();
  }
}
