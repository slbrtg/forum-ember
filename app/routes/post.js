import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
    update(post, params){
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined){
          post.set(key, params[key]);
        }
      });
      post.save();
      this.transitionTo('index')
    },

    destroyPost(post){
      post.destroyRecord();
      this.transitionTo('index');
    },

    saveComment(params){
      console.log("route actions begin");
      const newComment = this.store.createRecord('comment', params);
      console.log("line 26");
      const post = params.post;
      console.log("line 28");
      post.get('comments').addObject(newComment);
      console.log("line 30");
      newComment.save().then(function(){
        return post.save();
      });
      console.log("route actions end");
      this.transitionTo('post', post);

    }
  }
});
