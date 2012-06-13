colors = require('colors')
XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
class Ditaa
  constructor:()->
    @url = "http://ditaa.org/ditaa/render?grid="
    @startTag = '++Ditaa++'
    @endTag = '--Ditaa--'

  load:(glog) ->
    glog.registerPostArticleHook (articles, cb) =>
      @processArticles articles, (modified) ->
        cb null, modified

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
      tag.coded = @encode(a[tag.top..tag.bottom].join('\n'))
      tag.url = @makeURL tag.coded
      a[(tag.top - 1)..(tag.bottom + 1)] = @makeAnchor tag.url, 'image', false
      article.body = a.join '\n'


  getImage:(url, cb)->
    xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () ->
      if @readyState is 4
        cb @responseText
    xhr.open "GET", url
    xhr.send()

  makeURL:(coded, cb)->
    url = @url + coded
    cb url if cb?
    return url
  
  encode:(what, cb)->
    coded = encodeURIComponent(what)
    cb coded if cb?
    return coded

  makeAnchor:(url, alt, markdown, cb)->
    if markdown
      tag = "![" + alt + "](" + url + ")"
    else
      tag = '<img src="' + url + '" alt="' + alt + '">'
    cb tag if cb?
    return tag




module.exports = new Ditaa()
