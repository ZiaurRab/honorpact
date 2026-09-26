
const menu = document.querySelector('.menu');
const links = document.querySelector('.navlinks');
if(menu) menu.addEventListener('click',()=>links.classList.toggle('open'));

document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

document.querySelectorAll('form[data-contact]').forEach(form=>{
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const subject = encodeURIComponent(form.querySelector('[name="subject"]')?.value || 'Honor Pact Website Inquiry');
    const body = encodeURIComponent(
      [...form.querySelectorAll('input,textarea,select')]
        .filter(x=>x.value && x.name!=='subject')
        .map(x=>`${x.name}: ${x.value}`).join('\\n\\n')
    );
    window.location.href=`mailto:info@honorpact.com?subject=${subject}&body=${body}`;
  });
});
