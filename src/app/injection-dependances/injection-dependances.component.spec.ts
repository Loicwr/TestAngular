import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectionDependancesComponent } from './injection-dependances.component';

describe('InjectionDependancesComponent', () => {
  let component: InjectionDependancesComponent;
  let fixture: ComponentFixture<InjectionDependancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InjectionDependancesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InjectionDependancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
