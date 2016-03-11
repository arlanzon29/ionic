import {Page} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/configuracion/configuracion.html'
})
export class ConfiguracionPage {

	iniciar(){
		this.interlocutores=[{'CardCode':'C001','CardName':'Casple','LicTradNum':'13000000','CardFName':'Casple',
            'OCPR':[{'Name':'Jose Manuel','FirstName':'Jose Manuel','LastName':'','Tel1':'947483890','Tel2':'','Cellolar':'','EMail':'casple@capsle.es'},
                  {'Name':'Rosa','FirstName':'Rosa','LastName':'','Tel1':'947483890','Tel2':'','Cellolar':'','EMail':''}],
            'CRD1':[{'Adress':'Dir. Facturacion','Street':'Calle Alcalde','Block':'Sin numero','City':'Burgos','ZipCode':'09007','County':'Burgos','AdresType':'B'},
            {'Adress':'Dir. Envio','Street':'Calle Alcalde','Block':'Sin numero','City':'Burgos','ZipCode':'09007','County':'Burgos','AdresType':'S'}]},
           						{'CardCode':'C002','CardName':'Ima1','LicTradNum':'13000001','CardFName':'Ima1','OCPR':[],'CRD1':[]},
           						{'CardCode':'C003','CardName':'Greenland','LicTradNum':'13000002','CardFName':'Greenland','OCPR':[],'CRD1':[]}
           						]
    	window.localStorage.setItem("interlocutores",JSON.stringify(this.interlocutores));  
    	alert("Tablas Iniciadas")

	}

}
