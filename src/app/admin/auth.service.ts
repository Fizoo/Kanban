import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./models/model";
import {BehaviorSubject, Observable} from "rxjs";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 public isAuth$=new BehaviorSubject<boolean>(false);
  apiKey = "AIzaSyB0huy-aB-m5bQEQU3BVEc8HlMob8LIDws"
  url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='

  constructor(private http: HttpClient ,
              private afAUth:AngularFireAuth,
              private router:Router) {
  }

  login(user: User): Observable<any> {
    user.returnSecureToken=true
    console.log(this.url+this.apiKey)
    return this.http.post<User>(this.url+this.apiKey,user)

  }
  signIn(user:User){
    return this.afAUth.signInWithEmailAndPassword(user.email,user.password).then(()=>{
     this.isAuth$.next(true)
    })
  }
  signOut(){
    return this.afAUth.signOut().then(()=>{
      this.isAuth$.next(false)
    })}


}
