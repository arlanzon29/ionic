
import {Page, NavController, NavParams} from 'ionic-angular';


import {InterlocutorDireccionPage} from '../interlocutor-direccion/interlocutor-direccion';

@Page({
  templateUrl: 'build/pages/interlocutor-direcciones/interlocutor-direcciones.html'
})
export class InterlocutorDireccionesPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }
  constructor(nav, navParams) {
    this.nav = nav;
    this.dirFacturacion=[];
    this.dirEnvio=[];
    // If we navigated to this page, we will have an item available as a nav param
    this.interlocutor = navParams.get('interlocutor');

    for (var i=0 ;i< this.interlocutor.crd1.length;i++){
    		if (this.interlocutor.crd1[i].AdresType=='B'){
    			this.dirFacturacion.push(this.interlocutor.crd1[i]);
    		}else{
				this.dirEnvio.push(this.interlocutor.crd1[i]);
    		}
    }
  }

  abrirDireccion(event, direccion) {
     this.nav.push(InterlocutorDireccionPage, {
       direccion: direccion
     });
  }
}
