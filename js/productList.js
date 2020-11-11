/*
  配置要引入的模块的路径 jquery也遵从AMD规范
*/
require.config({
    paths: {
      jquery: "jquery-1.11.3",
      "jquery-cookie": "jquery.cookie",
      parabola: "parabola",
      trade:'trade',
      banner: "banner",
      nav:'nav',
      productListLoad:'productListLoad'
    },
    //jquery-cookie 是依赖于jquery开发
    shim: {
      //设置依赖关系
      "jquery-cookie": ["jquery"],
      //parabola 不遵从AMD规范
      parabola: {
        exports: "_",
      },
    },
  });
  
  
  /*
    好处：模块和模块之间的关系清晰，所以的代码的，其中一个模块有问题，其他代码不受影响。
  */
  require(['trade','nav','productListLoad'], function(trade,nav,productListLoad){

    nav.pull();
    productListLoad.tab()
    trade.download(),
    trade.sc_btnClick()
    trade. Remove()
    trade.Mouseout()
    trade. Clicked()
  })
  