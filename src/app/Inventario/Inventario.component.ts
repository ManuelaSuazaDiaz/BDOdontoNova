import { Component, OnInit } from '@angular/core';
import { InventarioService } from '../service/Inventario.service';
import { IInventario } from '../model/Inventario';

@Component({
  selector: 'app-Inventario',
  templateUrl: './Inventario.component.html',
  styleUrls: ['./Inventario.component.css']
})
export class InventarioComponent implements OnInit {

  public inventariot: IInventario[];

  constructor(
    private InventarioService: InventarioService,
  ) { }

  ngOnInit(): void {
    this.InventarioService.getInventario().subscribe((inventario: IInventario[]) => {
      this.inventariot = inventario;
    });
  }

}