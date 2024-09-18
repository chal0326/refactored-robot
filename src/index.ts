import { Hono } from 'hono'
import { serveStatic } from 'hono/serve-static'
import workHistoryRoutes from './routes/workHistory'
import jobListingRoutes from './routes/jobListing'
import dashboardRoutes from './routes/dashboard'

const app = new Hono()

app.use('/static/*', serveStatic({ 
  root: './public',
  getContent: async (path, c) => {
    return c.text('<h1>Resume Helper App</h1>')
  }
}))

app.route('/api/work-history', workHistoryRoutes)
app.route('/api/job-listing', jobListingRoutes)
app.route('/api/dashboard', dashboardRoutes)

app.get('/', (c) => c.html('<h1>Resume Helper App</h1>'))

export default app