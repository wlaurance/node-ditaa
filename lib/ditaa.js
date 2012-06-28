(function() {
  var Ditaa;

  Ditaa = (function() {

    function Ditaa() {
      this.url = "http://ditaa.org/ditaa/render?grid=";
      this.startTag = '++Ditaa++';
      this.endTag = '--Ditaa--';
    }

    Ditaa.prototype.load = function(glog) {
      var _this = this;
      return glog.registerPreArticleHook(function(articles, cb) {
        return _this.processArticles(articles, function(modified) {
          return cb(null, modified);
        });
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
      var a, i, line, section, tag, tag_sections, _i, _len, _len2, _ref, _ref2, _results;
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
        tag.url = this.makeURL(tag.coded);
        [].splice.apply(a, [(_ref = tag.top - 1), (tag.bottom + 1) - _ref + 1].concat(_ref2 = this.makeAnchor(tag.url, 'image', false))), _ref2;
        _results.push(article.body = a.join('\n'));
      }
      return _results;
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

    Ditaa.prototype.makeAnchor = function(url, alt, markdown, cb) {
      var tag;
      if (markdown) {
        tag = "![" + alt + "](" + url + ")";
      } else {
        tag = '<img src="' + url + '" alt="' + alt + '">';
      }
      if (cb != null) cb(tag);
      return tag;
    };

    return Ditaa;

  })();

  module.exports = new Ditaa();

}).call(this);
