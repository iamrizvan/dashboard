import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VsaasComponent } from './vsaas.component';

describe('VsaasComponent', () => {
  let component: VsaasComponent;
  let fixture: ComponentFixture<VsaasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VsaasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VsaasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
