import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridBottomComponent } from './grid-bottom.component';

describe('GridBottomComponent', () => {
  let component: GridBottomComponent;
  let fixture: ComponentFixture<GridBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
