import { Hono } from 'hono'

const router = new Hono()

router.get('/', (c) => c.json({ message: 'Job Listing route' }))

export default router