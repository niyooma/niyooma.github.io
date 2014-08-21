var author = 'LeonMa';

var p_title = '一直进步的小胖妞';

var p_time = '2014年08月02日';

var p_url = 'articles/p005.html';

var p_exp = '小胖妞最近学会的新技能：学鸟飞、用小马桶、吃苹果、爬、坐木马还有喊爸爸';

﻿﻿document.writeln('<div class="post" id="post">');
document.writeln('<h2><div class="time">' + author + ' | ' + p_time + ' </div>');
document.writeln('<a href="' + p_url + '" rel="bookmark">' + p_title + '</a></h2>');
document.writeln('<p> '+ p_exp +' </p>');
document.writeln('<p align="right"><a class=read-more href="'+ p_url +'">阅读全文>></a></p>');
document.writeln('<div class="meta"></div>');
document.writeln('</div>');