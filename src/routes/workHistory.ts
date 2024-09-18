import { Hono } from 'hono'

const router = new Hono()

router.get('/', (c) => c.json({ message: 'Work History route' }))

export default router