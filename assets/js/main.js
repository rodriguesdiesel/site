const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const opened = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(opened));
  });

  siteNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const contactForm = document.querySelector('#contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const phone = contactForm.dataset.whatsapp || '5541999166477';
    const get = (name) => (contactForm.querySelector(`[name="${name}"]`)?.value || '').trim();

    const nome = get('nome');
    const empresa = get('empresa');
    const cidade = get('cidade');
    const telefone = get('telefone');
    const email = get('email');
    const servico = get('servico');
    const mensagem = get('mensagem');

const linhas = [
  'Olá, Rodrigues Diesel! Gostaria de solicitar atendimento.',
  '',
  '*DADOS DO CLIENTE*',
  `Nome: ${nome || '-'}`,
  `Empresa: ${empresa || '-'}`,
  `Cidade/UF: ${cidade || '-'}`,
  `Telefone: ${telefone || '-'}`,
  `E-mail: ${email || '-'}`,
  '',
  '*SERVIÇO*',
  `Tipo: ${servico || '-'}`,
  '',
  '*MENSAGEM*',
  `${mensagem || '-'}`
];

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(linhas.join('\n'))}`;
    window.open(url, '_blank');
  });
}