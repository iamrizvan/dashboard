import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NtcpeComponent } from './ntcpe.component';

describe('NtcpeComponent', () => {
  let component: NtcpeComponent;
  let fixture: ComponentFixture<NtcpeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NtcpeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NtcpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
