import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UIStore } from './../../core/state/ui/ui.store'
import { UIQuery } from './../../core/state/ui/ui.query';
@Component({
  selector: 'app-audio-file-upload',
  templateUrl: './audio-file-upload.component.html',
  styleUrls: ['./audio-file-upload.component.scss']
})
export class AudioFileUploadComponent {
  
  audioSrc: string = '';
  file: any;

  constructor(
    private httpClient: HttpClient,
    private uiStore: UIStore,
    private uiQuery: UIQuery,
  ) {}

  ngOnInit() {
    
  }

  onFileChanged(event: any) {
    if (event.target.files && event.target.files[0]) {
      let file = event.target.files[0];
      this.file = file;
      let fr = new FileReader();
      fr.onload = (event: any) => {
        let base64 = event.target.result;
        let img = base64.split(',')[1];

        let blob = new Blob([window.atob(img)], { type: 'audio/wav' });
        this.uiStore.update({ uploadedImage: file });
        this.uiStore.update({isFileUploaded:true})
        this.audioSrc = fr.result as string;
      };
      fr.readAsDataURL(file);
    }
  }

  onBasicUpload() {
    let formdata = new FormData();
    formdata.append('image', this.file);
    console.log(formdata)
    this.httpClient
      .post('http://127.0.0.1:8000/image/augment/', formdata)
      .subscribe(
        (response : any) => console.log(response),
        (error : any) => console.log(error)
      );
  }

}
