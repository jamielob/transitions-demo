if (Meteor.isClient) {
  
  Router.configure({layoutTemplate: 'layout'});
  Router.route('/', { name: 'page1' });
  Router.route('/page2', { name: 'page2' });

}

