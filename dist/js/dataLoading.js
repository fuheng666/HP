define(['jquery','jquery-cookie'],function($){
    function data1(){
        console.log('data加载成功')
        $.ajax({
            type: 'get',
            url: "../json/data.json",
            success: function(arr){
                  console.log(arr)
            },
            error: function(msg){
              console.log(msg);
            }
          })
    }
    return{
        data1
    }
})