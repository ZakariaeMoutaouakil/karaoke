import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'timestamp',
  standalone: true
})
export class TimestampPipe implements PipeTransform {

  transform(value: number): string {
    const minutes: number = Math.floor(value / 60)
    const seconds: number = Math.floor(value % 60)
    return `${this.pad(minutes)}:${this.pad(seconds)}`
  }

  private pad(value: number): string {
    return value < 10 ? '0' + value : value.toString()
  }

}
