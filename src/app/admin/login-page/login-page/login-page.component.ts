import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from '@angular/router';
import {AuthService} from "../../auth.service";
import {User} from "../../models/model";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  checkRemMe = false
  form!: FormGroup
  isAuth = false

  formObject = {
    email: new FormControl('', [
      Validators.email,
      Validators.required]),
    password: new FormControl('', [
      Validators.minLength(6),
      Validators.required]),
    checkbox: new FormControl('false',)
  }

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.form = new FormGroup(this.formObject);
  }

  onClick(event: any) {
    this.checkRemMe = event.target.checked
  }

  onSubmit(event: Event) {
    if (this.form.invalid) {
      return
    }
    if (!this.checkbox.value) {
      this.form.reset()
    }
    const user: User = {
      email: this.email.value,
      password: this.password.value
    }
    /*this.authService.login(user).subscribe((res)=>{
      this.isAuth = true
      console.log(res)
      this.router.navigate(['/'])
    })*/
    this.authService.signIn(user).then(() => {
      this.router.navigate(['/'])
    })
  }


  get email() {
    return this.form.controls['email']
  }

  get password() {
    return this.form.controls['password']
  }

  get checkbox() {
    return this.form.controls['checkbox']
  }
}
