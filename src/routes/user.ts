import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";


export async function userRoutes(app: FastifyInstance) {
    app.get("/users", async () => {
        return prisma.user.findMany();
    })

    app.post("/users", async (request, reply) => {
        const userSchema = z.object({
            name: z.string(),
            email: z.string().email(),

        })

        const { name, email } = userSchema.parse(request.body);
        const user = await prisma.user.create({
            data: {
                name,
                email
            }
        })

        return reply.status(201).send({ message: "Usuario criado com sucesso", user })
    })


}