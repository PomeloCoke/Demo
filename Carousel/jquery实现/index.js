$(function(){
  //自动匹配窗口宽度
  var $width = $(window).width();//获取窗口宽度
  $(".slider-pics img").width($width);
  $(".slider-circle").width($width);
  var $height = $(window).height();//获取窗口高度
  $(".slider-pics img").height($height);
  $(".slider-circle").height($height);
  //轮播图切换效果函数
  function play(preIndex,currentIndex){
      $('.slider-pics').eq(preIndex).fadeOut(500)
      .parent().children().eq(currentIndex).fadeIn(1000);
      $('.slider-item').removeClass('slider-item-selected');//移除背景为白色的类
      $('.slider-item').eq(currentIndex).addClass('slider-item-selected');
  }
      //切换函数
  var currentIndex = 0;
  var length = $('.slider-pics').length;
      //向前切换
  function pre(){
      var preIndex = currentIndex;
      currentIndex = (--currentIndex + length) % length;
      play(preIndex,currentIndex);
  }
      //向后切换
  function next(){
      var preIndex = currentIndex;
      currentIndex = ++currentIndex % length;
      play(preIndex,currentIndex);
  }
      //自动定时切换
  var interval,hasStarted = false;
  function start(){
      if(!hasStarted){
          hasStarted = true;
          interval = setInterval(next,3000);
      }
  }
      //停止自动切换
  function stop(){
      clearInterval(interval);
      hasStarted = false;
  }

  start();
  //绑定事件调用轮播图函数
  $('.slider-pics:not(:first)').hide();//隐藏除第一张以外的其他图片
  $('.slider-item:first').addClass('slider-item-selected');//第一张图片对应的圆点增加类
  $('.slider-button').hide();//两侧按钮隐藏
  $('.slider-pics,.slider-pre,.slider-next').hover(function(){//当鼠标划到图片或两侧按钮处时执行
      stop();
      $(".slider-button").show();
  },function(){
      $(".slider-button").hide();
      start();
  });
  $('.slider-item').hover(function(){
      stop();
      var preIndex = $(".slider-item").filter(".slider-item-selected").index();
      currentIndex = $(this).index();
      play(preIndex,currentIndex);
  },function(){
      start();
  });
  $('.slider-pre').on('click',function(){
      pre();
  });
  $('.slider-next').on('click',function(){
      next();
  });
})