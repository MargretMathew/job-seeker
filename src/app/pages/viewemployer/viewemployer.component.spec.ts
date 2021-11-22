import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewemployerComponent } from './viewemployer.component';

describe('ViewemployerComponent', () => {
  let component: ViewemployerComponent;
  let fixture: ComponentFixture<ViewemployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewemployerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewemployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
