// ═══════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════
const DESTINATIONS = [
  {
    id: 'paris', name: 'Paris', country: 'França', flag: '🇫🇷',
    cover: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80',
      'https://images.unsplash.com/photo-1431274172761-fca41d930114?w=600&q=80',
      'https://images.unsplash.com/photo-1471623432079-b009d30b6729?w=600&q=80',
      'https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?w=600&q=80',
    ],
    history: 'Paris, fundada pelos romanos no século I a.C. como Lutécia, é a capital da França há mais de mil anos. Sede da Revolução Francesa de 1789, o evento que transformou o mundo moderno, a cidade foi palco de movimentos artísticos e intelectuais que moldaram a civilização ocidental.',
    facts: { pop: '2.1 milhões', fundacao: '52 a.C.', area: '105 km²', idioma: 'Francês' },
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.95410654985!2d2.2646349!3d48.8588548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20Fran%C3%A7a!5e0!3m2!1spt!2sbr!4v1699000000000',
    weather: { temp: '14°C', desc: 'Parcialmente nublado', hum: '72%', vento: '18 km/h', icon: '⛅' },
  },
  {
    id: 'tokyo', name: 'Tóquio', country: 'Japão', flag: '🇯🇵',
    cover: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=600&q=80',
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=600&q=80',
      'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=600&q=80',
      'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&q=80',
    ],
    history: 'Originalmente chamada Edo, Tóquio tornou-se a capital do Japão em 1869, quando o Imperador Meiji se mudou do Kyoto imperial. O que começou como um pequeno vilarejo de pescadores no século XII transformou-se na maior metrópole do mundo, símbolo da reinvenção japonesa após a Segunda Guerra Mundial.',
    facts: { pop: '13.9 milhões', fundacao: '1457', area: '2.194 km²', idioma: 'Japonês' },
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207358.49305798888!2d139.4680494!3d35.6840574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b857628235d%3A0xcdd8aef709a2b520!2sTóquio%2C%20Japão!5e0!3m2!1spt!2sbr!4v1699000000001',
    weather: { temp: '18°C', desc: 'Ensolarado', hum: '58%', vento: '12 km/h', icon: '☀️' },
  },
  {
    id: 'machu-picchu', name: 'Machu Picchu', country: 'Peru', flag: '🇵🇪',
    cover: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1580502304784-8985b7eb7260?w=600&q=80',
      'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=600&q=80',
      'https://images.unsplash.com/photo-1591768793355-74d04bb6608f?w=600&q=80',
      'https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=600&q=80',
    ],
    history: 'Construída no século XV pelo Império Inca, Machu Picchu foi erguida sobre 2.430 metros de altitude nos Andes peruanos. Abandonada durante a conquista espanhola, permaneceu desconhecida ao mundo ocidental até 1911, quando o explorador Hiram Bingham a revelou. Patrimônio da UNESCO desde 1983.',
    facts: { pop: '1.000 hab.', fundacao: '1450', area: '32.592 ha', idioma: 'Espanhol/Quéchua' },
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3793.6847527773374!2d-72.5471516!3d-13.1631412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916d9a5f89555555%3A0xa00f4757070b810!2sMachu%20Picchu!5e0!3m2!1spt!2sbr!4v1699000000002',
    weather: { temp: '22°C', desc: 'Nublado com névoa', hum: '85%', vento: '8 km/h', icon: '☁️' },
  },
  {
    id: 'dubai', name: 'Dubai', country: 'Emirados Árabes', flag: '🇦🇪',
    cover: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600&q=80',
      'https://images.unsplash.com/photo-1546412414-8035e1776c9a?w=600&q=80',
      'https://www.shutterstock.com/image-photo/night-view-downtown-burj-khalifa-600nw-2699950883.jpg',
      'https://www.shutterstock.com/image-photo/dubai-uae-october-22-2024-600nw-2562449761.jpg',
    ],
    history: 'Dubai surgiu como um pequeno porto pesqueiro no século XIX. A descoberta do petróleo em 1966 transformou radicalmente a cidade, mas foi a visão do xeique Mohammed bin Rashid Al Maktoum que a converteu em um centro global de negócios, turismo e inovação arquitetônica sem precedentes.',
    facts: { pop: '3.5 milhões', fundacao: '1833', area: '4.114 km²', idioma: 'Árabe/Inglês' },
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231026.97826!2d55.07299345!3d25.0757296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%2C%20Emirados%20%C3%81rabes%20Unidos!5e0!3m2!1spt!2sbr!4v1699000000003',
    weather: { temp: '35°C', desc: 'Ensolarado e quente', hum: '45%', vento: '15 km/h', icon: '☀️' },
  },
  {
    id: 'santorini', name: 'Santorini', country: 'Grécia', flag: '🇬🇷',
    cover: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80',
      'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=600&q=80',
      'https://cdn.create.vista.com/api/media/small/54559529/stock-photo-red-beach-on-santorini-island',
      'https://cdn.create.vista.com/api/media/small/367717582/stock-photo-white-houses-tranquil-sea-sky-clouds-greece',
    ],
    history: 'Santorini é o que resta de uma das maiores erupções vulcânicas da história humana, ocorrida por volta de 1650 a.C. Esta catástrofe foi possivelmente a inspiração para o mito de Atlântida. Hoje, suas casas brancas com cúpulas azuis nas bordas da caldeira são umas das imagens mais icônicas do Mediterrâneo.',
    facts: { pop: '15.500', fundacao: '3000 a.C.', area: '76 km²', idioma: 'Grego' },
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25282.762905!2d25.3966626!3d36.4072219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1499ce6e7bdc3609%3A0x24e42fd5d1739c98!2sSantorini!5e0!3m2!1spt!2sbr!4v1699000000004',
    weather: { temp: '28°C', desc: 'Céu limpo', hum: '40%', vento: '22 km/h', icon: '☀️' },
  },
];

const TIMELINE = [
  { year: '776 a.C.', city: 'Grécia Antiga', title: 'Primeiros Jogos Olímpicos', text: 'A Grécia Antiga inaugura os Jogos Olímpicos em Olímpia, nascendo uma das tradições mais duradouras da humanidade.' },
  { year: '1453', city: 'Istambul', title: 'Queda de Constantinopla', text: 'O Império Otomano conquista Constantinopla, pondo fim ao Império Romano do Oriente e reescrevendo o mapa do mundo.' },
  { year: '1492', city: 'Américas', title: 'Chegada ao Novo Mundo', text: 'Colombo chega às Américas, iniciando uma era de encontros, trocas e transformações que moldaram a civilização moderna.' },
  { year: '1789', city: 'Paris', title: 'Revolução Francesa', text: 'A queda da Bastilha inaugura a era moderna, com ideais de liberdade, igualdade e fraternidade que ecoam até hoje.' },
  { year: '1869', city: 'Tóquio', title: 'Era Meiji no Japão', text: 'O Japão abre suas portas ao mundo, iniciando uma das maiores transformações culturais e industriais da história asiática.' },
  { year: '1911', city: 'Machu Picchu', title: 'Descoberta da Cidade Perdida', text: 'Hiram Bingham redescobre Machu Picchu, revelando ao mundo a grandiosidade da civilização inca nas alturas dos Andes.' },
];

const GALLERY_IMGS = [
  { src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=900&q=80', label: 'Noruega — Fiorde do Geiranger' },
  { src: 'https://thumbs.dreamstime.com/b/cidade-de-annecy-fran%C3%A7a-96963879.jpg', label: 'França — Annecy' },
  { src: 'https://apureguria.com/wp-content/uploads/2024/09/Aurora-Boreal-na-Islandia-5-dicas-para-voce-realizar-esse-sonho.jpg', label: 'Islândia — Aurora Boreal' },
  { src: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80', label: 'Marrocos — Saara' },
  { src: 'https://static.vecteezy.com/ti/fotos-gratis/p1/5226509-incrivel-atol-e-ilha-em-maldivas-de-vista-aerea-tranquil-paisagem-tropical-e-paisagem-marinha-com-palmeiras-na-praia-branca-areia-natureza-paz-no-luxo-resort-ilha-verao-ferias-mood-foto.jpg', label: 'Maldivas — Atol' },
  { src: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=900&q=80', label: 'Turquia — Capadócia' },
  { src: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&q=80', label: 'Japão — Monte Fuji' },
  { src: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900&q=80', label: 'Bali — Templo Tanah Lot' },
  { src: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80', label: 'França — Torre Eiffel' },
];

const FLIGHT_DATA = {
  paris: {
    airports: [
      { code: 'GRU', name: 'Guarulhos Intl.', city: 'São Paulo, BR' },
      { code: 'GIG', name: 'Galeão Intl.', city: 'Rio de Janeiro, BR' },
      { code: 'BSB', name: 'Presidente JK', city: 'Brasília, BR' },
    ],
    flights: [
      { id:'AF442', airline:'Air France', logo:'AF', color:'#002395', dep:'22:15', arr:'13:40+1', dur:'11h25', stops:'Direto', base:3890, badge:'Mais Popular' },
      { id:'LA703', airline:'LATAM', logo:'LA', color:'#E31837', dep:'00:30', arr:'16:15+1', dur:'15h45', stops:'1 escala (LIS)', base:2640, badge:'' },
      { id:'TP083', airline:'TAP Portugal', logo:'TP', color:'#00A651', dep:'23:55', arr:'14:20+1', dur:'14h25', stops:'1 escala (LIS)', base:2950, badge:'Melhor Preço' },
      { id:'AF438', airline:'Air France', logo:'AF', color:'#002395', dep:'20:00', arr:'11:30+1', dur:'11h30', stops:'Direto', base:4100, badge:'' },
    ]
  },
  tokyo: {
    airports: [
      { code: 'GRU', name: 'Guarulhos Intl.', city: 'São Paulo, BR' },
      { code: 'GIG', name: 'Galeão Intl.', city: 'Rio de Janeiro, BR' },
    ],
    flights: [
      { id:'JL048', airline:'Japan Airlines', logo:'JL', color:'#B30000', dep:'23:10', arr:'06:30+2', dur:'24h20', stops:'1 escala (LAX)', base:5480, badge:'Melhor Avaliado' },
      { id:'NH861', airline:'ANA', logo:'NH', color:'#003580', dep:'01:25', arr:'08:50+2', dur:'31h25', stops:'2 escalas', base:3890, badge:'Mais Barato' },
      { id:'LA805', airline:'LATAM', logo:'LA', color:'#E31837', dep:'21:40', arr:'08:15+2', dur:'34h35', stops:'2 escalas (MIA+LAX)', base:4250, badge:'' },
    ]
  },
  'machu-picchu': {
    airports: [
      { code: 'GRU', name: 'Guarulhos Intl.', city: 'São Paulo, BR' },
      { code: 'CGH', name: 'Congonhas', city: 'São Paulo, BR' },
      { code: 'FOR', name: 'Pinto Martins', city: 'Fortaleza, BR' },
    ],
    flights: [
      { id:'LA2407', airline:'LATAM', logo:'LA', color:'#E31837', dep:'07:15', arr:'14:30', dur:'7h15', stops:'1 escala (LIM)', base:1290, badge:'Melhor Preço' },
      { id:'G3782', airline:'Gol', logo:'G3', color:'#FF6600', dep:'05:40', arr:'16:20', dur:'10h40', stops:'2 escalas', base:980, badge:'Mais Barato' },
      { id:'LA2411', airline:'LATAM', logo:'LA', color:'#E31837', dep:'12:50', arr:'20:05', dur:'7h15', stops:'1 escala (LIM)', base:1450, badge:'' },
      { id:'AV412', airline:'Avianca', logo:'AV', color:'#CC0000', dep:'10:20', arr:'19:45', dur:'9h25', stops:'1 escala (BOG)', base:1180, badge:'' },
    ]
  },
  dubai: {
    airports: [
      { code: 'GRU', name: 'Guarulhos Intl.', city: 'São Paulo, BR' },
      { code: 'GIG', name: 'Galeão Intl.', city: 'Rio de Janeiro, BR' },
      { code: 'BSB', name: 'Presidente JK', city: 'Brasília, BR' },
    ],
    flights: [
      { id:'EK262', airline:'Emirates', logo:'EK', color:'#C60C30', dep:'01:30', arr:'06:15+1', dur:'16h45', stops:'Direto', base:6200, badge:'Direto · Premium' },
      { id:'EK264', airline:'Emirates', logo:'EK', color:'#C60C30', dep:'23:59', arr:'04:50+1', dur:'16h51', stops:'Direto', base:5850, badge:'Mais Popular' },
      { id:'QR138', airline:'Qatar Airways', logo:'QR', color:'#5C0632', dep:'22:45', arr:'19:00+1', dur:'20h15', stops:'1 escala (DOH)', base:4980, badge:'' },
      { id:'ET508', airline:'Ethiopian', logo:'ET', color:'#009A44', dep:'20:10', arr:'20:05+1', dur:'23h55', stops:'1 escala (ADD)', base:4100, badge:'Mais Barato' },
    ]
  },
  santorini: {
    airports: [
      { code: 'GRU', name: 'Guarulhos Intl.', city: 'São Paulo, BR' },
      { code: 'GIG', name: 'Galeão Intl.', city: 'Rio de Janeiro, BR' },
    ],
    flights: [
      { id:'TP035', airline:'TAP Portugal', logo:'TP', color:'#00A651', dep:'23:55', arr:'20:30+1', dur:'16h35', stops:'1 escala (LIS)', base:3150, badge:'Mais Popular' },
      { id:'AF332', airline:'Air France', logo:'AF', color:'#002395', dep:'22:15', arr:'22:45+1', dur:'24h30', stops:'2 escalas (CDG+ATH)', base:3890, badge:'' },
      { id:'AY035', airline:'Finnair', logo:'AY', color:'#003580', dep:'00:40', arr:'21:10+1', dur:'20h30', stops:'1 escala (HEL)', base:2880, badge:'Melhor Preço' },
    ]
  }
};

const DEST_ARR_CODES = { paris:'CDG', tokyo:'NRT', 'machu-picchu':'CUZ', dubai:'DXB', santorini:'JTR' };
const CLASS_MULTIPLIERS = { 'Econômica': 1, 'Executiva': 2.8, 'Primeira Classe': 5.2 };


let reservasStore = [];

function addReserva(data) {
  reservasStore.push(data);
  updateReservasUI();
}

function cancelarReserva(id) {
  const r = reservasStore.find(r => r.code === id);
  if (r) { r.status = 'cancelada'; updateReservasUI(); renderReservasList(currentFilter); }
}

function updateReservasUI() {
  const count = reservasStore.filter(r => r.status === 'confirmada').length;
  const total = reservasStore.length;
  const badge = document.getElementById('nav-badge');
  badge.textContent = total;
  badge.classList.toggle('show', total > 0);
  const fab = document.getElementById('reservas-fab');
  fab.classList.toggle('visible', total > 0);
  document.getElementById('fab-badge').textContent = total;
  const destinos = new Set(reservasStore.filter(r=>r.status==='confirmada').map(r=>r.destId)).size;
  const gasto = reservasStore.filter(r=>r.status==='confirmada').reduce((s,r)=>s+r.totalRaw,0);
  document.getElementById('rd-stat-total').textContent = total;
  document.getElementById('rd-stat-dest').textContent = destinos;
  document.getElementById('rd-stat-gasto').textContent = gasto >= 1000 ? 'R$' + (gasto/1000).toFixed(1) + 'k' : 'R$' + gasto;
  document.getElementById('rd-empty').style.display = total === 0 ? 'flex' : 'none';
  document.getElementById('rd-list').style.display = total === 0 ? 'none' : 'block';
}

let currentFilter = 'todas';

function renderReservasList(filter) {
  currentFilter = filter;
  const list = document.getElementById('rd-list');
  list.innerHTML = '';
  const filtered = filter === 'todas' ? reservasStore : reservasStore.filter(r => r.status === filter);
  if (filtered.length === 0) {
    list.innerHTML = `<div style="text-align:center;padding:3rem 0;opacity:.45;font-size:.85rem;color:rgba(232,220,200,.5)">Nenhuma reserva ${filter === 'cancelada' ? 'cancelada' : 'confirmada'} encontrada.</div>`;
    return;
  }
  filtered.slice().reverse().forEach((r, i) => {
    const card = document.createElement('div');
    card.className = 'res-card';
    card.style.animationDelay = (i * 0.06) + 's';
    const statusLabel = r.status === 'confirmada' ? 'Confirmada' : 'Cancelada';
    card.innerHTML = `
      <div class="res-card-header">
        <div class="res-card-dest">
          <span class="res-flag">${r.flag}</span>
          <div>
            <div class="res-dest-name">${r.destName}</div>
            <div class="res-country">${r.country}</div>
          </div>
        </div>
        <span class="res-status ${r.status}">${statusLabel}</span>
      </div>
      <div class="res-card-body">
        <div class="res-info-grid">
          <div class="res-info-item">
            <div class="res-info-label">Data</div>
            <div class="res-info-val">${r.date}</div>
          </div>
          <div class="res-info-item">
            <div class="res-info-label">Classe</div>
            <div class="res-info-val">${r.classe}</div>
          </div>
          <div class="res-info-item">
            <div class="res-info-label">Passageiros</div>
            <div class="res-info-val">${r.pax} pax</div>
          </div>
          <div class="res-info-item">
            <div class="res-info-label">Partida</div>
            <div class="res-info-val">${r.depAirport}</div>
          </div>
          <div class="res-info-item">
            <div class="res-info-label">Chegada</div>
            <div class="res-info-val">${r.arrAirport}</div>
          </div>
          <div class="res-info-item">
            <div class="res-info-label">Reservado em</div>
            <div class="res-info-val" style="font-size:.85rem">${r.createdAt}</div>
          </div>
        </div>
        <div class="res-flight-row">
          <span class="res-flight-code">${r.flightId}</span>
          <div class="res-flight-times">
            <span>${r.dep}</span>
            <span class="res-flight-arrow">✈</span>
            <span>${r.arr}</span>
          </div>
          <span class="res-flight-airline">${r.airline} · ${r.duration}</span>
        </div>
      </div>
      <div class="res-card-footer">
        <div>
          <div class="res-total-label">Total pago</div>
          <div class="res-total-val">${r.total}</div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:.4rem">
          <div class="res-code">${r.code}</div>
          <div class="res-actions">
            ${r.status === 'confirmada' ? `<button class="res-action-btn cancel" data-code="${r.code}">Cancelar</button>` : ''}
            <button class="res-action-btn" onclick="openBookingPanel(DESTINATIONS.find(d=>d.id==='${r.destId}'))">Reservar novamente</button>
          </div>
        </div>
      </div>`;
    card.querySelectorAll('.cancel').forEach(btn => {
      btn.addEventListener('click', () => {
        if (confirm('Cancelar esta reserva?')) {
          cancelarReserva(btn.dataset.code);
        }
      });
    });
    list.appendChild(card);
  });
}


function openReservasPanel() {
  updateReservasUI();
  renderReservasList(currentFilter);
  document.getElementById('reservas-panel').classList.add('open');
  requestAnimationFrame(() => {
    document.getElementById('reservas-panel').style.pointerEvents = 'all';
  });
  document.body.style.overflow = 'hidden';
}

function closeReservasPanel() {
  document.getElementById('reservas-panel').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('rd-close').addEventListener('click', closeReservasPanel);
document.getElementById('reservas-backdrop').addEventListener('click', closeReservasPanel);
document.getElementById('nav-reservas-btn').addEventListener('click', openReservasPanel);
document.getElementById('reservas-fab').addEventListener('click', openReservasPanel);
document.getElementById('rd-explore-btn').addEventListener('click', () => {
  closeReservasPanel();
  document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' });
});

document.querySelectorAll('.rd-filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.rd-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderReservasList(btn.dataset.filter);
  });
});


const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth; canvas.height = window.innerHeight;
const particles = Array.from({length: 55}, () => ({
  x: Math.random()*canvas.width, y: Math.random()*canvas.height,
  vx: (Math.random()-.5)*.3, vy: (Math.random()-.5)*.3,
  r: Math.random()*1.5+.5
}));
function drawParticles() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p => {
    p.x += p.vx; p.y += p.vy;
    if(p.x<0) p.x=canvas.width; if(p.x>canvas.width) p.x=0;
    if(p.y<0) p.y=canvas.height; if(p.y>canvas.height) p.y=0;
    ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle = 'rgba(201,168,76,0.6)'; ctx.fill();
  });
  requestAnimationFrame(drawParticles);
}
drawParticles();
window.addEventListener('resize', () => { canvas.width=window.innerWidth; canvas.height=window.innerHeight; });


const nav = document.getElementById('main-nav');
const progressBar = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
  if(window.scrollY>60) nav.classList.add('scrolled'); else nav.classList.remove('scrolled');
  const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
  progressBar.style.width = pct + '%';
});


function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2,'0');
  const m = String(now.getMinutes()).padStart(2,'0');
  const s = String(now.getSeconds()).padStart(2,'0');
  const timeStr = `${h}:${m}:${s}`;
  document.getElementById('nav-clock').textContent = timeStr;
  document.getElementById('clock-main').textContent = timeStr;
  const days = ['Domingo','Segunda-Feira','Terça-Feira','Quarta-Feira','Quinta-Feira','Sexta-Feira','Sábado'];
  const months = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
  document.getElementById('clock-date').textContent = `${days[now.getDay()]}, ${now.getDate()} de ${months[now.getMonth()]} de ${now.getFullYear()}`;
  document.getElementById('clock-tz').textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;
}
setInterval(updateClock, 1000); updateClock();


const slides = document.querySelectorAll('.hero-slide');
const dotsContainer = document.getElementById('slide-dots');
let currentSlide = 0;
slides.forEach((_,i) => {
  const d = document.createElement('div'); d.className = 'dot'+(i===0?' active':'');
  d.addEventListener('click', () => goToSlide(i));
  dotsContainer.appendChild(d);
});
function goToSlide(n) {
  slides[currentSlide].classList.remove('active');
  dotsContainer.children[currentSlide].classList.remove('active');
  currentSlide = n;
  slides[currentSlide].classList.add('active');
  dotsContainer.children[currentSlide].classList.add('active');
}
setInterval(() => goToSlide((currentSlide+1) % slides.length), 5000);


const modal = document.getElementById('city-modal');
const modalInner = document.getElementById('modal-inner');

function openModal(d) {
  modalInner.innerHTML = `
    <div>
      <img class="modal-img" src="${d.cover}" alt="${d.name}">
      <div class="modal-gallery">
        ${d.images.slice(0,4).map(s => `<img src="${s}" alt="" class="lightbox-trigger" loading="lazy">`).join('')}
      </div>
    </div>
    <div>
      <div class="modal-country">${d.flag} ${d.country}</div>
      <h2 class="modal-city-name">${d.name}</h2>
      <div class="modal-divider"></div>
      <p class="modal-history">${d.history}</p>
      <div class="modal-divider"></div>
      <div class="modal-facts">
        <div class="fact-box"><div class="fact-label">População</div><div class="fact-value">${d.facts.pop}</div></div>
        <div class="fact-box"><div class="fact-label">Fundação</div><div class="fact-value">${d.facts.fundacao}</div></div>
        <div class="fact-box"><div class="fact-label">Área</div><div class="fact-value">${d.facts.area}</div></div>
        <div class="fact-box"><div class="fact-label">Idioma</div><div class="fact-value">${d.facts.idioma}</div></div>
      </div>
      <div class="modal-divider"></div>
      <div class="modal-facts" style="grid-template-columns:1fr 1fr 1fr 1fr">
        <div class="fact-box"><div class="fact-label">Clima</div><div class="fact-value">${d.weather.icon}</div></div>
        <div class="fact-box"><div class="fact-label">Temp.</div><div class="fact-value">${d.weather.temp}</div></div>
        <div class="fact-box"><div class="fact-label">Humidade</div><div class="fact-value">${d.weather.hum}</div></div>
        <div class="fact-box"><div class="fact-label">Vento</div><div class="fact-value">${d.weather.vento}</div></div>
      </div>
      <div class="modal-map">
        <iframe src="${d.mapSrc}" allowfullscreen loading="lazy"></iframe>
      </div>
      <button class="modal-buy-btn" id="modal-buy-btn-inner">✈ Comprar Passagem para ${d.name}</button>
    </div>`;

  modalInner.querySelectorAll('.lightbox-trigger').forEach(img => {
    img.addEventListener('click', () => openLightbox(img.src));
  });
  document.getElementById('modal-buy-btn-inner').addEventListener('click', () => {
    closeModal();
    setTimeout(() => openBookingPanel(d), 300);
  });

  modal.classList.add('open');
  requestAnimationFrame(() => modal.classList.add('visible'));
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('visible');
  setTimeout(() => { modal.classList.remove('open'); document.body.style.overflow = ''; }, 400);
}
document.getElementById('modal-close').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if(e.target === modal) closeModal(); });

const strip = document.getElementById('dest-strip');
DESTINATIONS.forEach(d => {
  const card = document.createElement('div'); card.className = 'dest-card'; card.dataset.id = d.id;
  card.innerHTML = `
    <img src="${d.cover}" alt="${d.name}" loading="lazy">
    <div class="dest-flag">${d.flag}</div>
    <div class="dest-info">
      <div class="dest-name">${d.name}</div>
      <div class="dest-country">${d.country}</div>
      <button class="dest-card-btn">Ver destino →</button>
      <button class="dest-ticket-btn">✈ Comprar passagem</button>
    </div>`;
  card.querySelector('.dest-card-btn').addEventListener('click', e => { e.stopPropagation(); openModal(d); });
  card.querySelector('.dest-ticket-btn').addEventListener('click', e => { e.stopPropagation(); openBookingPanel(d); });
  card.addEventListener('click', () => openModal(d));
  strip.appendChild(card);
});

const wGrid = document.getElementById('weather-grid');
DESTINATIONS.forEach(d => {
  const card = document.createElement('div'); card.className = 'weather-card'; card.dataset.icon = d.weather.icon;
  card.innerHTML = `
    <div class="w-icon">${d.weather.icon}</div>
    <div class="w-city">${d.flag} ${d.name}</div>
    <div class="w-temp">${d.weather.temp}</div>
    <div class="w-desc">${d.weather.desc}</div>
    <div class="w-details"><span>💧 ${d.weather.hum}</span><span>💨 ${d.weather.vento}</span></div>`;
  wGrid.appendChild(card);
});


const gGrid = document.getElementById('gallery-grid');
GALLERY_IMGS.forEach(img => {
  const item = document.createElement('div'); item.className = 'g-item';
  item.innerHTML = `<img src="${img.src}" alt="${img.label}" loading="lazy"><div class="g-item-overlay"><span class="g-item-label">${img.label}</span></div>`;
  item.addEventListener('click', () => openLightbox(img.src));
  gGrid.appendChild(item);
});


const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lightbox-img');
function openLightbox(src) {
  lbImg.src = src; lb.classList.add('open');
  requestAnimationFrame(() => lb.classList.add('visible'));
}
function closeLightbox() {
  lb.classList.remove('visible');
  setTimeout(() => lb.classList.remove('open'), 300);
}
document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
lb.addEventListener('click', e => { if(e.target===lb || e.target===lbImg) closeLightbox(); });

const mapIframe = document.getElementById('map-iframe');
const mapSel = document.getElementById('map-selector');
function setMap(d, btn) {
  mapIframe.src = d.mapSrc;
  mapSel.querySelectorAll('.map-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}
DESTINATIONS.forEach((d,i) => {
  const btn = document.createElement('button'); btn.className = 'map-btn'+(i===0?' active':''); btn.textContent = d.name;
  btn.addEventListener('click', () => setMap(d, btn));
  mapSel.appendChild(btn);
});
mapIframe.src = DESTINATIONS[0].mapSrc;


const tl = document.getElementById('timeline');
TIMELINE.forEach((ev, i) => {
  const item = document.createElement('div'); item.className = 't-item';
  const contentHTML = `<div class="t-content"><div class="t-city-tag">${ev.city}</div><div class="t-year">${ev.year}</div><div class="t-title">${ev.title}</div><p class="t-text">${ev.text}</p></div>`;
  if(i % 2 === 0) {
    item.innerHTML = `${contentHTML}<div class="t-dot"></div><div class="t-spacer"></div>`;
  } else {
    item.innerHTML = `<div class="t-spacer"></div><div class="t-dot"></div>${contentHTML}`;
  }
  tl.appendChild(item);
});

document.addEventListener('keydown', e => {
  if(e.key==='Escape') { closeModal(); closeLightbox(); closeBookingPanel(); closeReservasPanel(); }
});


let bookingState = {
  dest: null, selectedAirport: 0, selectedClass: 'Econômica',
  selectedDate: 0, selectedFlight: null, passengers: 1
};

function generateDates(basePrice) {
  const dates = [];
  const now = new Date();
  const dayNames = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];
  const mults = [1.15, 0.95, 1.0, 1.08, 0.88, 1.12, 0.92];
  for (let i = 2; i <= 7; i++) {
    const d = new Date(now); d.setDate(d.getDate() + i);
    const mult = mults[i % mults.length];
    dates.push({ day: dayNames[d.getDay()], date: d.getDate() + '/' + String(d.getMonth()+1).padStart(2,'0'), price: Math.round(basePrice * mult) });
  }
  return dates;
}

function fmtPrice(p) { return 'R$ ' + p.toLocaleString('pt-BR'); }

function calcTotal() {
  if (!bookingState.selectedFlight) return null;
  const fl = bookingState.selectedFlight;
  const mult = CLASS_MULTIPLIERS[bookingState.selectedClass];
  const dateMult = generateDates(fl.base)[bookingState.selectedDate].price / fl.base;
  return Math.round(fl.base * mult * dateMult * bookingState.passengers);
}

function renderAirports() {
  const data = FLIGHT_DATA[bookingState.dest.id];
  const container = document.getElementById('departure-airports');
  container.innerHTML = '';
  data.airports.forEach((ap, i) => {
    const chip = document.createElement('div');
    chip.className = 'airport-chip' + (i === bookingState.selectedAirport ? ' selected' : '');
    chip.innerHTML = `<div class="ac-left"><div class="ac-code">${ap.code}</div><div><div class="ac-name">${ap.name}</div><div class="ac-city">${ap.city}</div></div></div><div class="ac-check">${i === bookingState.selectedAirport ? '✓' : ''}</div>`;
    chip.addEventListener('click', () => { bookingState.selectedAirport = i; renderAirports(); renderFlights(); });
    container.appendChild(chip);
  });
}

function renderDates() {
  const data = FLIGHT_DATA[bookingState.dest.id];
  const basePrice = Math.min(...data.flights.map(f => f.base));
  const dates = generateDates(basePrice);
  const container = document.getElementById('date-grid');
  container.innerHTML = '';
  dates.forEach((dt, i) => {
    const chip = document.createElement('div');
    chip.className = 'date-chip' + (i === bookingState.selectedDate ? ' selected' : '');
    chip.innerHTML = `<div class="dc-day">${dt.day}</div><div class="dc-date">${dt.date}</div><div class="dc-price">a partir de R$ ${Math.round(dt.price * CLASS_MULTIPLIERS[bookingState.selectedClass] / 1000)}k</div>`;
    chip.addEventListener('click', () => { bookingState.selectedDate = i; renderDates(); renderFlights(); updateTotal(); });
    container.appendChild(chip);
  });
}

function renderFlights() {
  const data = FLIGHT_DATA[bookingState.dest.id];
  const mult = CLASS_MULTIPLIERS[bookingState.selectedClass];
  const dates = generateDates(data.flights[0].base);
  const dateMult = dates[bookingState.selectedDate].price / data.flights[0].base;
  const container = document.getElementById('flights-list');
  container.innerHTML = '<div style="font-size:.65rem;letter-spacing:.22em;text-transform:uppercase;color:var(--gold);margin-bottom:.8rem">Voos Disponíveis</div>';
  data.flights.forEach(fl => {
    const price = Math.round(fl.base * mult * dateMult);
    const isSelected = bookingState.selectedFlight && bookingState.selectedFlight.id === fl.id;
    const card = document.createElement('div');
    card.className = 'flight-card' + (isSelected ? ' selected' : '');
    card.innerHTML = `
      ${fl.badge ? `<div class="fc-badge">${fl.badge}</div>` : ''}
      <div class="fc-top">
        <div class="fc-airline">
          <div class="fc-airline-logo" style="background:${fl.color}22;color:${fl.color};border:1px solid ${fl.color}44">${fl.logo}</div>
          <div><div class="fc-airline-name">${fl.airline}</div><div style="font-size:.6rem;color:rgba(232,220,200,.35)">${fl.id}</div></div>
        </div>
        <div class="fc-class-badge">${bookingState.selectedClass}</div>
      </div>
      <div class="fc-route">
        <div class="fc-time"><div class="fc-time-num">${fl.dep}</div><div class="fc-time-code">${FLIGHT_DATA[bookingState.dest.id].airports[bookingState.selectedAirport].code}</div></div>
        <div class="fc-arrow">
          <div class="fc-duration">${fl.dur}</div>
          <div class="fc-line"></div>
          <div class="fc-stops">${fl.stops}</div>
        </div>
        <div class="fc-time"><div class="fc-time-num">${fl.arr}</div><div class="fc-time-code">${DEST_ARR_CODES[bookingState.dest.id]}</div></div>
      </div>
      <div class="fc-bottom">
        <div class="fc-price">${fmtPrice(price)} <span>/ pessoa</span></div>
        <button class="fc-select-btn">${isSelected ? '✓ Selecionado' : 'Selecionar'}</button>
      </div>`;
    card.addEventListener('click', () => { bookingState.selectedFlight = fl; renderFlights(); updateTotal(); });
    container.appendChild(card);
  });
}

function updateTotal() {
  const total = calcTotal();
  document.getElementById('bd-total').textContent = total ? fmtPrice(total) : 'R$ —';
  document.getElementById('bd-pax-label').textContent = `${bookingState.passengers} passageiro${bookingState.passengers > 1 ? 's' : ''} · ${bookingState.selectedClass}`;
}

function openBookingPanel(dest) {
  bookingState = { dest, selectedAirport: 0, selectedClass: 'Econômica', selectedDate: 0, selectedFlight: null, passengers: 1 };
  document.getElementById('bd-flag').textContent = dest.flag;
  document.getElementById('bd-title').textContent = dest.name + ', ' + dest.country;
  document.getElementById('bd-subtitle').textContent = 'Partindo do Brasil · Ida e volta';
  document.getElementById('bd-total').textContent = 'R$ —';
  document.getElementById('bd-pax-label').textContent = '1 passageiro · Econômica';
  document.getElementById('pax-count').textContent = '1';
  document.getElementById('booking-success').classList.remove('show');
  document.querySelectorAll('.class-tab').forEach(t => t.classList.remove('active'));
  document.querySelector('.class-tab[data-class="Econômica"]').classList.add('active');
  renderAirports();
  renderDates();
  renderFlights();
  document.getElementById('booking-panel').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeBookingPanel() {
  document.getElementById('booking-panel').classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.class-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.class-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    bookingState.selectedClass = tab.dataset.class;
    bookingState.selectedFlight = null;
    renderDates(); renderFlights(); updateTotal();
  });
});

document.getElementById('pax-minus').addEventListener('click', () => {
  if (bookingState.passengers > 1) { bookingState.passengers--; document.getElementById('pax-count').textContent = bookingState.passengers; updateTotal(); }
});
document.getElementById('pax-plus').addEventListener('click', () => {
  if (bookingState.passengers < 9) { bookingState.passengers++; document.getElementById('pax-count').textContent = bookingState.passengers; updateTotal(); }
});

document.getElementById('bd-close').addEventListener('click', closeBookingPanel);
document.getElementById('booking-backdrop').addEventListener('click', closeBookingPanel);

document.getElementById('bd-confirm').addEventListener('click', () => {
  if (!bookingState.selectedFlight) {
    document.getElementById('flights-list').style.boxShadow = 'inset 0 0 0 1px rgba(181,69,27,.6)';
    setTimeout(() => document.getElementById('flights-list').style.boxShadow = '', 1200);
    return;
  }
  const fl = bookingState.selectedFlight;
  const total = calcTotal();
  const dates = generateDates(fl.base);
  const dateStr = dates[bookingState.selectedDate].date;
  const code = 'WL' + Math.random().toString(36).substr(2,6).toUpperCase();
  const depAirport = FLIGHT_DATA[bookingState.dest.id].airports[bookingState.selectedAirport].code;
  const arrAirport = DEST_ARR_CODES[bookingState.dest.id];
  const now = new Date();
  const createdAt = now.getDate() + '/' + String(now.getMonth()+1).padStart(2,'0') + ' ' + String(now.getHours()).padStart(2,'0') + ':' + String(now.getMinutes()).padStart(2,'0');

  document.getElementById('bs-dest').textContent = bookingState.dest.name + ', ' + bookingState.dest.country;
  document.getElementById('bs-flight').textContent = fl.airline + ' ' + fl.id;
  document.getElementById('bs-date').textContent = dateStr + ' · ' + fl.dep + ' → ' + fl.arr;
  document.getElementById('bs-class').textContent = bookingState.selectedClass;
  document.getElementById('bs-pax').textContent = bookingState.passengers + ' passageiro' + (bookingState.passengers > 1 ? 's' : '');
  document.getElementById('bs-total').textContent = fmtPrice(total);
  document.getElementById('bs-code').textContent = code;
  document.getElementById('booking-success').classList.add('show');

  addReserva({
    code,
    destId: bookingState.dest.id,
    destName: bookingState.dest.name,
    country: bookingState.dest.country,
    flag: bookingState.dest.flag,
    flightId: fl.id,
    airline: fl.airline,
    dep: fl.dep,
    arr: fl.arr,
    duration: fl.dur,
    stops: fl.stops,
    date: dateStr,
    classe: bookingState.selectedClass,
    pax: bookingState.passengers,
    depAirport,
    arrAirport,
    total: fmtPrice(total),
    totalRaw: total,
    status: 'confirmada',
    createdAt,
  });
});

document.getElementById('bs-back').addEventListener('click', () => {
  document.getElementById('booking-success').classList.remove('show');
  bookingState.selectedFlight = null;
  renderFlights(); updateTotal();
});

document.getElementById('bs-view-reservas').addEventListener('click', () => {
  closeBookingPanel();
  setTimeout(() => openReservasPanel(), 350);
});

// Init
updateReservasUI();
