import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairesAvecFormsModuleComponent } from './formulaires-avec-forms-module.component';

describe('FormulairesAvecFormsModuleComponent', () => {
  let component: FormulairesAvecFormsModuleComponent;
  let fixture: ComponentFixture<FormulairesAvecFormsModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulairesAvecFormsModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulairesAvecFormsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
