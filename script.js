const stars = document.getElementById('stars');
for (let i=0; i<75; i++) {
  const s=document.createElement('span');
  s.className='star-dot';
  s.textContent = Math.random() > .55 ? '✦' : '·';
  s.style.left=(Math.random()*100)+'%';
  s.style.top=(Math.random()*100)+'%';
  s.style.fontSize=(5+Math.random()*11)+'px';
  s.style.animationDelay=(Math.random()*4)+'s';
  s.style.animationDuration=(2+Math.random()*4)+'s';
  stars.appendChild(s);
}
document.getElementById('startBtn').addEventListener('click',()=>{
  document.getElementById('letter').scrollIntoView({behavior:'smooth'});
  burst(15);
});
document.getElementById('revealBtn').addEventListener('click',()=>{
  document.getElementById('finalNote').classList.add('visible');
  const b=document.getElementById('revealBtn');
  b.textContent='A little universe, just for you ♡';
  b.disabled=true;
  b.style.opacity='.7';
  burst(45);
});
document.addEventListener('click',(e)=>{
  if(e.target.closest('button,a')) return;
  burstAt(e.clientX,e.clientY,1);
});
function burst(n=10){for(let i=0;i<n;i++)burstAt(window.innerWidth*(.15+Math.random()*.7),window.innerHeight*(.2+Math.random()*.6),1,Math.random()*.4)}
function burstAt(x,y,count=1,delay=0){
  const icons=['✦','♡','✧','·','✿'];
  for(let i=0;i<count;i++){
    const el=document.createElement('span');el.className='spark';el.textContent=icons[Math.floor(Math.random()*icons.length)];
    el.style.left=(x+(Math.random()-.5)*50)+'px';el.style.top=(y+(Math.random()-.5)*40)+'px';
    el.style.fontSize=(12+Math.random()*18)+'px';el.style.animationDelay=(delay+Math.random()*.25)+'s';
    document.body.appendChild(el);setTimeout(()=>el.remove(),2100);
  }
}
