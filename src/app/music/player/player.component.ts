import {AfterViewInit, Component, ElementRef, signal, ViewChild} from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatSlider, MatSliderThumb} from "@angular/material/slider";
import {NgStyle} from "@angular/common";
import {LyricsService} from "../../service/lyrics/lyrics.service";
import {TimestampPipe} from "../../pipe/timestamp/timestamp.pipe";

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatIcon,
    MatIconButton,
    MatSlider,
    MatSliderThumb,
    NgStyle,
    TimestampPipe
  ],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent implements AfterViewInit {
  protected lastTimeStamp = 0
  protected readonly isPlaying = signal<boolean>(true)
  @ViewChild('htmlAudioElement') private htmlAudioElement!: ElementRef<HTMLAudioElement>
  @ViewChild('timestamp') private timestamp!: ElementRef<HTMLInputElement>
  @ViewChild('volume') private volume!: ElementRef<HTMLInputElement>

  constructor(private readonly lyricsService: LyricsService) {
    this.lastTimeStamp = this.lyricsService.fetchLyrics().slice(-1)[0].timestamp[1]
  }

  ngAfterViewInit(): void {
    const audio: HTMLAudioElement = this.htmlAudioElement.nativeElement
    const timestamp: HTMLInputElement = this.timestamp.nativeElement
    const volume: HTMLInputElement = this.volume.nativeElement

    audio.volume = 0

    volume.addEventListener('input', () => {
      audio.volume = parseFloat(volume.value) / 100
    });

    // Update slider when audio time updates
    audio.addEventListener('timeupdate', () => {
      timestamp.value = audio.currentTime.toString()
    });

    // Update audio time when slider value changes
    timestamp.addEventListener('input', () => {
      audio.currentTime = parseFloat(timestamp.value)
    });
  }

  play(htmlAudioElement: HTMLAudioElement) {
    if (htmlAudioElement.paused) {
      htmlAudioElement
        .play()
        .then(() => this.isPlaying.set(!this.isPlaying()))
        .catch()
    } else {
      htmlAudioElement.pause()
      this.isPlaying.set(!this.isPlaying())
    }
  }

  mute(htmlAudioElement: HTMLAudioElement) {
    htmlAudioElement.muted = !htmlAudioElement.muted
  }
}

