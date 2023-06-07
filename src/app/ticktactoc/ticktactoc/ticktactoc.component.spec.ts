import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicktactocComponent } from './ticktactoc.component';

describe('TicktactocComponent', () => {
  let component: TicktactocComponent;
  let fixture: ComponentFixture<TicktactocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicktactocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicktactocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
