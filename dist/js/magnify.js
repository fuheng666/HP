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
                var l = ev.clientX - $(this).offset().left - 100;
                l = Math.max(0, l);
                l = Math.min(l, 417);
                var t = ev.clientY - $(this).offset().top - 100;
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
    return{
        mag
    }
})