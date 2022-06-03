import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquariumListComponent } from './aquarium-list.component';

describe('AquariumListComponent', () => {
  let component: AquariumListComponent;
  let fixture: ComponentFixture<AquariumListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AquariumListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AquariumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
