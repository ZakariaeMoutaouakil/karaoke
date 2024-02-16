import {Component, Input, OnChanges, signal, SimpleChanges} from '@angular/core';
import {concatMap, delay, from, mergeMap, of, Subscription} from "rxjs";

@Component({
  selector: 'app-present',
  standalone: true,
  imports: [],
  templateUrl: './present.component.html',
  styleUrl: './present.component.scss'
})
export class PresentComponent implements OnChanges {
  @Input() present = ''
  @Input() interval = [0, 0]
  protected readonly lyric = signal<string>("")
  private subscription: Subscription | undefined
  private typingSpeed = 100

  ngOnChanges(changes: SimpleChanges): void {
    this.typingSpeed = (this.interval[1] - this.interval[0]) / this.present.split("").length
    this.subscription?.unsubscribe()
    this.lyric.set("")
    this.subscription = from(this.present.split(""))
      .pipe(
        mergeMap((alphabet) => from(alphabet)),
        concatMap(alphabet => of(alphabet)
          .pipe(delay(this.typingSpeed)))
      )
      .subscribe(alphabet => {
        this.lyric.update(oldMessage => oldMessage.concat("", alphabet))
      })
  }

}
