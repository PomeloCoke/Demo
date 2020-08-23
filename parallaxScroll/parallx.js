window.onload = function() {
  watchChangeSize();
  parallaxScroll();
}
window.onscroll = function() {
  parallaxScroll();
}
window.onresize=function(){  
  watchChangeSize(); 
}  

// 错视效果
function parallaxScroll() {
  let scrolled = document.documentElement.scrollTop;
  document.getElementById('title').style.top = (30 - (scrolled*1.1*0.03)) + '%';
  document.getElementById('bg-1').style.top = (0 - (scrolled*1)) + 'px';
  document.getElementById('bg-2').style.top = (0 - (scrolled*0.9)) + 'px';
  document.getElementById('bg-3').style.top = (0 - (scrolled*0.82)) + 'px';
  document.getElementById('bg-4').style.top = (0 - (scrolled*0.76)) + 'px';
  document.getElementById('bg-5').style.top = (0 - (scrolled*0.72)) + 'px';
}

// 通过监听窗口尺寸，达到响应式效果
function watchChangeSize (){
  let offsetWid = document.documentElement.clientWidth;
  let showHeight = offsetWid * 1 /2;
  // 响应式欢迎页高度
  document.getElementById('Img').style.height = showHeight + 'px';
}