import {Component} from '@angular/core';
import {LyricsComponent} from "./lyrics/lyrics.component";
import {PlayerComponent} from "./player/player.component";
import {LyricsService} from "../service/lyrics/lyrics.service";

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
  protected timestamp = 0

  constructor(private readonly lyricsService: LyricsService) {
    this.lyricsService.updateData(true)
  }

  getTimestamp(timestamp: number) {
    this.timestamp = timestamp
  }
}
