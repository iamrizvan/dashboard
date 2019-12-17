import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElifeComponent } from './elife.component';

describe('ElifeComponent', () => {
  let component: ElifeComponent;
  let fixture: ComponentFixture<ElifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
