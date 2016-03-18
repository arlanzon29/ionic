import {Page} from 'ionic-angular';
import {MaestrosServices} from '../services/MaestrosServices';

@Page({
  templateUrl: 'build/pages/configuracion/configuracion.html'

})
export class ConfiguracionPage {
  static get parameters() {
    return [[MaestrosServices]];
  }
constructor(MaestrosServices ) {
        this.MaestrosServices = MaestrosServices


        this.password=window.localStorage.getItem("passwordDrive");
        this.savePassword=window.localStorage.getItem("savePasswordDrive");
    }
    
	iniciar(){
    this.MaestrosServices.iniciar();
	}

  googleDrive(){

    window.localStorage.setItem("savePasswordDrive",this.savePassword);

    if (this.savePassword){
      window.localStorage.setItem("passwordDrive",this.password);
    }else{
      window.localStorage.setItem("passwordDrive","");
    }


      this.MaestrosServices.getMaestrosFromDrive(this.password);
  }

  

}
