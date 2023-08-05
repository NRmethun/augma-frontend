import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
// import {ScrollerModule} from 'primeng/scroller';
import { SliderModule } from 'primeng/slider';
import { SelectButtonModule } from 'primeng/selectbutton';
// import {SliderModule} from 'primeng/slider';
import {CheckboxModule} from 'primeng/checkbox'
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { FileAugmentTypeComponent } from './file-augment-type/file-augment-type.component';
import { FileDisplayComponent } from './file-display/file-display.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MainImageComponent } from './main-image/main-image.component';

@NgModule({
  declarations: [
    FileUploadComponent,
    FileAugmentTypeComponent,
    FileDisplayComponent,
    MainImageComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ImageModule,
    GalleriaModule,
    ButtonModule,
    DropdownModule,
    FileUploadModule,
    ScrollPanelModule,
    SliderModule,
    CheckboxModule,
    SelectButtonModule,
    InputTextModule,
    FormsModule
  ],
  exports: [
    FileUploadComponent,
    FileAugmentTypeComponent,
    FileDisplayComponent,
    MainImageComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FileManipulationModule { }
