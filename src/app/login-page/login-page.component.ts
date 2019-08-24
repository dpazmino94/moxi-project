import { HttpClient } from '@angular/common/http';
import { LoginService } from './../common/services/login.service';
import { Component, OnInit } from '@angular/core';
import { DealerUserModel } from '../common/Models/DealerUserModel';
import { LOGIN_CONSTANTS } from '../common/constants/constants';
import { MatDialog } from '@angular/material/dialog';
import { CommonDialogComponent } from '../common/dialog/common-dialog/common-dialog.component';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  // NG Models
  userName: string;
  password: string;
  // Login service variables
  dealerUserModel: DealerUserModel = new DealerUserModel();
  loginService: LoginService;

  constructor(
    public http: HttpClient, 
    public dialog: MatDialog,
    public router: Router,
    public activatedRoute: ActivatedRoute) { 
    this.loginService = new LoginService(http);
  }

  ngOnInit() {
    // This clears the session data
    this.activatedRoute.url.subscribe(() => {
      if (localStorage.getItem('token')) {
        this.router.navigateByUrl('/repair-orders');
      }
    });
  }

  /**
   * This function validates the login
   *
   * @memberof LoginPageComponent
   */
  onSubmitLogin() {
    this.dealerUserModel.username = this.userName;
    this.dealerUserModel.password = this.password;
    this.dealerUserModel.userUuid = LOGIN_CONSTANTS.U_UID;
    this.dealerUserModel.apnsUuid = LOGIN_CONSTANTS.U_UID;
    // Login API Call
    this.loginService.login(this.dealerUserModel).then(response => {
      if (!response.error) {
        localStorage.setItem('token', response.token);
        this.router.navigateByUrl('/repair-orders')
        console.log(localStorage.getItem('token'));
      } 
    }).catch(error => {
      this.openDialog('There was an error!', error.error.message);
    });
  }

  /**
   * This opens the common dialog
   *
   * @param {string} title
   * @param {string} message
   * @memberof LoginPageComponent
   */
  openDialog(title: string, message: string): void {
    const dialogRef = this.dialog.open(CommonDialogComponent, {
      width: '250px',
      data: { 
        title: title, 
        message: message
      }
    });
    dialogRef.afterClosed();
  }


}
