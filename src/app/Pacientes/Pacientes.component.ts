import { Component, OnInit } from '@angular/core';
import { PacientesService } from '../service/Pacientes.service';
import { IPaciente } from '../model/Paciente';

@Component({
  selector: 'app-Pacientes',
  templateUrl: './Pacientes.component.html',
  styleUrls: ['./Pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  public paciente: IPaciente[];

  constructor(
    private pacientesService: PacientesService,
  ) { }

  ngOnInit(): void {
    this.pacientesService.getPacientes().subscribe((pacientes: IPaciente[]) => {
      this.paciente = pacientes;
    });
  }
}