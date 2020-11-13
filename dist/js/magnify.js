define(['jquery'],function($){
    function mag(){
            $("#small")
              .mouseenter(function () {
                $("#mark,#big").show();
              })
              .mouseleave(function () {
                $("#mark,#big").hide();
              })
              .mousemove(function(ev){
                var l = ev.pageX - $(this).offset().left - 100;
                l = Math.max(0, l);
                l = Math.min(l, 417);
                var t = ev.pageY - $(this).offset().top - 100;
                t = Math.max(0, t);
                t = Math.min(t, 293);
                $("#mark").css({
                  left: l,
                  top: t
                })
                $("#big img").css({
                  left: -2 * l,
                  top: -2 * t
                })
              })
             
    }
    function tab(){
       var oImg = $('.Fotorama__div').find('div img')
       var oImg_1=$('#small img')
       var oImg_2=$('#big img')
       oImg.attr('class','bor')
       oImg.on('mouseenter',function(){
      
         var iNow= $(this).attr('src')
         oImg_1.attr('src',iNow)
         oImg_2.attr('src',iNow)
       })
    }
    function tav(){
      var  oDiv = $('.Fotorama__div')
        var p=$('.Fotorama__div p')
        p.eq(0).click(function(){
          oDiv.animate({left:-164 },200)
        })
        p.eq(1).click(function(){
          oDiv.animate({left:0 },200)
        })
    }
    return{
        mag,
        tab,
        tav

    }
})