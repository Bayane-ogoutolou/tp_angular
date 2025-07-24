import { Component } from '@angular/core';
import { ExplorerComponent } from "./explorer/explorer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  template:
  
   `
    <div class="container mt-4">
      <h1>Explorateur de fichiers</h1>
      <app-explorer></app-explorer>
    </div>
  `,
  imports: [
    ExplorerComponent
]
})
export class AppComponent {}
