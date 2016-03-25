import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {HTTP_PROVIDERS} from 'angular2/http'
import {provide} from 'angular2/core'
import {ROUTER_PROVIDERS} from 'angular2/router';
import {LocationStrategy, Location, HashLocationStrategy } from 'angular2/router';
import {GlobalMap} from './services/global.service';

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy}) ]
  );
