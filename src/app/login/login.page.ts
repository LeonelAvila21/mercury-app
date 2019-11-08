import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public navCtrl: NavController, public toastController: ToastController) { }

  ngOnInit() {
  }

  async InicioSesion(email:string, password:string)
  {
    if (email === undefined || password === undefined)
    {
      const toast = await this.toastController.create({
        message: 'Uno o más campos estan vacíos. Verificar datos.',
        duration: 2000
      });
      toast.present();
      
    }
    else if (email === "admin" && password === "admin")
    {
      this.navCtrl.navigateForward("/home-page/edituser");
    }
    else
    {
      this.navCtrl.navigateForward("/home-tabs/inbox/" + email);
    }
  }

}
