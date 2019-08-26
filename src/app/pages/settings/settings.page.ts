import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  public situmEmail: string;
  public situmKey: string;

  constructor(
    public navCtrl: NavController,
    public storage: Storage
  ) { 
    this.storage.get("situmEmail").then((email)=>{
      this.situmEmail = email;
    });
    this.storage.get("situmKey").then((key)=>{
      this.situmKey = key;
    });
    
  }

  ngOnInit() {
  }

  async showList() {
    await this.storage.set('situmEmail', this.situmEmail);
    await this.storage.set('situmKey', this.situmKey);
    await this.navCtrl.navigateForward('/home');
  }

  isAccountEmpty(){
    return this.situmEmail == "" || this.situmKey == "";
  }
}
