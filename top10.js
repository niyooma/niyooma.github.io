  var post_cnt =14;
  ﻿var post_disp_num=post_cnt-10; //首页显示最近6篇文章
  for (var i=post_cnt;i>post_disp_num;i--)
  {     
   document.write('<script src="post_js/post' +  i  + '.js" type="text/javascript" charset="utf-8"></script>');
 }

