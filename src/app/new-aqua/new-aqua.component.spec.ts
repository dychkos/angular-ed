import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAquaComponent } from './new-aqua.component';

describe('NewAquaComponent', () => {
  let component: NewAquaComponent;
  let fixture: ComponentFixture<NewAquaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAquaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAquaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
