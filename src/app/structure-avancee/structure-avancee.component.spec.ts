import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureAvanceeComponent } from './structure-avancee.component';

describe('StructureAvanceeComponent', () => {
  let component: StructureAvanceeComponent;
  let fixture: ComponentFixture<StructureAvanceeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructureAvanceeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructureAvanceeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
