
class Ditaa
  constructor:()->
    @url = "http://ditaa.org/ditaa/"

  load:(glog) ->
    glog.registerArticleHook (articles, cb) =>
      @processArticles articles
      cb null, articles

  processArticles:(articles, cb)->
    for article in articles
      if @ditaaIn article
        console.log 'Ditaa tags found in ' + article.title
        @processArticle article
    cb articles if cb?
      
  ditaaIn:(article)->
    console.log 'Searching this article, ' + article.title
    return true
  processArticle:(article)->
    console.log 'Doing something useful with ' + article.title

module.exports = new Ditaa()
