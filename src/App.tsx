import { useState } from 'react'

const WHATSAPP = '55179988311133'
const EMAIL = 'contato@olimpiadeverdade.com.br'

type Place = {
  nome: string
  categoria: string
  descricao: string
  preco: string
  imagem: string
  verificado: boolean
  selo?: string
}
type Food = {
  nome: string
  categoria: string
  descricao: string
  preco: string
  imagem: string
  verificado: boolean
  selo?: string
}
type Cupom = {
  parceiro: string
  nome: string
  desconto: string
  codigo: string
  valido: string
  cor: string
}
type Evento = {
  mes: string
  dia: string
  categoria: string
  titulo: string
  local: string
  hora: string
}
type Post = {
  titulo: string
  descricao: string
  categoria: string
  imagem: string
}
type Video = {
  titulo: string
  duracao: string
  thumbnail: string
}

const ondeFicar: Place[] = [
  { nome: 'Thermas Park Resort', categoria: 'Resort', descricao: 'Acomodações premium ao lado do parque aquático.', preco: 'R$ 890/diária', imagem: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600', verificado: true },
  { nome: 'Hot Beach Suites', categoria: 'Resort', descricao: 'Suítes modernas com acesso ao complexo Hot Beach.', preco: 'R$ 740/diária', imagem: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600', verificado: true },
  { nome: 'Pousada Águas Claras', categoria: 'Pousada', descricao: 'Tranquilidade e conforto no centro.', preco: 'R$ 320/diária', imagem: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600', verificado: true },
  { nome: 'Hotel Central Olímpia', categoria: 'Hotel', descricao: 'Localização privilegiada e ótimo custo-benefício.', preco: 'R$ 280/diária', imagem: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600', verificado: false },
  { nome: 'Enjoy Olímpia Park Resort', categoria: 'Resort', descricao: 'Diversão garantida para toda família.', preco: 'R$ 690/diária', imagem: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600', verificado: true },
  { nome: 'Recanto Tropical Pousada', categoria: 'Pousada', descricao: 'Ambiente rústico e acolhedor.', preco: 'R$ 260/diária', imagem: 'https://images.unsplash.com/photo-1585543805890-6051f7829f98?w=600', verificado: false },
]

const ondeComer: Food[] = [
  { nome: 'Churrascaria Boi de Ouro', categoria: 'Churrascaria', descricao: 'A melhor carne da cidade.', preco: '$$$', imagem: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600', verificado: true, selo: '🥇 Top 1 da cidade' },
  { nome: 'Cantina da Nona', categoria: 'Restaurante', descricao: 'Comida caseira com filas todo dia.', preco: '$$', imagem: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600', verificado: true, selo: '🔥 Mais visitado' },
  { nome: 'Café Colonial Olímpia', categoria: 'Cafeteria', descricao: 'Café colonial completo aos domingos.', preco: '$$', imagem: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600', verificado: false },
  { nome: 'Bar do Porto', categoria: 'Bar', descricao: 'Porções generosas e cerveja gelada.', preco: '$$', imagem: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600', verificado: false },
  { nome: 'Gelateria Tropicana', categoria: 'Sorveteria', descricao: 'Sabores tropicais incríveis.', preco: '$', imagem: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600', verificado: false },
  { nome: 'Restaurante Mirante', categoria: 'Restaurante', descricao: 'Vista panorâmica e alta gastronomia.', preco: '$$$', imagem: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600', verificado: true, selo: '🔥 Mais visitado' },
]

const cupons: Cupom[] = [
  { parceiro: 'Thermas dos Laranjais', nome: 'TL', desconto: '15% OFF no ingresso família', codigo: 'OLIMPIA15', valido: '31/12/2026', cor: 'from-blue-400 to-blue-600' },
  { parceiro: 'Hot Beach', nome: 'HB', desconto: 'Compre 3 ingressos, leve 4', codigo: 'HOT4X3', valido: '30/06/2026', cor: 'from-orange-400 to-red-500' },
  { parceiro: 'Churrascaria Boi de Ouro', nome: 'CB', desconto: 'Sobremesa grátis', codigo: 'DOCE2026', valido: '31/12/2026', cor: 'from-amber-500 to-yellow-600' },
  { parceiro: 'Vale dos Dinossauros', nome: 'VD', desconto: '20% OFF no tour', codigo: 'DINO20', valido: '30/09/2026', cor: 'from-green-500 to-emerald-600' },
  { parceiro: 'Museu de Cera', nome: 'MC', desconto: 'Criança paga meia', codigo: 'KIDS50', valido: '31/12/2026', cor: 'from-purple-500 to-pink-500' },
  { parceiro: 'Pousada Recanto', nome: 'PR', desconto: '3ª diária por 50%', codigo: 'STAY3', valido: '31/08/2026', cor: 'from-teal-400 to-cyan-500' },
]

const eventos: Evento[] = [
  { mes: 'JUN', dia: '12', categoria: 'Música', titulo: 'Festival de Inverno Olímpia', local: 'Centro de Eventos', hora: '18:00' },
  { mes: 'JUL', dia: '20', categoria: 'Gastronomia', titulo: 'Encontro Gastronômico', local: 'Praça Central', hora: '12:00' },
  { mes: 'AGO', dia: '05', categoria: 'Cultura', titulo: 'Feira de Artesanato', local: 'Parque da Cidade', hora: '09:00' },
  { mes: 'SET', dia: '15', categoria: 'Cidade', titulo: 'Aniversário de Olímpia', local: 'Centro Histórico', hora: '10:00' },
]

const posts: Post[] = [
  { titulo: 'Roteiro de 3 dias em Olímpia', descricao: 'Como aproveitar ao máximo um fim de semana prolongado na cidade das águas.', categoria: 'Roteiro', imagem: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400' },
  { titulo: 'Como economizar nos parques', descricao: 'Dicas práticas pra gastar menos sem abrir mão da diversão.', categoria: 'Economia', imagem: 'https://images.unsplash.com/photo-1553729459-afe8a2f19f7c?w=400' },
  { titulo: '5 lugares que só morador conhece', descricao: 'Cantos escondidos e experiências autênticas longe do óbvio.', categoria: 'Dicas', imagem: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400' },
]

const videos: Video[] = [
  { titulo: 'Tour completo Thermas dos Laranjais', duracao: '12:34', thumbnail: 'https://images.unsplash.com/photo-1518384511164-5d0d4c6d5b69?w=300' },
  { titulo: 'Hot Beach vale a pena? Review', duracao: '08:21', thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300' },
  { titulo: 'Onde comer barato em Olímpia', duracao: '06:45', thumbnail: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=300' },
  { titulo: 'Passeios fora do óbvio', duracao: '15:02', thumbnail: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=300' },
]

function App() {
  const [page, setPage] = useState('home')
  const [filtroFicar, setFiltroFicar] = useState('Todos')
  const [filtroComer, setFiltroComer] = useState('Todos')

  const categoriasFicar = ['Todos', 'Resort', 'Hotel', 'Pousada', 'Temporada']
  const categoriasComer = ['Todos', 'Restaurante', 'Bar', 'Cafeteria', 'Churrascaria', 'Sorveteria']

  const filtrarFicar = filtroFicar === 'Todos' ? ondeFicar : ondeFicar.filter(p => p.categoria === filtroFicar)
  const filtrarComer = filtroComer === 'Todos' ? ondeComer : ondeComer.filter(f => f.categoria === filtroComer)

  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <button onClick={() => setPage('home')} className="text-2xl font-black text-orange-600">Olímpia de Verdade</button>
          <div className="hidden md:flex gap-6 text-sm font-semibold text-gray-700">
            <button onClick={() => setPage('onde-ficar')} className="hover:text-orange-600">Onde Ficar</button>
            <button onClick={() => setPage('onde-comer')} className="hover:text-orange-600">Onde Comer</button>
            <button onClick={() => setPage('cupons')} className="hover:text-orange-600">Cupons</button>
            <button onClick={() => setPage('eventos')} className="hover:text-orange-600">Eventos</button>
            <button onClick={() => setPage('blog')} className="hover:text-orange-600">Blog</button>
            <button onClick={() => setPage('videos')} className="hover:text-orange-600">Vídeos</button>
            <button onClick={() => setPage('sobre')} className="hover:text-orange-600">Sobre</button>
            <button onClick={() => setPage('parceiro')} className="hover:text-orange-600">Seja Parceiro</button>
          </div>
        </div>
      </nav>

      {/* Conteúdo */}
      <main>
        {page === 'home' && <Home setPage={setPage} />}
        {page === 'onde-ficar' && <OndeFicar data={filtrarFicar} filtro={filtroFicar} setFiltro={setFiltroFicar} categorias={categoriasFicar} />}
        {page === 'onde-comer' && <OndeComer data={filtrarComer} filtro={filtroComer} setFiltro={setFiltroComer} categorias={categoriasComer} />}
        {page === 'cupons' && <Cupons data={cupons} />}
        {page === 'eventos' && <Eventos data={eventos} />}
        {page === 'blog' && <Blog data={posts} />}
        {page === 'videos' && <Videos data={videos} />}
        {page === 'sobre' && <Sobre />}
        {page === 'parceiro' && <Parceiro />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div>
            <p className="text-2xl font-black">Olímpia de Verdade</p>
            <p className="text-sm text-gray-400 mt-2">O guia local mais completo de Olímpia-SP.</p>
          </div>
          <div>
            <p className="font-bold mb-2">Explorar</p>
            <div className="grid grid-cols-2 gap-1 text-sm text-gray-400">
              <button onClick={() => setPage('onde-ficar')} className="hover:text-white text-left">Onde Ficar</button>
              <button onClick={() => setPage('onde-comer')} className="hover:text-white text-left">Onde Comer</button>
              <button onClick={() => setPage('cupons')} className="hover:text-white text-left">Cupons</button>
              <button onClick={() => setPage('eventos')} className="hover:text-white text-left">Eventos</button>
              <button onClick={() => setPage('blog')} className="hover:text-white text-left">Blog</button>
              <button onClick={() => setPage('videos')} className="hover:text-white text-left">Vídeos</button>
            </div>
          </div>
          <div>
            <p className="font-bold mb-2">Contato</p>
            <p className="text-sm text-gray-400">WhatsApp: (17) 98831-1133</p>
            <p className="text-sm text-gray-400">contato@olimpiadeverdade.com.br</p>
          </div>
        </div>
        <p className="text-center text-xs text-gray-600 mt-8">© 2026 Olímpia de Verdade · Feito por quem nasceu aqui</p>
      </footer>

      {/* Botão WhatsApp flutuante */}
      <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition z-50">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
      </a>
    </div>
  )
}

function Home({ setPage }: { setPage: (p: string) => void }) {
  return (
    <div>
      {/* Hero com imagem de fundo */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200"
          alt="Thermas dos Laranjais - Olímpia"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <span className="inline-block bg-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">🌴 O guia mais completo de Olímpia-SP</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 drop-shadow-2xl leading-tight">
            As melhores dicas de Olímpia direto de quem nasceu aqui
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 drop-shadow-lg">
            Apresentado por Luciano — morador, conhecedor e apaixonado pela cidade.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => setPage('onde-ficar')} className="bg-white text-blue-900 font-bold px-8 py-4 rounded-full hover:bg-yellow-300 transition text-lg shadow-xl hover:shadow-2xl transform hover:scale-105">
              🏨 Planejar minha viagem
            </button>
            <button onClick={() => setPage('cupons')} className="bg-yellow-400 text-blue-900 font-bold px-8 py-4 rounded-full hover:bg-yellow-300 transition text-lg shadow-xl hover:shadow-2xl transform hover:scale-105">
              🎫 Ver cupons de desconto
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
      </section>

      {/* Contadores */}
      <section className="max-w-5xl mx-auto py-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition">
          <span className="text-4xl font-black text-orange-600">200+</span>
          <p className="text-gray-500 text-sm mt-1">Parceiros</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition">
          <span className="text-4xl font-black text-orange-600">50+</span>
          <p className="text-gray-500 text-sm mt-1">Cupons ativos</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition">
          <span className="text-4xl font-black text-orange-600">15 anos</span>
          <p className="text-gray-500 text-sm mt-1">Morando em Olímpia</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition">
          <span className="text-4xl font-black text-orange-600">4.9★</span>
          <p className="text-gray-500 text-sm mt-1">Avaliação</p>
        </div>
      </section>

      {/* Cards de acesso rápido */}
      <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6 pb-16">
        <button onClick={() => setPage('onde-ficar')} className="group relative h-64 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition">
          <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600" alt="Hospedagem" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <span className="text-3xl">🏨</span>
            <h3 className="text-2xl font-bold mt-2">Hospedagem</h3>
            <p className="text-sm text-white/80 mt-1">Resorts, hotéis e pousadas verificados pelo Luciano.</p>
          </div>
        </button>
        <button onClick={() => setPage('onde-comer')} className="group relative h-64 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition">
          <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600" alt="Gastronomia" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <span className="text-3xl">🍽️</span>
            <h3 className="text-2xl font-bold mt-2">Gastronomia</h3>
            <p className="text-sm text-white/80 mt-1">Sabores autênticos escolhidos por quem é da cidade.</p>
          </div>
        </button>
        <button onClick={() => setPage('cupons')} className="group relative h-64 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition">
          <img src="https://images.unsplash.com/photo-1553729459-afe8a2f19f7c?w=600" alt="Cupons" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <span className="text-3xl">🎫</span>
            <h3 className="text-2xl font-bold mt-2">Cupons</h3>
            <p className="text-sm text-white/80 mt-1">Descontos exclusivos nos melhores lugares.</p>
          </div>
        </button>
      </section>

      {/* Galeria de Olímpia */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-8">Conheça Olímpia</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400" alt="Parque aquático" className="rounded-2xl h-48 w-full object-cover shadow-lg hover:scale-105 transition" />
            <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400" alt="Piscina" className="rounded-2xl h-48 w-full object-cover shadow-lg hover:scale-105 transition" />
            <img src="https://images.unsplash.com/photo-1518384511164-5d0d4c6d5b69?w=400" alt="Diversão" className="rounded-2xl h-48 w-full object-cover shadow-lg hover:scale-105 transition" />
            <img src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400" alt="Olímpia" className="rounded-2xl h-48 w-full object-cover shadow-lg hover:scale-105 transition" />
          </div>
        </div>
      </section>
    </div>
  )
}

function OndeFicar({ data, filtro, setFiltro, categorias }: { data: Place[]; filtro: string; setFiltro: (f: string) => void; categorias: string[] }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-black text-center mb-2">Onde Ficar em Olímpia</h1>
      <p className="text-center text-gray-500 mb-6">Resorts, hotéis e pousadas verificados pelo Luciano.</p>
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categorias.map(c => (
          <button key={c} onClick={() => setFiltro(c)} className={`px-4 py-2 rounded-full text-sm font-semibold ${filtro === c ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>{c}</button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition border border-orange-100">
            <div className="relative">
              <img src={item.imagem} alt={item.nome} className="h-56 w-full object-cover" />
              {item.verificado && <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">✓ Parceiro Verificado</span>}
            </div>
            <div className="p-5">
              <span className="text-xs font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded-full">{item.categoria}</span>
              <h3 className="text-xl font-bold mt-2">{item.nome}</h3>
              <p className="text-gray-500 text-sm mt-1">{item.descricao}</p>
              <p className="text-xl font-black text-orange-600 mt-2">{item.preco}</p>
              <a href={`https://wa.me/${WHATSAPP}?text=Olá! Tenho interesse em ${item.nome}`} target="_blank" rel="noopener noreferrer" className="mt-4 block text-center bg-green-500 text-white py-3 rounded-full font-bold hover:bg-green-600 transition">💬 Chamar no WhatsApp</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function OndeComer({ data, filtro, setFiltro, categorias }: { data: Food[]; filtro: string; setFiltro: (f: string) => void; categorias: string[] }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-black text-center mb-2">Onde Comer em Olímpia</h1>
      <p className="text-center text-gray-500 mb-6">Sabores autênticos escolhidos por quem é da cidade.</p>
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categorias.map(c => (
          <button key={c} onClick={() => setFiltro(c)} className={`px-4 py-2 rounded-full text-sm font-semibold ${filtro === c ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>{c}</button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition border border-orange-100">
            <div className="relative">
              <img src={item.imagem} alt={item.nome} className="h-56 w-full object-cover" />
              {item.verificado && <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">✓ Parceiro Verificado</span>}
              {item.selo && <span className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">{item.selo}</span>}
            </div>
            <div className="p-5">
              <span className="text-xs font-bold text-red-600 bg-red-100 px-2 py-1 rounded-full">{item.categoria}</span>
              <h3 className="text-xl font-bold mt-2">{item.nome}</h3>
              <p className="text-gray-500 text-sm mt-1">{item.descricao}</p>
              <p className="text-xl font-black text-red-600 mt-2">{item.preco}</p>
              <a href={`https://wa.me/${WHATSAPP}?text=Olá! Gostaria de saber mais sobre ${item.nome}`} target="_blank" rel="noopener noreferrer" className="mt-4 block text-center bg-green-500 text-white py-3 rounded-full font-bold hover:bg-green-600 transition">💬 Chamar no WhatsApp</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Cupons({ data }: { data: Cupom[] }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-black text-center mb-2">Cupons de Desconto Exclusivos</h1>
      <p className="text-center text-gray-500 mb-8">Sua carteira de cupons para economizar em Olímpia.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((c, i) => (
          <div key={i} className={`bg-gradient-to-br ${c.cor} text-white rounded-2xl shadow-xl p-6 relative overflow-hidden`}>
            <div className="absolute top-0 right-0 bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">Parceiro</div>
            <span className="text-3xl font-black">{c.nome}</span>
            <h3 className="text-xl font-bold mt-2">{c.parceiro}</h3>
            <p className="text-lg font-semibold mt-2">{c.desconto}</p>
            <p className="text-3xl font-black mt-3 tracking-wider">{c.codigo}</p>
            <p className="text-xs opacity-80 mt-2">Válido até {c.valido}</p>
            <a href={`https://wa.me/${WHATSAPP}?text=Quero resgatar o cupom ${c.codigo}`} target="_blank" rel="noopener noreferrer" className="mt-4 block text-center bg-white text-gray-900 py-2 rounded-full font-bold hover:bg-yellow-300 transition">Resgatar cupom</a>
          </div>
        ))}
      </div>
    </div>
  )
}

function Eventos({ data }: { data: Evento[] }) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-black text-center mb-8">Eventos em Olímpia</h1>
      <div className="space-y-4">
        {data.map((e, i) => (
          <div key={i} className="bg-white border border-orange-100 rounded-2xl shadow-lg p-5 flex items-center gap-4 hover:shadow-xl transition">
            <div className="text-center min-w-[60px]">
              <p className="text-xs font-bold text-orange-600">{e.mes}</p>
              <p className="text-3xl font-black">{e.dia}</p>
            </div>
            <div className="flex-1">
              <span className="text-xs font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded-full">{e.categoria}</span>
              <h3 className="text-lg font-bold mt-1">{e.titulo}</h3>
              <p className="text-sm text-gray-500">{e.local} · {e.hora}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Blog({ data }: { data: Post[] }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-black text-center mb-8">Dicas, Roteiros e Novidades</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {data.map((p, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition border border-orange-100">
            <img src={p.imagem} alt={p.titulo} className="h-48 w-full object-cover" />
            <div className="p-5">
              <span className="text-xs font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded-full">{p.categoria}</span>
              <h3 className="text-lg font-bold mt-2">{p.titulo}</h3>
              <p className="text-sm text-gray-500 mt-1">{p.descricao}</p>
              <button className="mt-3 text-orange-600 font-bold text-sm hover:underline">Ler mais →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Videos({ data }: { data: Video[] }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-black text-center mb-8">Vídeos do Olímpia de Verdade</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((v, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition border border-orange-100">
            <div className="relative">
              <img src={v.thumbnail} alt={v.titulo} className="h-40 w-full object-cover" />
              <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">{v.duracao}</span>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-sm">{v.titulo}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Sobre() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-black text-center mb-8">Sobre o Luciano</h1>
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-orange-100 text-center">
        <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full mx-auto flex items-center justify-center text-white text-5xl font-black">LZ</div>
        <h2 className="text-2xl font-bold mt-4">Luciano Zangirolami</h2>
        <p className="text-gray-500 text-sm">Piloto, viajante e olimpiense de coração.</p>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Sou Luciano Zangirolami, piloto automobilístico profissional. A vida nas pistas me levou a correr e viajar pelo mundo inteiro — conheci dezenas de países, culturas e destinos turísticos. E é justamente por isso que posso garantir com toda a certeza: Olímpia é uma surpresa pra quem nunca veio.
        </p>
        <p className="italic text-gray-700 font-semibold mt-4">"Já corri pelo mundo todo. E posso afirmar: Olímpia é uma das melhores surpresas que você pode ter no Brasil."</p>
        <div className="mt-6 flex justify-center gap-4">
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition">💬 WhatsApp</a>
          <a href={`mailto:${EMAIL}`} className="bg-gray-200 text-gray-700 px-6 py-3 rounded-full font-bold hover:bg-gray-300 transition">📧 E-mail</a>
        </div>
      </div>
    </div>
  )
}

function Parceiro() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-black text-center mb-4">Para empresas</h1>
      <p className="text-center text-gray-500 mb-8">Anuncie para milhares de turistas que visitam Olímpia</p>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { nome: 'Básico', preco: 'R$ 99/mês', beneficios: ['Ficha no diretório', '1 foto', 'Contato direto', 'Estatísticas mensais'] },
          { nome: 'Profissional', preco: 'R$ 299/mês', beneficios: ['Ficha destacada', 'Até 10 fotos', 'Cupom no app', '1 post no blog', 'Suporte prioritário'], popular: true },
          { nome: 'Premium', preco: 'R$ 699/mês', beneficios: ['Top do diretório', 'Fotos ilimitadas', 'Cupons + vídeo', '3 posts no blog', 'Vídeo no YouTube', 'Gestor dedicado'] },
        ].map((plan, i) => (
          <div key={i} className={`bg-white rounded-2xl shadow-xl p-6 border-2 flex flex-col ${plan.popular ? 'border-orange-500 scale-105' : 'border-orange-100'}`}>
            {plan.popular && <span className="text-sm font-black text-orange-600 uppercase mb-2">⭐ Mais Popular</span>}
            <h3 className="text-2xl font-black">{plan.nome}</h3>
            <p className="text-3xl font-black text-orange-600 mt-2">{plan.preco}</p>
            <ul className="mt-4 flex-1 space-y-2">
              {plan.beneficios.map((b, j) => (
                <li key={j} className="flex items-center gap-2 text-sm text-gray-600"><span className="text-green-500">✔</span> {b}</li>
              ))}
            </ul>
            <a href={`https://wa.me/${WHATSAPP}?text=Quero ser parceiro no plano ${plan.nome}`} target="_blank" rel="noopener noreferrer" className="mt-6 block text-center bg-orange-600 text-white py-3 rounded-full font-bold hover:bg-orange-700 transition">Quero anunciar</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
