(﻿function main(){
  ﻿var post_cnt=14;  //当前最新文章编号
  ﻿var post_disp_num=post_cnt-6; //首页显示最近6篇文章
  for (var i=post_cnt;i>post_disp_num;i--)
  {     
   document.write('<script src="post_js/post' +  i  + '.js" type="text/javascript" charset="utf-8"></script>');
 }
}
)();
