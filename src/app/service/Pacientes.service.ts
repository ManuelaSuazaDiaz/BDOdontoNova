import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPaciente} from '../model/Paciente';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  constructor(
    private http: HttpClient,
  ) { }

  public getPacientes(): Observable<IPaciente[]> {
    return this.http.get<IPaciente[]>('/assets/data/principal.json');
  }
}
