import { LogoutPopoverPage } from './../logout-popover/logout-popover.page';
import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.page.html',
  styleUrls: ['./admin-panel.page.scss'],
})


export class AdminPanelPage implements OnInit {

  constructor( 
    private router: Router, 
    public popoverCtr: PopoverController
  ) {}

  ngOnInit() {
  }

  AddProduct(){
    this.router.navigateByUrl("add-product")
  }
  VendorsList() {
    this.router.navigateByUrl("vendors")
  }


  async OpenPopover(ev: any) {
    const popover = await this.popoverCtr.create({
      component: LogoutPopoverPage,
      event: ev,
      translucent: false
    });
    return await popover.present();
  }

}
