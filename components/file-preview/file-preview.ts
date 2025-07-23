import { Component } from '@angular/core';

@Component({
  selector: 'app-file-preview',
  imports: [],
  templateUrl: './file-preview.html',
  styleUrl: './file-preview.css'
})
export class FilePreview {

  files = [
    {
      name: 'Documents',
      type: 'folder',
      expanded: false,
      children: [
        { name: 'CV.pdf', type: 'file' },
        {
          name: 'Projets',
          type: 'folder',
          expanded: false,
          children: [
            { name: 'projet1.docx', type: 'file' }
          ]
        }
      ]
    },
    { name: 'image.png', type: 'file' }
  ];

}
