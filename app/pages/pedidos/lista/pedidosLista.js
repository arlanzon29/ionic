import {Page, NavController, NavParams} from 'ionic-angular';
import {Inject} from 'angular2/core';
import {MaestrosServices} from '../../services/MaestrosServices';

import {PedidosMainPage} from '../main/pedidosMain';

@Page({
  templateUrl: 'build/pages/pedidos/lista/pedidosLista.html'
})
export class PedidosListaPage  {
   static get parameters() {
    return [[NavController], [NavParams],[MaestrosServices]];
  }

 constructor(nav, navParams,maestros) {
    this.nav = nav;
    this.maestros=maestros;
    this.searchQuery=""

    this.initializeItems();    
  }

  initializeItems(){
    var inter=window.localStorage.getItem("pedidos")

    if (!inter){
            this.pedidos=[];
                                 
    }else{
      this.pedidos=JSON.parse(inter);
    }

  }


    addNew(event) {
      var newOrder={'Docnum':'1','CardCode':'','CardName':""};

     this.nav.push(PedidosMainPage, {
       order: newOrder
     })
   }

   
  getItems(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();

    // set q to the value of the searchbar
    var q = searchbar.value;

    // if the value is an empty string don't filter the items
    if (q.trim() == '') {
      return;
    }

    this.items = this.items.filter((v) => {
      if (v.CardName.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    })


  }
}
