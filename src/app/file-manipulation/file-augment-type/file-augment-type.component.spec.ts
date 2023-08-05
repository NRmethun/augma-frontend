import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileAugmentTypeComponent } from './file-augment-type.component';

describe('FileAugmentTypeComponent', () => {
  let component: FileAugmentTypeComponent;
  let fixture: ComponentFixture<FileAugmentTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileAugmentTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileAugmentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
