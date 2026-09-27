\nfunction setupMobileMenu(buttonSelector, navSelector){\n  const menu = document.querySelector(buttonSelector);\n  const links = document.querySelector(navSelector);\n  if(!menu || !links) return;\n  menu.addEventListener('click', ()=>{\n    const open = links.classList.toggle('open');\n    menu.setAttribute('aria-expanded', open ? 'true' : 'false');\n    menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');\n  });\n  links.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>{\n    links.classList.remove('open');\n    menu.setAttribute('aria-expanded','false');\n    menu.setAttribute('aria-label','Open menu');\n  }));\n}\n\nsetupMobileMenu('.menu','.navlinks');\nsetupMobileMenu('.hp-menu','.hp-links');\n\ndocument.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());\n\ndocument.querySelectorAll('form[data-contact]').forEach(form=>{\n  form.addEventListener('submit',e=>{\n    e.preventDefault();\n    const subject = encodeURIComponent(form.querySelector('[name="subject"]')?.value || 'Honor Pact Website Inquiry');\n    const body = encodeURIComponent(\n      [...form.querySelectorAll('input,textarea,select')]\n        .filter(x=>x.value && x.name!=='subject')\n        .map(x=>`${x.name}: ${x.value}`).join('\\n\\n')\n    );\n    window.location.href=`mailto:info@honorpact.com?subject=${subject}&body=${body}`;\n  });\n});\n
/* HonorPactFinalNavFix */
(function () {
  if (window.__HonorPactFinalNavFix) return;
  window.__HonorPactFinalNavFix = true;

  document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".menu");
    buttons.forEach(function (button) {
      var menu = document.getElementById("mobileMenu");
      if (!menu) menu = document.querySelector(".mobile-menu");
      if (!menu) return;

      button.addEventListener("click", function () {
        menu.classList.toggle("open");
        button.setAttribute("aria-expanded", menu.classList.contains("open") ? "true" : "false");
      });

      menu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          menu.classList.remove("open");
        });
      });
    });
  });
})();
