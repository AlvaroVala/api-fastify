import fastify from "fastify";
import { userRoutes } from "./routes/user";

const app = fastify()

app.register(userRoutes)


app.listen({port:3333}, () =>{
    console.log("Server is running")
})