define(["parabola", "jquery", "jquery-cookie"], function(parabola, $){
    
        function tab(){
            $('.buy-ico').click(function(){
                $('.buy').css('display','block')
            })
           $('.sp-btn').click(function(){
            $('.buy').css('display','none')
           })
        }
        function download(){
  
            sc_num();
            sc_msg();
        
            $.ajax({
              type: 'get',
              url: "../data/datalist.json",
              success: function(arr){
              for(var i=0;i<arr.length;i++){
                  var node=$(`
                        <tbody>
                        <tr>
                          <td>
                            <a href="">
                              <img
                                src="${arr[i].图片}"
                                alt=""
                              />
                            </a>
                            <div class="product-item-details">
                              <strong class="product-item-name">
                                <a
                                ${arr[i].标题}
                                >
                                <br />
                                <span class="sku">商品编号： 1N928PA</span>
                              </strong>
                              <div class="promotion-message">
                                日常销售价${arr[i].价格5}，抢购价${arr[i].价格}
                              </div>
      
                              <div class="promotion-message-secondly">
                                11月10日-11月12日，购机赠包鼠套装，限时抢购，数量有限，售完即止，不与其他优惠同享！
                              </div>
      
                              <span class="delivery-info" style="display: none"
                                >交货需要2-5个工作日</span
                              >
                              <span class="error"></span>
                            </div>
                          </td>
                          <td class="col qty" data-th="数量">
                            <div
                              class="field qty"
                              data-is-quote="0"
                              data-quote-qty="0"
                            >
                              <label
                                class="label"
                                for="cart-1556165-qty"
                                style="display: none"
                              >
                                <span>数量</span>
                              </label>
                              <div class="control qty">
                                <input
                                  id="cart-1556165-qty"
                                  name="cart[1556165][qty]"
                                  data-cart-item-id="1N928PA"
                                  value="1"
                                  type="number"
                                  size="4"
                                  title="数量"
                                  class="cart-item-qty-input input-text qty validate-max-qty"
                                  maxlength="12"
                                  data-validate="{required:true,'validate-greater-than-zero':true}"
                                  data-role="cart-item-qty"
                                />
                                <div
                                  generated="true"
                                  class="mage-error"
                                  style="display: none"
                                >
                                  产品库存不足
                                </div>
                              </div>
                              <div class="control qty-actions" data-max-qty="50">
                                <span class="plus">+</span>
                                <span class="minus">-</span>
                              </div>
                            </div>
                          </td>
                          <td class="col subtotal fudiv" data-th="小计">
                            <div>
                              <label>小计</label>
                              <span class="price-excluding-tax" data-label="不含税">
                                <span class="cart-price">
                                  <span class="original-price" style="display: none"
                                    ><span class="price">￥&nbsp;3599</span></span
                                  >
                                  <span class="price">￥&nbsp;3599</span>
                                </span>
                              </span>
                            </div>
                          </td>
                          <td class="fu-td">
                            <div class="actions-toolbar">
                              <a
                                href="#"
                                title="移除商品"
                                class="action action-delete"
                                data-post='{"action":"https:\/\/www.hpstore.cn\/checkout\/cart\/delete\/","data":{"id":"1556359","uenc":"aHR0cHM6Ly93d3cuaHBzdG9yZS5jbi9jaGVja291dC9jYXJ0Lw,,"}}'
                              >
                                <span> × </span>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr class="deliver-tr">
                          <td colspan="100" class="blank-line">&nbsp;</td>
                        </tr>
                      </tbody>
                        `)
                //   node.appendTo($("#F-table"));
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
                var cookieArr = [{id:id, num: 0}];
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
            $('#F-sp').html(`￥${sum}`)
          }
          function sc_msg(){
            $("#F-table").empty();
            $(".buy-ul").empty();
            $.ajax({
              type: "get",
              url:'../data/datalist.json',
              success:function(arr){
                var cookieStr = $.cookie("goods");
                var newArr = [];
                var sum=0
                var Nm=0
                if(cookieStr){
                  var cookieArr = JSON.parse(cookieStr);
                  var newArr=[]
                  for(var i=0;i<cookieArr.length;i++){
                      for(var j=0;j<arr.length;j++){
                          if(cookieArr[i].id==j){
                            arr[j].action = cookieArr[i].num;
                            arr[j].action6 = cookieArr[i].id;
                              newArr.push(arr[j])
                          }
                      }
                
                      sum+=parseInt((newArr[i].价格.slice(1))*(newArr[i].action))
                      Nm+=parseInt(newArr[i].action)
                      $('#F-sp').html(`￥${sum}`)
                      $('#F-num').html(Nm)
                      $('#F-sp1').html(Nm)
                      $('.summary-sp2').html(`￥${sum}`)
                      
                  }
                  //将找出来的数据，在右侧购物车的部分加载出来
                  for(var i = 0; i < newArr.length; i++){
                    oum=parseInt()
                    var node = $(`
                  <tbody id='${newArr[i].action6}'>
                  <tr>
                    <td>
                      <a href=""  class="Fu-a">
                        <img
                          src="${ newArr[i].图片}"
                          alt=""
                        />
                      </a>
                      <div class="product-item-details">
                        <strong class="product-item-name">
                          <a
                          >
                          ${newArr[i].标题}
                          <br />
                          <span class="sku">商品编号： 1N92${i}PA</span>
                        </strong>
                        <div class="promotion-message">
                          日常销售价${newArr[i].价格5}，抢购价${newArr[i].价格}
                        </div>

                        <div class="promotion-message-secondly">
                          11月10日-11月12日，购机赠包鼠套装，限时抢购，数量有限，售完即止，不与其他优惠同享！
                        </div>

                        <span class="delivery-info" style="display: none"
                          >交货需要2-5个工作日</span
                        >
                        <span class="error"></span>
                      </div>
                    </td>
                    <td class="col qty" data-th="数量">
                      <div
                        class="field qty"
                        data-is-quote="0"
                        data-quote-qty="0"
                      >
                        <label
                          class="label"
                          for="cart-1556165-qty"
                          style="display: none"
                        >
                          <span>数量</span>
                        </label>
                        <div class="control qty">
                          <input
                          
                           
                            value="${newArr[i].action}"
                            type="number"
                            size="4"
                            title="数量"
                            class="cart-item-qty-input input-text qty validate-max-qty"
                            maxlength="12"
                            data-validate="{required:true,'validate-greater-than-zero':true}"
                            data-role="cart-item-qty"
                          />
                          <div
                            generated="true"
                            class="mage-error"
                            style="display: none"
                          >
                            产品库存不足
                          </div>
                        </div>
                        <div class="control qty-actions" data-max-qty="50">
                          <span class="plus">+</span>
                          <span class="minus">-</span>
                        </div>
                      </div>
                    </td>
                    <td class="col subtotal fudiv" data-th="小计">
                      <div>
                        <label>小计</label>
                        <span class="price-excluding-tax" data-label="不含税">
                          <span class="cart-price">
                            <span class="original-price" style="display: none"
                              ><span class="price">￥&nbsp;</span></span
                            >
                            <span class="price">￥&nbsp;${(newArr[i].价格.slice(1))*(newArr[i].action)}</span>
                          </span>
                        </span>
                      </div>
                    </td>
                    <td class="fu-td">
                      <div class="actions-toolbar">
                        <a
                          href="#"
                          title="移除商品"
                          class="action action-delete"
                          data-post='{"action":"https:\/\/www.hpstore.cn\/checkout\/cart\/delete\/","data":{"id":"1556359","uenc":"aHR0cHM6Ly93d3cuaHBzdG9yZS5jbi9jaGVja291dC9jYXJ0Lw,,"}}'
                        >
                          <span  class='delete_goodsBtn'> × </span>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr class="deliver-tr">
                    <td colspan="100" class="blank-line">&nbsp;</td>
                  </tr>
                </tbody>
                  ` 
                  );
                    node.appendTo($("#F-table"));
                  }
                  for(var i = 0; i < newArr.length; i++){
                    var node = $(` <li style="margin-bottom: 10px;" id='${i}'>
                    <img src="${ newArr[i].图片}" alt="" style="width: 75px;">
                    <div>
                      <a href="" >${newArr[i].标题} </a>
                      <p style="float: left;">
                          <span style="display: inline-block;margin-top: 7px;">${newArr[i].价格}</span>
                          <div style="float: right;">
                            <div style="float: right; width: auto;">
                              <input type="number" maxlength="12" value="${newArr[i].action}" >
                            <i class="iconfont">&#xe608;
                            </i>
                            <i class="iconfont delete_goodsBtn" >&#xe658;
                            </i>
                            </div>
                          </div>
                      </p>
                    </div>
                  </li>`);
                    node.appendTo($(".buy-ul"));
                  }
                }else{
              
                    $('#F-sp').html('￥0')
                    $('#F-num').html('0')
                    $('#F-sp1').html('')
                    $('.summary-sp2').html('￥0')
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
            $(".cart-a1").click(function(){
                    $.cookie("goods", null);
                    sc_num();
                    sc_msg();
              })
          }
          function Clacked(){
            //删除
            $('.buy-ul').on('click','.delete_goodsBtn',function(){
            
              var id=$(this).closest('li').remove().attr('id');
              var cookieArr=JSON.parse($.cookie('goods'));
              var index = cookieArr.findIndex(item => item.id == id);
              cookieArr.splice(index, 1);
              cookieArr.length === 0 ? $.cookie("goods", null) : $.cookie("goods", JSON.stringify(cookieArr), {
                          expires: 7
                     })
              
                     sc_num();
                     sc_msg();
            })
        }
          //点击+ -
          function Clicked(){
            //删除
            $('#F-table').on('click','.delete_goodsBtn',function(){
              var id=$(this).closest('tbody').remove().attr('id');
              console.log(id)
              var cookieArr=JSON.parse($.cookie('goods'));
              var index = cookieArr.findIndex(item => item.id == id);
              cookieArr.splice(index, 1);
              console.log( cookieArr)
              cookieArr.length === 0 ? $.cookie("goods", null) : $.cookie("goods", JSON.stringify(cookieArr), {
                          expires: 7
                     })
                     
                     sc_num();
                     sc_msg();
            })

           
            //加减
            $('#F-table').on('click',".control span",function(){
              var id = $(this).closest('tbody').attr('id')
              var cookieArr = JSON.parse($.cookie('goods'));
              
              var index = cookieArr.findIndex(item => item.id == id);
              if(this.innerHTML == '+'){
                cookieArr[index].num++;
              }else{
                cookieArr[index].num == 1? alert('减锤子呢？'): cookieArr[index].num--;	
              }
              $(this).closest('div').prev('div').find('input').val(cookieArr[index].num)
        
              $.cookie('goods',JSON.stringify(cookieArr),{
                expires: 7
              })
              sc_num();
              sc_msg();
            })
          }
            return {
              download,
              sc_btnClick,
              Remove,
              Mouseout,
              Clicked,
              tab,
              Clacked
 
                     }           
})
