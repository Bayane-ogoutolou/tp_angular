import { Injectable } from '@angular/core';

export interface FileItem {
  name: string;
  type: 'folder' | 'file';
  children?: FileItem[];
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: FileItem[] = [
    {
      name: 'Documents',
      type: 'folder',
      children: [
        { name: 'CV.pdf', type: 'file' },
        { name: 'LettreMotivation.docx', type: 'file' }
      ]
    },
    {
      name: 'Images',
      type: 'folder',
      children: [
        { name: 'profil.jpg', type: 'file' },
        { name: 'vacances.png', type: 'file' }
      ]
    },
    {
      name: 'Todo.txt',
      type: 'file'
    }
  ];

  constructor() {}

  getFiles(): FileItem[] {
    return this.data;
  }
}
