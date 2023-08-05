import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioFileUploadComponent } from './audio-file-upload.component';

describe('AudioFileUploadComponent', () => {
  let component: AudioFileUploadComponent;
  let fixture: ComponentFixture<AudioFileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioFileUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudioFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
