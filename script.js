const menu=document.querySelector('.menu');
const links=document.querySelector('.nav-links');
menu?.addEventListener('click',()=>{
  const open=links.classList.toggle('open');
  if(open){links.style.display='flex';links.style.position='absolute';links.style.top='64px';links.style.left='10px';links.style.right='10px';links.style.padding='18px';links.style.flexDirection='column';links.style.background='rgba(4,14,25,.96)';links.style.border='1px solid rgba(86,230,255,.18)';links.style.borderRadius='14px';}
  else links.removeAttribute('style');
});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>{if(innerWidth<901){links.classList.remove('open');links.removeAttribute('style')}}));
const reveal=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.08});
document.querySelectorAll('.section,.project,.skill-card,.timeline,.certificate-card').forEach(el=>{el.classList.add('reveal');reveal.observe(el)});
