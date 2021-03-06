import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      posts: this.store.findAll('post'),
      comments: this.store.findAll('comment')
    });
  },

  actions: {
    savePost(params){
      const newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    },
  }
});
