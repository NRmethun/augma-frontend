import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioFileAugmentTypeComponent } from './audio-file-augment-type.component';

describe('AudioFileAugmentTypeComponent', () => {
  let component: AudioFileAugmentTypeComponent;
  let fixture: ComponentFixture<AudioFileAugmentTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioFileAugmentTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudioFileAugmentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
