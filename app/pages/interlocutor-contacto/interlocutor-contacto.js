
import {Page, NavController, NavParams} from 'ionic-angular';



@Page({
  templateUrl: 'build/pages/interlocutor-contacto/interlocutor-contacto.html'
})
export class InterlocutorContactoPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }
  constructor(nav, navParams) {
    this.nav = nav;
    // If we navigated to this page, we will have an item available as a nav param
    this.contacto = navParams.get('contacto');
  }


}
