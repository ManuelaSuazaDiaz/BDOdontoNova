import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import{mainComponent} from './main/main.component';
import { PacientesComponent } from './Pacientes/Pacientes.component';
import { InventarioComponent } from './Inventario/Inventario.component';
import { AgregarPacienteComponent } from './AgregarPaciente/AgregarPaciente.component';
import { AgregarCitaComponent } from './AgregarCita/AgregarCita.component';
import { ListaTratamientosComponent } from './ListaTratamientos/ListaTratamientos.component';
import { EditarInfoPacientesComponent } from './EditarInfoPacientes/EditarInfoPacientes.component';
import { ListaEspecialistasComponent } from './ListaEspecialistas/ListaEspecialistas.component';
import { ModificarInfoInsumosComponent } from './ModificarInfoInsumos/ModificarInfoInsumos.component';
import { ListaInsumosComponent } from './ListaInsumos/ListaInsumos.component';
import { AgregarInsumoEnserComponent } from './AgregarInsumoEnser/AgregarInsumoEnser.component';
import { ModificarInfoComponent } from './ModificarInfo/ModificarInfo.component';


const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'main', component: mainComponent },
  { path: 'pacientes', component: PacientesComponent },
  { path: 'inventario', component: InventarioComponent },
  { path: 'AgregarPaciente', component: AgregarPacienteComponent },
  { path: 'AgregarCita', component: AgregarCitaComponent },
  { path: 'ListaTratamientos', component: ListaTratamientosComponent },
  { path: 'EditarInfoPacientes', component: EditarInfoPacientesComponent },
  { path: 'ListaEspecialistas', component: ListaEspecialistasComponent },
  { path: 'ModificarInfoInsumos', component: ModificarInfoInsumosComponent },
  { path: 'ListaInsumos', component: ListaInsumosComponent },
  { path: 'AgregarInsumoEnser', component: AgregarInsumoEnserComponent },
  { path: 'ModificarInfo', component: ModificarInfoComponent },
  { path: '**', redirectTo: '/main'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }