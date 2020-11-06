define(['jquery'],function(){
        console.log('nav加载成功')
        var triangle=$('.triangle')
        var divList=$('.divList')
        var a=$('#ui-id-1').find('li').find('a')
        function pull(){
            console.log(a)
           a.click(function(){
               console.log('我点击了')
           })
        }
        return{
            pull
        }
})