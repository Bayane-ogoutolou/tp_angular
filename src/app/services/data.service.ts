import { Injectable } from '@angular/core';

export interface FileItem {
open: any;
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
        {
          name: 'CV.pdf', type: 'file',
          open: undefined
        },
        {
          name: 'LettreMotivation.docx', type: 'file',
          open: undefined
        }
      ],
      open: undefined
    },
    {
      name: 'Images',
      type: 'folder',
      children: [
        {
          name: 'profil.jpg', type: 'file',
          open: undefined
        },
        {
          name: 'vacances.png', type: 'file',
          open: undefined
        }
      ],
      open: undefined
    },
    {
      name: 'Todo.txt',
      type: 'file',
      open: undefined
    }
  ];

  constructor() {}

  getFiles(): FileItem[] {
    return this.data;
  }
}
