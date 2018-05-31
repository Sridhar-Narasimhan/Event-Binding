import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlEventsComponent } from './html-events.component';

describe('HtmlEventsComponent', () => {
  let component: HtmlEventsComponent;
  let fixture: ComponentFixture<HtmlEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
