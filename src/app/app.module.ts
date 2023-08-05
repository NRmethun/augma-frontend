import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ShareModule } from './share/share.module';
import { AudioFileManipulationModule } from './audio-file-manipulation/audio-file-manipulation.module';
import { FileManipulationModule } from './file-manipulation/file-manipulation.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ShareModule,
    AudioFileManipulationModule,
    FileManipulationModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
