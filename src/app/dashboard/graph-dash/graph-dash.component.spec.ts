import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphDashComponent } from './graph-dash.component';

describe('GraphDashComponent', () => {
  let component: GraphDashComponent;
  let fixture: ComponentFixture<GraphDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
