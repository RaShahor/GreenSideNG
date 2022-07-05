import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProcessingBarComponent } from './form-processing-bar.component';

describe('FormProcessingBarComponent', () => {
  let component: FormProcessingBarComponent;
  let fixture: ComponentFixture<FormProcessingBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProcessingBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProcessingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
