(function() {
  var Ditaa;

  Ditaa = (function() {

    function Ditaa() {
      this.url = "http://ditaa.org/ditaa/";
    }

    Ditaa.prototype.load = function(glog) {
      var _this = this;
      return glog.registerArticleHook(function(articles, cb) {
        _this.processArticles(articles);
        return cb(null, articles);
      });
    };

    Ditaa.prototype.processArticles = function(articles, cb) {
      var article, _i, _len;
      for (_i = 0, _len = articles.length; _i < _len; _i++) {
        article = articles[_i];
        if (this.ditaaIn(article)) {
          console.log('Ditaa tags found in ' + article.title);
          this.processArticle(article);
        }
      }
      if (cb != null) return cb(articles);
    };

    Ditaa.prototype.ditaaIn = function(article) {
      console.log('Searching this article, ' + article.title);
      return true;
    };

    Ditaa.prototype.processArticle = function(article) {
      return console.log('Doing something useful with ' + article.title);
    };

    return Ditaa;

  })();

  module.exports = new Ditaa();

}).call(this);
