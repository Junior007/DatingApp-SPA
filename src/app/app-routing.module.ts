import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  declarations: [
    
 ],
  imports: [
    RouterModule.forRoot(routes)
    , FormsModule
    , CommonModule]
  ,
  exports: [RouterModule]
})
export class AppRoutingModule { }
