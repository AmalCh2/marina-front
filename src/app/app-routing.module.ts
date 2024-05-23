import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaysComponent } from './pays/pays.component';



const routes: Routes =[
  { path: 'pays',  component: PaysComponent },
  {path: '', redirectTo: 'pays', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
