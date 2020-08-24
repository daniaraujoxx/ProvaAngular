import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticsDataComponent } from './statics-data.component';

describe('StaticsDataComponent', () => {
  let component: StaticsDataComponent;
  let fixture: ComponentFixture<StaticsDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticsDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
