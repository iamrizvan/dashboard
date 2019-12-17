import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanPipeComponent } from './clean-pipe.component';

describe('CleanPipeComponent', () => {
  let component: CleanPipeComponent;
  let fixture: ComponentFixture<CleanPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleanPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
