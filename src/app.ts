import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router: Router;
  
  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' },
      { route: 'child-router', name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' },
      { route: 'hello', name: 'hello', moduleId: 'hello', nav: true, title: 'Hello' },
      { route: 'custom', name: 'custom', moduleId: 'custom', nav: true, title: 'Custom' },
      { route: 'map', name: 'map', moduleId: 'map', nav: true, title: 'Map' }
    ]);

    this.router = router;
  }
}
