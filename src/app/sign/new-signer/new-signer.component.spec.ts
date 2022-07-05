import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSignerComponent } from './new-signer.component';

describe('NewSignerComponent', () => {
  let component: NewSignerComponent;
  let fixture: ComponentFixture<NewSignerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSignerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
