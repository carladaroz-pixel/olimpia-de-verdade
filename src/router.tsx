import { createRouter, createRootRoute, createRoute } from '@tanstack/react-router' 
import App from './App' 
import Home from './routes/Home' 
import Turismo from './routes/Turismo' 
import Hospedagem from './routes/Hospedagem' 
import Negocios from './routes/Negocios' 
import Clube from './routes/Clube' 
 
const rootRoute = createRootRoute({ 
  component: App, 
}) 
 
const homeRoute = createRoute({ 
  getParentRoute: () =
  path: '/', 
  component: Home, 
}) 
 
const turismoRoute = createRoute({ 
  getParentRoute: () =
  path: '/turismo', 
  component: Turismo, 
}) 
 
const hospedagemRoute = createRoute({ 
  getParentRoute: () =
  path: '/hospedagem', 
  component: Hospedagem, 
}) 
 
const negociosRoute = createRoute({ 
  getParentRoute: () =
  path: '/negocios', 
  component: Negocios, 
}) 
 
const clubeRoute = createRoute({ 
  getParentRoute: () =
  path: '/clube', 
  component: Clube, 
}) 
 
const routeTree = rootRoute.addChildren([ 
  homeRoute, 
  turismoRoute, 
  hospedagemRoute, 
  negociosRoute, 
  clubeRoute, 
]) 
 
export const router = createRouter({ routeTree }) 
