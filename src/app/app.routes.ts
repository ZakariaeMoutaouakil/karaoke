import {Routes} from '@angular/router';
import {UploadComponent} from "./upload/upload.component";
import {MusicComponent} from "./music/music.component";

export const routes: Routes = [
  {
    path: '',
    component: UploadComponent
  },
  {
    path: 'lyrics',
    component: MusicComponent
  }
];
