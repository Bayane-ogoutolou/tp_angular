<<<<<<< HEAD
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-folder-tree',
  templateUrl: './folder-tree.html',
  styleUrls: ['./folder-tree.css']
})
export class FolderTreeComponent {
  @Input() data: any[] = [];

  toggle(item: any) {
    item.expanded = !item.expanded;
  }

  isFolder(item: any): boolean {
    return item.children && item.children.length > 0;
  }
=======
import { Component } from '@angular/core';

@Component({
  selector: 'app-folder-tree',
  imports: [],
  templateUrl: './folder-tree.html',
  styleUrl: './folder-tree.css'
})
export class FolderTree {

>>>>>>> credo
}
