import { CommonDialogComponent } from './../common/dialog/common-dialog/common-dialog.component';
import { RepairOrdersService } from './../common/services/repair-orders.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { REPAIR_ORDERS_CONSTANTS } from '../common/constants/constants';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-repair-orders',
  templateUrl: './repair-orders.component.html',
  styleUrls: ['./repair-orders.component.scss']
})
export class RepairOrdersComponent implements OnInit {
  // Service Variable
  private repairOrdersService: RepairOrdersService;
  // Table Data variables
  public repairOrdersDefault = [];
  public repairOrdersStarted = [];
  // Http Headers variable
  htttpOptions = {
    headers: new HttpHeaders({
      'Authorization': localStorage.getItem('token'),
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };
  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    public activatedRoute: ActivatedRoute,
    public router: Router) {
    // This initialize the http service
    this.repairOrdersService = new RepairOrdersService(http);
  }

  ngOnInit() {
    // This redirects the page if the user is not logged in
    this.activatedRoute.url.subscribe(() => {
      if (!localStorage.getItem('token')) {
        this.router.navigateByUrl('/login');
      } else {
        this.loadData('');
      }
    });
  }

  /**
   * This function loads the Repair Order List
   *
   * @param {string} customURL
   * @memberof RepairOrdersComponent
   */
  loadData(customURL: string) {
    this.repairOrdersService.getRepairOrders(customURL, this.htttpOptions).then(response => {
      response.data.forEach(element => {
        if (element.serviceStatus == REPAIR_ORDERS_CONSTANTS.DEFAULT_STATUS) {
          this.repairOrdersDefault.push(element);
        } else {
          this.repairOrdersStarted.push(element);
        }
      });
    });
  }

  /**
   * This function starts a Repair Order by its ID
   *
   * @param {number} repairOrderID
   * @memberof RepairOrdersComponent
   */
  startRepairOrder(repairOrderID: number) {
    this.repairOrdersService.startRepairOrder(repairOrderID, this.htttpOptions).then(() => {
      this.repairOrdersDefault = [];
      this.repairOrdersStarted = [];
      this.loadData('');
    }).catch(error => {
      this.openDialog('There was an error!', error.error.message);
    });
  }

  /**
   * This function removes the user Session Token and sends the user to the Login page
   *
   * @memberof RepairOrdersComponent
   */
  onLogOut() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

  /**
   * This opens the common dialog
   *
   * @param {string} title
   * @param {string} message
   * @memberof RepairOrdersComponent
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
