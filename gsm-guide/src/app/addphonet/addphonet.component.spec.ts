import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddphonetComponent } from './addphonet.component';

describe('AddphonetComponent', () => {
  let component: AddphonetComponent;
  let fixture: ComponentFixture<AddphonetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddphonetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddphonetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
