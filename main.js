// Consumer Nails - main.js
document.addEventListener('DOMContentLoaded', function(){
  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        document.querySelector(href).scrollIntoView({behavior:'smooth'});
      }
    });
  });
  // Simple fade-in on scroll
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, {threshold:0.12});
  document.querySelectorAll('.reveal').forEach(el=>{ el.classList.add('before-visible'); obs.observe(el)});
});