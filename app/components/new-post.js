import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow(){
      this.set('addNewPost', true);
    },

    savePost(){
      const params = {
        title: this.get('title'),
        content: this.get('content'),
        type: this.get('type')
      };
      console.log(params);
      this.set('addNewPost', false);
      this.sendAction('savePost', params);
    }
  }
});
