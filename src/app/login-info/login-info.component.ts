import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { LoginService } from '../login.service';
import { HttpClient } from '@angular/common/http';
import { menuList } from '../menu-list';

@Component({
  selector: 'app-login-info',
  templateUrl: './login-info.component.html',
  styleUrls: ['./login-info.component.css']
})

export class LoginInfoComponent implements OnInit {

user = "Guest"
  menuLists = []

  constructor(private loginService: LoginService) { }

  ngOnInit() {

    this.loginService.isLoggedIn().subscribe(data => {
      this.user = data.username
    })

    if (this.user == "Guest") {

      this.menuLists = [
      //new menuList('url','menutext'),
        new menuList('http://172.20.145.140/user/login', 'ログイン')]

    } else {

      this.menuLists = [
      //new menuList('url','menutext'),
        new menuList('http://172.20.145.140/user/logout', 'ログアウト')]
        
    }
  }
}

