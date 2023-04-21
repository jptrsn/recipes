import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '@recipes/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class CommonUiModule {}
