import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './container/page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const COMPS = [
  PageNotFoundComponent
];

const EXPMODULES = [
  ReactiveFormsModule, RouterModule
];

@NgModule({
  imports: [CommonModule, EXPMODULES],
  declarations: [COMPS],
  exports: [COMPS, EXPMODULES]
})
export class SharedModule {}
