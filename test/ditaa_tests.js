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
});
