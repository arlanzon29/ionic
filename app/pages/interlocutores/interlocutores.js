import {Page, NavController, NavParams} from 'ionic-angular';
import {Inject} from 'angular2/core';
import {InterlocutorMainPage} from '../interlocutor-main/interlocutor-main';

@Page({
  templateUrl: 'build/pages/interlocutores/interlocutores.html'
})
export class InterlocutoresPage  {
   static get parameters() {
    return [[NavController], [NavParams]];
  }

 constructor(nav, navParams) {
    this.nav = nav;
    this.searchQuery=""

    this.initializeItems();    
  }

  initializeItems(){
    var inter=window.localStorage.getItem("interlocutores")

    if (!inter){
            alert("Vaya a configuracion e inice las tablas")
                                 
    }else{
      this.interlocutores=JSON.parse(inter);
    }

  }

 itemTapped(event, interlocutor) {
     this.nav.push(InterlocutorMainPage, {
       interlocutor: interlocutor
     });
  }

  save(){
    window.localStorage.setItem("interlocutores",JSON.stringify(this.interlocutores));  
    alert("Interlocutores Guardados")
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

    this.interlocutores = this.interlocutores.filter((v) => {
      if (v.CardName.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    })

    var k=1;
  }
}
