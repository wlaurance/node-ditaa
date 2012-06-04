

exports.load = function(glog){
  glog.registerArticleHook(function(articles, cb) {
    for(var i = 0; i < articles.length; i++){
      console.log("Eventually do stuff");
    }
    cb(null, articles);
  });
}
