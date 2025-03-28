import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import { webhook } from "@imtbl/sdk";
import { environment } from "./immutable";

const fastify = Fastify({
  logger: true,
});

fastify.get('/', function (request, reply) {
  reply.send({ message: 'Hello world' })
});

fastify.patch('/test-twitch-update', async (request: FastifyRequest<any>, reply: FastifyReply) => {
  // Test endpoint for twitch updates

  console.log(JSON.stringify(request.headers));
  console.log(JSON.stringify(request.body));

  reply.send({ status: 'ok' });
});

fastify.post('/imx-webhook', async (request: FastifyRequest<any>, reply: FastifyReply) => {

  await webhook.handle(
    request.body as any,
    environment,
    {
      zkevmMintRequestUpdated: async (event) => {
        console.log("MINT REQUEST EVENT");
        console.log(event.event_name)
        console.log(event.data)
        // inspect the mint request event
      },
    })

  reply.send({ status: 'ok' });
});

fastify.listen({ port: 4000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1)
  }
  console.log(`Server listening on port 4000`);
})