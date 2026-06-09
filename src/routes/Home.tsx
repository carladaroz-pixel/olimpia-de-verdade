export default function Home() { 
  return ( 
    <div> 
      <h1 className="text-3xl font-bold mb-4">Bem-vindo a Olimpia</h1> 
      <p className="text-lg">Seu portal completo de turismo, hospedagem, negocios e beneficios.</p> 
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"> 
        <a href="/turismo" className="bg-white p-6 rounded shadow hover:shadow-lg text-center font-semibold">Turismo</a> 
        <a href="/hospedagem" className="bg-white p-6 rounded shadow hover:shadow-lg text-center font-semibold">Hospedagem</a> 
        <a href="/negocios" className="bg-white p-6 rounded shadow hover:shadow-lg text-center font-semibold">Negocios</a> 
        <a href="/clube" className="bg-white p-6 rounded shadow hover:shadow-lg text-center font-semibold">Clube</a> 
      </div> 
    </div> 
  ) 
} 
