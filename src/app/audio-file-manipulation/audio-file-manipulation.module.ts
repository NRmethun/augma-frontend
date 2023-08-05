import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioFileUploadComponent } from './audio-file-upload/audio-file-upload.component';
import { AudioFileAugmentTypeComponent } from './audio-file-augment-type/audio-file-augment-type.component';
import { AudioFileDisplayComponent } from './audio-file-display/audio-file-display.component';
import { MainAudioComponent } from './main-audio/main-audio.component';

import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { SliderModule } from 'primeng/slider';
import { SelectButtonModule } from 'primeng/selectbutton';
import {CheckboxModule} from 'primeng/checkbox'
import {ScrollPanelModule} from 'primeng/scrollpanel';

import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    AudioFileUploadComponent,
    AudioFileAugmentTypeComponent,
    AudioFileDisplayComponent,
    MainAudioComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ImageModule,
    FileUploadModule,
    CheckboxModule,
    ScrollPanelModule,
    SliderModule,
    SelectButtonModule,
    DropdownModule,
    ButtonModule,
    GalleriaModule,
    FormsModule,
    InputTextModule
  ],
  exports: [
    AudioFileUploadComponent,
    AudioFileAugmentTypeComponent,
    AudioFileDisplayComponent,
    MainAudioComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AudioFileManipulationModule { }
