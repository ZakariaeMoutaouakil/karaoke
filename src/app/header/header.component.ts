import {Component, OnDestroy, signal} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {NgClass} from "@angular/common";
import {LyricsService} from "../service/lyrics/lyrics.service";
import {finalize, Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatIconButton,
    RouterLink,
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnDestroy {
  lyricsOnScreen = signal<boolean>(false)
  private readonly subscription: Subscription

  constructor(private readonly lyricsService: LyricsService) {
    this.subscription = this.lyricsService.lyricsOnScreen$
      .pipe(finalize(() => this.subscription.unsubscribe()))
      .subscribe(data=>{
        this.lyricsOnScreen.set(data)
      })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
