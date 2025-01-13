import { FastifyReply, FastifyRequest } from 'fastify'
import { prisma } from '../../database/prisma'
import { z, ZodError } from 'zod'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const schema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters long"),
    description: z.string().min(3, "Description must be at least 3 characters long"),
    price: z.number().nonnegative().refine(value => Number(value.toFixed(2)) === value, {
      message: "Price must have at most 2 decimal places",
    }),
  });

  const { name, description, price } = schema.parse(request.body)

  try {
    const item = await prisma.item.create({ data: { name, description, price } })

    return reply.status(201).send(item)
  } catch (error) {
    if (error instanceof ZodError) {
      return reply.status(400).send({
        message: 'Validation error.',
        issues: error.format(),
      })
    }

    return reply.status(500).send()
  }
}

export async function list(request: FastifyRequest, reply: FastifyReply) {
 try {
   const items = await prisma.item.findMany()

   return reply.send(items)
 } catch (error) {
   return reply.status(500).send()
 }
}

