import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesDAttributComponent } from './directives-d-attribut.component';

describe('DirectivesDAttributComponent', () => {
  let component: DirectivesDAttributComponent;
  let fixture: ComponentFixture<DirectivesDAttributComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivesDAttributComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivesDAttributComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
