import { Hono } from 'hono'

const router = new Hono()

router.get('/', (c) => c.json({ message: 'Dashboard route' }))

export default router