var author = 'LeonMa';

var p_title = '效率最低的联系方式';

var p_time = '2014年08月17日';

var p_url = 'articles/p013.html';

var p_exp = '今儿个被叫到单位加班，向近30个单位以传真的方式收集文件。各种费力悲催，忙到现在还有几家单位的没有收齐。大喊一声：传真，效率最低的联系方式非你莫属了!';

﻿﻿document.writeln('<div class="post" id="post">');
document.writeln('<h2><div class="time">' + author + ' | ' + p_time + ' </div>');
document.writeln('<a href="' + p_url + '" rel="bookmark">' + p_title + '</a></h2>');
document.writeln('<p> '+ p_exp +' </p>');
document.writeln('<p align="right"><a class=read-more href="'+ p_url +'">阅读全文>></a></p>');
document.writeln('<div class="meta"></div>');
document.writeln('</div>');
