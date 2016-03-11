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
   
}
