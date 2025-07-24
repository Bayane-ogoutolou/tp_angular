import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ExplorerComponent } from './explorer/explorer.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    AppComponent,      // ici dans imports et non dans declarations
    ExplorerComponent  // idem ici
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
