import Ember from 'ember';

export default Ember.Component.extend({
  contentShowing: false,
  actions: {
    contentShow: function(){
      this.set('contentShowing', true);
    },
    contentHide: function(){
      this.set('contentShowing', false);
    },

    update(post, params){
      this.sendAction('update', post, params);
    },

    delete(post){
      if(confirm("delete this post?")){
        this.sendAction('destroyPost', post);
      }
    }
  }
});
