module.exports = [{"title":"Title changed by plugin","author":"Glog","date":"2012-05-25T04:00:00.000Z","date_str":"Friday, 25 May, 2012","year":2012,"month":"05","body":"<p>I enjoy writing CoffeeScript because it is clean and quick. Indented\nsyntax in general makes me happier to write code. Some programmers\ncannot stand this dialect of programming languages, but I feel this is\ndue to their lack of understanding of whitespace characters and the\nissues that may arise from this misunderstanding. \n\n</p>\n<p>CoffeeScript&#39;s syntax is superb, but the outputted JavaScript is even\nbetter. Wrapping everything in an anonymous protects the global variable\nspace from being polluted with your shitty code, and localizes the\ndamage. Object oriented programming is strenuous in JavaScript.\nPrototyping === too much work. Classes are much easier to build because we\ncan just use keywords like &#39;class&#39;, &#39;@&#39;, &#39;extends&#39;, &#39;super&#39; etc. In the\nend all of this is compiled to prototyped class in JavaScript, but the\nimportant part is we did not have to write it. \n\n</p>\n<p><a href=\"http://en.wikipedia.org/wiki/Static_type#Static_typing\">Static typed languages</a> \nprovide a &#39;sense&#39; of security because types are checked during compile time \nrather than runtime. My professor, Dr. Robert Noonan (Professor of programming languages),\n at the College of William &amp; Mary once said it is nice to know that an airplane&#39;s software will not\nhiccup due to a type conversion error or bad type coercion because (to\nhis knowledge) all plane software is written in ALGOL, Ada or another\nstrongly typed static language. This phenomenon could explain the\npopularity of dynamic languages in other areas where possible code\nerrors could never result in death, like the web, mobile platforms, etc. \n\n</p>\n<p>As you probably know JavaScript is <strong>not a static typed language</strong>. Thus\nI would happily freak out if the pilot announced they have upgraded\ntheir auto pilot software to run on the latest version of JavaScript. \n(First of all, that doesn&#39;t make much sense. Second <img src=\"http://distilleryimage3.instagram.com/023be5c0a69c11e1a39b1231381b7ba1_7.jpg\" alt=\"It&#39;s MuthaFuckin\nJavaScript\">\n)\nJoking aside, there are ways to reduce the chances of type errors and\ntype coercion in JavaScript.\n\n</p>\n<p>`      var j = 1;\n      var p = &#39;1&#39;;\n      p == j //true\n      p != j //false\n\n</p>\n<pre><code>  p === j //false\n  p !== j //true</code></pre>\n<p>`\nOr the equivalent CoffeeScript\n\n</p>\n<p><code>     j = 1\n      p = &#39;1&#39;\n      p is j // p === j -&gt; false\n      p isnt j // p !== j -&gt; true\n</code>\n\n</p>\n<p>CoffeeScript will not let us even write the type coercive boolean\noperators != and ==. This is another great way CoffeeScript is making\nour JavaScript better. Although type coercion can be a bitch to debug,\nI would rather it not change my types.\n\n</p>\n<p>Bottom line, CoffeeScript let&#39;s you write better JavaScript faster. You\ncan learn more at <a href=\"http://coffeescript.org/\">CoffeeScript.org</a>\n</p>\n","url":"2012/05/What-I-love-about-CoffeeScript"},
{"title":"Title changed by plugin","author":"wlaurance","date":"2012-05-24T04:00:00.000Z","date_str":"Thursday, 24 May, 2012","year":2012,"month":"05","body":"<p>My name is Will Laurance and I am a software developer. I have worked on\nmany interesting projects such as Mobile Ordering Apps, Rails apps like\n<a href=\"http://www.osprey-watch.org\">http://www.osprey-watch.org</a> and my old blog. I enjoy coding in all\nlanguages, however my main focus is javascript and coffeescript.\nOutside of coding, I enjoy riding dirt bikes, gardening, and reading\ninteresting books. I also contribute to open source projects and create\nnode modules and other interesting things on github. <a href=\"https://github.com/wlaurance\">Fork me here</a>!\n</p>\n","url":"2012/05/Introduction"}
]

