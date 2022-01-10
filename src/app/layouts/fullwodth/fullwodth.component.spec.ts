import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullwodthComponent } from './fullwodth.component';

describe('FullwodthComponent', () => {
  let component: FullwodthComponent;
  let fixture: ComponentFixture<FullwodthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullwodthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullwodthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
