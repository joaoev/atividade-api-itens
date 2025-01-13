import { 
  create, list
 } from './controllers/items-controller'
import { FastifyInstance } from 'fastify'

export async function appRoutes(app: FastifyInstance) {
  app.post('/item', create),
  app.get('/itens', list)
}
