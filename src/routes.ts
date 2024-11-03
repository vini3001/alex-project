import { Router, Request, Response } from "express";
import { User } from "./entities/User";
import { prisma } from "./prisma/prismaClient";


const routes = Router()

routes.post('/api/create-user', async (req: Request, res: Response) => {
    const user = req.body as unknown as User

    await prisma.user.create({
        data: user
    }).then((data) => {
        res.json(data).status(200)
    }).catch((err) => {
        res.send(err).status(400)
    })
})

routes.get('/api/get-user', async (req: Request, res: Response) => {
    const {id} = req.query as unknown as {id: string}
    console.log(id)

    await prisma.user.findFirst({
        where: {
            id: parseInt(id)
        }
    }).then((data) => {
        res.json(data).status(200)
    }).catch((err) => {
        res.send(err).status(400)
    })
})

routes.get('/api/get-all-users', async (req: Request, res: Response) => {
    await prisma.user.findMany().then((data) => {
        res.json(data).status(200)
    }).catch((err) => {
        res.send(err).status(400)
    })
})

routes.put('/api/update-user', async (req: Request, res: Response) => {
    const user = req.body as unknown as User
    const {id} = req.params as unknown as {id: string}

    await prisma.user.update({
        where: {
            id: parseInt(id)
        },
        data: user
    }).then((data) => {
        res.json(data).status(200)
    })
    .catch((err) => {
        console.log(err)
        res.send(err).status(400)
    })
})

routes.delete('/api/delete-user', async (req: Request, res: Response) => {
    const {id} = req.params as unknown as {id: string}

    await prisma.user.delete({
        where: {
            id: parseInt(id)
        }
    }).then(() => {
        res.send("Usuário deletado com sucesso!").status(200)  
    }).catch((err) => {
        res.send(err).status(400)
    })
})

export default routes