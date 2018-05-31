import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ej2EventsComponent } from './ej2-events.component';

describe('Ej2EventsComponent', () => {
  let component: Ej2EventsComponent;
  let fixture: ComponentFixture<Ej2EventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ej2EventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ej2EventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
