var author = 'LeonMa';

var p_title = '用声音充电?';

var p_time = '2014年8月15日';

var p_url = 'articles/p012.html';

var p_exp = '英国玛丽皇后学院及诺基亚的科学家最近利用类似技术，成功以声波令由氧化锌组成的纳米物料受压，从而发电。假以时日，人们有望一边“煲电话粥”，一边为手机充电。 科学家将液态氧化锌涂在胶片上，胶片然后被放在混合化学物中，并加热至摄氏90度，氧化锌就会形成一排纳米棒。然后将纳米棒夹在两块电力接触片，纳米棒经声波震动就能产生电力...';

﻿﻿document.writeln('<div class="post" id="post">');
document.writeln('<h2><div class="time">' + author + ' | ' + p_time + ' </div>');
document.writeln('<a href="' + p_url + '" rel="bookmark">' + p_title + '</a></h2>');
document.writeln('<p> '+ p_exp +' </p>');
document.writeln('<p align="right"><a class=read-more href="'+ p_url +'">阅读全文>></a></p>');
document.writeln('<div class="meta"></div>');
document.writeln('</div>');
