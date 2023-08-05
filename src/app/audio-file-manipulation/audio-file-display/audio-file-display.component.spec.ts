import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioFileDisplayComponent } from './audio-file-display.component';

describe('AudioFileDisplayComponent', () => {
  let component: AudioFileDisplayComponent;
  let fixture: ComponentFixture<AudioFileDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioFileDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudioFileDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
