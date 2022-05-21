const fastify = require("fastify")({ logger: true });

/*
// VOLTOU AS 22:42
  add Swagger for Fastify
// VOLTOU AS 29:44
  add required fields for add item.
// VOLTOU AS 32:01
  add delete item endpoint

// VOLTOU AS 35:20
  add update item endpoint
*/

fastify.register(require("fastify-swagger"), {
  exposeRoute: true,
  routePrefix: "/docs",
  swagger: {
    info: { title: "fastify-api this is just for a testing proposes" },
  },
});

fastify.register(require("./routes/items"));

const PORT = 5000;

const start = async () => {
  try {
    await fastify.listen(PORT);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
