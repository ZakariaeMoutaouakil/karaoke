import {Component, Input, OnInit} from '@angular/core';
import {PastComponent} from "./past/past.component";
import {PresentComponent} from "./present/present.component";
import {FutureComponent} from "./future/future.component";
import {LyricsService} from "../../service/lyrics/lyrics.service";
import {Lyrics} from "../../service/lyrics/lyrics";

@Component({
  selector: 'app-lyrics',
  standalone: true,
  imports: [
    PastComponent,
    PresentComponent,
    FutureComponent
  ],
  templateUrl: './lyrics.component.html',
  styleUrl: './lyrics.component.scss'
})
export class LyricsComponent implements OnInit {
  @Input() timestamp = 0
  protected past = ""
  protected future = ""
  protected present = ""
  protected currentInterval = [0, 0]
  private readonly lyrics: Lyrics
  private currentItem = 0

  constructor(private readonly lyricsService: LyricsService) {
    this.lyrics = this.lyricsService.lyrics
  }

  updateLyrics() {
    if (this.currentItem === 0) {
      this.past = ""
      this.present = this.lyrics[this.currentItem].text
      this.future = ""
    } else if (this.currentItem === this.lyrics.length - 1) {
      this.past = this.lyrics[this.currentItem - 1].text
      this.present = this.lyrics[this.currentItem].text
      this.future = ""
    } else {
      this.past = this.lyrics[this.currentItem - 1].text
      this.present = this.lyrics[this.currentItem].text
      this.future = this.lyrics[this.currentItem + 1].text
    }
  }

  ngOnInit(): void {
    setInterval(() => {
      for (const item in this.lyrics) {
        if (this.timestamp >= this.lyrics[item].timestamp[0]
          && this.timestamp <= this.lyrics[item].timestamp[1]
          && (this.currentInterval[0] !== this.lyrics[item].timestamp[0]
            || this.currentInterval[1] !== this.lyrics[item].timestamp[1])) {
          this.currentInterval = this.lyrics[item].timestamp
          this.currentItem = +item
          this.updateLyrics()
          break
        }
      }
    }, 1000)
  }
}
