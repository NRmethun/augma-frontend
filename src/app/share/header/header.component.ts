import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  items: MenuItem[];
  uploadedFiles: any[] = [];
  imgSrc:string='';

  /**
   *
   */
  constructor() {
    this.items = [
      {
        label: 'Image Augmentation',
        icon: 'pi pi-fw pi-file',
        routerLink: '/'
      },
      {
        label: 'Audio Augmentation',
        icon: 'pi pi-fw pi-pencil',
        routerLink: '/audio'
      },
      {
        label: 'GAN',
        icon: 'pi pi-fw pi-user',
      }
    ];
  }
  


  images: any[]=[];

    responsiveOptions:any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    responsiveOptions2:any[] = [
        {
            breakpoint: '1500px',
            numVisible: 5
        },
        {
            breakpoint: '1024px',
            numVisible: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    ngOnInit() {
    }
}
