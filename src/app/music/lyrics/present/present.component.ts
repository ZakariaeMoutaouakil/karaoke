import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-present',
  standalone: true,
  imports: [],
  templateUrl: './present.component.html',
  styleUrl: './present.component.scss',
  animations: [
    trigger('state', [
      state('base', style({
        transform: 'translateY(0)',
        opacity: '100%'
      })),
      state('moving', style({
        transform: 'translateY(1em)',
        opacity: '50%'
      })),
      transition('moving => base', animate(200))
    ])
  ]
})
export class PresentComponent implements OnChanges {
  @Input() present = ''

  state = 'base'

  ngOnChanges(changes: SimpleChanges): void {
    this.state = 'base' ? this.state = 'moving' : this.state = 'base'
  }

  endAnimation(_event: any) {
    this.state = 'base'
  }
}
