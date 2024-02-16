import {Component, signal, ViewChild} from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatSlider, MatSliderThumb} from "@angular/material/slider";
import {NgStyle} from "@angular/common";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";

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
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent {
  @ViewChild('volumeSlider') volumeSlider: any

  @ViewChild('volume') volume: any
  protected readonly isPlaying = signal<boolean>(true)
  protected lastVolume = "0"
  myControl = new FormControl('');

  muteVolume(volume: HTMLInputElement) {
    console.log(volume)
    if (volume.value !== "0") {
      this.lastVolume = volume.value
      volume.value = "0"
    } else {
      volume.value = this.lastVolume
    }
  }
}
