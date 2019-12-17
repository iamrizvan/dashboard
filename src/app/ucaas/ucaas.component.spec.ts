import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcaasComponent } from './ucaas.component';

describe('UcaasComponent', () => {
  let component: UcaasComponent;
  let fixture: ComponentFixture<UcaasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcaasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcaasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
