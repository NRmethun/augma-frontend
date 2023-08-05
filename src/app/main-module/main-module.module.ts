import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AudioComponentComponent } from './audio-component/audio-component.component';
import { ImageComponentComponent } from './image-component/image-component.component';

import { FileManipulationModule } from './../file-manipulation/file-manipulation.module';
import { AudioFileManipulationModule } from './../audio-file-manipulation/audio-file-manipulation.module'
import { AudioFileAugmentTypeComponent } from '../audio-file-manipulation/audio-file-augment-type/audio-file-augment-type.component';
@NgModule({
  declarations: [
    AudioComponentComponent,
    ImageComponentComponent,
    // AudioFileAugmentTypeComponent,
    // AudioFileUploadComponent
  ],
  imports: [
    CommonModule,
    FileManipulationModule,
    AudioFileManipulationModule,
    AudioFileAugmentTypeComponent
   
  ],
  exports: [
    AudioComponentComponent,
    ImageComponentComponent
  ]
  ,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MainModuleModule { }
