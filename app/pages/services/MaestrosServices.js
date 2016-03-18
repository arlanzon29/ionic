import { Inject } from 'angular2/core';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';
 
export class MaestrosServices {  
	static get parameters() {
	return [[Http]];
	}
    constructor(http ) {
        this.http = http
    }   


    readDataBase(){
        var ocrdLocal=window.localStorage.getItem("interlocutores")

        if (!ocrdLocal){
                
                                     
        }else{
          this.ocrd=JSON.parse(ocrdLocal);
        }
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

        this.readDataBase();
    }


    getDrive(password) {

       // var url = 'http://api.themoviedb.org/3/search/movie?query=&query=' + encodeURI(movieName) + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';

        var id="AKfycbyZ5r-qCxhY3rSavWHBxx2MZ56VeRAcdXHsmGqQQTSe3YSgIktA"
        var url="https://script.google.com/macros/s/"+id+"/exec?user=manager&password="+password;
        return this.http.get(url).map(res => res.json());       
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

    var oitm=this.crearTablaMaestra(data,"oitm","ItemCode");

    var arr=[];

    for (var cardcode in ocrd){
      arr.push(ocrd[cardcode]);
    }

    var arrItm=[];

    for (var itemcode in oitm){
      arrItm.push(oitm[itemcode]);
    }


    window.localStorage.setItem("interlocutores",JSON.stringify(arr));  
    window.localStorage.setItem("articulos",JSON.stringify(arrItm));  

    this.readDataBase();
    alert("Proceso finalizado con éxito");    
  }



  logError(err){
    alert("Error"+err)
  }


    getMaestrosFromDrive(password){
        this.getDrive(password).subscribe(
            data => {this.readMaestros( data); console.log(data);},
            err => this.logError(err),
            () => console.log('Movie Search Complete')
        );
    }

  logError(err){
    alert("Error"+err)
  }

}