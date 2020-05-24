import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { mainComponent } from './main/main.component';
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
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    mainComponent,
    PacientesComponent,
    InventarioComponent,
    AgregarCitaComponent,
    AgregarPacienteComponent,
    EditarInfoPacientesComponent,
    ListaEspecialistasComponent,
    ListaTratamientosComponent,
    FooterComponent,
    ModificarInfoInsumosComponent,
    ListaInsumosComponent,
    AgregarInsumoEnserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
