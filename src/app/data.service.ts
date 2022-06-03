import {Injectable} from '@angular/core';
import {res, RootObject} from "../assets/data";
import {map, Observable, scan, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {push} from "@angular/fire/database";

interface Val {
  name: string
  tasks: string[]
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url='https://kanvas-73dbd-default-rtdb.firebaseio.com'
  data:RootObject=res
  val:Val


  constructor(private http:HttpClient) { }
  getTask(){
    return this.http.get(this.url+'/task.json')
      .pipe(map(res=>{
        return Object.values(res)
      }),
      map(el=>{
        let map=new Map()
        el.forEach(({name:k,tasks:v}:any)=>{
          let values=map.get(k) || []
          values.push(v[0])
          map.set(k,values)
        })
        return [...map.entries()].map(([k,v])=>({name:k,tasks:v}))
      }),
      /*  scan((obj, {name,tasks}:any) => {
            obj[name]=obj[name]||{name,tasks:[]};
            obj[name].values?.push(tasks[0])
            return obj
            }, {})
        ,*/
        tap((res)=>{
          console.log('res',res)
          //console.log('val',this.val)
        })
      )
  }

  create(task:any):Observable<any>{

    return this.http.post<string>(`${(this.url)}/task.json`,task)/*.pipe(map((res:any)=>{
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
