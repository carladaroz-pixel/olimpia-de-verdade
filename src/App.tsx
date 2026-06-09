import { Outlet, Link } from '@tanstack/react-router' 
 
export default function App() { 
  return ( 
    <div className="min-h-screen bg-gray-50"> 
      <nav className="bg-blue-700 text-white p-4"> 
        <div className="max-w-6xl mx-auto flex justify-between items-center"> 
          <Link to="/" className="text-2xl font-bold">Olimpia de Verdade</Link> 
          <div className="flex gap-4"> 
            <Link to="/turismo" className="hover:underline">Turismo</Link> 
            <Link to="/hospedagem" className="hover:underline">Hospedagem</Link> 
            <Link to="/negocios" className="hover:underline">Negocios</Link> 
            <Link to="/clube" className="hover:underline">Clube</Link> 
          </div> 
        </div> 
      </nav> 
      <main className="max-w-6xl mx-auto p-4"> 
        <Outlet /> 
      </main> 
    </div> 
  ) 
} 
