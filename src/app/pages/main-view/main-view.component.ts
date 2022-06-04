import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {res, RootObject} from "../../../assets/data";
import {MatDialog} from "@angular/material/dialog";
import {
  DialogElementsExampleDialogComponent
} from "../dialog-elements-example-dialog/dialog-elements-example-dialog.component";
import {DataService} from 'src/app/data.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent {

  board:RootObject
  value = ''
  snow = true

  constructor(
    public dialog: MatDialog,
    private dataService: DataService
  ) {
    this.board = res

    //with firebase database
    //dataService.getTask().subscribe(res=>this.board=res)
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  onClick(item: string): boolean {
    this.snow = !!item.length
    return this.snow
  }

  openDialog() {
    this.dialog.open(DialogElementsExampleDialogComponent);
    this.dataService.getTask().subscribe(
    )
  }
}

