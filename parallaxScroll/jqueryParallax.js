// 错视效果
jQuery(document).ready(function() {
  $(window).scroll(function(e) {
parallaxScroll();
  });
})
function parallaxScroll() {
  var scrolled = $(window).scrollTop();
  //数字越大，滚动速度越快；
  $('#title').css('top',(30 - (scrolled*1.1*0.03)) + '%');
  $('#bg-1').css('top',(0 - (scrolled*1)) + 'px');
  $('#bg-2').css('top',(0 - (scrolled*0.9)) + 'px');
  $('#bg-3').css('top',(0 - (scrolled*0.82)) + 'px');
  $('#bg-4').css('top',(0 - (scrolled*0.76)) + 'px');
  $('#bg-5').css('top',(0 - (scrolled*0.72)) + 'px');
}
// 通过监听窗口尺寸，达到响应式效果
window.onload = function() {
  watchChangeSize();
}
window.onresize=function(){  
  watchChangeSize();  
}  
function watchChangeSize (){
  var offsetWid = document.documentElement.clientWidth;
  var height = offsetWid * 1 /2;
  // 响应式欢迎页高度
  $('#Img').css('height', height + 'px');
}