var author = 'LeonMa';

var p_title = '所谓藏头诗';

var p_time = '2014年8月14日';

var p_url = 'articles/p011.html';

var p_exp = '悟识途<br />作者：电脑-李白<br />识人皆是武皇前，<br />途经百国皆莫识。<br />马度秦关雪正深，<br />网轩凉吹动轻衣。';

﻿﻿document.writeln('<div class="post" id="post">');
document.writeln('<h2><div class="time">' + author + ' | ' + p_time + ' </div>');
document.writeln('<a href="' + p_url + '" rel="bookmark">' + p_title + '</a></h2>');
document.writeln('<p> '+ p_exp +' </p>');
document.writeln('<p align="right"><a class=read-more href="'+ p_url +'">阅读全文>></a></p>');
document.writeln('<div class="meta"></div>');
document.writeln('</div>');
