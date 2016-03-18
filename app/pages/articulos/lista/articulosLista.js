import {Page, NavController, NavParams} from 'ionic-angular';
import {Inject} from 'angular2/core';
import {ArticuloMainPage} from '../main/articulosMain';

@Page({
  templateUrl: 'build/pages/articulos/lista/articulosLista.html'
})
export class ArticulosListaPage  {
   static get parameters() {
    return [[NavController], [NavParams]];
  }

 constructor(nav, navParams) {
    this.nav = nav;
    this.searchQuery=""

    this.initializeItems();    
  }

  initializeItems(){
    var inter=window.localStorage.getItem("articulos")

    if (!inter){
            alert("Vaya a configuracion e inice las tablas")
                                 
    }else{
      this.items=JSON.parse(inter);
    }

  }


  itemTapped(event, item) {
     this.nav.push(ArticuloMainPage, {
       item: item
     });
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
      if (v.ItemName.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    })


  }
}
