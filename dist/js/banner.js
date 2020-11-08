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
  function SImg(){
      var Img = $('.SDiv ul').find('li')
      var SList=$('.SDiv ol').find('li')
      var Indow=1
      var Dow=0
      var timer =null
      SList.on('click',function(){
        Indow = $(this).index()
      })
      SList.mouseenter(function(){
        clearInterval(timer)
      }).mouseleave(function(){
        timer=setInterval(() => {
          Indow++;
          Dow++;
          
          if(Indow>3 && Dow>2){
            Indow=1
            Dow=0
          }
          Img.stop(true).animate({opacity:'0'}).eq(Dow).animate({opacity:'1'})
          SList.stop(true).animate({opacity:'.6'}).eq(Dow).animate({opacity:'1'})
          Img.css('z-index','').eq(Dow).css('z-index',Indow)
        }, 3000);
  
      })
      clearInterval(timer)
      timer=setInterval(() => {
        Indow++;
        Dow++;
        
        if(Indow>3 && Dow>2){
          Indow=1
          Dow=0
        }
        Img.stop(true).animate({opacity:'0'}).eq(Dow).animate({opacity:'1'})
        SList.stop(true).animate({opacity:'.6'}).eq(Dow).animate({opacity:'1'})
        Img.css('z-index','').eq(Dow).css('z-index',Indow)
      }, 3000);

      Img.mouseenter(function(){
        clearInterval(timer)
      }).mouseleave(function(){
        timer=setInterval(() => {
          Indow++;
          Dow++;
          
          if(Indow>3 && Dow>2){
            Indow=1
            Dow=0
          }
          Img.stop(true).animate({opacity:'0'}).eq(Dow).animate({opacity:'1'})
          SList.stop(true).animate({opacity:'.6'}).eq(Dow).animate({opacity:'1'})
          Img.css('z-index','').eq(Dow).css('z-index',Indow)
        }, 3000);
      })
  }
  return {
    banner,
    SImg
  }
})
