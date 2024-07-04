import { Component, OnInit } from '@angular/core';
import { PacienteModel } from '../pages/models/pacienteModel.models';
import { Spaciente } from '../services/paciente.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-agregapaciente',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './agregarpaciente.Component.html',
  styleUrl: './agregarpaciente.component.css'
})
export class AgregarpacienteComponent implements OnInit {
  pacienteModel: PacienteModel = new PacienteModel();
  constructor(private spaciente: Spaciente) { }
  ngOnInit(): void {
    console.log('esta en agrega paciente');

  }

  guardar(forma: NgForm) {
    // this.pacienteModel.idpaciente=5;
    // this.pacienteModel.nombre='Felix';
    // this.pacienteModel.apellido='Guzman';
    console.log('datos a enviar');
    console.log(this.pacienteModel);
    this.spaciente.addPaciente(this.pacienteModel)
      .subscribe((resp) => {
        console.log('se registro el paciente');
        Swal.fire({
          allowOutsideClick: false,
          title: 'Confirmación',
          text: 'Se registro el paciente correctamente',
        });
      });
  }

}
