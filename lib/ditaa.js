(function() {
  var Ditaa, XMLHttpRequest, colors;

  colors = require('colors');

  XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

  Ditaa = (function() {

    function Ditaa() {
      this.url = "http://ditaa.org/ditaa/render?grid=";
      this.startTag = '++Ditaa++';
      this.endTag = '--Ditaa--';
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

    Ditaa.prototype.ditaaIn = function(article, cb) {
      var a, line, _i, _len;
      console.log('Searching this article, ' + article.title);
      a = article.body.split('\n');
      for (_i = 0, _len = a.length; _i < _len; _i++) {
        line = a[_i];
        if ((line.indexOf(this.startTag)) !== -1) {
          if (cb != null) cb(true);
          return true;
        }
      }
      if (cb != null) cb(false);
      return false;
    };

    Ditaa.prototype.processArticle = function(article) {
      var a, i, line, section, tag, tag_sections, _i, _len, _len2, _results;
      a = article.body.split('\n');
      tag_sections = [];
      section = {};
      for (i = 0, _len = a.length; i < _len; i++) {
        line = a[i];
        if ((line.indexOf(this.startTag)) !== -1) {
          section.top = i + 1;
        } else if ((line.indexOf(this.endTag)) !== -1) {
          section.bottom = i - 1;
          tag_sections.push(section);
          section = {};
        }
      }
      _results = [];
      for (_i = 0, _len2 = tag_sections.length; _i < _len2; _i++) {
        tag = tag_sections[_i];
        tag.coded = this.encode(a.slice(tag.top, tag.bottom + 1 || 9e9).join('\n'));
        _results.push(tag.url = this.makeURL(tag.coded));
      }
      return _results;
    };

    Ditaa.prototype.getImage = function(url, cb) {
      var xhr;
      xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (this.readyState === 4) return cb(this.responseText);
      };
      xhr.open("GET", url);
      return xhr.send();
    };

    Ditaa.prototype.makeURL = function(coded, cb) {
      var url;
      url = this.url + coded;
      if (cb != null) cb(url);
      return url;
    };

    Ditaa.prototype.encode = function(what, cb) {
      var coded;
      coded = encodeURIComponent(what);
      if (cb != null) cb(coded);
      return coded;
    };

    return Ditaa;

  })();

  module.exports = new Ditaa();

}).call(this);
