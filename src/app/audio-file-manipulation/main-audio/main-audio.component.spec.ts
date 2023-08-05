import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAudioComponent } from './main-audio.component';

describe('MainAudioComponent', () => {
  let component: MainAudioComponent;
  let fixture: ComponentFixture<MainAudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
