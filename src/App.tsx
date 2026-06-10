import { useState } from 'react'

const WHATSAPP = '5517988311133'

const hoteis = [
  { nome: 'Thermas Park Resort', categoria: 'Resort', desc: 'Acomodações premium ao lado do parque.', preco: 'R$ 890/diária', img: 'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=600' },
  { nome: 'Hot Beach Suites', categoria: 'Resort', desc: 'Suítes modernas com acesso ao complexo.', preco: 'R$ 740/diária', img: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600' },
  { nome: 'Pousada Águas Claras', categoria: 'Pousada', desc: 'Tranquilidade e conforto no centro.', preco: 'R$ 320/diária', img: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600' },
  { nome: 'Hotel Central Olímpia', categoria: 'Hotel', desc: 'Localização privilegiada e ótimo custo-benefício.', preco: 'R$ 280/diária', img: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600' },
  { nome: 'Enjoy Olímpia Park Resort', categoria: 'Resort', desc: 'Diversão garantida para toda família.', preco: 'R$ 690/diária', img: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600' },
  { nome: 'Recanto Tropical Pousada', categoria: 'Pousada', desc: 'Ambiente rústico e acolhedor.', preco: 'R$ 260/diária', img: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600' },
]

const restaurantes = [
  { nome: 'Churrascaria Boi de Ouro', categoria: 'Churrascaria', desc: 'A melhor carne da cidade.', preco: '$$$', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600' },
  { nome: 'Cantina da Nona', categoria: 'Restaurante', desc: 'Comida caseira com filas todo dia.', preco: '$$', img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600' },
  { nome: 'Café Colonial Olímpia', categoria: 'Cafeteria', desc: 'Café colonial completo aos domingos.', preco: '$$', img: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600' },
  { nome: 'Bar do Porto', categoria: 'Bar', desc: 'Porções generosas e cerveja gelada.', preco: '$$', img: 'https://images.unsplash.com/photo-1572116469696-0c0d1b6c0c0c?w=600' },
  { nome: 'Gelateria Tropicana', categoria: 'Sorveteria', desc: 'Sabores tropicais incríveis.', preco: '$', img: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89b?w=600' },
  { nome: 'Restaurante Mirante', categoria: 'Restaurante', desc: 'Vista panorâmica e alta gastronomia.', preco: '$$$', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600' },
]

const operadoras = [
  { nome: 'Vitur Turismo', especialidade: 'Pacotes para parques', img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400' },
  { nome: 'Thermas Turismo', especialidade: 'Ingressos e transfers', img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400' },
  { nome: 'Olímpia Viagens', especialidade: 'Excursões em grupo', img: 'https://images.unsplash.com/photo-1504159506876-f8338247a14a?w=400' },
  { nome: 'Hot Beach Travel', especialidade: 'Hospedagem + parques', img: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=400' },
]

const beneficios = [
  { titulo: 'Sobremesa grátis', desc: 'Na compra de um prato principal.' },
  { titulo: 'Drink em dobro', desc: 'Compre um drink e ganhe outro.' },
  { titulo: '10% desconto', desc: 'Em restaurantes selecionados.' },
  { titulo: 'Upgrade de quarto', desc: 'Sujeito a disponibilidade.' },
  { titulo: 'Desconto em passeio', desc: 'Em operadoras parceiras.' },
  { titulo: 'Voucher transfer', desc: 'Para parques aquáticos.' },
]

const planos = [
  { nome: 'Essencial', preco: 'R$99/mês', beneficios: ['Ficha no portal', '1 foto', 'Contato direto'] },
  { nome: 'Destaque', preco: 'R$199/mês', beneficios: ['Ficha destacada', '10 fotos', 'Cupom de desconto', '1 post no blog', 'Divulgação Instagram'], popular: true },
  { nome: 'Premium', preco: 'R$399/mês', beneficios: ['Topo do diretório', 'Fotos ilimitadas', 'Cupons + vídeo', '3 posts no blog', 'Divulgação YouTube', 'Gestor dedicado'] },
]

export default function App() {
  const [page, setPage] = useState('home')

  return (
    <div className="min-h-screen bg-orange-50 font-sans text-gray-800">
      <nav className="bg-gradient-to-r from-orange-600 to-amber-500 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <button onClick={() => setPage('home')} className="text-2xl font-bold">Olímpia de Verdade</button>
          <div className="hidden md:flex gap-5 text-sm font-medium">
            {['onde-ficar','onde-comer','operadoras','beneficios','seja-parceiro','contato'].map(p => (
              <button key={p} onClick={() => setPage(p)} className="hover:underline capitalize">{p.replace('-',' ')}</button>
            ))}
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {page === 'home' && <Home setPage={setPage} />}
        {page === 'onde-ficar' && <OndeFicar />}
        {page === 'onde-comer' && <OndeComer />}
        {page === 'operadoras' && <Operadoras />}
        {page === 'beneficios' && <Beneficios />}
        {page === 'seja-parceiro' && <SejaParceiro />}
        {page === 'contato' && <Contato />}
      </main>

      <footer className="bg-gray-900 text-white py-8 text-center">
        <p className="font-bold text-lg">Olímpia de Verdade</p>
        <p className="text-sm mt-2">O guia local mais completo de Olímpia-SP.</p>
        <p className="text-sm mt-1">Fale com Luciano: <a href={`https://wa.me/${WHATSAPP}`} className="text-green-400 underline">(17) 98831-1133</a></p>
        <p className="text-xs mt-4 opacity-70">© 2026 Olímpia de Verdade · Feito por quem nasceu aqui</p>
      </footer>

      <a href={`https://wa.me/${WHATSAPP}`} target="_blank" className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 z-50">
        <svg width="28" height="28" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
      </a>
    </div>
  )
}

function Home({ setPage }: { setPage: (p: string) => void }) {
  return (
    <div>
      <section className="relative bg-cover bg-center py-32 px-4 text-white text-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Tudo o que você precisa para aproveitar Olímpia gastando menos.</h1>
          <p className="text-xl mb-8">As melhores dicas de quem vive Olímpia todos os dias.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => setPage('onde-ficar')} className="bg-white text-orange-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100">Onde Ficar</button>
            <button onClick={() => setPage('onde-comer')} className="bg-white text-orange-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100">Onde Comer</button>
            <button onClick={() => setPage('beneficios')} className="bg-white text-orange-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100">Benefícios</button>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-8 items-center">
        <img src="/Luciano%203.jpg" alt="Luciano" className="rounded-full w-64 h-64 mx-auto object-cover shadow-lg" />
        <div>
          <h2 className="text-3xl font-bold text-orange-700">Conheça Luciano Zangirolami</h2>
          <p className="mt-4 text-gray-600">Morador de Olímpia há mais de 15 anos, Luciano conhece cada cantinho da cidade. Ele preparou esse guia com os melhores lugares, cupons exclusivos e dicas que só um morador de verdade pode dar.</p>
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" className="mt-6 inline-block bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600">Fale com Luciano</a>
        </div>
      </section>
    </div>
  )
}

function OndeFicar() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Onde Ficar em Olímpia</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hoteis.map((h, i) => (
          <div key={i} className="bg-white rounded-xl shadow overflow-hidden hover:shadow-lg transition">
            <img src={h.img} alt={h.nome} className="h-48 w-full object-cover" />
            <div className="p-4">
              <span className="text-xs font-semibold text-orange-600">{h.categoria}</span>
              <h3 className="text-xl font-bold mt-1">{h.nome}</h3>
              <p className="text-gray-600 text-sm mt-1">{h.desc}</p>
              {h.preco && <p className="text-lg font-bold text-orange-700 mt-2">{h.preco}</p>}
              <a href={`https://wa.me/${WHATSAPP}?text=Olá! Tenho interesse em ${h.nome}`} target="_blank" className="mt-3 inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm hover:bg-green-600">Chamar no WhatsApp</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function OndeComer() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Onde Comer em Olímpia</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurantes.map((r, i) => (
          <div key={i} className="bg-white rounded-xl shadow overflow-hidden hover:shadow-lg transition">
            <img src={r.img} alt={r.nome} className="h-48 w-full object-cover" />
            <div className="p-4">
              <span className="text-xs font-semibold text-red-600">{r.categoria}</span>
              <h3 className="text-xl font-bold mt-1">{r.nome}</h3>
              <p className="text-gray-600 text-sm mt-1">{r.desc}</p>
              {r.preco && <p className="text-lg font-bold text-red-700 mt-2">{r.preco}</p>}
              <a href={`https://wa.me/${WHATSAPP}?text=Olá! Gostaria de saber mais sobre ${r.nome}`} target="_blank" className="mt-3 inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm hover:bg-green-600">Reservar / Info</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Operadoras() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Operadoras Parceiras</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {operadoras.map((op, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-6 text-center">
            <img src={op.img} alt={op.nome} className="h-32 w-full object-cover rounded mb-4" />
            <h3 className="text-xl font-bold">{op.nome}</h3>
            <p className="text-gray-600 text-sm mt-1">{op.especialidade}</p>
            <a href={`https://wa.me/${WHATSAPP}?text=Olá! Quero um orçamento com ${op.nome}`} target="_blank" className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm hover:bg-green-600">Pedir Orçamento</a>
          </div>
        ))}
      </div>
    </div>
  )
}

function Beneficios() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Clube de Benefícios</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {beneficios.map((b, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-6 flex items-start gap-4">
            <span className="text-3xl">🎁</span>
            <div>
              <h3 className="text-xl font-semibold">{b.titulo}</h3>
              <p className="text-gray-600 mt-1">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-md mx-auto mt-12 bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Receba novos cupons</h2>
        <input type="text" placeholder="Seu nome" className="w-full border p-2 rounded mb-2" />
        <input type="text" placeholder="WhatsApp" className="w-full border p-2 rounded mb-2" />
        <input type="email" placeholder="E-mail" className="w-full border p-2 rounded mb-4" />
        <button className="w-full bg-orange-600 text-white py-2 rounded-full font-semibold hover:bg-orange-700">Quero cupons grátis</button>
      </div>
    </div>
  )
}

function SejaParceiro() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">Seja um Parceiro</h1>
      <p className="text-center text-gray-600 mb-12">Anuncie para milhares de turistas que visitam Olímpia</p>
      <div className="grid md:grid-cols-3 gap-8">
        {planos.map((p, i) => (
          <div key={i} className={`bg-white rounded-xl shadow p-8 flex flex-col ${p.popular ? 'ring-2 ring-orange-500 scale-105' : ''}`}>
            {p.popular && <span className="text-xs font-bold text-orange-600 uppercase mb-2">Mais Popular</span>}
            <h3 className="text-2xl font-bold">{p.nome}</h3>
            <p className="text-3xl font-extrabold mt-4">{p.preco}</p>
            <ul className="mt-6 flex-1 space-y-2">
              {p.beneficios.map((b, j) => (
                <li key={j} className="flex items-center gap-2 text-gray-700"><span className="text-green-500">✔</span> {b}</li>
              ))}
            </ul>
            <a href={`https://wa.me/${WHATSAPP}?text=Quero ser parceiro no plano ${p.nome}`} target="_blank" className="mt-6 block text-center bg-orange-600 text-white py-3 rounded-full font-semibold hover:bg-orange-700">Quero anunciar</a>
          </div>
        ))}
      </div>
    </div>
  )
}

function Contato() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Fale Conosco</h1>
      <div className="max-w-lg mx-auto bg-white rounded-xl shadow p-8">
        <input type="text" placeholder="Seu nome" className="w-full border p-3 rounded mb-3" />
        <input type="text" placeholder="WhatsApp" className="w-full border p-3 rounded mb-3" />
        <textarea placeholder="Sua mensagem" rows={4} className="w-full border p-3 rounded mb-4" />
        <a href={`https://wa.me/${WHATSAPP}?text=Olá, vim pelo site Olímpia de Verdade!`} target="_blank" className="block text-center bg-green-500 text-white py-3 rounded-full font-semibold hover:bg-green-600">Enviar via WhatsApp</a>
      </div>
    </div>
  )
}