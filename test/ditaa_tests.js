var ditaa = require('../lib/ditaa'),
assert = require('assert'),
exec = require('child_process').exec;
articles = require('./test_articles');
var testDitaa = '     +--------+\n     | c897   |\n          |  Text  |\n               |Document|\n                    |     {d}|\n                         +---+----+';
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
  it('should make a http get request on appropriate url', function(done){
    ditaa.encode(testDitaa, function(encoded){
      ditaa.makeURL(encoded, function(url){
        ditaa.getImage(url, function(bytes){
          console.info(bytes);
          assert.notEqual(bytes, undefined);
          done();
        });
      });
    });
  });
});
