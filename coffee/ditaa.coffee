colors = require('colors')
class Ditaa
  constructor:()->
    @url = "http://ditaa.org/ditaa/"
    @startTag = '++Ditaa++'
    @endTag = '--Ditaa--'

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

  ditaaIn:(article, cb)->
    console.log 'Searching this article, ' + article.title
    a = article.body.split('\n')
    for line in a
      if (line.indexOf @startTag) isnt -1
        cb true if cb?
        return true
    cb false if cb?
    return false

    return true
  processArticle:(article)->
    console.log 'Doing something useful with ' + article.title

module.exports = new Ditaa()
