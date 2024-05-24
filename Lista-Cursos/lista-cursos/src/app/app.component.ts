import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablaAlumnosComponent } from './tabla-alumnos/tabla-alumnos.component';
import { TablaCursosComponent } from './tabla-cursos/tabla-cursos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TablaAlumnosComponent, TablaCursosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lista-cursos';
}
