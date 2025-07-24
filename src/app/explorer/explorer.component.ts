import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // nécessaire pour *ngIf, *ngFor
import { DataService, FileItem } from '../services/data.service';

@Component({
  selector: 'app-explorer',
  standalone: true,
  imports: [CommonModule],  // Importer CommonModule pour *ngFor, *ngIf
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.css']
})
export class ExplorerComponent implements OnInit {
  files: FileItem[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.files = this.dataService.getFiles();
    this.initOpen(this.files);
  }

  initOpen(items: FileItem[]) {
    for (let item of items) {
      if (item.type === 'folder') {
        (item as any).open = false;
        if (item.children) {
          this.initOpen(item.children);
        }
      }
    }
  }

  toggleFolder(item: FileItem) {
    (item as any).open = !(item as any).open;
  }

  addFile(parent: FileItem, type: 'file' | 'folder') {
    const name = prompt(`Nom du nouveau ${type} ?`);
    if (!name) return;

    if (!parent.children) {
      parent.children = [];
    }
    parent.children.push({ name, type });
  }

  deleteItem(parentArray: FileItem[], index: number) {
    if (confirm(`Supprimer "${parentArray[index].name}" ?`)) {
      parentArray.splice(index, 1);
    }
  }
}

