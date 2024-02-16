import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LyricsService {

  constructor(private readonly httpClient: HttpClient) {
  }

  fetchLyrics() {
    return [
      {'timestamp': [0.0, 1.28], 'text': ' Oh no!'},
      {'timestamp': [4.94, 7.36], 'text': " Yeah, y'all know what it is"},
      {'timestamp': [7.36, 9.2], 'text': ' Katy Perry'},
      {'timestamp': [9.2, 10.98], 'text': ' Juicy J'},
      {'timestamp': [10.98, 13.5], 'text': ' Uh-huh'},
      {'timestamp': [13.5, 15.22], 'text': " Let's rage!"},
      {'timestamp': [15.44, 16.36], 'text': ' I knew you were'},
      {'timestamp': [16.36, 18.88], 'text': ' You were gonna come to me'},
      {'timestamp': [18.88, 20.02], 'text': ' And here you are'},
      {'timestamp': [20.02, 22.36], 'text': ' But you better choose carefully'},
      {'timestamp': [22.36, 23.2], 'text': ' Cause I'},
      {'timestamp': [23.2, 26.38], 'text': " I'm capable of anything"},
      {'timestamp': [26.38, 29.68], 'text': ' Of anything and everything'},
      {'timestamp': [29.68, 32.8], 'text': ' Make me your Aphrodite'},
      {'timestamp': [32.8, 36.72], 'text': ' Make me your one and only'},
      {'timestamp': [36.72, 40.72], 'text': " Don't make me your enemy"},
      {'timestamp': [40.72, 44.44], 'text': ' Your enemy, your enemy'},
      {'timestamp': [44.44, 47.9], 'text': ' So you wanna play with magic?'},
      {
        'timestamp': [48.84, 52.12],
        'text': " Boy, you should know what you're falling for"
      },
      {'timestamp': [52.12, 55.8], 'text': ' Baby, do you dare to do this?'},
      {
        'timestamp': [56.22, 59.8],
        'text': " Cause I'm coming at you like a dark horse"
      },
      {'timestamp': [59.8, 62.78], 'text': ' Are you ready for, ready for'},
      {'timestamp': [62.78, 66.32], 'text': ' A perfect storm, a perfect storm'},
      {
        'timestamp': [66.32, 69.98],
        'text': " Cause what's in mine, what's in mine"
      },
      {'timestamp': [69.98, 73.62], 'text': " There's no going back"},
      {'timestamp': [73.62, 82.26], 'text': ' Mark my words'},
      {'timestamp': [82.26, 84.44], 'text': ' This love will make you levitate'},
      {
        'timestamp': [84.44, 87.94],
        'text': ' Like a bird Like a bird without a cage'
      },
      {
        'timestamp': [87.94, 91.84],
        'text': " Don't pretend to hurt, if you choose to walk away"
      },
      {
        'timestamp': [91.84, 98.24],
        'text': " Don't walk away, it's in the palm of your hand now, baby"
      },
      {'timestamp': [98.24, 101.9], 'text': " It's a yes or a no, no, maybe"},
      {
        'timestamp': [101.9, 106.54],
        'text': ' So just be sure, before you give it all to me'
      },
      {'timestamp': [106.54, 108.24], 'text': ' All to me'},
      {'timestamp': [108.24, 110.44], 'text': ' Give it all to me'},
      {'timestamp': [110.44, 113.34], 'text': ' So you wanna play with magic'},
      {
        'timestamp': [113.34, 117.6],
        'text': " Boy, you should know what you're falling for"
      },
      {
        'timestamp': [117.6, 121.2],
        'text': ' Baby, do you dare to do this?'
      },
      {
        'timestamp': [121.56, 125.24],
        'text': " Cause I'm coming at you like a dark horse"
      },
      {'timestamp': [125.24, 128.22], 'text': ' Are you ready for, ready for'},
      {
        'timestamp': [128.22, 131.78],
        'text': ' A perfect storm, a perfect storm'
      },
      {
        'timestamp': [131.78, 135.48],
        'text': " Cause what's your mind, what's your mind"
      },
      {'timestamp': [135.48, 139.02], 'text': " There's no going back"},
      {'timestamp': [139.02, 142.6], 'text': " She's a beast, I call her karma"},
      {
        'timestamp': [142.6, 147.0],
        'text': ' She eats your heart out out like Jeffrey Dahmer'
      },
      {
        'timestamp': [147.0, 152.28],
        'text': ' Be careful, try not to lead her on Shorty heart is on steroids cause her love'
      },
      {
        'timestamp': [152.28, 154.9],
        'text': ' is so strong You may fall in love when you meet her'
      },
      {
        'timestamp': [154.9, 158.7],
        'text': ' If you get the chance you better keep her She sweet as pie but if you break her heart'
      },
      {
        'timestamp': [158.7, 163.44],
        'text': ' she turn cold as a freezer That fairy tale ending with a knight in shiny'
      },
      {
        'timestamp': [163.44, 167.56],
        'text': " armor She can be my sleeping beauty, I'm gon' put her in a coma"
      },
      {
        'timestamp': [167.56, 171.1],
        'text': " Damn, I think I love her, shot her so bad, I sprung and I don't care"
      },
      {
        'timestamp': [171.1, 174.74],
        'text': ' She ride me like a rollercoaster, turn the bedroom into a fair'
      },
      {
        'timestamp': [174.74, 178.56],
        'text': ' Her love is like a drug, I was tryna hit it and quit it'
      },
      {
        'timestamp': [178.56, 182.08],
        'text': " But lil' mama so dope, I messed around and got addicted"
      },
      {'timestamp': [182.08, 187.2], 'text': ' So you wanna play with magic?'},
      {
        'timestamp': [187.2, 190.8],
        'text': " Boy, you should know what you're falling for"
      },
      {
        'timestamp': [190.8, 194.4],
        'text': ' Baby, do you dare to do this?'
      },
      {
        'timestamp': [194.4, 198.6],
        'text': " Cause I'm coming at you like a dark horse"
      },
      {'timestamp': [198.6, 202.4], 'text': ' Are you ready for, ready for'},
      {'timestamp': [202.4, 205.64], 'text': ' A perfect storm A perfect storm'},
      {
        'timestamp': [205.64, 208.16],
        'text': " Cause what's in mine, what's in mine"
      },
      {
        'timestamp': [208.16, 211.74],
        'text': " There's no going back"
      }]
  }
}
