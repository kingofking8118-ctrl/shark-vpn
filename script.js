document.querySelectorAll('.card').forEach(c=>{
c.addEventListener('mousemove',()=>c.style.transform='translateY(-6px) scale(1.02)');
c.addEventListener('mouseleave',()=>c.style.transform='');
});