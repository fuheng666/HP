define(['jquery'],function($){
    
        function tab(){
            $('.buy-ico').click(function(){
                $('.buy').css('display','block')
            })
           $('.sp-btn').click(function(){
            $('.buy').css('display','none')
           })
        }
        return{
            tab
        }
})
