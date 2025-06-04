import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleAngularComponent } from './module-angular.component';

describe('ModuleAngularComponent', () => {
  let component: ModuleAngularComponent;
  let fixture: ComponentFixture<ModuleAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleAngularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
