import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow(){
      this.set('addNewComment', true);
    },

    saveComment(){
      const params = {
        username: this.get('username'),
        content: this.get('content'),
        post: this.get('post')
      };
      this.set('addNewComment', false);
      console.log("component actions completed");
      this.sendAction('saveComment', params);
    }
  }
});
