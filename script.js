// ===== CREDENCIALES =====
const USUARIO = 'Snofi';
const CLAVE = 'teadoro';
// ===== FECHA INICIO (cambiar aquí) =====
const FECHA_INICIO = new Date('2025-05-15T00:00:00');
// ===== FRASES ROMÁNTICAS =====
const frases = [
  '💕Te amo con todo mi corazón 💕',
  '💕Eres lo mejor de mi vida 💕',
  '💕Contigo todo es más bonito 💕',
  '💕Mi mundo eres tú 💕',
  '💕Cada día te amo más 💕',
  '💕Eres mi sueño hecho realidad 💕',
  '💕Tu sonrisa me enamora 💕',
  '💕Juntos por siempre 💕',
];
const CARTAS_FIJAS = [
  {
    text: "Mi lindo",
    date: "13 marzo 2025"
  },
  {
    text: "Estoy muy orgullosa del hombre tan increible que eres",
    date: "2 abril 2025"
  },
  {
    text: "Te admiro y te amo y te adoro",
    date: "2 abril 2025"
  },
  {
    text: "te adoro con mi alma",
    date: "20 abril 2025"
  },
  {
    text: "me haces mucho bien",
    date: "27 abril 2025"
  },
  {
    text: "no olvides que eres maravilloso",
    date: "27 abril 2025"
  },
  {
    text: "amor tu eres lo mas importante para mi",
    date: "1 mayo 2025"
  },
  {
    text: "11:11",
    date: "2 mayo 2025"
  },
  {
    text: "poechito mi niño precioso bonito hermoso.  \ncuando me dijiste mi niño precioso, mi corazon se sintio muy bien y senti muy bonito",
    date: "28 mayo 2025",
  },
  {
    text: "tengo un novio tan preciosooo",
    date: "1 junio 2025"
  },
  {
    text: "te amo mi cielo",
    date: "13 junio 2025"
  },
  {
    text: "mi cama huele a ti",
    date: "15 junio 2025"
  },
  {
    text: "precioso mío",
    date: "15 junio 2025"
  },
  {
    text: "siempre querré llenarte de amor y felicidad",
    date: "6 julio 2025"
  },
  {
    text: "mi amor bonito",
    date: "21 julio 2025"
  },
  {
    text: "siempre estaré ahí para escucharte",
    date: "24 julio 2025"
  },
  {
    text: "que cuando vamos a motelear \neste mensaje grrr",
    date: "24 julio 2025"
  },
  {
    text: "de verdad eres lo mejor que me ha pasadp",
    date: "27 julio 2025"
  },
  {
    text: "y que eres mi todo todito todo",
    date: "28 julio 2025"
  },
  {
    text: "me iluminas la vida",
    date: "3 agosto 2025"
  },
  {
    text: "amor de mi vida",
    date: "3 agosto 2025"
  },
  {
    text: "te amo demasiado mi cielo",
    date: "20 agosto 2025"
  },
  {
    text: "mi vida",
    date: "18 septiembre 2025"
  },
  {
    text: "pero yo te dije que queria todo contigo",
    date: "24 septiembre 2025"
  },
  {
    text: "estoy orgulloda de el hombre que eres",
    date: "4 noviembre 2025"
  },
  {
    text: "papi chulo",
    date: "10 diceimbre 2025"
  },
  {
    text: "Eres demasiado importante para mí y no quiero que te sientas mal, sobre todo hoy, quiero que estés feliz y disfrutes de celebrar tu pumpleaños y obvio no eres difícil de querer pote yo me enamoré de ti muy fácilmente jsjsjssjsj y me encanta todo de ti.Te amo mucho y aunque no va a ser como deseaba que fuera intentaré hacer que sea un nindo dia \neste y el mensaje de cumpleaños, los atesoro mucho",
    date: "19 diceimbre 2025"
  },
  {
    text: "Estos mensajes y muchos mas, me hacen sentir lleno de amor, y por esho te agradezco mi niña hermosa",
  },
  
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

