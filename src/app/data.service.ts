import {Injectable} from '@angular/core';
import {res, RootObject} from "../assets/data";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url='https://kanvas-73dbd-default-rtdb.firebaseio.com'
  data:RootObject=res

  constructor(private http:HttpClient) { }
  getTask(){
    return this.data
  }

  create(task:any):Observable<any>{
    return this.http.post<string>(`${(this.url)}/Ideas/task.json`,task)/*.pipe(map((res:any)=>{
      return {
        name:'Ideas',
        id:res.id,
        tasks:[...res,task]
      }
    }))*/
  }

  addTask(task:string){
    if(task.length>0){
      //this.board=this.board.concat({name:'Ideas',tasks:['d']})
      this.data[0].tasks.push(task)
      //this.board.map(({name,tasks}) => name==="Ideas" ? tasks.push(this.newTask):tasks)
    }
  }

  removeTask(task:string){

  }

  updateTask(task:string){

  }

}
