import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IInventario} from '../model/Inventario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  constructor(
    private http: HttpClient,
  ) { }

  public getInventario(): Observable<IInventario[]> {
    return this.http.get<IInventario[]>('/assets/data/principal1.json');
  }
}
