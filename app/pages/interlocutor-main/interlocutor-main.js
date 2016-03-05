import {Page, NavController, NavParams} from 'ionic-angular';
import {InterlocutorGeneralesPage} from '../interlocutor-generales/interlocutor-generales';
import {InterlocutorContactosPage} from '../interlocutor-contactos/interlocutor-contactos';
import {InterlocutorDireccionesPage} from '../interlocutor-direcciones/interlocutor-direcciones';



@Page({
  templateUrl: 'build/pages/interlocutor-main/interlocutor-main.html'
})
export class InterlocutorMainPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }
  constructor(nav, navParams) {
    this.nav = nav;
    // If we navigated to this page, we will have an item available as a nav param
    this.interlocutor = navParams.get('interlocutor');
  }

datosGenerales(event, interlocutor) {
     this.nav.push(InterlocutorGeneralesPage, {
       interlocutor: interlocutor
     });
  }

  personasContacto(event, interlocutor) {
     this.nav.push(InterlocutorContactosPage, {
       interlocutor: interlocutor
     });
  }

  direcciones(event, interlocutor) {
     this.nav.push(InterlocutorDireccionesPage, {
       interlocutor: interlocutor
     });
  }
}
