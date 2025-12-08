import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { IndiceCategorias } from './categorias/indice-categorias/indice-categorias';
import { CrearCategorias } from './categorias/crear-categorias/crear-categorias';
import { Telefonos } from './telefonos/telefonos';
import { Emails } from './emails/emails';
import { Dirreciones } from './dirreciones/dirreciones';
import { CrearPersona } from './personas/crear-persona/crear-persona';
import { EditarCategoria } from './categorias/editar-categoria/editar-categoria';
import { EditarPersona } from './personas/editar-persona/editar-persona';

export const routes: Routes = [
  {path: '',
    component: LandingPage
  },
  {
    path:'categorias',
    component: IndiceCategorias
  },
  {
    path: 'categorias/crear',
    component: CrearCategorias
  },
  {
    path:'categorias/editar/:id',
    component: EditarCategoria
  },
  {
    path: 'telefonos',
    component: Telefonos
  },
  {
    path: 'emails',
    component: Emails
  },
  {
    path:'dirreciones',
    component:Dirreciones
  },
  {
    path: 'personas/crear-persona',
    component: CrearPersona
  },
  {
    path: 'personas/editar-persona',
    component: EditarPersona
  }
];
