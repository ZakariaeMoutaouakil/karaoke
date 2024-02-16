import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-present',
  standalone: true,
  imports: [],
  templateUrl: './present.component.html',
  styleUrl: './present.component.scss'
})
export class PresentComponent {
  @Input() present = '';

}
