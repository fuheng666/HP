//一个模块实现一个块的功能
define(["parabola", "jquery", "jquery-cookie"], function(parabola, $){
    function download(){
  
      sc_num();
      sc_msg();
  
      $.ajax({
        type: 'get',
        url: "../data/datalist.json",
        success: function(arr){
        for(var i=0;i<arr.length;i++){
            var node=$(`
            <li class="li-2">
                      <div class="idv"><span class="s1">${arr[i].关键词.trim()=='热销'?'热销':''}</span><span class='s2'>${arr[i].关键词.trim()=='新品'?'新品':''}</span ></div>
                      <div class="idv1"><img src="${arr[i].图片}" alt=""></div>
                      <div class="idv2">
                            <div>
                                <p>
                                ${arr[i].标题}</p>
                                <ul>
                                  <li>${arr[i].描述}</li>
                                  <li>${arr[i].描述2}</li>
                                  <li>${arr[i].描述3}</li>
                                  <li>${arr[i].描述4}</li>
                                </ul>
                                <main>
                                
                                  11月5日-11月6日，购机赠包鼠套装，限时抢购，数量有限，售完即止，不与其他优惠同享！                            
                                </main>
                            </div>
                            <section>
                                  <p class="p0"> <del>${arr[i].价格5}</del>
                                  </p>
                                  <p class="p1"> ${arr[i].价格}
                                  </p>
                                  <p class="p2">${arr[i].折扣}</p>
                                  <p class="p3">
                                    日常销售价4059，抢购价3599                                            </p>
                                  <p class="p4"><img src="https://media.hpstore.cn/static/version1604434391/frontend/HPOLS/default/zh_Hans_CN/images/product/available.svg" alt=""></p>
                                  <button title="添加到购物车" class='sc_btn' id='${i}'><span>添加到购物车</span></button>
                                  <p class="p5">比较<input type="checkbox" name="" id=""></p>
                            </section>
                      </div>
                  </li>
            `)
            node.appendTo($("#Fol"));
        }
        },
        error: function(msg){
          console.log(msg);
        }
      })
    }
  
    //给购物车添加点击操作
    function sc_btnClick(){
      
      $("#Fol").on("click", '.sc_btn', function(){
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
        url:'../data/datalist.json',
        success:function(arr){
          var cookieStr = $.cookie("goods");
          var newArr = [];
          var sum=0
          if(cookieStr){
            var cookieArr = JSON.parse(cookieStr);
            var newArr=[]
            for(var i=0;i<cookieArr.length;i++){
                for(var j=0;j<arr.length;j++){
                    if(cookieArr[i].id==j){
                        newArr.push(arr[j])
                    }
                }
                sum+=parseInt(newArr[i].价格.slice(1))
                console.log(sum)
                $('#F-sp').html(`￥${sum}`)
            }
            $(".buy-ul").find("li").remove();
            //将找出来的数据，在右侧购物车的部分加载出来
            for(var i = 0; i < newArr.length; i++){
              var node = $(` <li style="margin-bottom: 10px;">
              <img src="${ newArr[i].图片}" alt="" style="width: 75px;">
              <div>
                <a href="" >${newArr[i].标题} </a>
                <p style="float: left;">
                    <span style="display: inline-block;margin-top: 7px;">${newArr[i].价格}</span>
                    <div style="float: right;">
                      <div style="float: right; width: auto;">
                        <input type="number" maxlength="12" value="1" >
                      <i class="iconfont">&#xe608;
                      </i>
                      <i class="iconfont" >&#xe658;
                      </i>
                      </div>
                    </div>
                </p>
              </div>
            </li>`);
              node.appendTo($(".buy-ul"));
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
  