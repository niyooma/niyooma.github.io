var author = 'LeonMa';

var p_title = '在侧边栏随机显示电影台词';

var p_time = '2014年8月13日';

var p_url = 'articles/p010.html';

var p_exp = '一直想让本小博每次进来时都会显示一些新东西，于是鼓捣了半天，做了一个随机显示经典电影台词的js代码，在侧边栏显示。根据自己的兴趣，内容使用了豆瓣网友整理的周星驰经典台词。实现的效果还不错，如下图...';

﻿﻿document.writeln('<div class="post" id="post">');
document.writeln('<h2><div class="time">' + author + ' | ' + p_time + ' </div>');
document.writeln('<a href="' + p_url + '" rel="bookmark">' + p_title + '</a></h2>');
document.writeln('<p> '+ p_exp +' </p>');
document.writeln('<p align="right"><a class=read-more href="'+ p_url +'">阅读全文>></a></p>');
document.writeln('<div class="meta"></div>');
document.writeln('</div>');
