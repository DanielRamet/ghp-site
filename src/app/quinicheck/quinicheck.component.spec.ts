import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuinicheckComponent } from './quinicheck.component';

describe('QuinicheckComponent', () => {
  let component: QuinicheckComponent;
  let fixture: ComponentFixture<QuinicheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuinicheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuinicheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
