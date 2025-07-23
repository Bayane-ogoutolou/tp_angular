import { Component, Input } from '@angular/core';
import { BlockList } from 'net';

@Component({
  selector: 'app-file-preview',
  imports: [],
  templateUrl: './file-preview.html',
  styleUrl: './file-preview.css'
})
export class FilePreview {
  @Input () file: any = null;

  isImage(): boolean {
    if (!this.file) return false;
    return ['jpg', 'jpeg', 'png', 'gif'].includes(this.file.extension?.toLowerCase()  );
  }
  isText(): boolean {
    if (!this.file) return false;
    return [ 'txt', 'md', 'json'].includes(this.file.extension?.toLowerCase()  );
  }
}
