import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderTreeComponent } from './folder-tree';

describe('FolderTree', () => {
  let component: FolderTreeComponent;
  let fixture: ComponentFixture<FolderTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FolderTreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FolderTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
