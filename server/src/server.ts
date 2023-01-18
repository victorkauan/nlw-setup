import cors from '@fastify/cors';
import { PrismaClient } from '@prisma/client';
import Fastify from 'fastify';

const app = Fastify();
const port = 3333;

const prisma = new PrismaClient();

app.register(cors);

app.get('/hello', () => {
  return 'Hello, world!';
});

app.get('/habits', async () => {
  // const drinkFilter = {
  //   where: {
  //     title: {
  //       startsWith: 'Drink',
  //     },
  //   },
  // };

  const habits = await prisma.habit.findMany();

  return habits;
});

app
  .listen({
    port,
  })
  .then(() => {
    console.log(`HTTP server running on port ${port}!`);
  });
