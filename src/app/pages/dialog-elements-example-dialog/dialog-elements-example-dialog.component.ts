import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {DataService} from "../../data.service";

interface ITask {
 name:string
  tasks:string[]
}

@Component({
  selector: 'app-dialog-elements-example-dialog',
  templateUrl: './dialog-elements-example-dialog.component.html',
  styleUrls: ['./dialog-elements-example-dialog.component.scss']
})
export class DialogElementsExampleDialogComponent  {


  text:string=''
  constructor(
    private dataService: DataService,
    public dialogRef: MatDialogRef<DialogElementsExampleDialogComponent>

  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    const task:ITask={
      name:'Ideas',
      tasks:[this.text]
    }
    this.dataService.create(task).subscribe(()=>{
      console.log('good')
    })
    this.dataService.addTask(this.text)
    this.dialogRef.close();
  }
}
