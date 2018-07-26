import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridTopComponent } from './grid-top.component';

describe('GridTopComponent', () => {
  let component: GridTopComponent;
  let fixture: ComponentFixture<GridTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
