import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-future',
  standalone: true,
  imports: [],
  templateUrl: './future.component.html',
  styleUrl: './future.component.scss'
})
export class FutureComponent {
  @Input() future = '';
}
