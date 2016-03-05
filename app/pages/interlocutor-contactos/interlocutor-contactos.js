
import {Page, NavController, NavParams} from 'ionic-angular';

import {InterlocutorContactoPage} from '../interlocutor-contacto/interlocutor-contacto';

@Page({
  templateUrl: 'build/pages/interlocutor-contactos/interlocutor-contactos.html'
})
export class InterlocutorContactosPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }
  constructor(nav, navParams) {
    this.nav = nav;
    // If we navigated to this page, we will have an item available as a nav param
    this.interlocutor = navParams.get('interlocutor');
  }

 abrirContacto(event, contacto) {
     this.nav.push(InterlocutorContactoPage, {
       contacto: contacto
     });
  }

}
