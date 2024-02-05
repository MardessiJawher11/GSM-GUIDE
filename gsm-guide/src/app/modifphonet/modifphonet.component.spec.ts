import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifphonetComponent } from './modifphonet.component';

describe('ModifphonetComponent', () => {
  let component: ModifphonetComponent;
  let fixture: ComponentFixture<ModifphonetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifphonetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifphonetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
