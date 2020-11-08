define(['jquery','jquery-cookie'],function($){
    function data1(){
      
        $.ajax({
            type: 'get',
            url:"../data/data.json",
            success: function(arr){
                
                  // 0
                  var str=``
                  var str1=``
                  var str2=``
                  var str3=``
                  var str4=``
                  var str5=``
                  var str6=``
                  var str7=``
                  var str8=``
                    for(let i=0;i<=3;i++){
                     
                        str+=`
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
                                  <li>${arr[i].描述5}</li>
                                 
                                </ul>
                                <main>
                                
                                  11月5日-11月6日，购机赠包鼠套装，限时抢购，数量有限，售完即止，不与其他优惠同享！                            
                                </main>
                            </div>
                            <section>
                                  <p class="p0">￥ <del>${arr[i].价格6}</del>
                                  </p>
                                  <p class="p1">￥ ${arr[i].价格6}
                                  </p>
                                  <p class="p2">${arr[i].折扣}</p>
                                  <p class="p3">
                                    日常销售价4059，抢购价3599                                            </p>
                                  <p class="p4"><img src="https://media.hpstore.cn/static/version1604434391/frontend/HPOLS/default/zh_Hans_CN/images/product/available.svg" alt=""></p>
                                  <button title="添加到购物车"><span>添加到购物车</span></button>
                                  <p class="p5">比较<input type="checkbox" name="" id=""></p>
                            </section>
                      </div>
                  </li> `
                  $(".conList ul").eq(0).find('.ul1').eq(0).html(str);
                }
                // 1
                for(let j=1;j<=4;j++){
                  
                  str1+=`
                  <li class="li-2">
                <div class="idv"><span class="s1">${arr[j].关键词.trim()=='热销'?'热销':''}</span><span class='s2'>${arr[j].关键词.trim()=='新品'?'新品':''}</span ></div>
                <div class="idv1"><img src="${arr[j].图片}" alt=""></div>
                <div class="idv2">
                      <div>
                          <p>
                          ${arr[j].标题}</p>
                          <ul>
                            <li>${arr[j].描述}</li>
                            <li>${arr[j].描述2}</li>
                            <li>${arr[j].描述3}</li>
                            <li>${arr[j].描述4}</li>
                            <li>${arr[j].描述5}</li>
                           
                          </ul>
                          <main>
                          
                            11月5日-11月6日，购机赠包鼠套装，限时抢购，数量有限，售完即止，不与其他优惠同享！                            
                          </main>
                      </div>
                      <section>
                            <p class="p0">￥ <del>${arr[j].价格6}</del>
                            </p>
                            <p class="p1">￥ ${arr[j].价格6}
                            </p>
                            <p class="p2">${arr[j].折扣}</p>
                            <p class="p3">
                              日常销售价4059，抢购价3599                                            </p>
                            <p class="p4"><img src="https://media.hpstore.cn/static/version1604434391/frontend/HPOLS/default/zh_Hans_CN/images/product/available.svg" alt=""></p>
                            <button title="添加到购物车"><span>添加到购物车</span></button>
                            <p class="p5">比较<input type="checkbox" name="" id=""></p>
                      </section>
                </div>
            </li> `
            $(".conList .ul1").eq(1).html(str1);
          }
          //2
          for(let j=4;j<=7;j++){
                  
            str2+=`
            <li class="li-2">
          <div class="idv"><span class="s1">${arr[j].关键词.trim()=='热销'?'热销':''}</span><span class='s2'>${arr[j].关键词.trim()=='新品'?'新品':''}</span ></div>
          <div class="idv1"><img src="${arr[j].图片}" alt=""></div>
          <div class="idv2">
                <div>
                    <p>
                    ${arr[j].标题}</p>
                    <ul>
                      <li>${arr[j].描述}</li>
                      <li>${arr[j].描述2}</li>
                      <li>${arr[j].描述3}</li>
                      <li>${arr[j].描述4}</li>
                      <li>${arr[j].描述5}</li>
                     
                    </ul>
                    <main>
                    
                      11月5日-11月6日，购机赠包鼠套装，限时抢购，数量有限，售完即止，不与其他优惠同享！                            
                    </main>
                </div>
                <section>
                      <p class="p0">￥ <del>${arr[j].价格6}</del>
                      </p>
                      <p class="p1">￥ ${arr[j].价格6}
                      </p>
                      <p class="p2">${arr[j].折扣}</p>
                      <p class="p3">
                        日常销售价4059，抢购价3599                                            </p>
                      <p class="p4"><img src="https://media.hpstore.cn/static/version1604434391/frontend/HPOLS/default/zh_Hans_CN/images/product/available.svg" alt=""></p>
                      <button title="添加到购物车"><span>添加到购物车</span></button>
                      <p class="p5">比较<input type="checkbox" name="" id=""></p>
                </section>
          </div>
      </li> `
      $(".conList .ul1").eq(2).html(str2);
    }
    //3
    for(let j=8;j<=11;j++){
                  
      str3+=`
      <li class="li-2">
    <div class="idv"><span class="s1">${arr[j].关键词.trim()=='热销'?'热销':''}</span><span class='s2'>${arr[j].关键词.trim()=='新品'?'新品':''}</span ></div>
    <div class="idv1"><img src="${arr[j].图片}" alt=""></div>
    <div class="idv2">
          <div>
              <p>
              ${arr[j].标题}</p>
              <ul>
                <li>${arr[j].描述}</li>
                <li>${arr[j].描述2}</li>
                <li>${arr[j].描述3}</li>
                <li>${arr[j].描述4}</li>
                <li>${arr[j].描述5}</li>
               
              </ul>
              <main>
              
                11月5日-11月6日，购机赠包鼠套装，限时抢购，数量有限，售完即止，不与其他优惠同享！                            
              </main>
          </div>
          <section>
                <p class="p0">￥ <del>${arr[j].价格6}</del>
                </p>
                <p class="p1">￥ ${arr[j].价格6}
                </p>
                <p class="p2">${arr[j].折扣}</p>
                <p class="p3">
                  日常销售价4059，抢购价3599                                            </p>
                <p class="p4"><img src="https://media.hpstore.cn/static/version1604434391/frontend/HPOLS/default/zh_Hans_CN/images/product/available.svg" alt=""></p>
                <button title="添加到购物车"><span>添加到购物车</span></button>
                <p class="p5">比较<input type="checkbox" name="" id=""></p>
          </section>
    </div>
</li> `
$(".conList .ul1").eq(3).html(str3);
}
  //4
  for(let j=12;j<=15;j++){
                  
    str4+=`
    <li class="li-2">
  <div class="idv"><span class="s1">${arr[j].关键词.trim()=='热销'?'热销':''}</span><span class='s2'>${arr[j].关键词.trim()=='新品'?'新品':''}</span ></div>
  <div class="idv1"><img src="${arr[j].图片}" alt=""></div>
  <div class="idv2">
        <div>
            <p>
            ${arr[j].标题}</p>
            <ul>
              <li>${arr[j].描述}</li>
              <li>${arr[j].描述2}</li>
              <li>${arr[j].描述3}</li>
              <li>${arr[j].描述4}</li>
              <li>${arr[j].描述5}</li>
             
            </ul>
            <main>
            
              11月5日-11月6日，购机赠包鼠套装，限时抢购，数量有限，售完即止，不与其他优惠同享！                            
            </main>
        </div>
        <section>
              <p class="p0">￥ <del>${arr[j].价格6}</del>
              </p>
              <p class="p1">￥ ${arr[j].价格6}
              </p>
              <p class="p2">${arr[j].折扣}</p>
              <p class="p3">
                日常销售价4059，抢购价3599                                            </p>
              <p class="p4"><img src="https://media.hpstore.cn/static/version1604434391/frontend/HPOLS/default/zh_Hans_CN/images/product/available.svg" alt=""></p>
              <button title="添加到购物车"><span>添加到购物车</span></button>
              <p class="p5">比较<input type="checkbox" name="" id=""></p>
        </section>
  </div>
</li> `
$(".conList .ul1").eq(4).html(str4);
}
//5
for(let j=16;j<=19;j++){
                  
  str5+=`
  <li class="li-2">
<div class="idv"><span class="s1">${arr[j].关键词.trim()=='热销'?'热销':''}</span><span class='s2'>${arr[j].关键词.trim()=='新品'?'新品':''}</span ></div>
<div class="idv1"><img src="${arr[j].图片}" alt=""></div>
<div class="idv2">
      <div>
          <p>
          ${arr[j].标题}</p>
          <ul>
            <li>${arr[j].描述}</li>
            <li>${arr[j].描述2}</li>
            <li>${arr[j].描述3}</li>
            <li>${arr[j].描述4}</li>
            <li>${arr[j].描述5}</li>
           
          </ul>
          <main>
          
            11月5日-11月6日，购机赠包鼠套装，限时抢购，数量有限，售完即止，不与其他优惠同享！                            
          </main>
      </div>
      <section>
            <p class="p0">￥ <del>${arr[j].价格6}</del>
            </p>
            <p class="p1">￥ ${arr[j].价格6}
            </p>
            <p class="p2">${arr[j].折扣}</p>
            <p class="p3">
              日常销售价4059，抢购价3599                                            </p>
            <p class="p4"><img src="https://media.hpstore.cn/static/version1604434391/frontend/HPOLS/default/zh_Hans_CN/images/product/available.svg" alt=""></p>
            <button title="添加到购物车"><span>添加到购物车</span></button>
            <p class="p5">比较<input type="checkbox" name="" id=""></p>
      </section>
</div>
</li> `
$(".conList .ul1").eq(5).html(str5);
}
    //6     
    for(let j=20;j<=23;j++){
                  
      str6+=`
      <li class="li-2">
    <div class="idv"><span class="s1">${arr[j].关键词.trim()=='热销'?'热销':''}</span><span class='s2'>${arr[j].关键词.trim()=='新品'?'新品':''}</span ></div>
    <div class="idv1"><img src="${arr[j].图片}" alt=""></div>
    <div class="idv2">
          <div>
              <p>
              ${arr[j].标题}</p>
              <ul>
                <li>${arr[j].描述}</li>
                <li>${arr[j].描述2}</li>
                <li>${arr[j].描述3}</li>
                <li>${arr[j].描述4}</li>
                <li>${arr[j].描述5}</li>
               
              </ul>
              <main>
              
                11月5日-11月6日，购机赠包鼠套装，限时抢购，数量有限，售完即止，不与其他优惠同享！                            
              </main>
          </div>
          <section>
                <p class="p0">￥ <del>${arr[j].价格6}</del>
                </p>
                <p class="p1">￥ ${arr[j].价格6}
                </p>
                <p class="p2">${arr[j].折扣}</p>
                <p class="p3">
                  日常销售价4059，抢购价3599                                            </p>
                <p class="p4"><img src="https://media.hpstore.cn/static/version1604434391/frontend/HPOLS/default/zh_Hans_CN/images/product/available.svg" alt=""></p>
                <button title="添加到购物车"><span>添加到购物车</span></button>
                <p class="p5">比较<input type="checkbox" name="" id=""></p>
          </section>
    </div>
    </li> `
    $(".conList .ul1").eq(6).html(str6);
    }    
//7
for(let j=24;j<=27;j++){
                  
  str7+=`
  <li class="li-2">
<div class="idv"><span class="s1">${arr[j].关键词.trim()=='热销'?'热销':''}</span><span class='s2'>${arr[j].关键词.trim()=='新品'?'新品':''}</span ></div>
<div class="idv1"><img src="${arr[j].图片}" alt=""></div>
<div class="idv2">
      <div>
          <p>
          ${arr[j].标题}</p>
          <ul>
            <li>${arr[j].描述}</li>
            <li>${arr[j].描述2}</li>
            <li>${arr[j].描述3}</li>
            <li>${arr[j].描述4}</li>
            <li>${arr[j].描述5}</li>
           
          </ul>
          <main>
          
            11月5日-11月6日，购机赠包鼠套装，限时抢购，数量有限，售完即止，不与其他优惠同享！                            
          </main>
      </div>
      <section>
            <p class="p0">￥ <del>${arr[j].价格6}</del>
            </p>
            <p class="p1">￥ ${arr[j].价格6}
            </p>
            <p class="p2">${arr[j].折扣}</p>
            <p class="p3">
              日常销售价4059，抢购价3599                                            </p>
            <p class="p4"><img src="https://media.hpstore.cn/static/version1604434391/frontend/HPOLS/default/zh_Hans_CN/images/product/available.svg" alt=""></p>
            <button title="添加到购物车"><span>添加到购物车</span></button>
            <p class="p5">比较<input type="checkbox" name="" id=""></p>
      </section>
</div>
</li> `
$(".conList .ul1").eq(7).html(str7);
}   
//8 
for(let j=28;j<=31;j++){
                  
  str8+=`
  <li class="li-2">
<div class="idv"><span class="s1">${arr[j].关键词.trim()=='热销'?'热销':''}</span><span class='s2'>${arr[j].关键词.trim()=='新品'?'新品':''}</span ></div>
<div class="idv1"><img src="${arr[j].图片}" alt=""></div>
<div class="idv2">
      <div>
          <p>
          ${arr[j].标题}</p>
          <ul>
            <li>${arr[j].描述}</li>
            <li>${arr[j].描述2}</li>
            <li>${arr[j].描述3}</li>
            <li>${arr[j].描述4}</li>
            <li>${arr[j].描述5}</li>
           
          </ul>
          <main>
          
            11月5日-11月6日，购机赠包鼠套装，限时抢购，数量有限，售完即止，不与其他优惠同享！                            
          </main>
      </div>
      <section>
            <p class="p0">￥ <del>${arr[j].价格6}</del>
            </p>
            <p class="p1">￥ ${arr[j].价格6}
            </p>
            <p class="p2">${arr[j].折扣}</p>
            <p class="p3">
              日常销售价4059，抢购价3599                                            </p>
            <p class="p4"><img src="https://media.hpstore.cn/static/version1604434391/frontend/HPOLS/default/zh_Hans_CN/images/product/available.svg" alt=""></p>
            <button title="添加到购物车"><span>添加到购物车</span></button>
            <p class="p5">比较<input type="checkbox" name="" id=""></p>
      </section>
</div>
</li> `
$(".conList .ul1").eq(8).html(str8);
}   
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