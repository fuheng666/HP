//一个模块实现一个块的功能
define(["parabola", "jquery", "jquery-cookie"], function(parabola, $){
  function download(){

    sc_num();
    sc_msg();

    $.ajax({
      type: 'get',
      url: "../data/data.json",
      success: function(arr){
        var str = ``;
        for(var i = 0; i < arr.length; i++){
          str += `<li class="goods_item">
          <div class="goods_pic">
              <img src="${arr[i].img}" alt="">
          </div>
          <div class="goods_title">
              <p>【京东超市】奥利奥软点小草莓0</p>
          </div>
          <div class="sc">
              <div id="${arr[i].id}" class="sc_btn">加入购物车</div>
          </div>
      </li>`;
        }

        $(".goods_box ul").html(str);
      },
      error: function(msg){
        console.log(msg);
      }
    })
  }

  //给购物车添加点击操作
  function sc_btnClick(){
    
    $(".goods_box ul").on("click", '.sc_btn', function(){
      
      var id = this.id;
      //1、判断是否第一次添加
      var first = $.cookie("goods") === null ? true : false;
      if(first){
        var cookieArr = [{id:id, num: 1}];
        $.cookie("goods", JSON.stringify(cookieArr), {
          expires: 7
        })
      }else{
        var cookieArr = JSON.parse($.cookie("goods"));
        var same = false; //假设没有添加过
        for(var i = 0; i < cookieArr.length; i++){
          if(cookieArr[i].id == id){
            same = true;
            cookieArr[i].num++;
            break;
          }
        }

        if(!same){
          var obj = {id: id, num: 1};
          cookieArr.push(obj);
        }

        $.cookie("goods", JSON.stringify(cookieArr), {
          expires: 7
        })
      }
      // alert($.cookie("goods"));
      var that =this
      sc_num();
      sc_msg();
    })
  }

  //计算购物车商品的数量
  function sc_num(){
    var cookieStr = $.cookie("goods");
    var sum = 0;
    if(cookieStr){
      var cookieArr = JSON.parse(cookieStr);
      for(var i = 0; i < cookieArr.length; i++){
        sum += cookieArr[i].num;
      }
    }
    $(".sc_right .sc_num").html(sum);
  }
  function sc_msg(){
    $(".sc_right ul").empty();
    $.ajax({
      type: "get",
      url:'../data/data.json',
      success:function(arr){
        var cookieStr = $.cookie("goods");
        var newArr = [];
        if(cookieStr){
          var cookieArr = JSON.parse(cookieStr);
          for(var i = 0; i < arr.length; i++){
            for(var j = 0; j < cookieArr.length; j++){
              if(arr[i].id == cookieArr[j].id){
                //将数据添加上述
                arr[i].num = cookieArr[j].num;
                newArr.push(arr[i]);
                break;
              }
            }
          }
          
          //将找出来的数据，在右侧购物车的部分加载出来
          for(var i = 0; i < newArr.length; i++){
            var node = $(`<li id="${newArr[i].id}">
              <div class="sc_goodsPic">
                  <img src="${newArr[i].img}" alt="">
              </div>
              <div class="sc_goodsTitle">
                  <p>这是商品曲奇饼干</p>
              </div>
              <div class="sc_goodsBtn">购买</div>
              <div class="delete_goodsBtn">删除</div>
              <div class="sc_goodsNum">
                  <div>
                      <button>+</button>
                      <button>-</button>
                      <span>商品数量：${newArr[i].num}</span>
                  </div>
              </div>
          </li> `);
            node.appendTo($(".sc_right ul"));
          }
        }
      },
      error:function(msg){
        console.log(msg)
      }
    })
  }
  //移入移出
  function Mouseout(){
    $('.sc_right').mouseenter(function(){
      $(this).stop(true).animate({right:0})
    }).mouseleave(function(){
      $(this).stop(true).animate({right:-270})
    })
  }
  //清空购物车
  function Remove(){
    $("#clearBtn").click(function(){
			$.cookie("goods", null);
			sc_num();
			sc_msg();
      })
  }
  //点击+ -
  function Clicked(){
    //删除
    $('.sc_right ul').on('click','.delete_goodsBtn',function(){
      var id=$(this).closest('li').remove().attr('id');
      var cookieArr=JSON.parse($.cookie('goods'));
      var index = cookieArr.findIndex(item => item.id == id);
      cookieArr.splice(index, 1);
      cookieArr.length === 0 ? $.cookie("goods", null) : $.cookie("goods", JSON.stringify(cookieArr), {
                  expires: 7
             })
      sc_num()
    })
    //加减
    $('.sc_right ul').on('click',".sc_goodsNum button",function(){
      var id = $(this).closest('li').attr('id')
      var cookieArr = JSON.parse($.cookie('goods'));
      var index = cookieArr.findIndex(item => item.id == id);
      if(this.innerHTML == '+'){
        cookieArr[index].num++;
      }else{
        cookieArr[index].num == 1? alert('数量为1，不能减少'): cookieArr[index].num--;	
      }
      $(this).siblings('span').html(`商品数量：${cookieArr[index].num}`)

      $.cookie('goods',JSON.stringify(cookieArr),{
        expires: 7
      })
      sc_num();
    })
  }
 
    return {
      download,
      sc_btnClick,
      Remove,
      Mouseout,
      Clicked
    }
})
