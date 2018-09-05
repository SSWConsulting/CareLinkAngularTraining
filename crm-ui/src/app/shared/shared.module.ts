import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './container/page-not-found/page-not-found.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PageNotFoundComponent],
  exports: [PageNotFoundComponent]
})
export class SharedModule {}
