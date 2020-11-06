define(['jquery'],function(){
        console.log('nav加载成功')
        var triangle=$('.triangle')
        var divList=$('.divList')
        var a=$('.level0')
        function pull(){
            console.log(a)
           a.on('mouseenter',function(){
               var a =$(this).index()
               divList.eq(a).css('display','flex')
               triangle.eq(a).css('display','block')
           })
           divList.on('mouseenter',function(){
            var a =$(this).index()
            divList.eq(a).css('display','flex')
            triangle.eq(a).css('display','block')
        })
        
        divList.on('mouseleave',function(){
            var a =$(this).index()
            divList.eq(a).css('display','none')
            triangle.eq(a).css('display','none')
        })
        a.on('mouseleave',function(){
            var a =$(this).index()
            divList.eq(a).css('display','none')
            triangle.eq(a).css('display','none')
        })
        }
      
        console.log(divList)
        return{
            pull
        }
})