function shrinkNavOnScroll(){
  const yDistance = window.pageYOffset || document.documentElement.scrollTop,
  shrinkBreakpoint = 50,
  navElement = document.querySelector('.cornerstone-nav');

  if (yDistance > shrinkBreakpoint) {
    navElement.classList.add('shrinked-nav');
    document.querySelector('.js-nav').style.height = '60px'
  }else {
    navElement.classList.remove("shrinked-nav");
    document.querySelector('.js-nav').style.height = '100px'
  }
}

window.addEventListener('scroll', shrinkNavOnScroll);
