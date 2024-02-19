import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Lyrics} from "./lyrics";
import {environment} from "../../../environments/environment";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LyricsService {

  audioSource: File | undefined
  private readonly lyricsOnScreenSubject$ = new BehaviorSubject<boolean>(false) // Initialize with default value
  lyricsOnScreen$ = this.lyricsOnScreenSubject$.asObservable()

  constructor(private readonly httpClient: HttpClient) {
  }

  private _lyrics: Lyrics = [
    {
      timestamp: [0, 0],
      text: ""
    }
  ]

  public get lyrics() {
    return this._lyrics
  }

  updateData(newData: boolean) {
    this.lyricsOnScreenSubject$.next(newData)
  }

  public setLyrics(lyrics: Lyrics, durationInSeconds: number) {
    const lastTimestamp = lyrics.slice(-1)[0].timestamp[1]
    if (!lastTimestamp) {
      lyrics.slice(-1)[0].timestamp[1] = durationInSeconds
      this._lyrics = lyrics
    }
  }

  fetchLyrics(formData: FormData) {
    return this.httpClient.post<Lyrics>(environment.apiUrl, formData)
  }
}
