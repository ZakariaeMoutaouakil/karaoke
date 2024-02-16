import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-past',
  standalone: true,
  imports: [],
  templateUrl: './past.component.html',
  styleUrl: './past.component.scss'
})
export class PastComponent {
  @Input() past = '';

}
