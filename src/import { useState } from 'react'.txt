import { useState } from 'react'

type Place = { nome: string; categoria: string; descricao: string; preco?: string }
type Food = { nome: string; categoria: string; descricao: string; preco?: string }
type Operator = { nome: string; logo: string; especialidade: string; whatsapp: string }
type Benefit = { titulo: string; descricao: string }
type Plan = { nome: string; preco: string; beneficios: string[]; popular?: boolean }

const ondeFicar: Place[] = [
  { nome: 'Thermas Park Resort', categoria: 'Resort', descricao: 'Acomodações premium ao lado do parque.', preco: 'R$ 890/diária' },
  { nome: 'Hot Beach Suites', categoria: 'Resort', descricao: 'Suítes modernas com acesso ao complexo.', preco: 'R$ 740/diária' },
  { nome: 'Pousada Águas Claras', categoria: 'Pousada', descricao: 'Tranquilidade e conforto no centro.', preco: 'R$ 320/diária' },
  { nome: 'Hotel Central Olímpia', categoria: 'Hotel', descricao: 'Localização privilegiada e ótimo custo-benefício.', preco: 'R$ 280/diária' },
  { nome: 'Enjoy Olímpia Park Resort', categoria: 'Resort', descricao: 'Diversão garantida para toda família.', preco: 'R$ 690/diária' },
  { nome: 'Recanto Tropical Pousada', categoria: 'Pousada', descricao: 'Ambiente rústico e acolhedor.', preco: 'R$ 260/diária' },
]

const ondeComer: Food[] = [
  { nome: 'Churrascaria Boi de Ouro', categoria: 'Churrascaria', descricao: 'A melhor carne da cidade.', preco: '$$$' },
  { nome: 'Cantina da Nona', categoria: 'Restaurante', descricao: 'Comida caseira com filas todo dia.', preco: '$$' },
  { nome: 'Café Colonial Olímpia', categoria: 'Cafeteria', descricao: 'Café colonial completo aos domingos.', preco: '$$' },
  { nome: 'Bar do Porto', categoria: 'Bar', descricao: 'Porções generosas e cerveja gelada.', preco: '$$' },
  { nome: 'Gelateria Tropicana', categoria: 'Sorveteria', descricao: 'Sabores tropicais incríveis.', preco: '$' },
  { nome: 'Restaurante Mirante', categoria: 'Restaurante', descricao: 'Vista panorâmica e alta gastronomia.', preco: '$$$' },
]

const operadoras: Operator[] = [
  { nome: 'Turismo Olímpia', logo: '🌐', especialidade: 'Pacotes para parques', whatsapp: '5517999999991' },
  { nome: 'Pacote Fácil', logo: '🎫', especialidade: 'Ingressos e transfers', whatsapp: '5517999999992' },
  { nome: 'Trip Olímpia', logo: '🚐', especialidade: 'Excursões em grupo', whatsapp: '5517999999993' },
  { nome: 'Viva Olímpia', logo: '🏨', especialidade: 'Hospedagem + parques', whatsapp: '5517999999994' },
]

const beneficios: Benefit[] = [
  { titulo: 'Sobremesa grátis', descricao: 'Na compra de um prato principal em restaurantes parceiros.' },
  { titulo: 'Drink em dobro', descricao: 'Compre um drink e ganhe outro em bares selecionados.' },
  { titulo: '15% OFF em ingressos', descricao: 'Desconto em parques aquáticos parceiros.' },
  { titulo: 'Upgrade de quarto', descricao: 'Sujeito a disponibilidade em hotéis selecionados.' },
  { titulo: 'Tour guiado grátis', descricao: 'Para grupos acima de 4 pessoas.' },
  { titulo: 'Voucher de estacionamento', descricao: 'Válido nos parques e centros de eventos.' },
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
      case 'home':
        return <Home navigate={navigate} />
      case 'onde-ficar':
        return <OndeFicar data={ondeFicar} />
      case 'onde-comer':
        return <OndeComer data={ondeComer} />
      case 'operadoras':
        return <Operadoras data={operadoras} />
      case 'beneficios':
        return <Beneficios data={beneficios} />
      case 'seja-parceiro':
        return <SejaParceiro planos={planos} />
      case 'contato':
        return <Contato />
      default:
        return <Home navigate={navigate} />
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-orange-50 font-sans">
      <nav className="bg-gradient-to-r from-orange-600 to-amber-500 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <button onClick={() => navigate('home')} className="text-2xl font-bold hover:opacity-80">Olímpia de Verdade</button>
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <button onClick={() => navigate('onde-ficar')} className="hover:underline">Onde Ficar</button>
            <button onClick={() => navigate('onde-comer')} className="hover:underline">Onde Comer</button>
            <button onClick={() => navigate('operadoras')} className="hover:underline">Operadoras</button>
            <button onClick={() => navigate('beneficios')} className="hover:underline">Benefícios</button>
            <button onClick={() => navigate('seja-parceiro')} className="hover:underline">Seja Parceiro</button>
            <button onClick={() => navigate('contato')} className="hover:underline">Contato</button>
          </div>
          <button className="md:hidden text-2xl">☰</button>
        </div>
      </nav>

      <main className="flex-1">{renderPage()}</main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg font-bold">Olímpia de Verdade</p>
          <p className="text-sm mt-2">O guia local mais completo de Olímpia-SP.</p>
          <p className="text-xs mt-4 opacity-70">© 2026 Olímpia de Verdade · Feito por quem nasceu aqui</p>
        </div>
      </footer>
    </div>
  )
}

function Home({ navigate }: { navigate: (p: string) => void }) {
  return (
    <div>
      <section className="bg-gradient-to-b from-orange-500 to-amber-400 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Tudo o que você precisa para aproveitar Olímpia gastando menos.</h1>
        <p className="text-xl mb-8">As melhores dicas direto de quem nasceu aqui.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={() => navigate('onde-ficar')} className="bg-white text-orange-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100">Onde Ficar</button>
          <button onClick={() => navigate('onde-comer')} className="bg-white text-orange-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100">Onde Comer</button>
          <button onClick={() => navigate('beneficios')} className="bg-white text-orange-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100">Ver Benefícios</button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Por que usar o Olímpia de Verdade?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow">
            <span className="text-4xl">📍</span>
            <h3 className="text-xl font-semibold mt-4">Guia Local</h3>
            <p className="text-gray-600 mt-2">Curadoria de quem mora em Olímpia há mais de 15 anos.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow">
            <span className="text-4xl">💰</span>
            <h3 className="text-xl font-semibold mt-4">Economia</h3>
            <p className="text-gray-600 mt-2">Cupons e descontos exclusivos nos melhores lugares.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow">
            <span className="text-4xl">🤝</span>
            <h3 className="text-xl font-semibold mt-4">Parceiros Verificados</h3>
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
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Onde Ficar em Olímpia</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, i) => (
          <div key={i} className="bg-white rounded-xl shadow overflow-hidden hover:shadow-lg transition">
            <div className="h-40 bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white text-4xl">🏨</div>
            <div className="p-4">
              <span className="text-xs font-semibold text-orange-600">{item.categoria}</span>
              <h3 className="text-xl font-bold mt-1">{item.nome}</h3>
              <p className="text-gray-600 text-sm mt-1">{item.descricao}</p>
              {item.preco && <p className="text-lg font-bold text-orange-700 mt-2">{item.preco}</p>}
              <a
                href={`https://wa.me/5517999999999?text=Olá! Tenho interesse em ${item.nome}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm hover:bg-green-600"
              >
                Chamar no WhatsApp
              </a>
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
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Onde Comer em Olímpia</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, i) => (
          <div key={i} className="bg-white rounded-xl shadow overflow-hidden hover:shadow-lg transition">
            <div className="h-40 bg-gradient-to-br from-red-400 to-orange-500 flex items-center justify-center text-white text-4xl">🍽️</div>
            <div className="p-4">
              <span className="text-xs font-semibold text-red-600">{item.categoria}</span>
              <h3 className="text-xl font-bold mt-1">{item.nome}</h3>
              <p className="text-gray-600 text-sm mt-1">{item.descricao}</p>
              {item.preco && <p className="text-lg font-bold text-red-700 mt-2">{item.preco}</p>}
              <a
                href={`https://wa.me/5517999999999?text=Olá! Gostaria de saber mais sobre ${item.nome}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm hover:bg-green-600"
              >
                Reservar / Info
              </a>
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
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Operadoras Parceiras</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((op, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-6 text-center">
            <span className="text-5xl">{op.logo}</span>
            <h3 className="text-xl font-bold mt-4">{op.nome}</h3>
            <p className="text-gray-600 text-sm mt-1">{op.especialidade}</p>
            <a
              href={`https://wa.me/${op.whatsapp}?text=Olá! Quero um orçamento com ${op.nome}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm hover:bg-green-600"
            >
              Pedir Orçamento
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

function Beneficios({ data }: { data: Benefit[] }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Clube de Benefícios</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((b, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-6 flex items-start gap-4">
            <span className="text-3xl">🎁</span>
            <div>
              <h3 className="text-xl font-semibold">{b.titulo}</h3>
              <p className="text-gray-600 mt-1">{b.descricao}</p>
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

function SejaParceiro({ planos }: { planos: Plan[] }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">Seja um Parceiro</h1>
      <p className="text-center text-gray-600 mb-12">Anuncie para milhares de turistas que visitam Olímpia</p>
      <div className="grid md:grid-cols-3 gap-8">
        {planos.map((plan, i) => (
          <div key={i} className={`bg-white rounded-xl shadow p-8 flex flex-col ${plan.popular ? 'ring-2 ring-orange-500 scale-105' : ''}`}>
            {plan.popular && <span className="text-xs font-bold text-orange-600 uppercase mb-2">Mais Popular</span>}
            <h3 className="text-2xl font-bold">{plan.nome}</h3>
            <p className="text-3xl font-extrabold mt-4">{plan.preco}</p>
            <ul className="mt-6 flex-1 space-y-2">
              {plan.beneficios.map((b, j) => (
                <li key={j} className="flex items-center gap-2 text-gray-700"><span className="text-green-500">✔</span> {b}</li>
              ))}
            </ul>
            <a
              href="https://wa.me/5517999999999?text=Quero ser parceiro no plano Essencial"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block text-center bg-orange-600 text-white py-3 rounded-full font-semibold hover:bg-orange-700"
            >
              Quero anunciar
            </a>
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
        <a
          href="https://wa.me/5517999999999?text=Olá, vim pelo site Olímpia de Verdade!"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-green-500 text-white py-3 rounded-full font-semibold hover:bg-green-600"
        >
          Enviar via WhatsApp
        </a>
      </div>
    </div>
  )
}

export default App