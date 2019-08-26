import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController, Platform, ToastController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

declare var cordova: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public buildings: any[] = [];
  defaultHref = '/settings';

  loading: any;

  constructor(
    public platform: Platform,
    public navCtrl: NavController,
    public detector: ChangeDetectorRef,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public storage: Storage
  ) {}

  ionViewDidEnter() {

    this.platform.ready().then(() => {
      this.storage.get("situmEmail").then((email)=>{
        this.storage.get("situmKey").then((key)=>{
          cordova.plugins.Situm.setApiKey(email, key);
          this.fetchBuildings();            
        });        
      });
    }).catch(error => {
      console.log(error);
    });
  }

  public fetchBuildings() {
    this.loading = null;
    if (this.buildings.length === 0) {
      this.presentLoading('Loading buildings...');
      // loading.present();
    }
    // Fetchs the buildings for the current user
    // More details in
    // http://developers.situm.es/sdk_documentation/cordova/jsdoc/1.3.10/symbols/Situm.html#.fetchBuildings
    cordova.plugins.Situm.fetchBuildings((res) => {
      this.buildings = res;
      if (this.loading) {this.dismissLoading(); }
      this.detector.detectChanges();
    }, (error) => {
      const errorMsg = 'An error occurred when recovering the buildings.';
      console.log(`${errorMsg}`, error);
      if (this.loading) {this.dismissLoading(); }
      this.presentToast(`${errorMsg} ${error}`, 'bottom', null);
    });
  }

  async showBuilding(building) {
    await this.storage.set('building', building);
    await this.navCtrl.navigateForward('/positioning');
  }

  async presentToast(text, position, toastClass) {
    const toast = await this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: (position),
      cssClass: toastClass ? toastClass : ''
    });
    toast.present();
  }

  async presentLoading(msg) {
    this.loading =  await this.loadingCtrl.create({
      message: msg
    });

    await this.loading.present();
  }

  async dismissLoading() {
    this.loading.dismiss();
    this.loading = null;
  }

}
