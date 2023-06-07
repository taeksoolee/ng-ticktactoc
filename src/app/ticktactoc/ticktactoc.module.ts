import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { CardComponent } from './card/card.component';
import { PlayerPipe } from './player.pipe';
import { TicktactocService } from './ticktactoc.service';
import { ComponentModule } from '../component/component.module';
import { TicktactocComponent } from './ticktactoc/ticktactoc.component';
import { ControllerComponent } from './controller/controller.component';
import { PlayerSignPipe } from './player-sign.pipe';
import { PlayerDirective } from './player.directive';



@NgModule({
  declarations: [
    BoardComponent,
    CardComponent,
    PlayerPipe,
    TicktactocComponent,
    ControllerComponent,
    PlayerSignPipe,
    PlayerDirective
  ],
  imports: [
    CommonModule,
    ComponentModule,
  ],
  providers: [
    TicktactocService,
  ],
  exports: [
    TicktactocComponent,
  ]
})
export class TicktactocModule { }
