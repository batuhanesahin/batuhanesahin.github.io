(function(){
  var btn=document.querySelector('.menu-button');
  var links=document.querySelector('.nav-links');
  if(btn&&links){
    btn.addEventListener('click',function(){
      var open=links.classList.toggle('open');
      btn.setAttribute('aria-expanded',open?'true':'false');
    });
    links.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click',function(){
        links.classList.remove('open');
        btn.setAttribute('aria-expanded','false');
      });
    });
  }
  var items=document.querySelectorAll('.reveal:not(.is-visible)');
  if(!('IntersectionObserver' in window)){
    items.forEach(function(el){el.classList.add('is-visible');});
    return;
  }
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target);}
    });
  },{threshold:0.12});
  items.forEach(function(el){io.observe(el);});
})();
