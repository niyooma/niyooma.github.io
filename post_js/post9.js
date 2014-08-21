var author = 'LeonMa';

var p_title = '默哀';

var p_time = '2014年8月10日';

var p_url = 'articles/p009.html';

var p_exp = '愿逝者安息，望生者坚强.<a href="http://sigtuma.com/wp-content/uploads/2014/08/IMG_0253.jpg"><img class="alignnone size-full" src="http://sigtuma.com/wp-content/uploads/2014/08/IMG_0253.jpg" alt="IMG_0253.JPG" /></a>';

﻿﻿document.writeln('<div class="post" id="post">');
document.writeln('<h2><div class="time">' + author + ' | ' + p_time + ' </div>');
document.writeln('<a href="' + p_url + '" rel="bookmark">' + p_title + '</a></h2>');
document.writeln('<p> '+ p_exp +' </p>');
document.writeln('<p align="right"><a class=read-more href="'+ p_url +'">阅读全文>></a></p>');
document.writeln('<div class="meta"></div>');
document.writeln('</div>');
