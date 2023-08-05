import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as JSZip from 'jszip';
import * as FileSaver from 'file-saver';
import { UIQuery } from './../../core/state/ui/ui.query';
@Component({
  selector: 'app-audio-file-display',
  templateUrl: './audio-file-display.component.html',
  styleUrls: ['./audio-file-display.component.scss']
})
export class AudioFileDisplayComponent {
  uploadedFiles: any[] = [];
  value: any = 20;
  images: any = [{url: "assets/audios/abc.wav"}, {url: "assets/audios/abc.wav"}, {url: "assets/audios/abc.wav"}, {url: "abc.wav"}];
  photos: any[] = [];
  imageNameList: string[] = [];
  val!: number;
  displayCustom: boolean = true;

  activeIndex: number = 0;
  selectedCities: string = '';
  augmentationType: any[] = [{ name: 'blur', isChecked: false, value: [] }];

  constructor(
    private http: HttpClient,
    public uiQuery: UIQuery,
  ) {}
  ngOnInit() {
    this.uiQuery.files$.subscribe((response) => {
      console.log('subs ----------  ')
      this.images = response;
      console.log('response from anywhere ',this.images);
    });
  }




  imageClick(index: number) {
    this.activeIndex = index;
    this.displayCustom = true;
  }

  downloadFiles() {
    const zip = new JSZip();
    for (let i = 0; i < this.images.length; i++) {
      console.log('slkdfsdf', `${this.images[i].url}`);
      this.http
        .get(`${this.images[i].url}`, { responseType: 'blob' })
        .subscribe((res) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            const base64data = reader.result as string;
            zip.file(`${this.images[i].url}`, base64data?.split('base64,')[1], {
              base64: true,
            });
          };

          reader.readAsDataURL(res);
          console.log(res);
        });
    }
    setTimeout(() => {
      zip.generateAsync({ type: 'blob' }).then(function (content) {
        FileSaver.saveAs(content, 'Sample.zip');
      });
    }, 2000);
  }
}
