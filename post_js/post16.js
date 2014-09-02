var author = 'LeonMa';

var p_title = '如何用grub24dos引导wubi安装的ubuntu';

var p_time = '2014年9月1日';

var p_url = 'articles/p016.html';

var p_exp = ' <strong>一、背景</strong><br />出于尝鲜，使用wubi安装的方式在电脑上安装了ubuntu 10.04，在常用软件、字体设置等折腾得差不多顺手时，发现wps linux版和百度云的linux客户端bcloud等软件无法在ubuntu 10.04下安装，因此想安装ubuntu12.04。</p><p>在安装ubuntu12.04时发现要先卸载ubuntu 10.04才能继续，不想之前的折腾就这么丢失，因此思考着怎么能使多个wubi安装的ubuntu并存。之前用grub4dos成功引导过wubi安装的ubuntu9.04，套用老办法来引导ubuntu 10.04，却怎么也不成功，可能是从ubuntu10.04开始采用grub2引导的缘故把，无奈，只能另寻他法...</p>';

﻿﻿document.writeln('<div class="post" id="post">');
document.writeln('<h2><div class="time">' + author + ' | ' + p_time + ' </div>');
document.writeln('<a href="' + p_url + '" rel="bookmark">' + p_title + '</a></h2>');
document.writeln('<p> '+ p_exp +' </p>');
document.writeln('<p align="right"><a class=read-more href="'+ p_url +'">阅读全文>></a></p>');
document.writeln('<div class="meta"></div>');
document.writeln('</div>');
