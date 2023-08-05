import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UIStore } from './../../core/state/ui/ui.store'
import { UIQuery } from './../../core/state/ui/ui.query';

@Component({
  selector: 'app-audio-file-augment-type',
  templateUrl: './audio-file-augment-type.component.html',
  styleUrls: ['./audio-file-augment-type.component.scss']
})
export class AudioFileAugmentTypeComponent {

  selectedTypes: any = [];
  tobeSentSelectedOptions: any = [];
  pp: any = 100;
  file: any;
  cat:string="";
  stateOptions: any[] = [{label: 'Off', value: 'off'}]
  augmentationDisplayList: any[] = [
    {
      id: 1, name: 'pitch_shift', value: "", selected: false, comment: '[ -5 - 12 ]'
    },
    {
      id: 2, name: 'time_shift', value: "", selected: false, comment: '[ .5 - 1.5 ]'
    },
    {
      id: 3,  name: 'White Noise', value: "", selected: false, comment: ''
    },
    {
      id: 4, name: 'Random Gain', value: "", selected: false,comment: ''
    },
    {
      id: 5, name: 'Inverse Polarity', value: "", selected: false, comment: ''
    }
  ];
  augmentationType: any = {
    blur: { name: 'blur', value: [0] },
    vertical_shift: { name: 'vertical_shift', value: [0] },
    horizontal_shift: { name: 'horizontal_shift', value: [0] },
    zoom: { name: 'zoom', value: [0] },
    horizontal_flip: { name: 'horizontal_flip', value: [0] },
    vertical_flip: { name: 'vertical_flip', value: [0] },
    rotation: { name: 'rotation', value: [0] },
    reflect_mode:{name:'reflect_mode',value:[0]},
    shear:{name:'shear',value:[0]},
    brightness:{name:'brightness',value:[0]},
    to_gray:{name:'to_gray',value:[0]},
    contrast:{name:'contrast',value:[0]},
    to_green:{name:'to_green',value:[0]},

    to_red:{name:'to_red',value:[0]},

    to_blue:{name:'to_blue',value:[0]},

    to_hsv:{name:'to_hsv',value:[0]},

    horizontal_shift_mode: {
      name: 'wrap',
      value: [0],
    },
  };

  augmentationParameter: any[] = [0, 0, 0, 0, 0, 0, 0, 0];
  val: any;
  src: string = '';
  constructor(
    private httpClient: HttpClient,
    private uiStore: UIStore,
    public uiQuery: UIQuery,
    // private changeDetection: 
  ) {}

  ngOnInit() {
    this.uiQuery.uploadedImage$.subscribe(
      (response) => {
        this.file = response;
        console.log(response);
      },
      (error) => console.log(error)
    );
  }
  onValueChange(e:any) {
    console.log(e,"nothing")
    this.tobeSentSelectedOptions.append()
    this.selectedTypes['selected'] =true;
    // console.log(this.augmentationType);
  }

  onBasicUpload() {
    let augmentationTypeList: any = [];
    
    for (let i = 0; i < this.augmentationDisplayList.length; i++) {
      console.log((this.augmentationDisplayList[i].value).trim() )
      if( (this.augmentationDisplayList[i].value).trim() !==''){
        augmentationTypeList.push(this.augmentationDisplayList[i]);
      }
    }
    console.log('this',augmentationTypeList);
    
    let fileUploadModel: any = {
      file: this.file,
      augmentTypes: augmentationTypeList,
    };

    let formdata = new FormData();
    formdata.append('image', fileUploadModel.file);
    formdata.append('types', JSON.stringify(fileUploadModel.augmentTypes));
    console.log("file upload model", fileUploadModel);

    this.httpClient
      .post('http://localhost:5000/audio_augment', formdata)
      .subscribe(
        (baseResponse: any) => {
          console.log("printing base responses ",baseResponse)
          if (baseResponse) {
            console.log("getting all responses  ", baseResponse)
            this.uiStore.update({ audioFiles: baseResponse });
          }
          console.log('ki likhbo ' + baseResponse);
        },
        (error) => console.log("errorrrrr   ", error)
      );
  }

}
