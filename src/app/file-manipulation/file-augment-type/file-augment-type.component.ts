import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { SliderModule } from 'primeng/slider';
import { UIStore } from './../../core/state/ui/ui.store'
import { UIQuery } from './../../core/state/ui/ui.query';
@Component({
  selector: 'app-file-augment-type',
  templateUrl: './file-augment-type.component.html',
  styleUrls: ['./file-augment-type.component.scss']
})
export class FileAugmentTypeComponent {
  // p-checkbox not getting automatically updated , it should be
  // p-slider not showing

  selectedTypes: any = [];
  tobeSentSelectedOptions: any = [];
  pp: any = 100;
  file: any;
  cat:string="";
  stateOptions: any[] = [{label: 'Off', value: 'off'}]
  augmentationDisplayList: any[] = [
    {
      id: 1, name: 'blur', value: "", selected: false, comment: "(1 - 100)"
    },
    {
      id: 2, name: 'vertical_shift', value: "", selected: false, comment: "(1 - 100)"
    },
    {
      id: 3,  name: 'zoom', value: "", selected: false, comment: "(1 - 100)"
    },
    {
      id: 4, name: 'horizontal_shift', value: "", selected: false, comment: "(1 - 100)"
    },
    {
      id: 5, name: 'horizontal_flip', value: "", selected: false, comment: "(1 - 100)"
    },
    { 
      id:6, name: 'vertical_flip', value: "", selected: false, comment: "(1 - 100)"
    },
    { 
      id:7, name: 'rotation', value: "", selected: false, comment: "(1 - 100)"
    },
    { 
      id:8, name: 'reflect_mode', value: "", selected: false, comment: "(1 - 100)"
    },
    { 
      id:9, name: 'shear', value: "", selected: false, comment: "(1 - 100)"
    },
    { 
      id:10, name: 'brightness', value: "", selected: false, comment: "(1 - 100)"
    },
    // { 
    //   id:11, name: 'to_gray', value: "", selected: false, comment: "(1 - 100)"
    // },
    // { 
    //   id:12, name: 'contrast', value: "", selected: false, comment: "(1 - 100)"
    // },
    // { 
    //   id:10, name: 'to_green', value: "", selected: false, comment: "(1 - 100)"
    // },
    // { 
    //   id:10, name: 'to_red', value: "", selected: false, comment: "(1 - 100)"
    // },
    // { 
    //   id:10, name: 'to_blue', value: "", selected: false, comment: "(1 - 100)"
    // },
    // { 
    //   id:10, name: 'to_hsv', value: "", selected: false, comment: "(1 - 100)"
    // },
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
    console.log(fileUploadModel.augmentTypes);

    this.httpClient
      .post('http://localhost:5000/image_augment', formdata)
      .subscribe(
        (baseResponse: any) => {
          console.log("printing base responses ",baseResponse)
          if (baseResponse) {
            console.log("getting all responses  ", baseResponse)
            this.uiStore.update({ files: baseResponse });
          }
          console.log('ki likhbo ' + baseResponse);
        },
        (error) => console.log("errorrrrr   ", error)
      );
  }

}
