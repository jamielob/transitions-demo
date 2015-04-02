if (Meteor.isClient) {
  
  Session.setDefault('dynamicTemplate', 'test1' );

  Router.configure({layoutTemplate: 'layout'});
  Router.route('/', { name: 'page1' });
  Router.route('/page2', { name: 'page2' });

  //Transitions.layout = 'custom-layout';
  //Transitions.container = '.custom-container';
  //Transitions.content = '.custom-content';
  Transitions.transitionOut = 'fadeOut'
  Transitions.transitionIn = 'fadeIn'

  Template.page2.events({
  	'click .toggleTest': function () {
  		if (Session.get('dynamicTemplate') === 'test2') {
  			Session.set('dynamicTemplate', 'test1' );
  		} else {
  			Session.set('dynamicTemplate', 'test2' );
  		}
  	}
  });

  Template.page2.helpers({
  	dynamicTemplate: function () {
  		return Session.get('dynamicTemplate');
  	}
  });


}

