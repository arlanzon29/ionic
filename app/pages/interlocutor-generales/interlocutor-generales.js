
import {Page, NavController, NavParams} from 'ionic-angular';



@Page({
  templateUrl: 'build/pages/interlocutor-generales/interlocutor-generales.html'
})
export class InterlocutorGeneralesPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }
  constructor(nav, navParams) {
    this.nav = nav;
    // If we navigated to this page, we will have an item available as a nav param
    this.interlocutor = navParams.get('interlocutor');
  }


}
