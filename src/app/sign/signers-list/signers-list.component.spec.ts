import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignersListComponent } from './signers-list.component';

describe('SignersListComponent', () => {
  let component: SignersListComponent;
  let fixture: ComponentFixture<SignersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
