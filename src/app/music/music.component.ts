import {Component} from '@angular/core';
import {LyricsComponent} from "./lyrics/lyrics.component";
import {PlayerComponent} from "./player/player.component";

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [
    LyricsComponent,
    PlayerComponent
  ],
  templateUrl: './music.component.html',
  styleUrl: './music.component.scss'
})
export class MusicComponent {
  timestamp = 0

  getTimestamp(timestamp: number) {
    this.timestamp = timestamp
  }
}
