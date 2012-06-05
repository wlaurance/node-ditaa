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

  processArticle:(article)->
    a = article.body.split '\n'
    tag_sections = []
    section = {}
    for line,i in a
      if (line.indexOf @startTag) isnt -1
        section.top = i+1
      else if (line.indexOf @endTag) isnt -1
        section.bottom = i - 1
        tag_sections.push section
        section = {}
    for tag in tag_sections
      console.log a[tag.top..tag.bottom].join('\n')

module.exports = new Ditaa()
