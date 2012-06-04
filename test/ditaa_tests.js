var ditaa = require('../lib/ditaa'),
assert = require('assert'),
exec = require('child_process').exec;
articles = require('./test_articles');
describe('ditaa', function() {

  it('should load read articles and find ditaa tags', function(done) {
    ditaa.processArticles(articles, function(artic) {
      assert.equal(artic.length, 2);
      done();
    });
  });
  it('should find ditaa tags in article 2', function(done){
    ditaa.ditaaIn(articles[1], function(well){
      assert.equal(well, true);
      done();
    });
  });
  it('shouldnt find ditaa tags in article 1', function(done){
    ditaa.ditaaIn(articles[0], function(well){
      assert.equal(well, false);
      done();
    });
  });
});
