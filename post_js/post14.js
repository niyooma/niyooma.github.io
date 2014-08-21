var author = 'LeonMa';

var p_title = '静态博客正式上线';

var p_time = '2014年8月21日';

var p_url = 'articles/p014.html';

var p_exp = '看到许多介绍用gituhub的pages功能搭建静态博客。作为编程小白，注册了github账号后，首先试用了simple创建了第一个静态博客。感谢github！<img  src="http://ww4.sinaimg.cn/mw690/005GofyIgw1ejk0d4d5rjj308w08wdfv.jpg" /></br>simple可以直接在github的页面上发表文章,很是简单方便。用了几天，发现...';

﻿﻿document.writeln('<div class="post" id="post">');
document.writeln('<h2><div class="time">' + author + ' | ' + p_time + ' </div>');
document.writeln('<a href="' + p_url + '" rel="bookmark">' + p_title + '</a></h2>');
document.writeln('<p> '+ p_exp +' </p>');
document.writeln('<p align="right"><a class=read-more href="'+ p_url +'">阅读全文>></a></p>');
document.writeln('<div class="meta"></div>');
document.writeln('</div>');
