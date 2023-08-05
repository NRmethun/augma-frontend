import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudioComponentComponent } from './main-module/audio-component/audio-component.component';
import { ImageComponentComponent } from './main-module/image-component/image-component.component';
import { MainAudioComponent } from './audio-file-manipulation/main-audio/main-audio.component';
import { MainImageComponent } from './file-manipulation/main-image/main-image.component';
const routes: Routes = [
  { path: '', component: MainImageComponent },
  { path: 'audio', component: MainAudioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
