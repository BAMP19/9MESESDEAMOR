// ===== CREDENCIALES =====
const USUARIO = 'miamor';
const CLAVE = '9meses';
// ===== FECHA INICIO (cambiar aquí) =====
const FECHA_INICIO = new Date('2025-05-15T00:00:00');
// ===== FRASES ROMÁNTICAS =====
const frases = [
  'Te amo con todo mi corazón 💕',
  'Eres lo mejor de mi vida 🌹',
  'Contigo todo es más bonito ✨',
  'Mi mundo eres tú 💖',
  'Cada día te amo más 🥰',
  'Eres mi sueño hecho realidad 💫',
  'Tu sonrisa me enamora 😍',
  'Juntos por siempre 💞',
];
const CARTAS_FIJAS = [
  {
    text: "Gracias por existir en mi vida 💖",
    date: "15 mayo 2025"
  },
  {
    text: "Prometo cuidarte siempre 🥰",
    date: "20 junio 2025"
  },
  {
    text: "Eres mi sueño hecho realidad ✨",
    date: "Hoy"
  }
];

// ===== LOGIN =====
const loginScreen = document.getElementById('login-screen');
const mainApp = document.getElementById('main-app');
const loginBtn = document.getElementById('login-btn');
const loginError = document.getElementById('login-error');
loginBtn.addEventListener('click', () => {
  const user = document.getElementById('username').value.trim();
  const pass = document.getElementById('password').value;
  if (user === USUARIO && pass === CLAVE) {
    loginScreen.classList.add('hidden');
    mainApp.classList.remove('hidden');
    initApp();
  } else {
    loginError.textContent = 'Usuario o contraseña incorrectos 💔';
    setTimeout(() => (loginError.textContent = ''), 3000);
  }
});
// Enter key login
document.getElementById('password').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') loginBtn.click();
});
// ===== NAVEGACIÓN =====
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const target = link.dataset.section;
    navLinks.forEach((l) => l.classList.remove('active'));
    link.classList.add('active');
    sections.forEach((s) => {
      s.classList.remove('active');
      if (s.id === 'sec-' + target) s.classList.add('active');
    });
  });
});
// ===== INIT APP =====
function initApp() {
  initFloatingHearts();
  initInteractiveLayer();
  initGallery();
  initCartas();
  initContador();
}
// ===== CORAZONES FLOTANTES =====
function initFloatingHearts() {
  const container = document.getElementById('floating-hearts');
  const hearts = ['💕', '💖', '💗', '💝', '💞', '🩷', '❤️'];
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement('span');
    heart.className = 'float-heart';
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = 8 + Math.random() * 12 + 's';
    heart.style.animationDelay = Math.random() * 10 + 's';
    heart.style.fontSize = 0.8 + Math.random() * 1.2 + 'rem';
    container.appendChild(heart);
  }
}
// ===== CAPA INTERACTIVA =====
function initInteractiveLayer() {
  document.addEventListener('click', (e) => {
    const layer = document.getElementById('interactive-layer');
    // Corazón
    const heart = document.createElement('span');
    heart.className = 'click-heart';
    heart.textContent = ['💕', '💖', '💗', '❤️'][Math.floor(Math.random() * 4)];
    heart.style.left = e.clientX - 12 + 'px';
    heart.style.top = e.clientY - 12 + 'px';
    layer.appendChild(heart);
    setTimeout(() => heart.remove(), 1500);
    // Texto aleatorio (20% chance)
    if (Math.random() < 0.2) {
      const text = document.createElement('span');
      text.className = 'click-text';
      text.textContent = frases[Math.floor(Math.random() * frases.length)];
      text.style.left = e.clientX - 60 + 'px';
      text.style.top = e.clientY - 30 + 'px';
      layer.appendChild(text);
      setTimeout(() => text.remove(), 2000);
    }
  });
}
// ===== GALERÍA =====
function initGallery() {
  const modal = document.getElementById('gallery-modal');
  const modalImg = document.getElementById('modal-img');
  const modalMsg = document.getElementById('modal-msg');
  const modalClose = document.getElementById('modal-close');
  document.querySelectorAll('.gallery-card').forEach((card) => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      modalImg.src = img.src;
      modalMsg.textContent = card.dataset.msg;
      modal.classList.remove('hidden');
    });
  });
  modalClose.addEventListener('click', () => modal.classList.add('hidden'));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.add('hidden');
  });
}
// ===== CARTAS =====
function initCartas() {
  const list = document.getElementById('cartas-list');

  CARTAS_FIJAS.forEach(c => {
    const div = document.createElement('div');
    div.className = 'carta-item';
    div.innerHTML = `
      <p>${c.text}</p>
      <p class="carta-date">📅 ${c.date}</p>
    `;
    list.appendChild(div);
  });
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
// ===== CONTADOR =====
function initContador() {
  function update() {
    const now = new Date();
    const diff = now - FECHA_INICIO;
    if (diff < 0) return;
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);
    document.getElementById('cnt-dias').textContent = dias;
    document.getElementById('cnt-horas').textContent = horas;
    document.getElementById('cnt-minutos').textContent = minutos;
    document.getElementById('cnt-segundos').textContent = segundos;
  }
  update();
  setInterval(update, 1000);
}

