import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD
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
=======
import { FolderTree } from './folder-tree';

describe('FolderTree', () => {
  let component: FolderTree;
  let fixture: ComponentFixture<FolderTree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FolderTree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FolderTree);
>>>>>>> credo
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
