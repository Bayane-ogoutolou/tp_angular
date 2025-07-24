<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component, Input } from '@angular/core';
import { BlockList } from 'net';
>>>>>>> credo

@Component({
  selector: 'app-file-preview',
  imports: [],
  templateUrl: './file-preview.html',
  styleUrl: './file-preview.css'
})
export class FilePreview {
<<<<<<< HEAD

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

=======
  @Input () file: any = null;

  isImage(): boolean {
    if (!this.file) return false;
    return ['jpg', 'jpeg', 'png', 'gif'].includes(this.file.extension?.toLowerCase()  );
  }
  isText(): boolean {
    if (!this.file) return false;
    return [ 'txt', 'md', 'json'].includes(this.file.extension?.toLowerCase()  );
  }
>>>>>>> credo
}
