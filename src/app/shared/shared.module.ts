import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { BoardComponent } from './board/board.component';



@NgModule({
  declarations: [CardComponent, BoardComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
