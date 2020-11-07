define(['jquery'],function(){

        var triangle=$('.triangle')
        var divList=$('.divList')
        var li=$('.divList').find('ul li')
        var a=$('.level0')
        var sp=$('.level0').find('a span')
    
        function pull(){
         
           a.on('mouseenter',function(){
               var a =$(this).index()
               divList.css('display','none').eq(a).css('display','flex')
               triangle.css('display','none').eq(a).css('display','block')
               sp.eq(a).css('color','#0199d5')
           }).on('mouseleave',function(){
                sp.css('color','')
           })
           
                divList.on('mouseenter',function(){
                    divList.eq(a).css('display','block')
                    triangle.eq(a).css('display','block')
                }).on('mouseleave',function(){
                    divList.css('display','none')
                    triangle.css('display','none')
                })

        }
        return{
            pull
        }
})