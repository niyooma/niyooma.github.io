var author = 'LeonMa';

var p_title = '写实的热门电视剧们';

var p_time = '2014年08月07日';

var p_url = 'articles/p007.html';

var p_exp = '现在各大卫视播放的电视剧太写实了，如果按情节发展的顺序来排列，分别是：<br />《深圳合租记》<br />《约会专家》<br />《别逼我结婚》<br />《首付》<br />《二胎》<br />《产科医生》<br />《离婚律师》<p>这直接就是系列剧吧</p>';

﻿﻿document.writeln('<div class="post" id="post">');
document.writeln('<h2><div class="time">' + author + ' | ' + p_time + ' </div>');
document.writeln('<a href="' + p_url + '" rel="bookmark">' + p_title + '</a></h2>');
document.writeln('<p> '+ p_exp +' </p>');
document.writeln('<p align="right"><a class=read-more href="'+ p_url +'">阅读全文>></a></p>');
document.writeln('<div class="meta"></div>');
document.writeln('</div>');
