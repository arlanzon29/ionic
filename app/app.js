import {App, IonicApp, Platform} from 'ionic-angular';
import {HelloIonicPage} from './pages/hello-ionic/hello-ionic';
import {ListPage} from './pages/list/list';
import {InterlocutoresPage} from './pages/interlocutores/interlocutores';
import {ConfiguracionPage} from './pages/configuracion/configuracion';
import {ArticulosListaPage} from './pages/articulos/lista/articulosLista';
import {PedidosListaPage} from './pages/pedidos/lista/pedidosLista';

import {MaestrosServices} from './pages/services/MaestrosServices';

@App({
  templateUrl: 'build/app.html',
  providers:[MaestrosServices],
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
class MyApp {
  static get parameters() {
    return [[IonicApp], [Platform],[MaestrosServices]];
  }
  

  constructor(app, platform,maestros) {
    // set up our app
    this.app = app;
    this.platform = platform;
    this.maestros=maestros;

    this.maestros.readDataBase();
    
    this.initializeApp();

    

    // set our app's pages
    this.pages = [
      { title: 'Bienvenida', component: HelloIonicPage },
      { title: 'Lista Tutorial', component: ListPage },
      { title:'Interlocutores',component:InterlocutoresPage},
      { title:'Artículos',component:ArticulosListaPage},
      { title:'Pedidos',component:PedidosListaPage},
      { title:'Configuración',component:ConfiguracionPage}

    ];

    // make HelloIonicPage the root (or first) page
    this.rootPage = HelloIonicPage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // The platform is now ready. Note: if this callback fails to fire, follow
      // the Troubleshooting guide for a number of possible solutions:
      //
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //
      // First, let's hide the keyboard accessory bar (only works natively) since
      // that's a better default:
      //
      //
      // For example, we might change the StatusBar color. This one below is
      // good for light backgrounds and dark text;
      if (window.StatusBar) {
        window.StatusBar.styleDefault();
      }
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.app.getComponent('leftMenu').close();
    // navigate to the new page if it is not the current page
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
}
