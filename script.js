const panels=[...document.querySelectorAll('[data-panel]')],links=[...document.querySelectorAll('[data-tab-link]')],nav=document.getElementById('main-nav'),toggle=document.querySelector('.menu-toggle');
function show(name,hash=true){const target=panels.find(p=>p.dataset.panel===name)||panels[0];panels.forEach(p=>p.hidden=p!==target);links.forEach(a=>a.classList.toggle('active',a.dataset.tabLink===target.dataset.panel));nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');window.scrollTo({top:0,behavior:'smooth'});if(hash)history.replaceState(null,'',`#${target.id}`)}
links.forEach(a=>a.addEventListener('click',e=>{e.preventDefault();show(a.dataset.tabLink)}));document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>show(b.dataset.go)));toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open))});show(location.hash.slice(1)||'home',false);

const email='zl5877@nyu.edu';
const copyStatus=document.createElement('div');copyStatus.className='copy-status';copyStatus.setAttribute('role','status');copyStatus.setAttribute('aria-live','polite');document.body.appendChild(copyStatus);
document.querySelectorAll(`a[href="mailto:${email}"]`).forEach(link=>link.addEventListener('click',async event=>{event.preventDefault();try{await navigator.clipboard.writeText(email)}catch{const field=document.createElement('textarea');field.value=email;field.style.position='fixed';field.style.opacity='0';document.body.appendChild(field);field.select();document.execCommand('copy');field.remove()}copyStatus.textContent=`Copied: ${email}`;copyStatus.classList.add('show');const original=link.textContent;if(link.textContent.trim().toLowerCase()==='contact me')link.textContent='Email copied ✓';setTimeout(()=>{copyStatus.classList.remove('show');link.textContent=original},1800)}));
document.querySelectorAll('.gallery-piece a, .future-frame').forEach(frame => {
  for (let corner = 0; corner < 4; corner++) {
    const flourish = document.createElement('i');
    flourish.className = 'frame-flourish';
    flourish.setAttribute('aria-hidden', 'true');
    flourish.textContent = '❦';
    frame.append(flourish);
  }
});
