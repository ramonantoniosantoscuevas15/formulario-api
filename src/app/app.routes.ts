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
import { EditarEmail } from './emails/editar-email/editar-email';
import { EditarTelefono } from './telefonos/editar-telefono/editar-telefono';
import { EditarDirrecion } from './dirreciones/editar-dirrecion/editar-dirrecion';
import { ListadoPersonas } from './personas/listado-personas/listado-personas';

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
    path: 'personas/editar/:id',
    component: EditarPersona
  },
  {
    path: 'emails/editar/:id',
    component:EditarEmail
  },
  {
    path: 'telefonos/editar/:id',
    component:EditarTelefono
  },
  {
    path: 'dirreciones/editar/:id',
    component:EditarDirrecion
  },
  {
    path:'**',
    redirectTo:''
  }
];
