function shrinkNavOnScroll(){
  const yDistance = window.pageYOffset || document.documentElement.scrollTop,
  shrinkBreakpoint = 50,
  navElement = document.querySelector('.cornerstone-nav');

  if (yDistance > shrinkBreakpoint) {
    navElement.classList.add('shrinked-nav');

    // document.querySelector('.brand').setAttribute('src','../images/full-logo-no-svc.png');

  }else {
    navElement.classList.remove("shrinked-nav");

    // document.querySelector('.brand').setAttribute('src','../images/logo-house.png');
  }
}


var callBtn = document.querySelector('.call-btn'),
callText = document.querySelector('.call-txt');

callText.addEventListener('mouseenter',function(){
  callBtn.classList.add('call-hover');
  setTimeout(function(){
    callText.style.display = 'none';
  },250);
});

// callText.addEventListener('mouseout',function(){
//   callBtn.classList.remove('call-hover');
//
// });

window.addEventListener('scroll', shrinkNavOnScroll);
