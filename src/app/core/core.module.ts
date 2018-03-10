import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrosHandlerService } from './erros-handler.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavbarComponent],
  exports : [NavbarComponent],
  providers: [
    ErrosHandlerService
  ]
})
export class CoreModule { }
