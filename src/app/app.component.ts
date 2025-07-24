import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="container mt-4">
      <h1>Explorateur de fichiers</h1>
      <app-explorer></app-explorer>
    </div>
  `,
  imports: [
    // Ici tu peux importer des modules Angular ou tes composants nécessaires
  ]
})
export class AppComponent {}
