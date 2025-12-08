import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { IndiceCategorias } from './categorias/indice-categorias/indice-categorias';
import { CrearCategorias } from './categorias/crear-categorias/crear-categorias';
import { Telefonos } from './telefonos/telefonos';
import { Emails } from './emails/emails';
import { Dirreciones } from './dirreciones/dirreciones';
import { CrearPersona } from './personas/crear-persona/crear-persona';

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
  }
];
