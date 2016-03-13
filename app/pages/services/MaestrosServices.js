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
 
    getMaestros(password) {

       // var url = 'http://api.themoviedb.org/3/search/movie?query=&query=' + encodeURI(movieName) + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';

        var id="AKfycbyZ5r-qCxhY3rSavWHBxx2MZ56VeRAcdXHsmGqQQTSe3YSgIktA"
        var url="https://script.google.com/macros/s/"+id+"/exec?user=manager&password="+password;
        return this.http.get(url).map(res => res.json());
        
    }
}