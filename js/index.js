function shrinkNavOnScroll(){
  const yDistance = window.pageYOffset || document.documentElement.scrollTop,
  shrinkBreakpoint = 50,
  navElement = document.querySelector('.cornerstone-nav');

  if (yDistance > shrinkBreakpoint) {
    navElement.classList.add('shrinked-nav');

    document.querySelector('.brand').setAttribute('src','http://via.placeholder.com/150x60');

  }else {
    navElement.classList.remove("shrinked-nav");

    document.querySelector('.brand').setAttribute('src','http://via.placeholder.com/150x100');
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


// Start of Tawk.to Script

var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5aa20dd74b401e45400d8d2d/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
// End of Tawk.to Script
