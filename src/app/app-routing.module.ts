import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonaComponent} from "./components/views/persona/persona.component";
import {PersonasComponent} from "./components/views/personas/personas.component";

const routes: Routes = [
  { path: 'persona', component: PersonaComponent},
  { path: 'persona/:id', component: PersonaComponent },
  { path: 'personas', component: PersonasComponent },
  { path: '**', redirectTo: 'personas', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
