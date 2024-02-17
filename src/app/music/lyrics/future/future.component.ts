import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-future',
  standalone: true,
  imports: [],
  templateUrl: './future.component.html',
  styleUrl: './future.component.scss',
  animations: [
    trigger('state', [
      state('base', style({
        transform: 'translateY(0)',
        opacity: '50%'
      })),
      state('moving', style({
        transform: 'translateY(1em)',
        opacity: '10%'
      })),
      transition('moving => base', animate(100))
    ])
  ]
})
export class FutureComponent implements OnChanges {
  @Input() future = ''
  state = 'base'

  ngOnChanges(changes: SimpleChanges): void {
    this.state = 'base' ? this.state = 'moving' : this.state = 'base'
  }

  endAnimation(_event: any) {
    this.state = 'base'
  }
}
