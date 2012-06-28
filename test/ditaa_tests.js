var ditaa = require('../lib/ditaa'),
assert = require('assert'),
exec = require('child_process').exec;
var testDitaa = '     +--------+\n     | c897   |\n          |  Text  |\n               |Document|\n                    |     {d}|\n                         +---+----+';
describe('ditaa', function() {

  it('should find ditaa tags in article 2', function(done){
    var articles = require('./test_articles');
    ditaa.ditaaIn(articles[1], function(well){
      assert.equal(well, true);
      done();
    });
  });
  it('shouldnt find ditaa tags in article 1', function(done){
    var articles = require('./test_articles');
    ditaa.ditaaIn(articles[0], function(well){
      assert.equal(well, false);
      done();
    });
  });
  it('should URI encode data within tags', function(done){
    ditaa.encode('    ', function(encoded){
      assert.equal(encoded, '%20%20%20%20');
      done();
    });
  });
  it('should prepare ditaa tag urls', function(done){
    ditaa.encode('    ', function(encoded){
      ditaa.makeURL(encoded, function(url){
        assert.equal(url, 'http://ditaa.org/ditaa/render?grid=%20%20%20%20');
        done();
      });
    });
  });
  it('should make anchor tag for html', function(done){
    ditaa.makeAnchor('http://www.gravatar.com/avatar/a45bb5be65f2d59d813697825cb48194.png', 'gravatar', false, function(tag){
      assert.equal(tag, '<img src="http://www.gravatar.com/avatar/a45bb5be65f2d59d813697825cb48194.png" alt="gravatar">');
      done();
    });
  });
  it('should make anchor tag for markdown', function(done){
    ditaa.makeAnchor('http://www.gravatar.com/avatar/a45bb5be65f2d59d813697825cb48194.png', 'gravatar', true, function(tag){
      assert.equal(tag, '![gravatar](http://www.gravatar.com/avatar/a45bb5be65f2d59d813697825cb48194.png)');
      done();
    });
  });
  it('should load read articles and find ditaa tags', function(done) {
    var articles = require('./test_articles');
    ditaa.processArticles(articles, function(artic) {
      assert.equal(artic.length, 2);
      assert.equal(typeof(artic[1].body), 'string');
      done();
    });
  });
});
