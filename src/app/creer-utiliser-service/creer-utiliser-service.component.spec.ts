import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerUtiliserServiceComponent } from './creer-utiliser-service.component';

describe('CreerUtiliserServiceComponent', () => {
  let component: CreerUtiliserServiceComponent;
  let fixture: ComponentFixture<CreerUtiliserServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreerUtiliserServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreerUtiliserServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
