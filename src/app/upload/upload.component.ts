import {Component, OnDestroy, signal} from '@angular/core';
import {MatFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {LyricsService} from "../service/lyrics/lyrics.service";
import {Router} from "@angular/router";
import {MatProgressBar} from "@angular/material/progress-bar";
import {finalize, Subscription, take} from "rxjs";
import {NgStyle} from "@angular/common";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [
    MatFabButton,
    MatIcon,
    MatProgressBar,
    NgStyle
  ],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss'
})
export class UploadComponent implements OnDestroy {
  protected readonly isLoading = signal<boolean>(false)
  private readonly requiredFileType = "audio/mpeg"
  private readonly subscription: Subscription | undefined

  constructor(private readonly lyricsService: LyricsService,
              private readonly router: Router,
              private readonly _snackBar: MatSnackBar) {
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

  uploadFile($event: Event) {
    console.log(($event.target as HTMLInputElement).files)
    const files = ($event.target as HTMLInputElement).files
    if (!!files && (files.length > 0)) {
      const file: File = files[0]
      if (file.type === this.requiredFileType) {
        const formData = new FormData()
        formData.append("audio", file)

        // Create an HTMLAudioElement
        const audioElement = new Audio()
        audioElement.src = URL.createObjectURL(file)
        this.lyricsService.audioSource = file

        let durationInSeconds = 0

        // Listen for the 'loadedmetadata' event to get the duration
        audioElement.addEventListener('loadedmetadata', () => {
          durationInSeconds = audioElement.duration;
        })

        this.isLoading.set(true)
        this.lyricsService.fetchLyrics(formData).pipe(
          take(1), // Ensure the subscription completes after emitting one value
          finalize(() => this.subscription?.unsubscribe())
        ).subscribe({
          next: lyrics => {
            this.lyricsService.setLyrics(lyrics, durationInSeconds)
            this.router.navigate(["/lyrics"])
          },
          error: _err => {
            this.isLoading.set(false)
            this._snackBar.open("There was an error when processing your file", "Retry")
          }
        })
      } else {
        this._snackBar.open("Your file type is not supported", "Retry")
      }
    }
  }
}
