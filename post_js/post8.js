var author = 'LeonMa';

var p_title = '问禅师之码农版';

var p_time = '2014年8月9日';

var p_url = 'articles/p008.html';

var p_exp = '小码农问禅师：“新写好的程序莫名抽风，烦，怎么办？” 禅师不说什么，只是让他拿起茶杯，又提壶往里倒沸水，直到溢出。小码农被烫得松手，大叫：“烫烫烫烫烫烫！” 沉默片刻后，小码农恍然：“我忘了初始化变量了';

﻿﻿document.writeln('<div class="post" id="post">');
document.writeln('<h2><div class="time">' + author + ' | ' + p_time + ' </div>');
document.writeln('<a href="' + p_url + '" rel="bookmark">' + p_title + '</a></h2>');
document.writeln('<p> '+ p_exp +' </p>');
document.writeln('<p align="right"><a class=read-more href="'+ p_url +'">阅读全文>></a></p>');
document.writeln('<div class="meta"></div>');
document.writeln('</div>');
