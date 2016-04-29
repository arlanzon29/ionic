import {Page, NavController, NavParams} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/pedidos/main/pedidosMain.html'
})
export class PedidosMainPage  {
  static get parameters() {
    return [[NavController], [NavParams]];
  }
  constructor(nav, navParams) {
    this.nav = nav;

    // If we navigated to this page, we will have an item available as a nav param
    this.order = navParams.get('order');


    
  }


  validateTest(event,column){
  	alert("Validate44"+column);
  }

}
