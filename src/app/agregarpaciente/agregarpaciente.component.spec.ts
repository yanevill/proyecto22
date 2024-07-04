import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarpacienteComponent } from './AgregarpacienteComponent.1';

describe('AgregarpacienteComponent', () => {
  let component: AgregarpacienteComponent;
  let fixture: ComponentFixture<AgregarpacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarpacienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarpacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
