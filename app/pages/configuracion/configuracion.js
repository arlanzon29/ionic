import {Page} from 'ionic-angular';
import {MaestrosServices} from '../services/MaestrosServices';

@Page({
  templateUrl: 'build/pages/configuracion/configuracion.html',
  providers: [MaestrosServices]

})
export class ConfiguracionPage {
  static get parameters() {
    return [[MaestrosServices]];
  }
constructor(MaestrosServices ) {
        this.MaestrosServices = MaestrosServices


        this.password=window.localStorage.getItem("passwordDrive");
        this.savePassword=window.localStorage.getItem("savePasswordDrive");
    }
	iniciar(){
    
    

		this.interlocutores=[{'CardCode':'C001','CardName':'Casple','LicTradNum':'13000000','CardFName':'Casple',
            'ocpr':[{'Name':'Jose Manuel','FirstName':'Jose Manuel','LastName':'','Tel1':'947483890','Tel2':'','Cellolar':'','EMail':'casple@capsle.es'},
                  {'Name':'Rosa','FirstName':'Rosa','LastName':'','Tel1':'947483890','Tel2':'','Cellolar':'','EMail':''}],
            'crd1':[{'Adress':'Dir. Facturacion','Street':'Calle Alcalde','Block':'Sin numero','City':'Burgos','ZipCode':'09007','County':'Burgos','AdresType':'B'},
            {'Adress':'Dir. Envio','Street':'Calle Alcalde','Block':'Sin numero','City':'Burgos','ZipCode':'09007','County':'Burgos','AdresType':'S'}]},
           						{'CardCode':'C002','CardName':'Ima1','LicTradNum':'13000001','CardFName':'Ima1','ocpr':[],'crd1':[]},
           						{'CardCode':'C003','CardName':'Greenland','LicTradNum':'13000002','CardFName':'Greenland','ocpr':[],'crd1':[]}
           						]
    	window.localStorage.setItem("interlocutores",JSON.stringify(this.interlocutores));  


	}

  googleDrive(){

    window.localStorage.setItem("savePasswordDrive",this.savePassword);

    if (this.savePassword){
      window.localStorage.setItem("passwordDrive",this.password);
    }else{
      window.localStorage.setItem("passwordDrive","");
    }


     this.MaestrosServices.getMaestros(this.password).subscribe(
        data => {this.readMaestros( data); console.log(data);},
        err => this.logError(err),
        () => console.log('Movie Search Complete')
      );
  }

  crearTabla(data,tableName){
    var dataTable=data[tableName];

    var dat=[]
    var cabecera=dataTable[0];
    for (var i=1;i<dataTable.length;i++){
      var obj={};
      var act=dataTable[i];
      for  (var j=0 ;j<act.length;j++){
        obj[cabecera[j]]=act[j];
      }
      dat.push(obj);
    }
      return dat;
  }

  crearTablaMaestra(data,tableName,key){
    var dataTable=data[tableName];

    var dat={}
    var cabecera=dataTable[0];
    for (var i=1;i<dataTable.length;i++){
      var obj={};
      var act=dataTable[i];
      for  (var j=0 ;j<act.length;j++){
        obj[cabecera[j]]=act[j];
      }
      dat[obj[key]]=obj;
    }
      return dat;
  }

  crearSecundaria(data,tableName,key,master){
    var dataTable=data[tableName];

    var cabecera=dataTable[0];

    for (var m in master){
       master[m][tableName]=[];
    }
    for (var i=1;i<dataTable.length;i++){
      var obj={};
      var act=dataTable[i];

     
      for  (var j=0 ;j<act.length;j++){
        obj[cabecera[j]]=act[j];
      }

      
      master[obj[key]][tableName].push(obj);
    }
  }

  readMaestros(data){
    var ocrd=this.crearTablaMaestra(data,"ocrd","CardCode");
    this.crearSecundaria(data,"crd1","CardCode",ocrd);
    this.crearSecundaria(data,"ocpr","CardCode",ocrd)

    var arr=[];

    for (var cardcode in ocrd){
      arr.push(ocrd[cardcode]);
    }

    window.localStorage.setItem("interlocutores",JSON.stringify(arr));  
    alert("Proceso finalizado con éxito");
    
  }

  logError(err){
    alert("Error"+err)
  }

}
