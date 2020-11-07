define(['jquery'], function($){
  function banner(){
    $(function () {
      var aBtns = $(".bannerList").find("ul li");
      var oUl = $(".play").find("ul");
      var left=$('#FLeft')
      var right=$('#FRight')

      var play=$('#play')
      var oLi = $(".play").find("ul li");
      var img = $(".play").find("ul li img");

      var iNow = 1;
      var timer = null;
      var w= $(window).width()
      clearInterval(timer);
      console.log(w)
    left.click(function(){
     if(iNow>0){
      iNow--;
     }
     if(iNow==0){
        iNow=11
     }
     tab();
    })
    right.click(function(){
    if(iNow<=11){
      iNow++;
    }
    tab();
    })
      $(".play").mouseenter(function () {
        clearInterval(timer);
        left.css('display','block')
        right.css('display','block')
      });

      $(".play").mouseleave(function () {
        left.css('display','none')
        right.css('display','none')
        //轮播
        timer = setInterval(function () {
          iNow++;
          tab();
        }, 8000);
      });

      aBtns.click(function () {
        iNow = $(this).index()+1
        tab();
      });

      //轮播
      timer = setInterval(function () {
        iNow++;
        tab();
      }, 8000);

      function tab() {
        aBtns.attr("id",'').eq(iNow-1).attr("id",'after');

        if (iNow == 12) {
          aBtns.attr("id",'').eq(0).attr("id",'after');
        }

        oUl.stop(true).animate(
          {
            left: iNow * -1903,
          },
          2000,
          function () {
            //判断是否是最后一张图片
            if (iNow === 12) {
              iNow = 1;
              oUl.css("left", -1903);
            }
          }
        );
      }
      
    });
   
  }
  return {
    banner
  }
})
