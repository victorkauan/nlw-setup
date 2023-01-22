import cors from '@fastify/cors';
import Fastify from 'fastify';
import { appRoutes } from './routes';

const app = Fastify();
const port = 3333;

app.register(cors);
app.register(appRoutes);

app
  .listen({
    port,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log(`HTTP server running on port ${port}!`);
  });
