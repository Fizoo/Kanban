import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/admin/auth.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  isAuth:boolean

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isAuth$.subscribe(r=>this.isAuth=r)
  }

  logout() {
    this.authService.signOut().then()
  }
}
