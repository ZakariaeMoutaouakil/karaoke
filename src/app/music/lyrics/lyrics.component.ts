import {Component, OnInit} from '@angular/core';
import {PastComponent} from "./past/past.component";
import {PresentComponent} from "./present/present.component";
import {FutureComponent} from "./future/future.component";
import {MatSlider, MatSliderThumb} from "@angular/material/slider";
import {LyricsService} from "../../service/lyrics/lyrics.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-lyrics',
  standalone: true,
  imports: [
    PastComponent,
    PresentComponent,
    FutureComponent,
    MatSlider,
    MatSliderThumb,
    FormsModule
  ],
  templateUrl: './lyrics.component.html',
  styleUrl: './lyrics.component.scss'
})
export class LyricsComponent implements OnInit {
  private readonly lyrics: { timestamp: number[], text: string }[]
  protected past = ""
  protected future = ""
  protected present = ""
  protected value = 0
  protected currentInterval = [0, 0]
  private currentItem = 0

  constructor(private readonly lyricsService: LyricsService) {
    this.lyrics = this.lyricsService.fetchLyrics();
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
        if (this.value >= this.lyrics[item].timestamp[0]
          && this.value <= this.lyrics[item].timestamp[1]
          && (this.currentInterval[0] !== this.lyrics[item].timestamp[0]
            || this.currentInterval[1] !== this.lyrics[item].timestamp[1])) {
          this.currentInterval = this.lyrics[item].timestamp
          this.currentItem = +item
          this.updateLyrics()
          break
        }
      }
    }, 10)
  }
}