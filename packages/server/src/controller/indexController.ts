import { FastifyInstance, FastifyRequest, FastifyReply, RouteGenericInterface } from "fastify";

interface Schema extends RouteGenericInterface {
  Querystring: {
    username: string;
  }
}

export default async function indexController(fastify: FastifyInstance) {
  // GET /
  fastify.get("/", async function (
    _request: FastifyRequest<Schema>,
    reply: FastifyReply
  ) {

    const { username } = _request.query

    const html = `<h3>Test ${username}</h3>
                  <a href="https://google.com">A link to google</a>
                  <button onclick="alert('You clicked the button')">Alert</button>`

    await reply
      .header("Content-Type", "text/html; charset=utf-8")
      .header("Access-Control-Allow-Origin", "*")
      .header("Access-Control-Allow-Methods", "GET")
      .header("Access-Control-Allow-Headers", "Authorization, Content-Type")
      .send(html);
  });
}
