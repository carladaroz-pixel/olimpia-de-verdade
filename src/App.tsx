import { useState } from 'react'

type Place = { nome: string; categoria: string; descricao: string; preco?: string; imagem: string }
type Food = { nome: string; categoria: string; descricao: string; preco?: string; imagem: string }
type Operator = { nome: string; logo: string; especialidade: string; whatsapp: string; imagem: string }
type Benefit = { titulo: string; descricao: string; icone: string }
type Plan = { nome: string; preco: string; beneficios: string[]; popular?: boolean }

const WHATSAPP = '55179988311133'

const ondeFicar: Place[] = [
  { nome: 'Thermas Park Resort', categoria: 'Resort', descricao: 'Acomodações premium ao lado do parque aquático.', preco: 'R$ 890/diária', imagem: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600' },
  { nome: 'Hot Beach Suites', categoria: 'Resort', descricao: 'Suítes modernas com acesso ao complexo Hot Beach.', preco: 'R$ 740/diária', imagem: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600' },
  { nome: 'Pousada Águas Claras', categoria: 'Pousada', descricao: 'Tranquilidade e conforto no centro de Olímpia.', preco: 'R$ 320/diária', imagem: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600' },
  { nome: 'Hotel Central Olímpia', categoria: 'Hotel', descricao: 'Localização privilegiada e ótimo custo-benefício.', preco: 'R$ 280/diária', imagem: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600' },
  { nome: 'Enjoy Olímpia Park Resort', categoria: 'Resort', descricao: 'Diversão garantida para toda família.', preco: 'R$ 690/diária', imagem: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600' },
  { nome: 'Recanto Tropical Pousada', categoria: 'Pousada', descricao: 'Ambiente rústico e acolhedor.', preco: 'R$ 260/diária', imagem: 'https://images.unsplash.com/photo-1585543805890-6051f7829f98?w=600' },
]

const ondeComer: Food[] = [
  { nome: 'Churrascaria Boi de Ouro', categoria: 'Churrascaria', descricao: 'A melhor carne da cidade. Top 1 de Olímpia.', preco: '$$$', imagem: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600' },
  { nome: 'Cantina da Nona', categoria: 'Restaurante', descricao: 'Comida caseira com filas todo dia.', preco: '$$', imagem: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600' },
  { nome: 'Café Colonial Olímpia', categoria: 'Cafeteria', descricao: 'Café colonial completo aos domingos.', preco: '$$', imagem: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600' },
  { nome: 'Bar do Porto', categoria: 'Bar', descricao: 'Porções generosas e cerveja gelada.', preco: '$$', imagem: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600' },
  { nome: 'Gelateria Tropicana', categoria: 'Sorveteria', descricao: 'Sabores tropicais incríveis.', preco: '$', imagem: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600' },
  { nome: 'Restaurante Mirante', categoria: 'Restaurante', descricao: 'Vista panorâmica e alta gastronomia.', preco: '$$$', imagem: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600' },
]

const operadoras: Operator[] = [
  { nome: 'Turismo Olímpia', logo: '🚐', especialidade: 'Pacotes para parques', whatsapp: WHATSAPP, imagem: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600' },
  { nome: 'Pacote Fácil', logo: '🎫', especialidade: 'Ingressos e transfers', whatsapp: WHATSAPP, imagem: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600' },
  { nome: 'Trip Olímpia', logo: '✈️', especialidade: 'Excursões em grupo', whatsapp: WHATSAPP, imagem: 'https://images.unsplash.com/photo-1436491865332-7a61a109bb05?w=600' },
  { nome: 'Viva Olímpia', logo: '🏨', especialidade: 'Hospedagem + parques', whatsapp: WHATSAPP, imagem: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600' },
]

const beneficios: Benefit[] = [
  { titulo: 'Sobremesa grátis', descricao: 'Na compra de um prato principal em restaurantes parceiros.', icone: '🍰' },
  { titulo: 'Drink em dobro', descricao: 'Compre um drink e ganhe outro em bares selecionados.', icone: '🍹' },
  { titulo: '15% OFF em ingressos', descricao: 'Desconto em parques aquáticos parceiros.', icone: '🎢' },
  { titulo: 'Upgrade de quarto', descricao: 'Sujeito a disponibilidade em hotéis selecionados.', icone: '⭐' },
  { titulo: 'Tour guiado grátis', descricao: 'Para grupos acima de 4 pessoas.', icone: '🗺️' },
  { titulo: 'Voucher de estacionamento', descricao: 'Válido nos parques e centros de eventos.', icone: '🅿️' },
]

const planos: Plan[] = [
  { nome: 'Essencial', preco: 'R$99/mês', beneficios: ['Ficha no portal', '1 foto', 'Contato direto'] },
  { nome: 'Destaque', preco: 'R$199/mês', beneficios: ['Ficha destacada', '10 fotos', 'Cupom de desconto', '1 post no blog'], popular: true },
  { nome: 'Premium', preco: 'R$399/mês', beneficios: ['Topo do diretório', 'Fotos ilimitadas', 'Cupons + vídeo', '3 posts no blog', 'Gestor dedicado'] },
]

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const navigate = (page: string) => setCurrentPage(page)

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home navigate={navigate} />
      case 'onde-ficar': return <OndeFicar data={ondeFicar} />
      case 'onde-comer': return <OndeComer data={ondeComer} />
      case 'operadoras': return <Operadoras data={operadoras} />
      case 'beneficios': return <Beneficios data={beneficios} />
      case 'seja-parceiro': return <SejaParceiro planos={planos} />
      case 'contato': return <Contato />
      default: return <Home navigate={navigate} />
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <nav className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 text-white shadow-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <button onClick={() => navigate('home')} className="text-2xl font-extrabold tracking-tight hover:scale-105 transition">🌴 Olímpia de Verdade</button>
          <div className="hidden md:flex gap-6 text-sm font-semibold">
            {['onde-ficar','onde-comer','operadoras','beneficios','seja-parceiro','contato'].map(p => (
              <button key={p} onClick={() => navigate(p)} className="hover:underline capitalize">{p.replace('-',' ')}</button>
            ))}
          </div>
          <button className="md:hidden text-2xl">☰</button>
        </div>
      </nav>

      <main className="flex-1">{renderPage()}</main>

      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-2xl font-bold">🌴 Olímpia de Verdade</p>
          <p className="text-sm mt-2 text-gray-300">O guia local mais completo de Olímpia-SP.</p>
          <p className="text-sm mt-2">Fale com o Luciano: <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline font-semibold">(17) 98831-1133</a></p>
          <p className="text-xs mt-4 text-gray-500">© 2026 Olímpia de Verdade · Feito por quem nasceu aqui</p>
        </div>
      </footer>

      <a href={`https://wa.me/${WHATSAPP}?text=Olá! Vim pelo site Olímpia de Verdade`} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition z-50" title="Fale com o Luciano">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
      </a>
    </div>
  )
}

function Home({ navigate }: { navigate: (p: string) => void }) {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-cyan-400 via-blue-500 to-orange-400 text-white py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-4 drop-shadow-lg">☀️ Tudo o que você precisa para aproveitar Olímpia gastando menos.</h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow">As melhores dicas direto de quem nasceu aqui.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => navigate('onde-ficar')} className="bg-white text-blue-700 font-bold px-8 py-4 rounded-full hover:bg-yellow-300 transition text-lg">🏨 Onde Ficar</button>
            <button onClick={() => navigate('onde-comer')} className="bg-white text-blue-700 font-bold px-8 py-4 rounded-full hover:bg-yellow-300 transition text-lg">🍽️ Onde Comer</button>
            <button onClick={() => navigate('beneficios')} className="bg-white text-blue-700 font-bold px-8 py-4 rounded-full hover:bg-yellow-300 transition text-lg">🎁 Ver Benefícios</button>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">Por que usar o Olímpia de Verdade?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition border border-orange-100">
            <span className="text-5xl">📍</span>
            <h3 className="text-2xl font-bold mt-4">Guia Local</h3>
            <p className="text-gray-600 mt-2">Curadoria de quem mora em Olímpia há mais de 15 anos.</p>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition border border-orange-100">
            <span className="text-5xl">💰</span>
            <h3 className="text-2xl font-bold mt-4">Economia</h3>
            <p className="text-gray-600 mt-2">Cupons e descontos exclusivos nos melhores lugares.</p>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition border border-orange-100">
            <span className="text-5xl">🤝</span>
            <h3 className="text-2xl font-bold mt-4">Parceiros Verificados</h3>
            <p className="text-gray-600 mt-2">Todos os estabelecimentos são checados pessoalmente.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

function OndeFicar({ data }: { data: Place[] }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-5xl font-black text-center mb-8 text-gray-800">🏨 Onde Ficar em Olímpia</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition border border-orange-100">
            <img src={item.imagem} alt={item.nome} className="h-56 w-full object-cover" />
            <div className="p-5">
              <span className="text-xs font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded-full">{item.categoria}</span>
              <h3 className="text-2xl font-bold mt-2">{item.nome}</h3>
              <p className="text-gray-600 text-sm mt-1">{item.descricao}</p>
              {item.preco && <p className="text-xl font-extrabold text-orange-700 mt-2">{item.preco}</p>}
              <a href={`https://wa.me/${WHATSAPP}?text=Olá! Tenho interesse em ${item.nome}`} target="_blank" rel="noopener noreferrer" className="mt-4 block text-center bg-green-500 text-white py-3 rounded-full font-bold hover:bg-green-600 transition">💬 Chamar no WhatsApp</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function OndeComer({ data }: { data: Food[] }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-5xl font-black text-center mb-8 text-gray-800">🍽️ Onde Comer em Olímpia</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition border border-orange-100">
            <img src={item.imagem} alt={item.nome} className="h-56 w-full object-cover" />
            <div className="p-5">
              <span className="text-xs font-bold text-red-600 bg-red-100 px-2 py-1 rounded-full">{item.categoria}</span>
              <h3 className="text-2xl font-bold mt-2">{item.nome}</h3>
              <p className="text-gray-600 text-sm mt-1">{item.descricao}</p>
              {item.preco && <p className="text-xl font-extrabold text-red-700 mt-2">{item.preco}</p>}
              <a href={`https://wa.me/${WHATSAPP}?text=Olá! Gostaria de saber mais sobre ${item.nome}`} target="_blank" rel="noopener noreferrer" className="mt-4 block text-center bg-green-500 text-white py-3 rounded-full font-bold hover:bg-green-600 transition">💬 Reservar / Info</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Operadoras({ data }: { data: Operator[] }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-5xl font-black text-center mb-8 text-gray-800">🚐 Operadoras Parceiras</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((op, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition border border-orange-100">
            <img src={op.imagem} alt={op.nome} className="h-40 w-full object-cover" />
            <div className="p-5 text-center">
              <span className="text-4xl">{op.logo}</span>
              <h3 className="text-xl font-bold mt-2">{op.nome}</h3>
              <p className="text-gray-600 text-sm mt-1">{op.especialidade}</p>
              <a href={`https://wa.me/${op.whatsapp}?text=Olá! Quero um orçamento com ${op.nome}`} target="_blank" rel="noopener noreferrer" className="mt-4 block text-center bg-green-500 text-white py-3 rounded-full font-bold hover:bg-green-600 transition">💬 Pedir Orçamento</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Beneficios({ data }: { data: Benefit[] }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-5xl font-black text-center mb-8 text-gray-800">🎁 Clube de Benefícios</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((b, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-xl p-6 flex items-start gap-4 hover:shadow-2xl transition border border-orange-100">
            <span className="text-4xl">{b.icone}</span>
            <div>
              <h3 className="text-xl font-bold">{b.titulo}</h3>
              <p className="text-gray-600 mt-1">{b.descricao}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-md mx-auto mt-12 bg-white rounded-2xl shadow-2xl p-8 border border-orange-200">
        <h2 className="text-3xl font-black text-center mb-4">Receba novos cupons</h2>
        <input type="text" placeholder="Seu nome" className="w-full border-2 border-orange-200 p-3 rounded-xl mb-3 focus:outline-orange-500" />
        <input type="text" placeholder="WhatsApp" className="w-full border-2 border-orange-200 p-3 rounded-xl mb-3 focus:outline-orange-500" />
        <input type="email" placeholder="E-mail" className="w-full border-2 border-orange-200 p-3 rounded-xl mb-4 focus:outline-orange-500" />
        <button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-3 rounded-full font-bold text-lg hover:from-orange-600 hover:to-amber-600 transition shadow-lg">Quero cupons grátis</button>
      </div>
    </div>
  )
}

function SejaParceiro({ planos }: { planos: Plan[] }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-5xl font-black text-center mb-4 text-gray-800">💰 Seja um Parceiro</h1>
      <p className="text-center text-gray-600 mb-12 text-lg">Anuncie para milhares de turistas que visitam Olímpia</p>
      <div className="grid md:grid-cols-3 gap-8">
        {planos.map((plan, i) => (
          <div key={i} className={`bg-white rounded-2xl shadow-xl p-8 flex flex-col border-2 ${plan.popular ? 'border-orange-500 scale-105' : 'border-orange-100'}`}>
            {plan.popular && <span className="text-sm font-black text-orange-600 uppercase mb-2">⭐ Mais Popular</span>}
            <h3 className="text-3xl font-black">{plan.nome}</h3>
            <p className="text-4xl font-black mt-4 text-orange-600">{plan.preco}</p>
            <ul className="mt-6 flex-1 space-y-3">
              {plan.beneficios.map((b, j) => (
                <li key={j} className="flex items-center gap-2 text-gray-700"><span className="text-green-500 text-xl">✔</span> {b}</li>
              ))}
            </ul>
            <a href={`https://wa.me/${WHATSAPP}?text=Quero ser parceiro no plano ${plan.nome}`} target="_blank" rel="noopener noreferrer" className="mt-8 block text-center bg-gradient-to-r from-orange-500 to-amber-500 text-white py-4 rounded-full font-bold text-lg hover:from-orange-600 hover:to-amber-600 transition shadow-lg">💬 Quero anunciar</a>
          </div>
        ))}
      </div>
    </div>
  )
}

function Contato() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-5xl font-black text-center mb-8 text-gray-800">📞 Fale Conosco</h1>
      <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-2xl p-8 border border-orange-200">
        <input type="text" placeholder="Seu nome" className="w-full border-2 border-orange-200 p-3 rounded-xl mb-3 focus:outline-orange-500" />
        <input type="text" placeholder="WhatsApp" className="w-full border-2 border-orange-200 p-3 rounded-xl mb-3 focus:outline-orange-500" />
        <textarea placeholder="Sua mensagem" rows={4} className="w-full border-2 border-orange-200 p-3 rounded-xl mb-4 focus:outline-orange-500" />
        <a href={`https://wa.me/${WHATSAPP}?text=Olá, vim pelo site Olímpia de Verdade!`} target="_blank" rel="noopener noreferrer" className="block text-center bg-green-500 text-white py-4 rounded-full font-bold text-lg hover:bg-green-600 transition shadow-lg">💬 Enviar via WhatsApp</a>
      </div>
    </div>
  )
}

export default App
